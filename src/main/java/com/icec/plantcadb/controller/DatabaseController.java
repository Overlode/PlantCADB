package com.icec.plantcadb.controller;

import com.github.pagehelper.Page;
import com.github.pagehelper.PageHelper;
import com.icec.plantcadb.bean.*;
import com.icec.plantcadb.bean.Class;
import com.icec.plantcadb.config.FileLocationConfig;
import com.icec.plantcadb.service.FileService;
import com.icec.plantcadb.service.NavBarInfoService;
import com.icec.plantcadb.service.SamInfoService;
import com.icec.plantcadb.utils.BSTRowUtil;
import com.icec.plantcadb.utils.JsonResult;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.*;
import java.net.URLEncoder;
import java.nio.file.Files;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/getData")
public class DatabaseController {
    private final SamInfoService samInfoService;
    private final FileService fileService;

    private final NavBarInfoService navBarInfoService;

    public DatabaseController(SamInfoService samInfoService, FileService fileService, NavBarInfoService navBarInfoService) {
        this.samInfoService = samInfoService;
        this.fileService = fileService;
        this.navBarInfoService = navBarInfoService;
    }
    @RequestMapping(value = {"/all"})
    public BSTRowUtil<SamInfo> getSamInfo(Integer limit, Integer offset, Integer dataNo, Integer classNo, Integer layoutNo, Integer speciesNo,String option, Integer tissueNo, String order, String sort,Integer database) {
        String A = sort, B = order;
        if (A == null || A.equals("samId")) A = "samno";
        else A = A.toLowerCase();
        if (B == null) B = "asc";
        Page p = PageHelper.startPage((offset / limit) + 1, limit);
        PageHelper.orderBy("saminfo." + A + " " + B);
        List<SamInfo> list = samInfoService.getSamInfo(dataNo, classNo, layoutNo, speciesNo, tissueNo,option,database);
        BSTRowUtil<SamInfo> res = new BSTRowUtil<>();
        res.setRows(list);
        res.setTotal(p.getTotal());
        return res;
    }

    @RequestMapping("/getSamInfoBySamNo")
    public JsonResult<SamInfo> getSamInfoBySamNo(Integer samNo) {
        JsonResult<SamInfo> json = new JsonResult<>();
        json.setData(samInfoService.getSamInfoBySamNo(samNo));
        json.setCode("1");
        json.setMsg("SamInfo");
        return json;
    }

    @RequestMapping("/getSamInfoBySamId")
    public JsonResult<SamInfo> getSamInfoBySamId(String samId) {
        JsonResult<SamInfo> json = new JsonResult<>();
        json.setData(samInfoService.getSamInfoBySamId(samId));
        json.setCode("1");
        json.setMsg("SamInfo");
        return json;
    }


    @RequestMapping("/getFootprintStatistics")
    public JsonResult<List<List<String>>> getFootprintStatistics(String samId) throws IOException {
        JsonResult<List<List<String>>> json = new JsonResult<>();
        json.setCode("1");
        json.setData(fileService.getDiffStaticBySamId(samId));
        json.setMsg("FootprintStatistics");
        return json;
    }

    @RequestMapping("/getFootprintStatisticsByFilter")
    public JsonResult<List<List<String>>> getFootprintStatisticsByFilter(String samId, Integer number, Double score, Double TC) throws IOException {
        JsonResult<List<List<String>>> json = new JsonResult<>();
        json.setCode("1");
        List<List<String>> list = fileService.getDiffStaticByFilter(samId, number, score, TC);
        json.setData(list);
        json.setMsg("FootprintStatistics");
        json.setTotalCount(list.size());
        return json;
    }

    @RequestMapping("/getPeakFile")
    public JsonResult<List<List<String>>> getPeakFile(String samId) throws IOException {
        return new JsonResult<>(fileService.getPeakFileBySamId(samId), "1", "success");
    }

    @RequestMapping("/getPeakFileLineByATAC")
    public JsonResult<PeakFileInfo> getPeakFile(String samId, String ATAC) throws IOException {
        return new JsonResult<>(fileService.getPeakFileBySamIdAndATAC(samId, ATAC), "1", "success");
    }

    @RequestMapping("/getPeakMotifFile")
    public JsonResult<List<List<String>>> getPeakMotifFile(String samId, String ATAC) throws IOException {
        JsonResult<List<List<String>>> json = new JsonResult<>();
        List<List<String>> res = fileService.getPeakMotifFileBySamId(samId, ATAC);
        json.setCode("1");
        json.setData(res);
        json.setMsg("Peak.bed");
        json.setTotalCount(res.size());
        return json;
    }

    @RequestMapping("/getFootprintMbpsFile")
    public JsonResult<List<List<String>>> getFootprintMbpsFile(String samId, String ATAC) throws IOException {
        JsonResult<List<List<String>>> json = new JsonResult<>();
        List<List<String>> res = fileService.getFootprintMbpsFileBySamId(samId, ATAC);
        json.setCode("1");
        json.setData(res);
        json.setMsg("Peak.bed");
        json.setTotalCount(res.size());
        return json;
    }

    @RequestMapping("/getAssociatedGene")
    public JsonResult<AssociatedGeneFileInfo> getAssociatedGene(String samId, String ATAC) throws IOException {
        JsonResult<AssociatedGeneFileInfo> json = new JsonResult<>();
        AssociatedGeneFileInfo res = fileService.getAssociatedGeneBySamId(samId, ATAC);
        json.setCode("1");
        json.setData(res);
        json.setMsg("Peak.bed");
        return json;
    }

    @RequestMapping("/getDataTypeCount")
    public JsonResult<List<DataType>> getDataTypeCount() {
        return new JsonResult<>(navBarInfoService.getDataTypeCount(), "1", "success");
    }

    @RequestMapping("/getClassCount")
    public JsonResult<List<Class>> getClassCount() {
        return new JsonResult<>(navBarInfoService.getClassCount(), "1", "success");
    }

    @RequestMapping("/getLayoutCount")
    public JsonResult<List<Layout>> getLayoutCount() {
        return new JsonResult<>(navBarInfoService.getLayoutCount(), "1", "success");
    }

    @RequestMapping("/getTissueCount")
    public JsonResult<List<Tissue>> getTissueCount() {
        return new JsonResult<>(navBarInfoService.getTissueCount(), "1", "success");
    }

    @GetMapping("/getClassifyCount")
    public JsonResult<Map<String,Object>> getClassifyInfo(){
        JsonResult<Map<String,Object>> json = new JsonResult<>();
        Map<String,Object> res = new HashMap<>();
        List<Options> options = navBarInfoService.getAllOptions();
        List<String> optionsName = new ArrayList<>();
        Map<String,Integer> optionCount = new HashMap<>();
        res.put("options",options);
        for(Options o:options){
            Integer count = navBarInfoService.getClassifyCountByOption(o.getOption());
            optionCount.put(o.getOption(),count);
            optionsName.add(o.getOptionName());
        }
        res.put("count",optionCount);
        res.put("optionsName",optionsName);
        json.setMsg("success");
        json.setCode("1");
        json.setData(res);
        return json;
    }

    @RequestMapping("/getSpeciesCount")
    public JsonResult<List<Species>> getSpeciesCount() {
        return new JsonResult<>(navBarInfoService.getSpeciesCount(), "1", "success");
    }

    @RequestMapping("/getSNP")
    public JsonResult<List<List<String>>> getSNP(String samId, String ATAC) throws IOException {
        JsonResult<List<List<String>>> json = new JsonResult<>();
        List<List<String>> res = fileService.getSNP(samId, ATAC);
        json.setData(res);
        json.setCode("1");
        json.setTotalCount(res.size());
        json.setMsg("success");
        return json;
    }

    @RequestMapping("/analysis")
    public JsonResult<Map<String, Object>> xxxxx() {
        JsonResult<Map<String, Object>> json = new JsonResult<>();
        Map<String, Object> res = new HashMap<>();
        Map<String, List<String>> result = new HashMap<>();
        List<String> species = new ArrayList<>();
        List<Species> table = navBarInfoService.getSpeciesTable();
        for (Species s : table) {
            List<String> list = navBarInfoService.getSamIdBySpeciesNo(s.getSpeciesNo());
            species.add(s.getSpeciesName());
            result.put(s.getSpeciesName(), list);
        }
        res.put("result", result);
        res.put("species", species);
        json.setData(res);
        return json;
    }

    @RequestMapping("/getChr")
    public JsonResult<Map<String, List<String>>> getChr(String samId) throws IOException {
        JsonResult<Map<String, List<String>>> json = new JsonResult<>();
        Map<String, List<String>> res = new HashMap<>();
        res.put("chrs", fileService.getChr(samId));
        json.setMsg("success");
        json.setCode("1");
        json.setData(res);
        return json;
    }

    @RequestMapping(value = {"/searchTFName"})
    public JsonResult<Map<String, Object>> searchTFName(String species) throws IOException {
        JsonResult<Map<String, Object>> json = new JsonResult<>();
        Map<String, Object> res = new HashMap<>();
        List<String> list = fileService.getTFName(species);
        if (list.size() == 0) list.add("No Available Data !");
        res.put("map",fileService.getTFFamilyAndTFName(species));
        res.put("list", list);
        json.setMsg("success");
        json.setCode("1");
        json.setData(res);
        return json;
    }

    @RequestMapping(value = {"/searchTF"})
    public JsonResult<Map<String, Object>> searchTF(String species, String name) throws IOException {
        JsonResult<Map<String, Object>> json = new JsonResult<>();
        Map<String, Object> res = fileService.searchTF(species, name);
        json.setMsg("success");
        json.setCode("1");
        json.setData(res);
        return json;
    }

    @RequestMapping(value = {"/selectRegionIdDetail"})
    public JsonResult<Map<String, Object>> selectRegionIdDetail(String name) {
        JsonResult<Map<String, Object>> json = new JsonResult<>();
        Map<String, Object> res = new HashMap<>();
        String sampleId = samInfoService.getSamIdByATAC(name);
        res.put("SampleId", sampleId);
        json.setMsg("success");
        json.setCode("1");
        json.setData(res);
        return json;
    }


    @RequestMapping(value = {"/searchGene"})
    public JsonResult<Map<String, Object>> searchGene(String species, String type, String name) throws IOException {
        Map<String, Object> res = fileService.searchGene(species, type, name);
        JsonResult<Map<String, Object>> json = new JsonResult<>();
        json.setMsg("success");
        json.setCode("1");
        json.setData(res);
        return json;
    }

    @RequestMapping(
            value = {"/doSearchChr"}
    )
    public JsonResult<Map<String, Object>> doSearchChr(String sampleId, String chrs, Integer start, Integer end) throws IOException {
        Map<String, Object> res = fileService.doSearchChr(sampleId, chrs, start, end);
        JsonResult<Map<String, Object>> json = new JsonResult<>();
        json.setMsg("success");
        json.setCode("1");
        json.setData(res);
        return json;
    }

    @RequestMapping(value = {"/getAnalysisOptions"})
    public JsonResult<Map<String, Object>> getAnalysisOptions(String species) {
        Map<String, Object> res = new HashMap<>();
        List<Options> options = navBarInfoService.getAllOptions();
        List<Options> availableOptions = new ArrayList<>();
        Map<String,List<SamInfo>> result = new HashMap<>();
        for(Options o : options){
            List<SamInfo> list = navBarInfoService.getOptions(o.getOption(), species);
            if (list.size() != 0) {
                result.put(o.getOption(),list);
                availableOptions.add(o);
            }
        }
        res.put("result", result);
        res.put("options",availableOptions);
        JsonResult<Map<String, Object>> json = new JsonResult<>();
        json.setMsg("success");
        json.setCode("1");
        json.setData(res);
        return json;
    }

    @RequestMapping(
            value = {"/doAnalysis"}
    )
    @CrossOrigin
    public JsonResult<Map<String, Object>> doAnalysis(String sampleIdOne, String sampleIdTwo) throws IOException {
        JsonResult<Map<String, Object>> json = new JsonResult<>();
        Map<String, Object> res = fileService.doAnalysis(sampleIdOne, sampleIdTwo);
        json.setMsg("success");
        json.setCode("1");
        json.setData(res);
        return json;
    }

    @RequestMapping(
            value = {"/analysisTwo"}
    )
    public JsonResult<Map<String, Object>> analysisTwo(String species, String TFOneName, String TFTwoName, int length) throws IOException {
        JsonResult<Map<String, Object>> json = new JsonResult<>();
        Map<String, Object> res = fileService.analysisTwo(species, TFOneName, TFTwoName, length);
        json.setMsg("success");
        json.setCode("1");
        json.setData(res);
        return json;
    }

    @RequestMapping({"/getAllSamId"})
    public JsonResult<Map<String, Object>> getAllSamId() {
        JsonResult<Map<String, Object>> json = new JsonResult<>();
        List<String> list = samInfoService.getAllSamId();
        List<List<String>> l = new ArrayList<>();
        for (String s : list) {
            List<String> temp = new ArrayList<>();
            for (int i = 0; i < 5; i++) temp.add(s);
            l.add(temp);
        }
        Map<String, Object> res = new HashMap<>();
        res.put("list", l);
        json.setMsg("success");
        json.setCode("1");
        json.setData(res);
        return json;
    }

    @RequestMapping(
            value = {"/downloadData"},
            method = {RequestMethod.GET},
            produces = {"application/json;charset=UTF-8"}
    )
    @ResponseBody
    @CrossOrigin
    public void downloadData(HttpServletRequest request, HttpServletResponse response) {
        int type = Integer.parseInt(request.getParameter("type"));
        int typeFlag = Integer.parseInt(request.getParameter("typeFlag"));
        String sampleId = request.getParameter("sampleId");
        File file = null;
        if (type == 0) {
            if (typeFlag == 0) {
                String filename = FileLocationConfig.PeakFileLocation + sampleId + FileLocationConfig.PeakFile;
                file = new File(filename);
            }
        } else if (type == 1) {
            String filename = FileLocationConfig.AssociatedGeneFileLocation + sampleId + FileLocationConfig.AssociatedGeneFile;
            file = new File(filename);
        } else if (type == 2) {
            String filename = FileLocationConfig.PeakMotifFileLocation + sampleId + FileLocationConfig.PeakMotifFile;
            file = new File(filename);
        } else if (type == 3) {
            if (typeFlag == 0) {
                String filename = FileLocationConfig.TFFootprint + sampleId + FileLocationConfig.DiffStaticFile;
                file = new File(filename);
            } else if (typeFlag == 1) {
                String filename = FileLocationConfig.PeakMotifFileLocation + sampleId + FileLocationConfig.PeakMotifFile;
                file = new File(filename);
            } else {
                String filename = FileLocationConfig.TFFootprint + sampleId + FileLocationConfig.AssociatedGeneFile;
//          file = new File(filename);
                file = new File(FileLocationConfig.TFFootprint + sampleId + FileLocationConfig.LinePlotsFile);
            }
        } else if (type == 4) {
            if (typeFlag == 0) {
                String filename = FileLocationConfig.WholeDataLocation + FileLocationConfig.WholeChromatinAccessibilityRegions;
                file = new File(filename);
            } else if (typeFlag == 1) {
                String filename = FileLocationConfig.WholeDataLocation + FileLocationConfig.WholeChromatinAccessibilityRegionsAssociatedGenes;
                file = new File(filename);
            } else if (typeFlag == 2) {
                String filename = FileLocationConfig.WholeDataLocation + FileLocationConfig.WholeChromatinAccessibilityRegionsFootprint;
                file = new File(filename);
            }
        }

        if (file != null && file.exists()) {
            try {
                InputStream inputStream = Files.newInputStream(file.toPath());
                BufferedInputStream in = new BufferedInputStream(inputStream);
                BufferedOutputStream out;

                try {
                    out = new BufferedOutputStream(response.getOutputStream());
                    response.setHeader("Content-Disposition", "attachment;filename=" + URLEncoder.encode(file.getName(), "utf-8"));
                    byte[] car = new byte[1024];

                    int L;
                    while ((L = in.read(car)) != -1) {
                        out.write(car, 0, L);
                    }

                    out.flush();
                    out.close();
                    in.close();
                } catch (FileNotFoundException var12) {
                    var12.printStackTrace();
                }
            } catch (IOException var13) {
                var13.printStackTrace();
            }
        }

    }

    @GetMapping("/indexForm")
    public JsonResult<Map<String,Object>> getIndexForm(){
        JsonResult<Map<String,Object>> json = new JsonResult<>();
        Map<String,Object> res = navBarInfoService.getIndexForm();
        json.setMsg("success");
        json.setCode("1");
        json.setData(res);
        return json;
    }
}
