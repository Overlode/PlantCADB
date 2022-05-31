package com.icec.plantcadb.bean;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.boot.autoconfigure.domain.EntityScan;

@Data
@EntityScan
@NoArgsConstructor
@AllArgsConstructor
public class SamInfo {
    private Integer samNo;
    private String samId;
    private Integer dataNo;
    private Integer classNo;
    private Integer layoutNo;
    private Integer speciesNo;
    private Integer tissueNo;
    private String description;
    private Integer regionNumber;
    private Integer regionLength;
    private String filename;
    private String runs;
    private String score; //TSS enrichment score
    private String FRiP;
    private String meanInsertSize;
    private String standardDeviation;
    private String motif;
    private String dACR;
    private String gACR;
    private String pACR;
    private String className;
    private String typeName;
    private String layoutName;
    private String speciesName;
    private String tissueName;
}
