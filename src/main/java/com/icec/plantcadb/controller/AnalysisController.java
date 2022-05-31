package com.icec.plantcadb.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping({"/Analysis","/analysis"})
public class AnalysisController {
    @GetMapping({"/",""})
    public String toAnalysis(){
        return "/html/Analysis.html";
    }


}
