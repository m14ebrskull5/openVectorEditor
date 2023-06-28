package com.example.ove.model;

public class Translations {
    AminoAcids[] aminoAcids;
    String translationType;

    public AminoAcids[] getAminoAcids() {
        return aminoAcids;
    }

    public void setAminoAcids(AminoAcids[] aminoAcids) {
        this.aminoAcids = aminoAcids;
    }

    public String getTranslationType() {
        return translationType;
    }

    public void setTranslationType(String translationType) {
        this.translationType = translationType;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    String type;
}
