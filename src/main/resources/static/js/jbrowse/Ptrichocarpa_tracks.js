import {GetStaticFile} from "../api.js";

export var Ptrichocarpa_tracks = [
  {
    type: 'BasicTrack',
    trackId:
      'gene',
    name: 'gene',
    category: ['Genes'],
    assemblyNames: ['Ptrichocarpa'],
    adapter: {
      type: 'Gff3TabixAdapter',
      gffGzLocation: {
        uri:
          GetStaticFile+"/data/Ptrichocarpa/newgene.gff.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/Ptrichocarpa/newgene.gff.gz.tbi"
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
      'mRNA',
    name: 'mRNA',
    category: ['Genes'],
    assemblyNames: ['Ptrichocarpa'],
    adapter: {
      type: 'Gff3TabixAdapter',
      gffGzLocation: {
        uri:
          GetStaticFile+"/data/Ptrichocarpa/newmRNA.gff.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/Ptrichocarpa/newmRNA.gff.gz.tbi"
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
      'CDS',
    name: 'CDS',
    category: ['Genes'],
    assemblyNames: ['Ptrichocarpa'],
    adapter: {
      type: 'Gff3TabixAdapter',
      gffGzLocation: {
        uri:
          GetStaticFile+"/data/Ptrichocarpa/newCDS.gff.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/Ptrichocarpa/newCDS.gff.gz.tbi"
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
      'UTR',
    name: 'UTR',
    category: ['Genes'],
    assemblyNames: ['Ptrichocarpa'],
    adapter: {
      type: 'Gff3TabixAdapter',
      gffGzLocation: {
        uri:
          GetStaticFile+"/data/Ptrichocarpa/newUTR.gff.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/Ptrichocarpa/newUTR.gff.gz.tbi"
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
      'Sample_00_175_ATAC_Populus_leaf_rep1',
    name: 'Sample_00_175_ATAC_Populus_leaf_rep1',
    category: ['samples'],
    assemblyNames: ['Ptrichocarpa'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_175_ATAC_Populus_leaf_rep1.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_175_ATAC_Populus_leaf_rep1.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_176_ATAC_Populus_leaf_rep2',
    name: 'Sample_00_176_ATAC_Populus_leaf_rep2',
    category: ['samples'],
    assemblyNames: ['Ptrichocarpa'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_176_ATAC_Populus_leaf_rep2.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_176_ATAC_Populus_leaf_rep2.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_177_ATAC_Populus_leaf_Input',
    name: 'Sample_00_177_ATAC_Populus_leaf_Input',
    category: ['samples'],
    assemblyNames: ['Ptrichocarpa'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_177_ATAC_Populus_leaf_Input.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_177_ATAC_Populus_leaf_Input.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_178_13_1_ATAC',
    name: 'Sample_00_178_13_1_ATAC',
    category: ['samples'],
    assemblyNames: ['Ptrichocarpa'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_178_13_1_ATAC.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_178_13_1_ATAC.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_179_13_2_ATAC',
    name: 'Sample_00_179_13_2_ATAC',
    category: ['samples'],
    assemblyNames: ['Ptrichocarpa'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_179_13_2_ATAC.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_179_13_2_ATAC.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_180_13_3_ATAC',
    name: 'Sample_00_180_13_3_ATAC',
    category: ['samples'],
    assemblyNames: ['Ptrichocarpa'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_180_13_3_ATAC.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_180_13_3_ATAC.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_181_13_4_ATAC',
    name: 'Sample_00_181_13_4_ATAC',
    category: ['samples'],
    assemblyNames: ['Ptrichocarpa'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_181_13_4_ATAC.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_181_13_4_ATAC.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_182_13_5_ATAC',
    name: 'Sample_00_182_13_5_ATAC',
    category: ['samples'],
    assemblyNames: ['Ptrichocarpa'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_182_13_5_ATAC.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_182_13_5_ATAC.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_183_14_1_ATAC',
    name: 'Sample_00_183_14_1_ATAC',
    category: ['samples'],
    assemblyNames: ['Ptrichocarpa'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_183_14_1_ATAC.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_183_14_1_ATAC.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_184_14_2_ATAC',
    name: 'Sample_00_184_14_2_ATAC',
    category: ['samples'],
    assemblyNames: ['Ptrichocarpa'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_184_14_2_ATAC.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_184_14_2_ATAC.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_185_14_3_ATAC',
    name: 'Sample_00_185_14_3_ATAC',
    category: ['samples'],
    assemblyNames: ['Ptrichocarpa'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_185_14_3_ATAC.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_185_14_3_ATAC.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_186_14_4_ATAC',
    name: 'Sample_00_186_14_4_ATAC',
    category: ['samples'],
    assemblyNames: ['Ptrichocarpa'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_186_14_4_ATAC.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_186_14_4_ATAC.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_187_14_5_ATAC',
    name: 'Sample_00_187_14_5_ATAC',
    category: ['samples'],
    assemblyNames: ['Ptrichocarpa'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_187_14_5_ATAC.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_187_14_5_ATAC.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_188_1_1_ATAC',
    name: 'Sample_00_188_1_1_ATAC',
    category: ['samples'],
    assemblyNames: ['Ptrichocarpa'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_188_1_1_ATAC.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_188_1_1_ATAC.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_189_4_2_ATAC',
    name: 'Sample_00_189_4_2_ATAC',
    category: ['samples'],
    assemblyNames: ['Ptrichocarpa'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_189_4_2_ATAC.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_189_4_2_ATAC.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_190_4_3_ATAC',
    name: 'Sample_00_190_4_3_ATAC',
    category: ['samples'],
    assemblyNames: ['Ptrichocarpa'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_190_4_3_ATAC.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_190_4_3_ATAC.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_191_4_4_ATAC',
    name: 'Sample_00_191_4_4_ATAC',
    category: ['samples'],
    assemblyNames: ['Ptrichocarpa'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_191_4_4_ATAC.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_191_4_4_ATAC.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_192_4_5_ATAC',
    name: 'Sample_00_192_4_5_ATAC',
    category: ['samples'],
    assemblyNames: ['Ptrichocarpa'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_192_4_5_ATAC.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_192_4_5_ATAC.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
]
