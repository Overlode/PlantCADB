package com.icec.plantcadb.bean;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Options {
    private Integer optionNo;
    private String option;
    private String optionName;
}
