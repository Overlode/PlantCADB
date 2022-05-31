package com.icec.plantcadb.bean;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class AssociatedGeneFileInfo {
    private String chr;
    private String start;
    private String end;
    private String name;
    private String overlapGene;
    private String Proximal_Gene_1kb;
    private String Proximal_Gene_10kb;
    private String Proximal_Gene_20kb;
    private String closestGene;
}
