package com.example.ove.model;

/**
* Copyright 2023 json.cn
*/

import java.util.HashMap;
import java.util.List;

/**
 * Auto-generated: 2023-06-28 16:56:27
 *
 * @author json.cn (i@json.cn)
 * @website http://www.json.cn/java2pojo/
 */
public class SeqBody {
    private HashMap<Long, Parts> parts;
    private HashMap<String, Parts> primers;
    private List<Afeatures> afeatures;
    private HashMap<String, Features> features;
    private String name;
    private String sequence;

    public Long getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(Long timestamp) {
        this.timestamp = timestamp;
    }

    private String date;
    private Long timestamp;
    private boolean circular;
    private List<String> comments;
    private String teselagen_unique_id;
    private List<String> extraLines;
    private String type;
    private int size;
    private String id;
    private String proteinSequence;
    private int proteinSize;
    private Warnings warnings;
    private AssemblyPieces assemblyPieces;
    private LineageAnnotations lineageAnnotations;
    private HashMap<String, Cutsites> cutsites;
    private HashMap<String, Orfs> orfs;
    private HashMap<String, Translations> translations;
    private Guides guides;
    private boolean materiallyAvailable;
    private String description;

    public HashMap<Long, Parts> getParts() {
        return parts;
    }

    public void setParts(HashMap<Long, Parts> parts) {
        this.parts = parts;
    }

    public HashMap<String, Parts> getPrimers() {
        return primers;
    }

    public void setPrimers(HashMap<String, Parts> primers) {
        this.primers = primers;
    }

    public List<Afeatures> getAfeatures() {
        return afeatures;
    }

    public void setAfeatures(List<Afeatures> afeatures) {
        this.afeatures = afeatures;
    }

    public HashMap<String, Features> getFeatures() {
        return features;
    }

    public void setFeatures(HashMap<String, Features> features) {
        this.features = features;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSequence() {
        return sequence;
    }

    public void setSequence(String sequence) {
        this.sequence = sequence;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public boolean isCircular() {
        return circular;
    }

    public void setCircular(boolean circular) {
        this.circular = circular;
    }

    public List<String> getComments() {
        return comments;
    }

    public void setComments(List<String> comments) {
        this.comments = comments;
    }

    public String getTeselagen_unique_id() {
        return teselagen_unique_id;
    }

    public void setTeselagen_unique_id(String teselagen_unique_id) {
        this.teselagen_unique_id = teselagen_unique_id;
    }

    public List<String> getExtraLines() {
        return extraLines;
    }

    public void setExtraLines(List<String> extraLines) {
        this.extraLines = extraLines;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public int getSize() {
        return size;
    }

    public void setSize(int size) {
        this.size = size;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getProteinSequence() {
        return proteinSequence;
    }

    public void setProteinSequence(String proteinSequence) {
        this.proteinSequence = proteinSequence;
    }

    public int getProteinSize() {
        return proteinSize;
    }

    public void setProteinSize(int proteinSize) {
        this.proteinSize = proteinSize;
    }

    public Warnings getWarnings() {
        return warnings;
    }

    public void setWarnings(Warnings warnings) {
        this.warnings = warnings;
    }

    public AssemblyPieces getAssemblyPieces() {
        return assemblyPieces;
    }

    public void setAssemblyPieces(AssemblyPieces assemblyPieces) {
        this.assemblyPieces = assemblyPieces;
    }

    public LineageAnnotations getLineageAnnotations() {
        return lineageAnnotations;
    }

    public void setLineageAnnotations(LineageAnnotations lineageAnnotations) {
        this.lineageAnnotations = lineageAnnotations;
    }

    public HashMap<String, Cutsites> getCutsites() {
        return cutsites;
    }

    public void setCutsites(HashMap<String, Cutsites> cutsites) {
        this.cutsites = cutsites;
    }

    public HashMap<String, Orfs> getOrfs() {
        return orfs;
    }

    public void setOrfs(HashMap<String, Orfs> orfs) {
        this.orfs = orfs;
    }

    public HashMap<String, Translations> getTranslations() {
        return translations;
    }

    public void setTranslations(HashMap<String, Translations> translations) {
        this.translations = translations;
    }

    public Guides getGuides() {
        return guides;
    }

    public void setGuides(Guides guides) {
        this.guides = guides;
    }

    public boolean isMateriallyAvailable() {
        return materiallyAvailable;
    }

    public void setMateriallyAvailable(boolean materiallyAvailable) {
        this.materiallyAvailable = materiallyAvailable;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public boolean isFromFileUpload() {
        return fromFileUpload;
    }

    public void setFromFileUpload(boolean fromFileUpload) {
        this.fromFileUpload = fromFileUpload;
    }

    public String getStateTrackingId() {
        return stateTrackingId;
    }

    public void setStateTrackingId(String stateTrackingId) {
        this.stateTrackingId = stateTrackingId;
    }

    public List<FilteredParts> getFilteredParts() {
        return filteredParts;
    }

    public void setFilteredParts(List<FilteredParts> filteredParts) {
        this.filteredParts = filteredParts;
    }

    public FilteredFeatures getFilteredFeatures() {
        return filteredFeatures;
    }

    public void setFilteredFeatures(FilteredFeatures filteredFeatures) {
        this.filteredFeatures = filteredFeatures;
    }

    public FilteredPrimers getFilteredPrimers() {
        return filteredPrimers;
    }

    public void setFilteredPrimers(FilteredPrimers filteredPrimers) {
        this.filteredPrimers = filteredPrimers;
    }

    private boolean fromFileUpload;
    private String stateTrackingId;
    private List<FilteredParts> filteredParts;
    private FilteredFeatures filteredFeatures;
    private FilteredPrimers filteredPrimers;

}