package com.icec.plantcadb.utils;

import lombok.Data;

@Data
public class JsonResult<T> {

    private T data;
    private String code;
    private String msg;
    private Integer totalPage;
    private Integer currentPage;
    private Integer size;

    private Integer totalCount;


    public JsonResult() {
        this.data = null;
        this.code = "1";
    }

    public JsonResult(String code, String msg) {
        this.code = code;
        this.msg = msg;
    }

    public JsonResult(T data, String code, String msg, Integer totalPage, Integer currentPage, Integer size) {
        this.data = data;
        this.code = code;
        this.msg = msg;
        this.totalPage = totalPage;
        this.currentPage = currentPage;
        this.size = size;
    }

    public JsonResult(T data, String code, String msg) {
        this.data = data;
        this.code = code;
        this.msg = msg;
    }

    public JsonResult(T data, String code, String msg, Integer totalPage) {
        this.data = data;
        this.code = code;
        this.msg = msg;
        this.totalPage = totalPage;
    }

    @Override
    public String toString() {
        return "JsonResult{" +
                "data=" + data +
                ", code='" + code + '\'' +
                ", msg='" + msg + '\'' +
                '}';
    }
}
