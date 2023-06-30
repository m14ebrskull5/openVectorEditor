package com.example.ove.vo;

public class Seq {
    String name;
    String id;
    String stateTrackingId;

    public String getStateTrackingId() {
        return stateTrackingId;
    }

    public void setStateTrackingId(String stateTrackingId) {
        this.stateTrackingId = stateTrackingId;
    }

    public Long getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(Long timestamp) {
        this.timestamp = timestamp;
    }

    Long timestamp;

    public Seq(String name, String id, Long timestamp, String stateTrackingId) {
        this.name = name;
        this.id = id;
        this.timestamp = timestamp;
        this.stateTrackingId = stateTrackingId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }
}
