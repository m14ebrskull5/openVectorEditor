package com.example.ove.model;

public class Orfs {
    String annotationTypePlural;
    String color;
    Long end;
    Boolean forward;
    Long frame;
    String id;
    Long[] internalStartCodonIndices;
    Boolean isOrf;
    Long length;
    String name;

    public String getAnnotationTypePlural() {
        return annotationTypePlural;
    }

    public void setAnnotationTypePlural(String annotationTypePlural) {
        this.annotationTypePlural = annotationTypePlural;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public Long getEnd() {
        return end;
    }

    public void setEnd(Long end) {
        this.end = end;
    }

    public Boolean getForward() {
        return forward;
    }

    public void setForward(Boolean forward) {
        this.forward = forward;
    }

    public Long getFrame() {
        return frame;
    }

    public void setFrame(Long frame) {
        this.frame = frame;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public Long[] getInternalStartCodonIndices() {
        return internalStartCodonIndices;
    }

    public void setInternalStartCodonIndices(Long[] internalStartCodonIndices) {
        this.internalStartCodonIndices = internalStartCodonIndices;
    }

    public Boolean getOrf() {
        return isOrf;
    }

    public void setOrf(Boolean orf) {
        isOrf = orf;
    }

    public Long getLength() {
        return length;
    }

    public void setLength(Long length) {
        this.length = length;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Long getStart() {
        return start;
    }

    public void setStart(Long start) {
        this.start = start;
    }

    public Long getStrand() {
        return strand;
    }

    public void setStrand(Long strand) {
        this.strand = strand;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    Long start;
    Long strand;
    String type;

}
