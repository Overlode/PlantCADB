package com.icec.plantcadb.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class PageController {
    @GetMapping(value = {"/", "/index","/Index"})
    public String toIndex() {
        return "/html/index.html";
    }

    @GetMapping(value = {"/data-browse","/Data-browse"})
    public String toDataBrowse() {
        return "/html/data-browse.html";
    }

    @GetMapping(value = {"/Genome-Browser","/genome-browser"})
    public String toGenomeBrowser() {
        return "/html/Genome-Browser.html";
    }

    @GetMapping(value = {"/submit","/Submit"})
    public String toSubmit(){
        return "/html/submit.html";
    }

    @GetMapping({"/analysis_sample_similar"})
    public String toAnalysisSampleSimilar(){
        return "/html/analysis_sample_similar.html";
    }

    @GetMapping({"/analysis_tf_bind"})
    public String toAnalysisTFBind(){
        return "/html/analysis_tf_bind.html";
    }

    @GetMapping({"/help","/Help"})
    public String toHelp(){
        return "/html/help.html";
    }
    @GetMapping({"/download","/Download"})
    public String toDownload(){
        return "/html/download.html";
    }

    @GetMapping({"/thanks","/Thanks","/Thank","/thank"})
    public String toThanks(){
        return "/html/thanks.html";
    }
}
