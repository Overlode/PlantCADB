package com.icec.plantcadb.controller;

import com.icec.plantcadb.bean.*;
import com.icec.plantcadb.bean.Class;
import com.icec.plantcadb.service.NavBarInfoService;
import com.icec.plantcadb.utils.JsonResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/navinfo")
public class NavController {


    private final NavBarInfoService navBarInfoService;


    public NavController(NavBarInfoService navBarInfoService){
        this.navBarInfoService=navBarInfoService;
    }

    @GetMapping("/1")
    public JsonResult<List<Class>> getClassInfo(){
        List<Class> classList = navBarInfoService.getClassCount();
        return new JsonResult<>(classList,"1","Class数据获取成功");
    }

    @GetMapping("/2")
    public JsonResult<List<DataType>> getDataTypeInfo(){
        List<DataType> dataTypeList = navBarInfoService.getDataTypeCount();
        return new JsonResult<>(dataTypeList,"1","DataType数据获取成功");
    }
    @GetMapping("/3")
    public JsonResult<List<Layout>> getLayoutInfo(){
        List<Layout> layoutList = navBarInfoService.getLayoutCount();
        return new JsonResult<>(layoutList,"1","Layout数据获取成功");
    }
    @GetMapping("/4")
    public JsonResult<List<Species>> getSpeciesInfo(){
        List<Species> speciesList = navBarInfoService.getSpeciesCount();
        return new JsonResult<>(speciesList,"1","Species数据获取成功");
    }
    @GetMapping("/5")
    public JsonResult<List<Tissue>> getTissueInfo(){
        List<Tissue> tissueList = navBarInfoService.getTissueCount();
        return new JsonResult<>(tissueList,"1","Tissue数据获取成功");
    }



    @GetMapping("/sideAllInfo")
    public JsonResult<List<Tissue>> sideAllInfo(){
        List<Tissue> tissueList = navBarInfoService.getTissueCount();
        return new JsonResult<>(tissueList,"1","Tissue数据获取成功");
    }
}
