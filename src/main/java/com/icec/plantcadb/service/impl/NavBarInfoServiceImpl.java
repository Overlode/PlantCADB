package com.icec.plantcadb.service.impl;

import com.icec.plantcadb.bean.*;
import com.icec.plantcadb.bean.Class;
import com.icec.plantcadb.mapper.DatabaseMapper;
import com.icec.plantcadb.mapper.NavInfoMapper;
import com.icec.plantcadb.service.NavBarInfoService;
import com.icec.plantcadb.utils.DataUtil;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service("NavBarInfoService")
public class NavBarInfoServiceImpl implements NavBarInfoService {


    private final NavInfoMapper navInfoMapper;
    private final DatabaseMapper databaseMapper;

    public NavBarInfoServiceImpl(NavInfoMapper navInfoMapper, DatabaseMapper databaseMapper) {
        this.navInfoMapper = navInfoMapper;
        this.databaseMapper = databaseMapper;
    }


    @Override
    public List<Class> getClassCount() {
        return navInfoMapper.getClassCount();
    }

    @Override
    public List<DataType> getDataTypeCount() {
        return navInfoMapper.getDataTypeCount();
    }

    @Override
    public List<Tissue> getTissueCount() {
        return navInfoMapper.getTissueCount();
    }

    @Override
    public List<Layout> getLayoutCount() {
        return navInfoMapper.getLayoutCount();
    }

    @Override
    public List<Species> getSpeciesCount() {
        return navInfoMapper.getSpeciesCount();
    }

    @Override
    public EChartsBarInfo getEChartsBarInfo() {
        List<Species> list = navInfoMapper.getSpeciesCount();
        EChartsBarInfo results = new EChartsBarInfo();
        int max = -999999;
        for (Species s : list) {
            String sName = s.getSpeciesName();
            int sCount = s.getCount();
            max = Math.max(sCount, max);
            results.getName().add(sName);
            results.getValue().add(sCount);
            results.getList().add(DataUtil.createItemStyle(max));
        }
        return results;
    }

    @Override
    public Map<String, Object> getDataTypePieInfo() {
        Map<String, Object> map = new HashMap<>();
        List<EChartsPieInfo> resp = new ArrayList<>();
        List<String> color = new ArrayList<>();
        List<DataType> result = navInfoMapper.getDataTypeCount();
        for (DataType d : result) {
            EChartsPieInfo eChartsPieInfo = new EChartsPieInfo();
            eChartsPieInfo.setValue(d.getCount());
            eChartsPieInfo.setName(d.getTypeName());
            color.add(DataUtil.createItemStyle(d.getCount()));
            resp.add(eChartsPieInfo);
        }
        map.put("data", resp);
        map.put("color", color);
        return map;
    }

    @Override
    public Map<String, Object> getTissuePieInfo() {
        Map<String, Object> map = new HashMap<>();
        List<EChartsPieInfo> resp = new ArrayList<>();
        List<String> color = new ArrayList<>();
        List<Tissue> result = navInfoMapper.getTissueCount();
        for (Tissue t : result) {
            EChartsPieInfo eChartsPieInfo = new EChartsPieInfo();
            eChartsPieInfo.setValue(t.getCount());
            eChartsPieInfo.setName(t.getTissueName());
            color.add(DataUtil.createItemStyle(t.getCount()));
            resp.add(eChartsPieInfo);
        }
        map.put("data", resp);
        map.put("color", color);
        return map;
    }

    @Override
    public List<String> getSpecies() {
        return navInfoMapper.getSpeciesNameList();
    }

    @Override
    public List<Species> getSpeciesTable() {
        return navInfoMapper.getSpeciesTable();
    }

    public List<String> getSamIdBySpeciesNo(Integer speciesNo) {
        return databaseMapper.getSamIdBySpeciesNo(speciesNo);
    }

    @Override
    public Integer getSpeciesNoBySpeciesName(String speciesName) {
        return navInfoMapper.getSpeciesNoBySpeciesName(speciesName);
    }

    @Override
    public List<SamInfo> getOptions(String option, String speciesName) {
        return navInfoMapper.getOptions(option, speciesName);
    }


    @Override
    public Map<String, Object> getIndexForm() {
        Map<String, Object> res = new HashMap<>();
        List<Class> classList = databaseMapper.getAllClass();
        List<DataType> datatypeList = databaseMapper.getAllDataType();
        List<Species> speciesList = databaseMapper.getAllSpecies();
        res.put("classList", classList);
        res.put("datatypeList", datatypeList);
        res.put("speciesList", speciesList);
        Map<String, Object> classMap = new HashMap<>();
        Map<String,Integer> countMap = new HashMap<>();
        boolean flag2 = false;
        for (Class c : classList) {
            Integer classNo = c.getClassNo();
            Map<String, Map<String, Object>> line = new HashMap<>();
            boolean flag1 = false;
            for (Species s : speciesList) {
                Map<String, Object> speciesMap = new HashMap<>();
                Integer speciesNo = s.getSpeciesNo();
                boolean flag = false;
                for (DataType d : datatypeList) {
                    List<Integer> list = new ArrayList<>();
                    Integer dataNo = d.getDataNo();
                    for (int i = 0; i < 2; i++) {
                        int count = databaseMapper.getIndexFormCountByLine(classNo, dataNo, i, speciesNo);
                        list.add(count);
                        if (count > 0) flag = true;
                    }
                    {
                        speciesMap.put(d.getTypeName(), list);
                    }
                }
                if(flag) line.put(s.getSpeciesName(), speciesMap);
            }
            if(!line.isEmpty()) {
                classMap.put(c.getClassName(), line);
                countMap.put(c.getClassName(),line.size());
            }

        }
        res.put("result", classMap);
        res.put("countMap",countMap);
        return res;
    }

    @Override
    public List<Options> getAllOptions() {
        return navInfoMapper.getAllOptions();
    }

    @Override
    public Integer getClassifyCountByOption(String option) {
        return navInfoMapper.getClassifyCount(option);
    }
}
