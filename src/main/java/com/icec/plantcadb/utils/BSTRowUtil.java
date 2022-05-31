package com.icec.plantcadb.utils;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class BSTRowUtil<T> {
    private List<T> rows;
    private long total;
}
