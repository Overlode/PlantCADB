import {GetStaticFile} from "../api.js";

export var tracks = [
  {
    type: 'BasicTrack',
    trackId:
      'gene',
    name: 'gene',
    category: ['Genes'],
    assemblyNames: ['Prunus_persica'],
    adapter: {
      type: 'Gff3TabixAdapter',
      gffGzLocation: {
        uri:
          GetStaticFile+"/data/Prunus_persica/gff3/gene.gff3.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/Prunus_persica/gff3/gene.gff3.gz.tbi"
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
    assemblyNames: ['Prunus_persica'],
    adapter: {
      type: 'Gff3TabixAdapter',
      gffGzLocation: {
        uri:
          GetStaticFile+"/data/Prunus_persica/gff3/tRNA.gff3.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/Prunus_persica/gff3/tRNA.gff3.gz.tbi"
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
      'Sample_01_467_Peach_ripe_DNaseseq_6_SZ028_DNase_seq_paired_HiSeqXTen',
    name: 'Sample_01_467_Peach_ripe_DNaseseq_6_SZ028_DNase_seq_paired_HiSeqXTen',
    category: ['samples'],
    assemblyNames: ['Prunus_persica'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_467_Peach_ripe_DNaseseq_6_SZ028_DNase_seq_paired_HiSeqXTen.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_467_Peach_ripe_DNaseseq_6_SZ028_DNase_seq_paired_HiSeqXTen.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_468_Peach_ripe_DNaseseq_5_SZ028_DNase_seq_paired_HiSeqXTen',
    name: 'Sample_01_468_Peach_ripe_DNaseseq_5_SZ028_DNase_seq_paired_HiSeqXTen',
    category: ['samples'],
    assemblyNames: ['Prunus_persica'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_468_Peach_ripe_DNaseseq_5_SZ028_DNase_seq_paired_HiSeqXTen.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_468_Peach_ripe_DNaseseq_5_SZ028_DNase_seq_paired_HiSeqXTen.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_469_Peach_ripe_DNaseseq_4_SZ028_DNase_seq_paired_HiSeqXTen',
    name: 'Sample_01_469_Peach_ripe_DNaseseq_4_SZ028_DNase_seq_paired_HiSeqXTen',
    category: ['samples'],
    assemblyNames: ['Prunus_persica'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_469_Peach_ripe_DNaseseq_4_SZ028_DNase_seq_paired_HiSeqXTen.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_469_Peach_ripe_DNaseseq_4_SZ028_DNase_seq_paired_HiSeqXTen.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_470_Peach_ripe_DNaseseq_3_SZ028_DNase_seq_paired_HiSeqXTen',
    name: 'Sample_01_470_Peach_ripe_DNaseseq_3_SZ028_DNase_seq_paired_HiSeqXTen',
    category: ['samples'],
    assemblyNames: ['Prunus_persica'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_470_Peach_ripe_DNaseseq_3_SZ028_DNase_seq_paired_HiSeqXTen.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_470_Peach_ripe_DNaseseq_3_SZ028_DNase_seq_paired_HiSeqXTen.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_471_Peach_ripe_DNaseseq_2_SZ028_DNase_seq_paired_HiSeqXTen',
    name: 'Sample_01_471_Peach_ripe_DNaseseq_2_SZ028_DNase_seq_paired_HiSeqXTen',
    category: ['samples'],
    assemblyNames: ['Prunus_persica'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_471_Peach_ripe_DNaseseq_2_SZ028_DNase_seq_paired_HiSeqXTen.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_471_Peach_ripe_DNaseseq_2_SZ028_DNase_seq_paired_HiSeqXTen.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_472_Peach_ripe_DNaseseq_1_SZ028_DNase_seq_paired_HiSeqXTen',
    name: 'Sample_01_472_Peach_ripe_DNaseseq_1_SZ028_DNase_seq_paired_HiSeqXTen',
    category: ['samples'],
    assemblyNames: ['Prunus_persica'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_472_Peach_ripe_DNaseseq_1_SZ028_DNase_seq_paired_HiSeqXTen.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_472_Peach_ripe_DNaseseq_1_SZ028_DNase_seq_paired_HiSeqXTen.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_473_Peach_leaf_DNaseseq_3_SZ028_DNase_seq_paired_HiSeqXTen',
    name: 'Sample_01_473_Peach_leaf_DNaseseq_3_SZ028_DNase_seq_paired_HiSeqXTen',
    category: ['samples'],
    assemblyNames: ['Prunus_persica'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_473_Peach_leaf_DNaseseq_3_SZ028_DNase_seq_paired_HiSeqXTen.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_473_Peach_leaf_DNaseseq_3_SZ028_DNase_seq_paired_HiSeqXTen.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_474_Peach_leaf_DNaseseq_2_SZ021_DNase_seq_paired_HiSeqXTen',
    name: 'Sample_01_474_Peach_leaf_DNaseseq_2_SZ021_DNase_seq_paired_HiSeqXTen',
    category: ['samples'],
    assemblyNames: ['Prunus_persica'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_474_Peach_leaf_DNaseseq_2_SZ021_DNase_seq_paired_HiSeqXTen.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_474_Peach_leaf_DNaseseq_2_SZ021_DNase_seq_paired_HiSeqXTen.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_475_Peach_leaf_DNaseseq_1_SZ021_DNase_seq_paired_HiSeqXTen',
    name: 'Sample_01_475_Peach_leaf_DNaseseq_1_SZ021_DNase_seq_paired_HiSeqXTen',
    category: ['samples'],
    assemblyNames: ['Prunus_persica'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_475_Peach_leaf_DNaseseq_1_SZ021_DNase_seq_paired_HiSeqXTen.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_475_Peach_leaf_DNaseseq_1_SZ021_DNase_seq_paired_HiSeqXTen.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_476_Peach_leaf_DNaseseq_7_PH025_DNase_seq_paired_HiSeqXTen',
    name: 'Sample_01_476_Peach_leaf_DNaseseq_7_PH025_DNase_seq_paired_HiSeqXTen',
    category: ['samples'],
    assemblyNames: ['Prunus_persica'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_476_Peach_leaf_DNaseseq_7_PH025_DNase_seq_paired_HiSeqXTen.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_476_Peach_leaf_DNaseseq_7_PH025_DNase_seq_paired_HiSeqXTen.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_477_Peach_leaf_DNaseseq_6_PH025_DNase_seq_paired_HiSeqXTen',
    name: 'Sample_01_477_Peach_leaf_DNaseseq_6_PH025_DNase_seq_paired_HiSeqXTen',
    category: ['samples'],
    assemblyNames: ['Prunus_persica'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_477_Peach_leaf_DNaseseq_6_PH025_DNase_seq_paired_HiSeqXTen.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_477_Peach_leaf_DNaseseq_6_PH025_DNase_seq_paired_HiSeqXTen.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_478_Peach_leaf_DNaseseq_5_SZ047_DNase_seq_paired_HiSeqXTen',
    name: 'Sample_01_478_Peach_leaf_DNaseseq_5_SZ047_DNase_seq_paired_HiSeqXTen',
    category: ['samples'],
    assemblyNames: ['Prunus_persica'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_478_Peach_leaf_DNaseseq_5_SZ047_DNase_seq_paired_HiSeqXTen.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_478_Peach_leaf_DNaseseq_5_SZ047_DNase_seq_paired_HiSeqXTen.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_479_Peach_leaf_DNaseseq_4_SZ047_DNase_seq_paired_HiSeqXTen',
    name: 'Sample_01_479_Peach_leaf_DNaseseq_4_SZ047_DNase_seq_paired_HiSeqXTen',
    category: ['samples'],
    assemblyNames: ['Prunus_persica'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_479_Peach_leaf_DNaseseq_4_SZ047_DNase_seq_paired_HiSeqXTen.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_479_Peach_leaf_DNaseseq_4_SZ047_DNase_seq_paired_HiSeqXTen.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_480_Peach_immature_DNaseseq_2_SZ021_DNase_seq_paired_HiSeqXTen',
    name: 'Sample_01_480_Peach_immature_DNaseseq_2_SZ021_DNase_seq_paired_HiSeqXTen',
    category: ['samples'],
    assemblyNames: ['Prunus_persica'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_480_Peach_immature_DNaseseq_2_SZ021_DNase_seq_paired_HiSeqXTen.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_480_Peach_immature_DNaseseq_2_SZ021_DNase_seq_paired_HiSeqXTen.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_481_Peach_immature_DNaseseq_1_SZ021_DNase_seq_paired_HiSeqXTen',
    name: 'Sample_01_481_Peach_immature_DNaseseq_1_SZ021_DNase_seq_paired_HiSeqXTen',
    category: ['samples'],
    assemblyNames: ['Prunus_persica'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_481_Peach_immature_DNaseseq_1_SZ021_DNase_seq_paired_HiSeqXTen.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_481_Peach_immature_DNaseseq_1_SZ021_DNase_seq_paired_HiSeqXTen.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_482_Peach_NJC83_immature_DNaseseq_3_PH067_DNase_seq_paired_HiSeqXTen',
    name: 'Sample_01_482_Peach_NJC83_immature_DNaseseq_3_PH067_DNase_seq_paired_HiSeqXTen',
    category: ['samples'],
    assemblyNames: ['Prunus_persica'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_482_Peach_NJC83_immature_DNaseseq_3_PH067_DNase_seq_paired_HiSeqXTen.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_482_Peach_NJC83_immature_DNaseseq_3_PH067_DNase_seq_paired_HiSeqXTen.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_483_Peach_NJC83_immature_DNaseseq_2_PH067_DNase_seq_paired_HiSeqXTen',
    name: 'Sample_01_483_Peach_NJC83_immature_DNaseseq_2_PH067_DNase_seq_paired_HiSeqXTen',
    category: ['samples'],
    assemblyNames: ['Prunus_persica'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_483_Peach_NJC83_immature_DNaseseq_2_PH067_DNase_seq_paired_HiSeqXTen.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_483_Peach_NJC83_immature_DNaseseq_2_PH067_DNase_seq_paired_HiSeqXTen.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_484_Peach_NJC83_immature_DNaseseq_1_PH067_DNase_seq_paired_HiSeqXTen',
    name: 'Sample_01_484_Peach_NJC83_immature_DNaseseq_1_PH067_DNase_seq_paired_HiSeqXTen',
    category: ['samples'],
    assemblyNames: ['Prunus_persica'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_484_Peach_NJC83_immature_DNaseseq_1_PH067_DNase_seq_paired_HiSeqXTen.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_484_Peach_NJC83_immature_DNaseseq_1_PH067_DNase_seq_paired_HiSeqXTen.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_485_Peach_Youtao_immature_DNaseseq_3_PH067_DNase_seq_paired_HiSeqXTen',
    name: 'Sample_01_485_Peach_Youtao_immature_DNaseseq_3_PH067_DNase_seq_paired_HiSeqXTen',
    category: ['samples'],
    assemblyNames: ['Prunus_persica'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_485_Peach_Youtao_immature_DNaseseq_3_PH067_DNase_seq_paired_HiSeqXTen.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_485_Peach_Youtao_immature_DNaseseq_3_PH067_DNase_seq_paired_HiSeqXTen.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_486_Peach_Youtao_immature_DNaseseq_2_PH067_DNase_seq_paired_HiSeqXTen',
    name: 'Sample_01_486_Peach_Youtao_immature_DNaseseq_2_PH067_DNase_seq_paired_HiSeqXTen',
    category: ['samples'],
    assemblyNames: ['Prunus_persica'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_486_Peach_Youtao_immature_DNaseseq_2_PH067_DNase_seq_paired_HiSeqXTen.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_486_Peach_Youtao_immature_DNaseseq_2_PH067_DNase_seq_paired_HiSeqXTen.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_487_Peach_Youtao_immature_DNaseseq_1_PH067_DNase_seq_paired_HiSeqXTen',
    name: 'Sample_01_487_Peach_Youtao_immature_DNaseseq_1_PH067_DNase_seq_paired_HiSeqXTen',
    category: ['samples'],
    assemblyNames: ['Prunus_persica'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_487_Peach_Youtao_immature_DNaseseq_1_PH067_DNase_seq_paired_HiSeqXTen.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_487_Peach_Youtao_immature_DNaseseq_1_PH067_DNase_seq_paired_HiSeqXTen.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
]// JavaScript Document