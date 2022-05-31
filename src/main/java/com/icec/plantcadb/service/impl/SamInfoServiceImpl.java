package com.icec.plantcadb.service.impl;

import com.github.pagehelper.Page;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.icec.plantcadb.bean.DiffStatic;
import com.icec.plantcadb.bean.Footprint;
import com.icec.plantcadb.bean.PeakFileInfo;
import com.icec.plantcadb.bean.SamInfo;
import com.icec.plantcadb.config.FileLocationConfig;
import com.icec.plantcadb.mapper.DatabaseMapper;
import com.icec.plantcadb.service.SamInfoService;
import org.apache.poi.openxml4j.exceptions.InvalidFormatException;
import org.apache.poi.openxml4j.opc.OPCPackage;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@Service("SamInfoService")
public class SamInfoServiceImpl implements SamInfoService {
    private final DatabaseMapper databaseMapper;

    public SamInfoServiceImpl(DatabaseMapper databaseMapper) {
        this.databaseMapper = databaseMapper;
    }

    @Override
    public List<SamInfo> getSamInfo(Integer dataNo,Integer classNo,Integer layoutNo,Integer speciesNo,Integer tissueNo,String option ,Integer database){
        return databaseMapper.getAllSamInfo(dataNo,classNo,layoutNo,speciesNo,tissueNo,option,database);
    }

    @Override
    public Integer getSamInfoCount() {
        return databaseMapper.getAllSamInfoCount();
    }

    @Override
    public List<DiffStatic> getDiffStatic(String samId, int page, int size) throws IOException {
        List<DiffStatic> list = new ArrayList<>();
        try {
            OPCPackage pkg = OPCPackage.open(new File(FileLocationConfig.TFFootprint+samId+FileLocationConfig.DiffStaticFile));
            XSSFWorkbook wb = new XSSFWorkbook(pkg);
            XSSFSheet sheet = wb.getSheetAt(0);
            int  rowCount=sheet.getLastRowNum();
            for (int rowNum =(page-1)*size+1;rowNum<(page)*size+1&&rowNum<rowCount;rowNum++){
                Row r=sheet.getRow(rowNum);
                DiffStatic diffStaticFile = new DiffStatic();
                diffStaticFile.setMotif(r.getCell(0).getStringCellValue());
                diffStaticFile.setNum(r.getCell(1).getStringCellValue());
                diffStaticFile.setProtectionScore(r.getCell(2).getStringCellValue());
                diffStaticFile.setTC(r.getCell(3).getStringCellValue());
                list.add(diffStaticFile);
            }
            wb.close();
            pkg.close();
        } catch (InvalidFormatException e) {
            throw new RuntimeException(e);
        }
        return list;
    }

    @Override
    public void addFootprint(Footprint footprint) {
        databaseMapper.addFootprint(footprint);
    }

    @Override
    public Footprint getFootprintBySamNo(Integer samNo) {
        return databaseMapper.getFootprintBySamNo(samNo);
    }

    @Override
    public SamInfo getSamInfoBySamNo(Integer samNo) {
        return databaseMapper.getSamInfoBySamNo(samNo);
    }

    @Override
    public SamInfo getSamInfoBySamId(String samId) {
        return databaseMapper.getSamInfoBySamId(samId);
    }

    @Override
    public List<String> getMotifBySpeciesNo(Integer speciesNo) {
        return databaseMapper.getMotifBySpeciesNo(speciesNo);
    }

    @Override
    public String getSamIdByATAC(String ATAC) {
        String id = ATAC.split("_")[1];
        int maxLength=0, count= databaseMapper.getAllSamInfoCount();
        while(count != 0){
            count/=10;
            maxLength++;
        }
        while(id.length()!=maxLength){
            id="0"+id;
        }
        return databaseMapper.getSamIdByATAC("%"+id+"%");
    }

    @Override
    public List<String> getAllSamId() {
        return databaseMapper.getAllSamId();
    }

    @Override
    public void updateDatabaseInSamInfo(String samId, Integer data) {
        databaseMapper.updateDatabaseInSamInfo(samId, data);
    }
}
