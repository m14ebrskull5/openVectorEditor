package com.example.ove.model;

public class RestrictionEnzyme {
    String[] aliases;
    Long bottomSnipOffset;
    String forwardRegex;
    String name;

    public String[] getAliases() {
        return aliases;
    }

    public void setAliases(String[] aliases) {
        this.aliases = aliases;
    }

    public Long getBottomSnipOffset() {
        return bottomSnipOffset;
    }

    public void setBottomSnipOffset(Long bottomSnipOffset) {
        this.bottomSnipOffset = bottomSnipOffset;
    }

    public String getForwardRegex() {
        return forwardRegex;
    }

    public void setForwardRegex(String forwardRegex) {
        this.forwardRegex = forwardRegex;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getReverseRegex() {
        return reverseRegex;
    }

    public void setReverseRegex(String reverseRegex) {
        this.reverseRegex = reverseRegex;
    }

    public String getSite() {
        return site;
    }

    public void setSite(String site) {
        this.site = site;
    }

    public Long getTopSnipOffset() {
        return topSnipOffset;
    }

    public void setTopSnipOffset(Long topSnipOffset) {
        this.topSnipOffset = topSnipOffset;
    }

    String reverseRegex;
    String site;
    Long topSnipOffset;
}
