package com.example.ove.controller;

import com.example.ove.vo.MyResponse;
import com.example.ove.model.SeqBody;
import com.example.ove.repo.SeqRepo;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class SeqController {
    private SeqRepo repo;
    public SeqController(SeqRepo repo) {
        this.repo = repo;
    }

    @PostMapping("/seq")
    MyResponse save(@RequestBody SeqBody body) {
        repo.save(body);
        return MyResponse.success("saved");
    }

    @GetMapping("/seq")
    MyResponse get() {
        return  MyResponse.success("success", repo.findSeqBodiesBy());
    }
}
