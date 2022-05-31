import {GetStaticFile} from "../api.js";
export var tracks = [
  {
    type: 'BasicTrack',
    trackId:
      'gene',
    name: 'gene',
    category: ['Genes'],
    assemblyNames: ['Sorghum_bicolor'],
    adapter: {
      type: 'Gff3TabixAdapter',
      gffGzLocation: {
        uri:
          GetStaticFile+"/data/Sorghum_bicolor/gff3/gene.gff3.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/Sorghum_bicolor/gff3/gene.gff3.gz.tbi"
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
    assemblyNames: ['Sorghum_bicolor'],
    adapter: {
      type: 'Gff3TabixAdapter',
      gffGzLocation: {
        uri:
          GetStaticFile+"/data/Sorghum_bicolor/gff3/lnc_RNA.gff3.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/Sorghum_bicolor/gff3/lnc_RNA.gff3.gz.tbi"
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
    assemblyNames: ['Sorghum_bicolor'],
    adapter: {
      type: 'Gff3TabixAdapter',
      gffGzLocation: {
        uri:
          GetStaticFile+"/data/Sorghum_bicolor/gff3/tRNA.gff3.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/Sorghum_bicolor/gff3/tRNA.gff3.gz.tbi"
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
    assemblyNames: ['Sorghum_bicolor'],
    adapter: {
      type: 'Gff3TabixAdapter',
      gffGzLocation: {
        uri:
          GetStaticFile+"/data/Sorghum_bicolor/gff3/snRNA.gff3.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/Sorghum_bicolor/gff3/snRNA.gff3.gz.tbi"
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
    assemblyNames: ['Sorghum_bicolor'],
    adapter: {
      type: 'Gff3TabixAdapter',
      gffGzLocation: {
        uri:
          GetStaticFile+"/data/Sorghum_bicolor/gff3/snoRNA.gff3.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/Sorghum_bicolor/gff3/snoRNA.gff3.gz.tbi"
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
    assemblyNames: ['Sorghum_bicolor'],
    adapter: {
      type: 'Gff3TabixAdapter',
      gffGzLocation: {
        uri:
          GetStaticFile+"/data/Sorghum_bicolor/gff3/rRNA.gff3.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/Sorghum_bicolor/gff3/rRNA.gff3.gz.tbi"
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
    assemblyNames: ['Sorghum_bicolor'],
    adapter: {
      type: 'Gff3TabixAdapter',
      gffGzLocation: {
        uri:
          GetStaticFile+"/data/Sorghum_bicolor/gff3/pre_miRNA.gff3.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/Sorghum_bicolor/gff3/pre_miRNA.gff3.gz.tbi"
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
    assemblyNames: ['Sorghum_bicolor'],
    adapter: {
      type: 'Gff3TabixAdapter',
      gffGzLocation: {
        uri:
          GetStaticFile+"/data/Sorghum_bicolor/gff3/ncRNA.gff3.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/Sorghum_bicolor/gff3/ncRNA.gff3.gz.tbi"
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
    assemblyNames: ['Sorghum_bicolor'],
    adapter: {
      type: 'Gff3TabixAdapter',
      gffGzLocation: {
        uri:
          GetStaticFile+"/data/Sorghum_bicolor/gff3/SRP_RNA.gff3.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/Sorghum_bicolor/gff3/SRP_RNA.gff3.gz.tbi"
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
    assemblyNames: ['Sorghum_bicolor'],
    adapter: {
      type: 'Gff3TabixAdapter',
      gffGzLocation: {
        uri:
          GetStaticFile+"/data/Sorghum_bicolor/gff3/RNase_MRP_RNA.gff3.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/Sorghum_bicolor/gff3/RNase_MRP_RNA.gff3.gz.tbi"
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
      'Sample_00_220_ATAC_Sorghum_7days_leaf_rep1',
    name: 'Sample_00_220_ATAC_Sorghum_7days_leaf_rep1',
    category: ['samples'],
    assemblyNames: ['Sorghum_bicolor'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_220_ATAC_Sorghum_7days_leaf_rep1.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_220_ATAC_Sorghum_7days_leaf_rep1.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_221_ATAC_Sorghum_7days_leaf_rep2',
    name: 'Sample_00_221_ATAC_Sorghum_7days_leaf_rep2',
    category: ['samples'],
    assemblyNames: ['Sorghum_bicolor'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_221_ATAC_Sorghum_7days_leaf_rep2.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_221_ATAC_Sorghum_7days_leaf_rep2.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_222_ATAC_Sorghum_7days_leaf_Input',
    name: 'Sample_00_222_ATAC_Sorghum_7days_leaf_Input',
    category: ['samples'],
    assemblyNames: ['Sorghum_bicolor'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_222_ATAC_Sorghum_7days_leaf_Input.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_222_ATAC_Sorghum_7days_leaf_Input.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_281_SbMC_ATAC_1_3',
    name: 'Sample_00_281_SbMC_ATAC_1_3',
    category: ['samples'],
    assemblyNames: ['Sorghum_bicolor'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_281_SbMC_ATAC_1_3.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_281_SbMC_ATAC_1_3.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_282_SbMC_ATAC_1_2',
    name: 'Sample_00_282_SbMC_ATAC_1_2',
    category: ['samples'],
    assemblyNames: ['Sorghum_bicolor'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_282_SbMC_ATAC_1_2.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_282_SbMC_ATAC_1_2.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_283_SbMC_ATAC_1_1',
    name: 'Sample_00_283_SbMC_ATAC_1_1',
    category: ['samples'],
    assemblyNames: ['Sorghum_bicolor'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_283_SbMC_ATAC_1_1.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_283_SbMC_ATAC_1_1.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_372_Sb_BS_rep_1',
    name: 'Sample_01_372_Sb_BS_rep_1',
    category: ['samples'],
    assemblyNames: ['Sorghum_bicolor'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_372_Sb_BS_rep_1.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_372_Sb_BS_rep_1.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_373_Sb_BS_rep_2',
    name: 'Sample_01_373_Sb_BS_rep_2',
    category: ['samples'],
    assemblyNames: ['Sorghum_bicolor'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_373_Sb_BS_rep_2.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_373_Sb_BS_rep_2.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_374_Sb_WL_rep_1',
    name: 'Sample_01_374_Sb_WL_rep_1',
    category: ['samples'],
    assemblyNames: ['Sorghum_bicolor'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_374_Sb_WL_rep_1.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_374_Sb_WL_rep_1.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_375_Sb_WL_rep_2',
    name: 'Sample_01_375_Sb_WL_rep_2',
    category: ['samples'],
    assemblyNames: ['Sorghum_bicolor'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_375_Sb_WL_rep_2.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_375_Sb_WL_rep_2.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_376_Sb_WL_rep_3',
    name: 'Sample_01_376_Sb_WL_rep_3',
    category: ['samples'],
    assemblyNames: ['Sorghum_bicolor'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_376_Sb_WL_rep_3.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_376_Sb_WL_rep_3.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_377_Sb_nkd',
    name: 'Sample_01_377_Sb_nkd',
    category: ['samples'],
    assemblyNames: ['Sorghum_bicolor'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_377_Sb_nkd.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_377_Sb_nkd.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
]// JavaScript Document