package com.icec.plantcadb.test;

import com.icec.plantcadb.bean.*;
import com.icec.plantcadb.config.FileLocationConfig;
import com.icec.plantcadb.service.FileService;
import com.icec.plantcadb.service.NavBarInfoService;
import com.icec.plantcadb.service.SamInfoService;
import com.icec.plantcadb.utils.XLSX2CSV;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.io.FileUtils;
import org.apache.commons.io.LineIterator;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.openxml4j.opc.OPCPackage;
import org.apache.poi.openxml4j.opc.PackageAccess;
import org.apache.poi.ss.usermodel.*;
import org.apache.poi.xssf.streaming.SXSSFWorkbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.util.ResourceUtils;

import java.io.*;
import java.nio.Buffer;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Slf4j
@SpringBootTest
@WebAppConfiguration
@RunWith(SpringJUnit4ClassRunner.class)
public class TestMybatis {

    @Autowired
    private SamInfoService samInfoService;

    @Autowired
    private NavBarInfoService navBarInfoService;

    @Autowired
    private FileService fileService;

    @Test
    public void Test() throws Exception {
    }

    public static Map<String, Object> readTxT(File file) {
        Map<String, Object> map = new HashMap();
        List<String[]> result = new ArrayList();

        try {
            BufferedReader br = null;
            br = new BufferedReader(new FileReader(file));
            String line = "";

            int lines;
            for(lines = -1; (line = br.readLine()) != null; ++lines) {
                String[] title;
                if (lines == -1) {
                    title = line.split("\t");
                    map.put("title", title);
                } else {
                    title = line.split("\t");
                    result.add(title);
                }
            }

            map.put("rows", lines);
            map.put("result", result);
        } catch (Exception var7) {
            var7.printStackTrace();
        }

        return map;
    }

    public static Map<String, Object> readSpecifyColumns(File file, int column, int sheetNum) throws Exception {
        Map<String, Object> map = new HashMap();
        List<String[]> result = new ArrayList();
        List<String> title = new ArrayList();
        Object book;
        Sheet sheet;
        int rows;
        int i;
        Cell cell;
        String content;
        Row row;
        if (file.getName().substring(file.getName().lastIndexOf(".")).equals(".xls")) {
            book = null;

            try {
                book = new HSSFWorkbook(new FileInputStream(file));
            } catch (Exception var16) {
                try {
                    book = new XSSFWorkbook(new FileInputStream(file));
                } catch (Exception var15) {
                    return readTxT(file);
                }
            }

            sheet = ((Workbook)book).getSheetAt(sheetNum);
            rows = sheet.getPhysicalNumberOfRows();
            map.put("rows", rows - 1);

            for(i = 0; i < column; ++i) {
                result.add(new String[rows - 1]);
            }

            gain(sheet, rows, column, result);
            row = sheet.getRow(0);

            for(i = 0; i < column; ++i) {
                cell = row.getCell(i);
                content = getCellContent(cell);
                if (!content.equals("")) {
                    title.add(content);
                }
            }
        } else {
            book = null;

            try {
                book = new XSSFWorkbook(new FileInputStream(file));
            } catch (Exception var14) {
                try {
                    book = new HSSFWorkbook(new FileInputStream(file));
                } catch (Exception var13) {
                    return readTxT(file);
                }
            }

            sheet = ((Workbook)book).getSheetAt(sheetNum);
            rows = sheet.getPhysicalNumberOfRows();

            for(i = 0; i < column; ++i) {
                result.add(new String[rows - 1]);
            }

            gain(sheet, rows, column, result);
            map.put("rows", rows - 1);
            row = sheet.getRow(0);

            for(i = 0; i < column; ++i) {
                cell = row.getCell(i);
                content = getCellContent(cell);
                if (!content.equals("")) {
                    title.add(content);
                }
            }
        }

        map.put("result", result);
        map.put("title", title);
        return map;
    }

    private static void gain(Sheet sheet, int rows, int column, List<String[]> lists) {
        for(int i = 1; i < rows; ++i) {
            Row row = sheet.getRow(i);
            if (row != null) {
                for(int j = 0; j < column; ++j) {
                    Cell cell = row.getCell(j);
                    if (cell != null) {
                        String content = getCellContent(cell);
                        if (!content.equals("")) {
                            ((String[])lists.get(j))[i - 1] = content;
                        }
                    }
                }
            }
        }

    }
    private static final DataFormatter FORMATTER = new DataFormatter();
    private static String getCellContent(Cell cell) {
        return FORMATTER.formatCellValue(cell);
    }

    public Map<String, Object> selectRegionIdDetail(String name) {
        Map<String, Object> map = new HashMap<>();
        String id = name.split("_")[1];
        String sampleId = samInfoService.getSamIdByATAC("%"+id+"%");
        map.put("SampleId", sampleId);
        return (map);
    }
}
