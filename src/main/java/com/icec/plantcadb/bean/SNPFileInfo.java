package com.icec.plantcadb.bean;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class SNPFileInfo {
    private String chr;
    private String position;
    private String Id;
    private String ref;
    private String alt;
}
