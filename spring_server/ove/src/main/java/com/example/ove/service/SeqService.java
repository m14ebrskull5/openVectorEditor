package com.example.ove.service;

import com.example.ove.model.SeqBody;
import com.example.ove.repo.SeqRepo;
import com.example.ove.vo.Seq;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SeqService {
    public SeqService(SeqRepo repo) {
        this.repo = repo;
    }

    private final SeqRepo repo;
    public List<Seq> getList() {
        return repo.findSeqBodiesBy()
                .stream().map(i -> new Seq(i.getName(), i.getId(), i.getTimestamp(), i.getStateTrackingId())).toList();
    };

    public void save(SeqBody body) {
        body.setTimestamp(System.currentTimeMillis());
        repo.save(body);
    }

    public Optional<SeqBody> findOne(String id) {
        return repo.findById(id);
    }
}
