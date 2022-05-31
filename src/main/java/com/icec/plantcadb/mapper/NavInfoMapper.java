package com.icec.plantcadb.mapper;

import com.icec.plantcadb.bean.*;
import com.icec.plantcadb.bean.Class;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;
import java.util.Map;

@Mapper
public interface NavInfoMapper {
    public List<Class> getClassCount();
    public List<SamInfo> getOptions(@Param("option") String option,@Param("speciesName")String speciesName);
    public Integer getSpeciesNoBySpeciesName(@Param("speciesName") String speciesName);
    public List<DataType> getDataTypeCount();

    public List<Tissue> getTissueCount();

    public List<Species> getSpeciesCount();
    public List<Layout> getLayoutCount();

    public List<String> getSpeciesNameList();
    public List<Species> getSpeciesTable();
    public List<Options> getAllOptions();
    public Integer getClassifyCount(@Param("option") String option);
}
