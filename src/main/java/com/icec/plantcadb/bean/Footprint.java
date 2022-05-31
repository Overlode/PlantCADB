package com.icec.plantcadb.bean;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Footprint {
    private Integer samNo;
    private Integer reads;
    private Integer peaks;
    private double tagCounts;
    private Integer footprints;
}
