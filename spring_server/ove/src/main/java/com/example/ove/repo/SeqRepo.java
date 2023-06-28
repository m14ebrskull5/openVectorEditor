package com.example.ove.repo;

import com.example.ove.model.SeqBody;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SeqRepo extends MongoRepository<SeqBody, String> {

    @Query(value = "", fields = "{'_id': 1, 'name': 1}")
    List<SeqBody> findSeqBodiesBy();
}
