package com.icec.plantcadb.bean;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class FootprintMbpsFileInfo {
    private String chr;
    private String start;
    private String end;
    private String ID;
    private String score;
    private String strand;
}
