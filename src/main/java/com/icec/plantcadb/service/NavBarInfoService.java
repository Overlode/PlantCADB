package com.icec.plantcadb.service;

import com.icec.plantcadb.bean.*;
import com.icec.plantcadb.bean.Class;

import java.util.List;
import java.util.Map;


public interface NavBarInfoService {
    public List<Class> getClassCount();
    public List<DataType> getDataTypeCount();
    public List<Tissue> getTissueCount();
    public List<Layout> getLayoutCount();
    public List<Species> getSpeciesCount();
    public Integer getSpeciesNoBySpeciesName(String speciesName);
    public EChartsBarInfo getEChartsBarInfo();
    public Map<String,Object> getDataTypePieInfo();
    public Map<String,Object> getTissuePieInfo();

    public List<String> getSpecies();
    public List<Species> getSpeciesTable();
    public List<String> getSamIdBySpeciesNo(Integer speciesNo);
    public List<SamInfo> getOptions(String option,String speciesName);

    public Map<String,Object> getIndexForm();

    public List<Options> getAllOptions();
    public Integer getClassifyCountByOption(String option);
}
