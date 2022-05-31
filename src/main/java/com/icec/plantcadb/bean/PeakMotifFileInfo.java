package com.icec.plantcadb.bean;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class PeakMotifFileInfo {
    private String TFId;
    private String GeneId;
    private String MotifId;
    private String TFFamily;
    private String chr;
    private String start;
    private String stop;
    private String strand;
    private String score;
    private String pValue;
    private String matchedSequence;
}
