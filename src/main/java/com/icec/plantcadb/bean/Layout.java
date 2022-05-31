package com.icec.plantcadb.bean;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.boot.autoconfigure.domain.EntityScan;

@Data
@EntityScan
@NoArgsConstructor
@AllArgsConstructor
public class Layout {
    private int layoutNo;
    private String layoutName;
    private int count;
}
