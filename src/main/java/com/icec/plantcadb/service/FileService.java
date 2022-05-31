package com.icec.plantcadb.service;

import com.icec.plantcadb.bean.*;
import com.icec.plantcadb.utils.BSTRowUtil;

import java.io.IOException;
import java.util.List;
import java.util.Map;

public interface FileService {

    public List<List<String>> getDiffStaticBySamId(String samId) throws IOException;
    public List<List<String>> getPeakFileBySamId(String samId) throws IOException;
    public List<List<String>> getDiffStaticByFilter(String samId,Integer number,Double score,Double TC) throws IOException;
    public List<List<String>> getPeakMotifFileBySamId(String samId,String ATAC) throws IOException;
    public List<List<String>> getFootprintMbpsFileBySamId(String samId, String ATAC) throws IOException;
    public AssociatedGeneFileInfo getAssociatedGeneBySamId(String samId, String ATAC) throws IOException;

    public List<List<String>> getSNP(String samId, String ATAC) throws IOException;
    public Map<String,Object> searchTF(String species, String name) throws IOException;
    public PeakFileInfo getPeakFileBySamIdAndATAC(String samId,String ATAC) throws IOException;
    public List<String> getChr(String samId) throws IOException;
    public List<String> getTFName(String speciesName) throws IOException;

    public Map<String,Object> searchGene(String speciesName,String type,String name) throws IOException;
    public Map<String, Object> doSearchChr(String sampleId, String chrs, Integer start, Integer end) throws IOException;
    public Map<String, Object> doAnalysis(String sampleIdOne, String sampleIdTwo) throws IOException;
    public Map<String, Object> analysisTwo(String species,String TFOneName,String TFTwoName,int length) throws IOException;
    public Map<String,Object> getTFFamilyAndTFName(String speciesName) throws IOException;
}
