package com.icec.plantcadb.controller;


import com.icec.plantcadb.bean.EChartsBarInfo;
import com.icec.plantcadb.bean.EChartsPieInfo;
import com.icec.plantcadb.service.NavBarInfoService;
import com.icec.plantcadb.utils.JsonResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping(value = {"/info"})
public class IndexChartController {
    private final NavBarInfoService navBarInfoService;

    public IndexChartController(NavBarInfoService navBarInfoService) {
        this.navBarInfoService = navBarInfoService;
    }

    @GetMapping("/echarts/bar")
    public JsonResult<EChartsBarInfo> getEChartsBarInfo(){
        return new JsonResult<>(navBarInfoService.getEChartsBarInfo(),"1","首页柱状图数据获取成功");
    }

    @GetMapping("/echarts/datatype")
    public JsonResult<Map<String,Object>> getDatatypeCount(){
        Map<String,Object> map=navBarInfoService.getDataTypePieInfo();
        return new JsonResult<>(map,"1","首页种类数据获取成功");
    }

    @GetMapping("/echarts/tissue")
    public JsonResult<Map<String,Object>> getTissueCount(){
        Map<String,Object> map=navBarInfoService.getTissuePieInfo();
        return new JsonResult<>(map,"1","首页种类数据获取成功");
    }
}
