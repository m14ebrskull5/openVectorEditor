package com.example.ove.controller;

import com.example.ove.service.SeqService;
import com.example.ove.vo.MyResponse;
import com.example.ove.model.SeqBody;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class SeqController {
    private final SeqService service;
    public SeqController(SeqService repo) {
        this.service = repo;
    }

    /**
     * 保存 seq
     * @param body 要保存的seq
     * @return 更新后的seq
     */
    @PostMapping("/seq")
    MyResponse save(@RequestBody SeqBody body) {
        service.save(body);
        return MyResponse.success("success", service.getList());
    }
    /**
     * 請求所有seq
     * @return 返回所有seq
     */
    @GetMapping("/seq")
    MyResponse get() {
        return  MyResponse.success("success", service.getList());
    }

    @GetMapping("/findseq")
    MyResponse findOne(@RequestParam("id") String id) {
        return  MyResponse.success("success", service.findOne(id));
    }
}
