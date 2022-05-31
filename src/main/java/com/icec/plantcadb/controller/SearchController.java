package com.icec.plantcadb.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping({"/search","/Search"})
public class SearchController {
    @GetMapping (value={"/analysis_gene_cell"})
    public String toAnalysisGeneCell(){
        return "/html/analysis_gene_cell.html";
    }

    @GetMapping (value={"/search_car_detail"})
    public String toSearchCarDetail(){
        return "/html/search_car_detail.html";
    }

    @GetMapping (value={"","/"})
    public String toSearch(){
        return "/html/search.html";
    }

    @GetMapping("/search_tf_result")
    public String toSearchTFResult(){
        return "/html/search_tf_result.html";
    }

    @GetMapping("/search_gene_result")
    public String toSearchGeneResult(){
        return "/html/search_gene_result.html";
    }

    @GetMapping("/search_region_result")
    public String toSearchRegionResult(){return "/html/search_region_result.html";}
}
