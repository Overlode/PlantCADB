package com.icec.plantcadb.bean;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.boot.autoconfigure.domain.EntityScan;

@Data
@EntityScan
@NoArgsConstructor
@AllArgsConstructor
public class Species {
    private int speciesNo;
    private String speciesName;
    private int count;
}
