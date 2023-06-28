package com.example.ove.model;

public class Cutsites {
    String annotationType;
    String annotationTypePlural;
    Long bottomSnipPosition;
    String color;
    Long end;
    Boolean forward;
    String id;
    String labelClassname;

    public String getAnnotationType() {
        return annotationType;
    }

    public void setAnnotationType(String annotationType) {
        this.annotationType = annotationType;
    }

    public String getAnnotationTypePlural() {
        return annotationTypePlural;
    }

    public void setAnnotationTypePlural(String annotationTypePlural) {
        this.annotationTypePlural = annotationTypePlural;
    }

    public Long getBottomSnipPosition() {
        return bottomSnipPosition;
    }

    public void setBottomSnipPosition(Long bottomSnipPosition) {
        this.bottomSnipPosition = bottomSnipPosition;
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

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getLabelClassname() {
        return labelClassname;
    }

    public void setLabelClassname(String labelClassname) {
        this.labelClassname = labelClassname;
    }

    public String getLabelColor() {
        return labelColor;
    }

    public void setLabelColor(String labelColor) {
        this.labelColor = labelColor;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Long getNumberOfCuts() {
        return numberOfCuts;
    }

    public void setNumberOfCuts(Long numberOfCuts) {
        this.numberOfCuts = numberOfCuts;
    }

    public String getOverhangBps() {
        return overhangBps;
    }

    public void setOverhangBps(String overhangBps) {
        this.overhangBps = overhangBps;
    }

    public Long getOverhangSize() {
        return overhangSize;
    }

    public void setOverhangSize(Long overhangSize) {
        this.overhangSize = overhangSize;
    }

    public Location getRecognitionSiteRange() {
        return recognitionSiteRange;
    }

    public void setRecognitionSiteRange(Location recognitionSiteRange) {
        this.recognitionSiteRange = recognitionSiteRange;
    }

    public RestrictionEnzyme getRestrictionEnzyme() {
        return restrictionEnzyme;
    }

    public void setRestrictionEnzyme(RestrictionEnzyme restrictionEnzyme) {
        this.restrictionEnzyme = restrictionEnzyme;
    }

    String labelColor;
    String name;
    Long numberOfCuts;
    String overhangBps;
    Long overhangSize;
    Location recognitionSiteRange;
    RestrictionEnzyme restrictionEnzyme;
}
