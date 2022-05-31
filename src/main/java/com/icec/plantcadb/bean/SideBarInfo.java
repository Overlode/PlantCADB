package com.icec.plantcadb.bean;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class SideBarInfo {
    private String index;
    private Integer count;
    private String barTitle;
}
