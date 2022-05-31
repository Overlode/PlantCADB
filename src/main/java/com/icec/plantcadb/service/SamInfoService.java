package com.icec.plantcadb.service;

import com.icec.plantcadb.bean.DiffStatic;
import com.icec.plantcadb.bean.Footprint;
import com.icec.plantcadb.bean.PeakFileInfo;
import com.icec.plantcadb.bean.SamInfo;

import java.io.IOException;
import java.util.List;

public interface SamInfoService {
    List<SamInfo> getSamInfo(Integer dataNo,Integer classNo,Integer layoutNo,Integer speciesNo,Integer tissueNo,String option,Integer database);
    Integer getSamInfoCount();
    public List<DiffStatic> getDiffStatic(String samId, int page, int size) throws IOException;

    public void addFootprint(Footprint footprint);
    public Footprint getFootprintBySamNo(Integer samNo);
    public SamInfo getSamInfoBySamNo(Integer samNo);

    public SamInfo getSamInfoBySamId(String samId);

    public List<String> getMotifBySpeciesNo(Integer speciesNo);
    public String getSamIdByATAC(String ATAC);

    public List<String> getAllSamId();
    public void updateDatabaseInSamInfo(String samId,Integer data);
}
