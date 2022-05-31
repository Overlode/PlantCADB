package com.icec.plantcadb.config;

public interface FileLocationConfig {
//    String PlantCADBLocation = "E:\\file\\PlantCADB";
    String PlantCADBLocation = "/home/dingke/PlantCADBLib/PlantCADB";
//    String PeakFileLocation = PlantCADBLocation+"\\Peak_nochr\\";
    String PeakFile="_peak.bed";
//    String TFFootprint = PlantCADBLocation+"\\TFfootprint\\";
//    String DiffStaticFile= "\\differential_statistics.txt";

//    String PeakMotifFileLocation = PlantCADBLocation+"\\trans_motif\\";
    String PeakMotifFile="_peak_motif.bed";

//    String FootprintMbpsFileLocation = PlantCADBLocation+"\\trans_mpbs\\";
    String FootprintMbpsFile="_footprint_mpbs.bed";

//    String AssociatedGeneFileLocation =PlantCADBLocation+"\\AssociatedGene\\";
    String AssociatedGeneFile="_gene.bed";

//    String SNPLocation=PlantCADBLocation+"\\SNP\\";
//    String MotifMeMeLocation = PlantCADBLocation+"\\Motif.meme\\";
    String TFGeneMotifTransFile= "_TF_gene_motif_transid.txt";

//    String SearchTFLocation = PlantCADBLocation+"\\searchTF\\";


//    String StaticLocation = "F:/PlantCADB/static/";
    String StaticLocation = "/home/dingke/PlantCADBLib/static/";

//    String GenomeGeneLocation = PlantCADBLocation+"\\Genome_gene\\";
    String GenomeGeneFile = "_protein_coding_gene.bed";
//    String LinePlotsFile = "\\Lineplots.tar.gz";
//    String WholeDataLocation = PlantCADBLocation+"\\WholeData\\";
    String PeakFileLocation = PlantCADBLocation+"/Peak_nochr/";
    String TFFootprint = PlantCADBLocation+"/TFfootprint/";
    String DiffStaticFile= "/differential_statistics.txt";
    String PeakMotifFileLocation = PlantCADBLocation+"/trans_motif/";
    String FootprintMbpsFileLocation = PlantCADBLocation+"/trans_mpbs/";
    String AssociatedGeneFileLocation =PlantCADBLocation+"/AssociatedGene/";
    String SNPLocation=PlantCADBLocation+"/SNP/";
    String MotifMeMeLocation = PlantCADBLocation+"/Motif.meme/";
    String SearchTFLocation = PlantCADBLocation+"/searchTF/";
    String GenomeGeneLocation = PlantCADBLocation+"/Genome_gene/";
    String LinePlotsFile = "/Lineplots.tar.gz";
    String WholeDataLocation = PlantCADBLocation+"/WholeData/";
    String WholeChromatinAccessibilityRegions = "Whole_Chromatin_Accessibility_regions.tar.gz";
    String WholeChromatinAccessibilityRegionsAssociatedGenes= "Whole_Chromatin_Accessibility_regions_AssociatedGenes.tar.gz";
    String WholeChromatinAccessibilityRegionsFootprint= "Whole_Chromatin_Accessibility_regions_footprint.tar.gz";


}
