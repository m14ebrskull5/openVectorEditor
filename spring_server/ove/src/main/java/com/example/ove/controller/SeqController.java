package com.example.ove.controller;

import com.example.ove.service.SeqService;
import com.example.ove.vo.MyResponse;
import com.example.ove.model.SeqBody;
import org.springframework.data.domain.Sort;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.aggregation.*;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.CriteriaDefinition;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class SeqController {
    private final SeqService service;
    private final MongoTemplate template;

    public SeqController(SeqService repo, MongoTemplate template) {
        this.service = repo;
        this.template = template;

    }

    /**
     * 保存 seq
     * @param body 要保存的seq
     * @return 更新后的seq
     */
    @PostMapping("/seq")
    MyResponse save(@RequestBody HashMap<String, Object> body) {
        body.put("timestamp", System.currentTimeMillis());
        body.put("_id", body.get("id"));
        System.out.println(body.get("timestamp"));
        template.save(body, "seqBody");

        return MyResponse.success("success", this.getList());
    }


    private Object getList() {
        var porject1 = new ProjectionOperation();
        porject1 = new ProjectionOperation.ExpressionProjectionOperationBuilder("1", porject1, new Object[]{}).as("_id").andInclude("name").andInclude("timestamp").andInclude("stateTrackingId");
        var group2 = new GroupOperation(Fields.fields("name"));
        group2 = group2.first("timestamp").as("timestamp").first("_id").as("iddd").first("stateTrackingId").as("stateTrackingId");
        var sort3 = new SortOperation(Sort.by("timestamp").descending());
        var project4 = new ProjectionOperation().andExpression("_id").as("name").andExpression("iddd").as("id").andInclude("timestamp").andInclude("stateTrackingId").andExclude("_id");
        var aggr = Aggregation.newAggregation(porject1, sort3, group2, sort3, project4);
        var m = template.aggregate(aggr, "seqBody", HashMap[].class);
        return m.getRawResults().get("results");
    }

    /**
     * 請求所有seq
     * @return 返回所有seq
     */
    @GetMapping("/seq")
    MyResponse get() {
        return
                MyResponse.success("success", getList());
    }

    @GetMapping("/findseq")
    MyResponse findOne(@RequestParam("id") String id) {
        return  MyResponse.success("success", template.findOne(new Query(Criteria.where("_id").is(id)), HashMap.class, "seqBody"));
    }



}
