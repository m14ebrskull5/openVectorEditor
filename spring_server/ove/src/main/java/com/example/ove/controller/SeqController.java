package com.example.ove.controller;

import com.example.ove.config.MyAuthenticationManager;
import com.example.ove.vo.MyResponse;
import org.springframework.data.domain.Sort;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.aggregation.*;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;

@RestController
@RequestMapping("/api")
public class SeqController {
    private final MongoTemplate template;

    public SeqController(MongoTemplate template) {
        this.template = template;

    }

    /**
     * 保存 seq
     * @param body 要保存的seq
     * @return 更新后的seq
     */
    @PostMapping("/seq")
    MyResponse save(@RequestBody HashMap<String, Object> body) {
        MyAuthenticationManager.MyAuthentication authentication = (MyAuthenticationManager.MyAuthentication) SecurityContextHolder.getContext().getAuthentication();
        body.put("timestamp", System.currentTimeMillis());
        body.put("_id", body.get("id"));
        body.put("user", authentication.getUsername());
        template.save(body, "seqBody");
        return MyResponse.success("success", this.getList(authentication.getUsername()));
    }


    private Object getList(String name) {
        var match0 = new MatchOperation(Criteria.where("user").is(name));
        var porject1 = new ProjectionOperation();
        porject1 = new ProjectionOperation.ExpressionProjectionOperationBuilder("1", porject1, new Object[]{}).as("_id").andInclude("name").andInclude("timestamp").andInclude("stateTrackingId");
        var group2 = new GroupOperation(Fields.fields("name"));
        group2 = group2.first("timestamp").as("timestamp").first("_id").as("iddd").first("stateTrackingId").as("stateTrackingId");
        var sort3 = new SortOperation(Sort.by("timestamp").descending());
        var project4 = new ProjectionOperation().andExpression("_id").as("name").andExpression("iddd").as("id").andInclude("timestamp").andInclude("stateTrackingId").andExclude("_id");
        var aggr = Aggregation.newAggregation(match0, porject1, sort3, group2, sort3, project4);
        var m = template.aggregate(aggr, "seqBody", HashMap[].class);
        return m.getRawResults().get("results");
    }

    /**
     * 請求所有seq
     * @return 返回所有seq
     */
    @GetMapping("/seq")
    MyResponse get() {
        MyAuthenticationManager.MyAuthentication authentication = (MyAuthenticationManager.MyAuthentication) SecurityContextHolder.getContext().getAuthentication();
        return
                MyResponse.success("success", getList(authentication.getUsername()));
    }
    private class History {
        public String _id;
        public String name;

        public Long timestamp;
        public Long size;

    }
    @GetMapping("/findseq")
    MyResponse findOne(@RequestParam("id") String id) {
        MyAuthenticationManager.MyAuthentication authentication = (MyAuthenticationManager.MyAuthentication) SecurityContextHolder.getContext().getAuthentication();
        var data = template.findOne(new Query(Criteria.where("_id").is(id).and("user").is(authentication.getUsername())), HashMap.class, "seqBody");
        //retrieve history data
        assert data != null;
        var history = template.find(new Query(Criteria.where("name").is(data.get("name")).and("user").is(authentication.getUsername())), History.class, "seqBody");
        data.put("history", history);
        return  MyResponse.success("success", data);
    }



}
