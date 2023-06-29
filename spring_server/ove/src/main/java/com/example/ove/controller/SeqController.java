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

    @PostMapping("/seq")
    MyResponse save(@RequestBody SeqBody body) {
        service.save(body);
        return MyResponse.success("saved");
    }

    @GetMapping("/seq")
    MyResponse get() {
        return  MyResponse.success("success", service.getList());
    }

    @GetMapping("/findseq")
    MyResponse findOne(@RequestParam("id") String id) {
        return  MyResponse.success("success", service.findOne(id));
    }
}
