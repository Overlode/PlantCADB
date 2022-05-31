package com.icec.plantcadb.mapper;

import com.icec.plantcadb.bean.*;
import com.icec.plantcadb.bean.Class;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

@Mapper
public interface DatabaseMapper {
    public List<Class> getAllClass();
    public Class getClassByNo(Integer classNo);

    public List<DataType> getAllDataType();
    public DataType getDataTypeByNo(Integer dataNo);

    public List<Layout> getAllLayout();
    public Layout getLayoutByNo(Integer layoutNo);

    public List<Species> getAllSpecies();
    public Species getSpeciesByNo(Integer speciesNo);

    public List<Tissue> getAllTissue();
    public Tissue getTissueByNo(Integer tissueNo);

//    获取样本信息
    public List<SamInfo> getAllSamInfo(@Param("dataNo")Integer dataNo,@Param("classNo")Integer classNo,@Param("layoutNo")Integer layoutNo,@Param("speciesNo")Integer speciesNo,@Param("tissueNo")Integer tissueNo,@Param("option") String option,@Param("database")Integer database);

    public Integer getAllSamInfoCount();
    public List<String> getAllSamId();

    public List<SamInfo> getSamInfoByClassNo(@Param("classNo") int classNo);
    public List<SamInfo> getSamInfoByDataNo(@Param("dataNo") int dataNo);
    public List<SamInfo> getSamInfoByTissueNo(@Param("tissueNo") int tissueNo);
    public List<SamInfo> getSamInfoBySpeciesNo(@Param("speciesNo") int speciesNo);
    public List<SamInfo> getSamInfoByLayoutNo(@Param("layoutNo") int layoutNo);

    public void addFootprint(@Param("footprint") Footprint footprint);
    public Footprint getFootprintBySamNo(@Param("samNo") Integer samNo);

    public SamInfo getSamInfoBySamNo(@Param("samNo")int samNo);

    public SamInfo getSamInfoBySamId(@Param("samId")String samId);

    public List<String> getSamIdBySpeciesNo(@Param("speciesNo")Integer speciesNo);
    public List<String> getMotifBySpeciesNo(@Param("speciesNo") Integer speciesNo);
    public String getSamIdByATAC(@Param("ATAC") String ATAC);
    public Integer getSamNoBySamId(@Param("samId") String samId);
    public void updateDatabaseInSamInfo(String samId,Integer data);
    public Integer getIndexFormCountByLine(@Param("classNo") Integer classNo,@Param("dataNo") Integer dataNo,@Param("database") Integer database,@Param("speciesNo") Integer speciesNo);
}
