package com.icec.plantcadb.bean;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.boot.autoconfigure.domain.EntityScan;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class EChartsBarInfo {
    private List<Integer> value = new ArrayList<>();
    private List<String> name = new ArrayList<>();
    private String color="";
    private List<String> list = new ArrayList<>();
}
