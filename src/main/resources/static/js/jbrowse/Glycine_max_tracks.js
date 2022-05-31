import {GetStaticFile} from "../api.js";
export var tracks = [
  {
    type: 'BasicTrack',
    trackId:
      'gene',
    name: 'gene',
    category: ['Genes'],
    assemblyNames: ['Glycine_max'],
    adapter: {
      type: 'Gff3TabixAdapter',
      gffGzLocation: {
        uri:
          GetStaticFile+"/data/Glycine_max/gff3/gene.gff3.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/Glycine_max/gff3/gene.gff3.gz.tbi"
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
    assemblyNames: ['Glycine_max'],
    adapter: {
      type: 'Gff3TabixAdapter',
      gffGzLocation: {
        uri:
          GetStaticFile+"/data/Glycine_max/gff3/tRNA.gff3.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/Glycine_max/gff3/tRNA.gff3.gz.tbi"
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
      'Sample_00_095_ATAC_Soybean_10days_leaf_rep1',
    name: 'Sample_00_095_ATAC_Soybean_10days_leaf_rep1',
    category: ['samples'],
    assemblyNames: ['Glycine_max'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_095_ATAC_Soybean_10days_leaf_rep1.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_095_ATAC_Soybean_10days_leaf_rep1.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_096_ATAC_Soybean_10days_leaf_rep2',
    name: 'Sample_00_096_ATAC_Soybean_10days_leaf_rep2',
    category: ['samples'],
    assemblyNames: ['Glycine_max'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_096_ATAC_Soybean_10days_leaf_rep2.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_096_ATAC_Soybean_10days_leaf_rep2.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_097_ATAC_Soybean_10days_leaf_Input',
    name: 'Sample_00_097_ATAC_Soybean_10days_leaf_Input',
    category: ['samples'],
    assemblyNames: ['Glycine_max'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_097_ATAC_Soybean_10days_leaf_Input.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_097_ATAC_Soybean_10days_leaf_Input.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_098_early-maturation_embryo_replicate_1_single-end_(Run_1)',
    name: 'Sample_00_098_early-maturation_embryo_replicate_1_single-end_(Run_1)',
    category: ['samples'],
    assemblyNames: ['Glycine_max'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_098_early-maturation_embryo_replicate_1_single-end_(Run_1).bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_098_early-maturation_embryo_replicate_1_single-end_(Run_1).bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_099_early-maturation_embryo_replicate_1_paired-end_(Run_2)',
    name: 'Sample_00_099_early-maturation_embryo_replicate_1_paired-end_(Run_2)',
    category: ['samples'],
    assemblyNames: ['Glycine_max'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_099_early-maturation_embryo_replicate_1_paired-end_(Run_2).bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_099_early-maturation_embryo_replicate_1_paired-end_(Run_2).bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_100_early-maturation_embryo_replicate_2_single-end_(Run_1)',
    name: 'Sample_00_100_early-maturation_embryo_replicate_2_single-end_(Run_1)',
    category: ['samples'],
    assemblyNames: ['Glycine_max'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_100_early-maturation_embryo_replicate_2_single-end_(Run_1).bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_100_early-maturation_embryo_replicate_2_single-end_(Run_1).bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_101_early-maturation_embryo_replicate_2_paired-end_(Run_2)',
    name: 'Sample_00_101_early-maturation_embryo_replicate_2_paired-end_(Run_2)',
    category: ['samples'],
    assemblyNames: ['Glycine_max'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_101_early-maturation_embryo_replicate_2_paired-end_(Run_2).bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_101_early-maturation_embryo_replicate_2_paired-end_(Run_2).bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
]// JavaScript Document