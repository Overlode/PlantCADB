import {GetStaticFile} from "../api.js";
export var tracks = [
  {
    type: 'BasicTrack',
    trackId:
      'gene',
    name: 'gene',
    category: ['Genes'],
    assemblyNames: ['Zea_mays'],
    adapter: {
      type: 'Gff3TabixAdapter',
      gffGzLocation: {
        uri:
          GetStaticFile+"/data/Zea_mays/gff3/gene.gff3.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/Zea_mays/gff3/gene.gff3.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
    renderer: {
      type: 'SvgFeatureRenderer',
    },
  },
  {
    type: 'BasicTrack',
    trackId:
      'lnc_RNA',
    name: 'lnc_RNA',
    category: ['RNA'],
    assemblyNames: ['Zea_mays'],
    adapter: {
      type: 'Gff3TabixAdapter',
      gffGzLocation: {
        uri:
          GetStaticFile+"/data/Zea_mays/gff3/lnc_RNA.gff3.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/Zea_mays/gff3/lnc_RNA.gff3.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
    renderer: {
      type: 'SvgFeatureRenderer',
    },
  },
  {
    type: 'BasicTrack',
    trackId:
      'tRNA',
    name: 'tRNA',
    category: ['RNA'],
    assemblyNames: ['Zea_mays'],
    adapter: {
      type: 'Gff3TabixAdapter',
      gffGzLocation: {
        uri:
          GetStaticFile+"/data/Zea_mays/gff3/tRNA.gff3.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/Zea_mays/gff3/tRNA.gff3.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
    renderer: {
      type: 'SvgFeatureRenderer',
    },
  },
  {
    type: 'BasicTrack',
    trackId:
      'snRNA',
    name: 'snRNA',
    category: ['RNA'],
    assemblyNames: ['Zea_mays'],
    adapter: {
      type: 'Gff3TabixAdapter',
      gffGzLocation: {
        uri:
          GetStaticFile+"/data/Zea_mays/gff3/snRNA.gff3.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/Zea_mays/gff3/snRNA.gff3.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
    renderer: {
      type: 'SvgFeatureRenderer',
    },
  },
  {
    type: 'BasicTrack',
    trackId:
      'snoRNA',
    name: 'snoRNA',
    category: ['RNA'],
    assemblyNames: ['Zea_mays'],
    adapter: {
      type: 'Gff3TabixAdapter',
      gffGzLocation: {
        uri:
          GetStaticFile+"/data/Zea_mays/gff3/snoRNA.gff3.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/Zea_mays/gff3/snoRNA.gff3.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
    renderer: {
      type: 'SvgFeatureRenderer',
    },
  },
  {
    type: 'BasicTrack',
    trackId:
      'rRNA',
    name: 'rRNA',
    category: ['RNA'],
    assemblyNames: ['Zea_mays'],
    adapter: {
      type: 'Gff3TabixAdapter',
      gffGzLocation: {
        uri:
          GetStaticFile+"/data/Zea_mays/gff3/rRNA.gff3.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/Zea_mays/gff3/rRNA.gff3.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
    renderer: {
      type: 'SvgFeatureRenderer',
    },
  },
  {
    type: 'BasicTrack',
    trackId:
      'pre_miRNA',
    name: 'pre_miRNA',
    category: ['RNA'],
    assemblyNames: ['Zea_mays'],
    adapter: {
      type: 'Gff3TabixAdapter',
      gffGzLocation: {
        uri:
          GetStaticFile+"/data/Zea_mays/gff3/pre_miRNA.gff3.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/Zea_mays/gff3/pre_miRNA.gff3.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
    renderer: {
      type: 'SvgFeatureRenderer',
    },
  }, 
  {
    type: 'BasicTrack',
    trackId:
      'miRNA',
    name: 'miRNA',
    category: ['RNA'],
    assemblyNames: ['Zea_mays'],
    adapter: {
      type: 'Gff3TabixAdapter',
      gffGzLocation: {
        uri:
          GetStaticFile+"/data/Zea_mays/gff3/miRNA.gff3.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/Zea_mays/gff3/miRNA.gff3.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
    renderer: {
      type: 'SvgFeatureRenderer',
    },
  }, 
  {
    type: 'BasicTrack',
    trackId:
      'ncRNA',
    name: 'ncRNA',
    category: ['RNA'],
    assemblyNames: ['Zea_mays'],
    adapter: {
      type: 'Gff3TabixAdapter',
      gffGzLocation: {
        uri:
          GetStaticFile+"/data/Zea_mays/gff3/ncRNA.gff3.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/Zea_mays/gff3/ncRNA.gff3.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
    renderer: {
      type: 'SvgFeatureRenderer',
    },
  }, 
  {
    type: 'BasicTrack',
    trackId:
      'SRP_RNA',
    name: 'SRP_RNA',
    category: ['RNA'],
    assemblyNames: ['Zea_mays'],
    adapter: {
      type: 'Gff3TabixAdapter',
      gffGzLocation: {
        uri:
          GetStaticFile+"/data/Zea_mays/gff3/SRP_RNA.gff3.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/Zea_mays/gff3/SRP_RNA.gff3.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
    renderer: {
      type: 'SvgFeatureRenderer',
    },
  }, 
  {
    type: 'BasicTrack',
    trackId:
      'RNase_MRP_RNA',
    name: 'RNase_MRP_RNA',
    category: ['RNA'],
    assemblyNames: ['Zea_mays'],
    adapter: {
      type: 'Gff3TabixAdapter',
      gffGzLocation: {
        uri:
          GetStaticFile+"/data/Zea_mays/gff3/RNase_MRP_RNA.gff3.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/Zea_mays/gff3/RNase_MRP_RNA.gff3.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
    renderer: {
      type: 'SvgFeatureRenderer',
    },
  }, 
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_227_Combining_ATAC-seq_with_nuclei_sorting_for_discovery_of_cis-regulatory_regions_in_plant_genomes',
    name: 'Sample_00_227_Combining_ATAC-seq_with_nuclei_sorting_for_discovery_of_cis-regulatory_regions_in_plant_genomes',
    category: ['samples'],
    assemblyNames: ['Zea_mays'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_227_Combining_ATAC-seq_with_nuclei_sorting_for_discovery_of_cis-regulatory_regions_in_plant_genomes.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_227_Combining_ATAC-seq_with_nuclei_sorting_for_discovery_of_cis-regulatory_regions_in_plant_genomes.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_228_R1-1_0_hour',
    name: 'Sample_00_228_R1-1_0_hour',
    category: ['samples'],
    assemblyNames: ['Zea_mays'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_228_R1-1_0_hour.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_228_R1-1_0_hour.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_229_R1-2_0_hour',
    name: 'Sample_00_229_R1-2_0_hour',
    category: ['samples'],
    assemblyNames: ['Zea_mays'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_229_R1-2_0_hour.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_229_R1-2_0_hour.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_230_R1-3_0_hour',
    name: 'Sample_00_230_R1-3_0_hour',
    category: ['samples'],
    assemblyNames: ['Zea_mays'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_230_R1-3_0_hour.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_230_R1-3_0_hour.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_231_R2-1_6_hours',
    name: 'Sample_00_231_R2-1_6_hours',
    category: ['samples'],
    assemblyNames: ['Zea_mays'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_231_R2-1_6_hours.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_231_R2-1_6_hours.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_232_R2-2_6_hours',
    name: 'Sample_00_232_R2-2_6_hours',
    category: ['samples'],
    assemblyNames: ['Zea_mays'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_232_R2-2_6_hours.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_232_R2-2_6_hours.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_233_R2-3_6_hours',
    name: 'Sample_00_233_R2-3_6_hours',
    category: ['samples'],
    assemblyNames: ['Zea_mays'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_233_R2-3_6_hours.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_233_R2-3_6_hours.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_234_R3-1_12_hours',
    name: 'Sample_00_234_R3-1_12_hours',
    category: ['samples'],
    assemblyNames: ['Zea_mays'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_234_R3-1_12_hours.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_234_R3-1_12_hours.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_235_R3-2_12_hours',
    name: 'Sample_00_235_R3-2_12_hours',
    category: ['samples'],
    assemblyNames: ['Zea_mays'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_235_R3-2_12_hours.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_235_R3-2_12_hours.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_236_R3-3_12_hours',
    name: 'Sample_00_236_R3-3_12_hours',
    category: ['samples'],
    assemblyNames: ['Zea_mays'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_236_R3-3_12_hours.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_236_R3-3_12_hours.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_237_ATAC-seq_maize_B73Leaf_rep1',
    name: 'Sample_00_237_ATAC-seq_maize_B73Leaf_rep1',
    category: ['samples'],
    assemblyNames: ['Zea_mays'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_237_ATAC-seq_maize_B73Leaf_rep1.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_237_ATAC-seq_maize_B73Leaf_rep1.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_238_ATAC-seq_maize_B73Ear_rep1',
    name: 'Sample_00_238_ATAC-seq_maize_B73Ear_rep1',
    category: ['samples'],
    assemblyNames: ['Zea_mays'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_238_ATAC-seq_maize_B73Ear_rep1.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_238_ATAC-seq_maize_B73Ear_rep1.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_239_ATAC-seq_maize_B73input_rep1',
    name: 'Sample_00_239_ATAC-seq_maize_B73input_rep1',
    category: ['samples'],
    assemblyNames: ['Zea_mays'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_239_ATAC-seq_maize_B73input_rep1.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_239_ATAC-seq_maize_B73input_rep1.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_240_ATAC-seq_maize_B73input_rep2',
    name: 'Sample_00_240_ATAC-seq_maize_B73input_rep2',
    category: ['samples'],
    assemblyNames: ['Zea_mays'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_240_ATAC-seq_maize_B73input_rep2.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_240_ATAC-seq_maize_B73input_rep2.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_241_YJATAC0432_2500_nuclei',
    name: 'Sample_00_241_YJATAC0432_2500_nuclei',
    category: ['samples'],
    assemblyNames: ['Zea_mays'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_241_YJATAC0432_2500_nuclei.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_241_YJATAC0432_2500_nuclei.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_242_YJATAC0433_5000_nuclei',
    name: 'Sample_00_242_YJATAC0433_5000_nuclei',
    category: ['samples'],
    assemblyNames: ['Zea_mays'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_242_YJATAC0433_5000_nuclei.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_242_YJATAC0433_5000_nuclei.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_243_YJATAC0453_gDNA',
    name: 'Sample_00_243_YJATAC0453_gDNA',
    category: ['samples'],
    assemblyNames: ['Zea_mays'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_243_YJATAC0453_gDNA.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_243_YJATAC0453_gDNA.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_244_ATAC_Maize_7days_leaf_rep1',
    name: 'Sample_00_244_ATAC_Maize_7days_leaf_rep1',
    category: ['samples'],
    assemblyNames: ['Zea_mays'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_244_ATAC_Maize_7days_leaf_rep1.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_244_ATAC_Maize_7days_leaf_rep1.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_245_ATAC_Maize_7days_leaf_rep2',
    name: 'Sample_00_245_ATAC_Maize_7days_leaf_rep2',
    category: ['samples'],
    assemblyNames: ['Zea_mays'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_245_ATAC_Maize_7days_leaf_rep2.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_245_ATAC_Maize_7days_leaf_rep2.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_246_ATAC_Maize_7days_leaf_Input1',
    name: 'Sample_00_246_ATAC_Maize_7days_leaf_Input1',
    category: ['samples'],
    assemblyNames: ['Zea_mays'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_246_ATAC_Maize_7days_leaf_Input1.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_246_ATAC_Maize_7days_leaf_Input1.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_247_ATAC_Maize_7days_leaf_Input2',
    name: 'Sample_00_247_ATAC_Maize_7days_leaf_Input2',
    category: ['samples'],
    assemblyNames: ['Zea_mays'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_247_ATAC_Maize_7days_leaf_Input2.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_247_ATAC_Maize_7days_leaf_Input2.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_248_Maize_B73_ATAC_root_rep1',
    name: 'Sample_00_248_Maize_B73_ATAC_root_rep1',
    category: ['samples'],
    assemblyNames: ['Zea_mays'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_248_Maize_B73_ATAC_root_rep1.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_248_Maize_B73_ATAC_root_rep1.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_249_Maize_B73_ATAC_root_rep2',
    name: 'Sample_00_249_Maize_B73_ATAC_root_rep2',
    category: ['samples'],
    assemblyNames: ['Zea_mays'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_249_Maize_B73_ATAC_root_rep2.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_249_Maize_B73_ATAC_root_rep2.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_284_leaf_mesophyll',
    name: 'Sample_00_284_leaf_mesophyll',
    category: ['samples'],
    assemblyNames: ['Zea_mays'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_284_leaf_mesophyll.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_284_leaf_mesophyll.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_285_leaf_mesophyll',
    name: 'Sample_00_285_leaf_mesophyll',
    category: ['samples'],
    assemblyNames: ['Zea_mays'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_285_leaf_mesophyll.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_285_leaf_mesophyll.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_286_B73_leaf_nuclei_gDNA_tagged_by_Tn5_as_ChIP-seq_and_ATAC-seq_input',
    name: 'Sample_00_286_B73_leaf_nuclei_gDNA_tagged_by_Tn5_as_ChIP-seq_and_ATAC-seq_input',
    category: ['samples'],
    assemblyNames: ['Zea_mays'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_286_B73_leaf_nuclei_gDNA_tagged_by_Tn5_as_ChIP-seq_and_ATAC-seq_input.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_286_B73_leaf_nuclei_gDNA_tagged_by_Tn5_as_ChIP-seq_and_ATAC-seq_input.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_287_B73_leaf_nuclei_gDNA_tagged_by_Tn5_as_ChIP-seq_and_ATAC-seq_input',
    name: 'Sample_00_287_B73_leaf_nuclei_gDNA_tagged_by_Tn5_as_ChIP-seq_and_ATAC-seq_input',
    category: ['samples'],
    assemblyNames: ['Zea_mays'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_287_B73_leaf_nuclei_gDNA_tagged_by_Tn5_as_ChIP-seq_and_ATAC-seq_input.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_287_B73_leaf_nuclei_gDNA_tagged_by_Tn5_as_ChIP-seq_and_ATAC-seq_input.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_288_B73_Leaf_ATAC-seq_rep_2',
    name: 'Sample_00_288_B73_Leaf_ATAC-seq_rep_2',
    category: ['samples'],
    assemblyNames: ['Zea_mays'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_288_B73_Leaf_ATAC-seq_rep_2.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_288_B73_Leaf_ATAC-seq_rep_2.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_289_B73_Leaf_ATAC-seq_rep_1',
    name: 'Sample_00_289_B73_Leaf_ATAC-seq_rep_1',
    category: ['samples'],
    assemblyNames: ['Zea_mays'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_289_B73_Leaf_ATAC-seq_rep_1.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_289_B73_Leaf_ATAC-seq_rep_1.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_290_ATAC-seq_maize_A63_v04_leaf',
    name: 'Sample_00_290_ATAC-seq_maize_A63_v04_leaf',
    category: ['samples'],
    assemblyNames: ['Zea_mays'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_290_ATAC-seq_maize_A63_v04_leaf.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_290_ATAC-seq_maize_A63_v04_leaf.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_291_ATAC-seq_maize_A63_v04_leaf',
    name: 'Sample_00_291_ATAC-seq_maize_A63_v04_leaf',
    category: ['samples'],
    assemblyNames: ['Zea_mays'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_291_ATAC-seq_maize_A63_v04_leaf.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_291_ATAC-seq_maize_A63_v04_leaf.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_292_ATAC-seq_maize_A63_v04_leaf',
    name: 'Sample_00_292_ATAC-seq_maize_A63_v04_leaf',
    category: ['samples'],
    assemblyNames: ['Zea_mays'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_292_ATAC-seq_maize_A63_v04_leaf.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_292_ATAC-seq_maize_A63_v04_leaf.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_293_B73_tassel_rep2',
    name: 'Sample_00_293_B73_tassel_rep2',
    category: ['samples'],
    assemblyNames: ['Zea_mays'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_293_B73_tassel_rep2.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_293_B73_tassel_rep2.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_294_B73_tassel_rep1',
    name: 'Sample_00_294_B73_tassel_rep1',
    category: ['samples'],
    assemblyNames: ['Zea_mays'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_294_B73_tassel_rep1.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_294_B73_tassel_rep1.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_295_B73_ear_rep2',
    name: 'Sample_00_295_B73_ear_rep2',
    category: ['samples'],
    assemblyNames: ['Zea_mays'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_295_B73_ear_rep2.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_295_B73_ear_rep2.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_296_B73_ear_rep1',
    name: 'Sample_00_296_B73_ear_rep1',
    category: ['samples'],
    assemblyNames: ['Zea_mays'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_296_B73_ear_rep1.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_296_B73_ear_rep1.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_378_Zm_BS_rep_1',
    name: 'Sample_01_378_Zm_BS_rep_1',
    category: ['samples'],
    assemblyNames: ['Zea_mays'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_378_Zm_BS_rep_1.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_378_Zm_BS_rep_1.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_379_Zm_BS_rep_2',
    name: 'Sample_01_379_Zm_BS_rep_2',
    category: ['samples'],
    assemblyNames: ['Zea_mays'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_379_Zm_BS_rep_2.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_379_Zm_BS_rep_2.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_380_Zm_WL_rep_1',
    name: 'Sample_01_380_Zm_WL_rep_1',
    category: ['samples'],
    assemblyNames: ['Zea_mays'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_380_Zm_WL_rep_1.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_380_Zm_WL_rep_1.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_381_Zm_WL_rep_2',
    name: 'Sample_01_381_Zm_WL_rep_2',
    category: ['samples'],
    assemblyNames: ['Zea_mays'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_381_Zm_WL_rep_2.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_381_Zm_WL_rep_2.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_382_Zm_nkd',
    name: 'Sample_01_382_Zm_nkd',
    category: ['samples'],
    assemblyNames: ['Zea_mays'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_382_Zm_nkd.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_382_Zm_nkd.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_383_IST_rep1',
    name: 'Sample_01_383_IST_rep1',
    category: ['samples'],
    assemblyNames: ['Zea_mays'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_383_IST_rep1.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_383_IST_rep1.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_384_IST_rep2',
    name: 'Sample_01_384_IST_rep2',
    category: ['samples'],
    assemblyNames: ['Zea_mays'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_384_IST_rep2.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_384_IST_rep2.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_385_Husk_rep1',
    name: 'Sample_01_385_Husk_rep1',
    category: ['samples'],
    assemblyNames: ['Zea_mays'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_385_Husk_rep1.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_385_Husk_rep1.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_386_Husk_rep2',
    name: 'Sample_01_386_Husk_rep2',
    category: ['samples'],
    assemblyNames: ['Zea_mays'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_386_Husk_rep2.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_386_Husk_rep2.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_387_Husk_rep1_technical_replicate_2',
    name: 'Sample_01_387_Husk_rep1_technical_replicate_2',
    category: ['samples'],
    assemblyNames: ['Zea_mays'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_387_Husk_rep1_technical_replicate_2.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_387_Husk_rep1_technical_replicate_2.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_388_Naked_DNA',
    name: 'Sample_01_388_Naked_DNA',
    category: ['samples'],
    assemblyNames: ['Zea_mays'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_388_Naked_DNA.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_388_Naked_DNA.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_389_maize_B73_(Zea_mays_subsp_mays)_10_day_root',
    name: 'Sample_01_389_maize_B73_(Zea_mays_subsp_mays)_10_day_root',
    category: ['samples'],
    assemblyNames: ['Zea_mays'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_389_maize_B73_(Zea_mays_subsp_mays)_10_day_root.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_389_maize_B73_(Zea_mays_subsp_mays)_10_day_root.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_390_maize_B73_(Zea_mays_subsp_mays)_10_day_leaf',
    name: 'Sample_01_390_maize_B73_(Zea_mays_subsp_mays)_10_day_leaf',
    category: ['samples'],
    assemblyNames: ['Zea_mays'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_390_maize_B73_(Zea_mays_subsp_mays)_10_day_leaf.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_390_maize_B73_(Zea_mays_subsp_mays)_10_day_leaf.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
]// JavaScript Document