package com.icec.plantcadb.bean;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class PeakFileInfo {
    private String chr;
    private String start;
    private String end;
    private String length;
    private String abs_summit;
    private String pileUp;
    private String pValue;
    private String fold_enrichment;
    private String qValue;
    private String name;
    private String label;
}
