package com.example.ove.repo;

import com.example.ove.model.SeqBody;
import org.springframework.data.mongodb.repository.Aggregation;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SeqRepo extends MongoRepository<SeqBody, String> {
    @Aggregation(value = { """
            {
                  $project: { _id: 1, name: 1, timestamp: 1, stateTrackingId:1 }
             }
             """,
            """
                    {
                            $sort: { timestamp: -1 }
                    }
                    """,
            """
                    {
                          $group: {
                            iddd: {
                                "$first": "$_id"
                             },
                            timestamp: { $first: "$timestamp" },
                            _id: "$name",
                            stateTrackingId: {
                                "$first": "$stateTrackingId"
                            },
                          }
                    }

                    """,
            """
                    {
                        $sort: { timestamp: -1 }
                    }
                    """,
            """
                    {
                      $project: {
                          _id: 0,
                          name: "$_id",
                          id: "$iddd",
                          timestamp: 1,
                          stateTrackingId: 1
                      }
                    }
                    """ })
    List<SeqBody> findSeqBodiesBy();
}
