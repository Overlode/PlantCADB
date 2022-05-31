import {GetStaticFile} from "../api.js";

export var tracks = [
  {
    type: 'BasicTrack',
    trackId:
      'gene',
    name: 'gene',
    category: ['Genes'],
    assemblyNames: ['Brachypodium_distachyon'],
    adapter: {
      type: 'Gff3TabixAdapter',
      gffGzLocation: {
        uri:
          GetStaticFile+"/data/Brachypodium_distachyon/gff3/gene.gff3.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/Arabidopsis_thaliana/gff3/gene.gff3.gz.tbi"
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
      'biological_region',
    name: 'biological_regionA',
    category: ['biological_region'],
    assemblyNames: ['Brachypodium_distachyon'],
    adapter: {
      type: 'Gff3TabixAdapter',
      gffGzLocation: {
        uri:
          GetStaticFile+"/data/Brachypodium_distachyon/gff3/biological_region.gff3.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/Brachypodium_distachyon/gff3/biological_region.gff3.gz.tbi"
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
      'Sample_00_089_ATAC_Brachypodium_7days_leaf_rep1',
    name: 'Sample_00_089_ATAC_Brachypodium_7days_leaf_rep1',
    category: ['samples'],
    assemblyNames: ['Brachypodium_distachyon'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_089_ATAC_Brachypodium_7days_leaf_rep1.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_089_ATAC_Brachypodium_7days_leaf_rep1.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_090_ATAC_Brachypodium_7days_leaf_rep2',
    name: 'Sample_00_090_ATAC_Brachypodium_7days_leaf_rep2',
    category: ['samples'],
    assemblyNames: ['Brachypodium_distachyon'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_090_ATAC_Brachypodium_7days_leaf_rep2.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_090_ATAC_Brachypodium_7days_leaf_rep2.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_091_ATAC_Brachypodium_7days_leaf_Input',
    name: 'Sample_00_091_ATAC_Brachypodium_7days_leaf_Input',
    category: ['samples'],
    assemblyNames: ['Brachypodium_distachyon'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_091_ATAC_Brachypodium_7days_leaf_Input.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_091_ATAC_Brachypodium_7days_leaf_Input.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_363_Bd_WL_rep_1',
    name: 'Sample_01_363_Bd_WL_rep_1',
    category: ['samples'],
    assemblyNames: ['Brachypodium_distachyon'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_363_Bd_WL_rep_1.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_363_Bd_WL_rep_1.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_364_Bd_WL_rep_2',
    name: 'Sample_01_364_Bd_WL_rep_2',
    category: ['samples'],
    assemblyNames: ['Brachypodium_distachyon'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_364_Bd_WL_rep_2.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_364_Bd_WL_rep_2.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_365_Bd_nkd',
    name: 'Sample_01_365_Bd_nkd',
    category: ['samples'],
    assemblyNames: ['Brachypodium_distachyon'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_365_Bd_nkd.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_365_Bd_nkd.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
]