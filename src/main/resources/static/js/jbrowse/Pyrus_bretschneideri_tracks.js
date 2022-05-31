import {GetStaticFile} from "../api.js";
export var tracks = [
  {
    type: 'BasicTrack',
    trackId:
      'gene',
    name: 'gene',
    category: ['Genes'],
    assemblyNames: ['Pyrus_bretschneideri'],
    adapter: {
      type: 'Gff3TabixAdapter',
      gffGzLocation: {
        uri:
          GetStaticFile+"/data/Pyrus_bretschneideri/gff3/gene.gff3.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/Pyrus_bretschneideri/gff3/gene.gff3.gz.tbi"
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
    assemblyNames: ['Pyrus_bretschneideri'],
    adapter: {
      type: 'Gff3TabixAdapter',
      gffGzLocation: {
        uri:
          GetStaticFile+"/data/Pyrus_bretschneideri/gff3/lnc_RNA.gff3.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/Pyrus_bretschneideri/gff3/lnc_RNA.gff3.gz.tbi"
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
      'pseudogene',
    name: 'pseudogene',
    category: ['RNA'],
    assemblyNames: ['Pyrus_bretschneideri'],
    adapter: {
      type: 'Gff3TabixAdapter',
      gffGzLocation: {
        uri:
          GetStaticFile+"/data/Pyrus_bretschneideri/gff3/pseudogene.gff3.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/Pyrus_bretschneideri/gff3/pseudogene.gff3.gz.tbi"
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
    assemblyNames: ['Pyrus_bretschneideri'],
    adapter: {
      type: 'Gff3TabixAdapter',
      gffGzLocation: {
        uri:
          GetStaticFile+"/data/Pyrus_bretschneideri/gff3/tRNA.gff3.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/Pyrus_bretschneideri/gff3/tRNA.gff3.gz.tbi"
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
      'cDNA_match',
    name: 'cDNA_match',
    category: ['RNA'],
    assemblyNames: ['Pyrus_bretschneideri'],
    adapter: {
      type: 'Gff3TabixAdapter',
      gffGzLocation: {
        uri:
          GetStaticFile+"/data/Pyrus_bretschneideri/gff3/cDNA_match.gff3.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/Pyrus_bretschneideri/gff3/cDNA_match.gff3.gz.tbi"
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
      'Sample_01_488_Pear_W_fruit_DNaseseq_2_PH027_DNase_seq_paired_HiSeqXTen',
    name: 'Sample_01_488_Pear_W_fruit_DNaseseq_2_PH027_DNase_seq_paired_HiSeqXTen',
    category: ['samples'],
    assemblyNames: ['Pyrus_bretschneideri'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_488_Pear_W_fruit_DNaseseq_2_PH027_DNase_seq_paired_HiSeqXTen.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_488_Pear_W_fruit_DNaseseq_2_PH027_DNase_seq_paired_HiSeqXTen.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_489_Pear_W_fruit_DNaseseq_1_PH023_DNase_seq_paired_HiSeqXTen',
    name: 'Sample_01_489_Pear_W_fruit_DNaseseq_1_PH023_DNase_seq_paired_HiSeqXTen',
    category: ['samples'],
    assemblyNames: ['Pyrus_bretschneideri'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_489_Pear_W_fruit_DNaseseq_1_PH023_DNase_seq_paired_HiSeqXTen.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_489_Pear_W_fruit_DNaseseq_1_PH023_DNase_seq_paired_HiSeqXTen.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_490_Pear_W_leaf_DNaseseq_2_PH028_DNase_seq_paired_HiSeqXTen',
    name: 'Sample_01_490_Pear_W_leaf_DNaseseq_2_PH028_DNase_seq_paired_HiSeqXTen',
    category: ['samples'],
    assemblyNames: ['Pyrus_bretschneideri'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_490_Pear_W_leaf_DNaseseq_2_PH028_DNase_seq_paired_HiSeqXTen.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_490_Pear_W_leaf_DNaseseq_2_PH028_DNase_seq_paired_HiSeqXTen.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_491_Pear_W_leaf_DNaseseq_1_PH028_DNase_seq_paired_HiSeqXTen',
    name: 'Sample_01_491_Pear_W_leaf_DNaseseq_1_PH028_DNase_seq_paired_HiSeqXTen',
    category: ['samples'],
    assemblyNames: ['Pyrus_bretschneideri'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_491_Pear_W_leaf_DNaseseq_1_PH028_DNase_seq_paired_HiSeqXTen.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_491_Pear_W_leaf_DNaseseq_1_PH028_DNase_seq_paired_HiSeqXTen.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_492_Pear_D_fruit_DNaseseq_2_PH031_DNase_seq_paired_HiSeqXTen',
    name: 'Sample_01_492_Pear_D_fruit_DNaseseq_2_PH031_DNase_seq_paired_HiSeqXTen',
    category: ['samples'],
    assemblyNames: ['Pyrus_bretschneideri'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_492_Pear_D_fruit_DNaseseq_2_PH031_DNase_seq_paired_HiSeqXTen.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_492_Pear_D_fruit_DNaseseq_2_PH031_DNase_seq_paired_HiSeqXTen.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_493_Pear_D_fruit_DNaseseq_1_PH027_DNase_seq_paired_HiSeqXTen',
    name: 'Sample_01_493_Pear_D_fruit_DNaseseq_1_PH027_DNase_seq_paired_HiSeqXTen',
    category: ['samples'],
    assemblyNames: ['Pyrus_bretschneideri'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_493_Pear_D_fruit_DNaseseq_1_PH027_DNase_seq_paired_HiSeqXTen.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_493_Pear_D_fruit_DNaseseq_1_PH027_DNase_seq_paired_HiSeqXTen.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_494_Pear_D_leaf_DNaseseq_2_PH025_DNase_seq_paired_HiSeqXTen',
    name: 'Sample_01_494_Pear_D_leaf_DNaseseq_2_PH025_DNase_seq_paired_HiSeqXTen',
    category: ['samples'],
    assemblyNames: ['Pyrus_bretschneideri'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_494_Pear_D_leaf_DNaseseq_2_PH025_DNase_seq_paired_HiSeqXTen.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_494_Pear_D_leaf_DNaseseq_2_PH025_DNase_seq_paired_HiSeqXTen.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_495_Pear_D_leaf_DNaseseq_1_PH025_DNase_seq_paired_HiSeqXTen',
    name: 'Sample_01_495_Pear_D_leaf_DNaseseq_1_PH025_DNase_seq_paired_HiSeqXTen',
    category: ['samples'],
    assemblyNames: ['Pyrus_bretschneideri'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_495_Pear_D_leaf_DNaseseq_1_PH025_DNase_seq_paired_HiSeqXTen.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_495_Pear_D_leaf_DNaseseq_1_PH025_DNase_seq_paired_HiSeqXTen.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_496_Pear_Xinjiang_immature_Dnaseseq_2_PH087_DNase_seq_paired_HiSeqXTen',
    name: 'Sample_01_496_Pear_Xinjiang_immature_Dnaseseq_2_PH087_DNase_seq_paired_HiSeqXTen',
    category: ['samples'],
    assemblyNames: ['Pyrus_bretschneideri'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_496_Pear_Xinjiang_immature_Dnaseseq_2_PH087_DNase_seq_paired_HiSeqXTen.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_496_Pear_Xinjiang_immature_Dnaseseq_2_PH087_DNase_seq_paired_HiSeqXTen.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_497_Pear_Shandong_immature_Dnaseseq_2_PH083_DNase_seq_paired_HiSeqXTen',
    name: 'Sample_01_497_Pear_Shandong_immature_Dnaseseq_2_PH083_DNase_seq_paired_HiSeqXTen',
    category: ['samples'],
    assemblyNames: ['Pyrus_bretschneideri'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_497_Pear_Shandong_immature_Dnaseseq_2_PH083_DNase_seq_paired_HiSeqXTen.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_497_Pear_Shandong_immature_Dnaseseq_2_PH083_DNase_seq_paired_HiSeqXTen.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_498_Pear_Xinjiang_immature_Dnaseseq_1_PH087_DNase_seq_paired_HiSeqXTen',
    name: 'Sample_01_498_Pear_Xinjiang_immature_Dnaseseq_1_PH087_DNase_seq_paired_HiSeqXTen',
    category: ['samples'],
    assemblyNames: ['Pyrus_bretschneideri'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_498_Pear_Xinjiang_immature_Dnaseseq_1_PH087_DNase_seq_paired_HiSeqXTen.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_498_Pear_Xinjiang_immature_Dnaseseq_1_PH087_DNase_seq_paired_HiSeqXTen.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_499_Pear_Shandong_immature_Dnaseseq_1_PH083_DNase_seq_paired_HiSeqXTen',
    name: 'Sample_01_499_Pear_Shandong_immature_Dnaseseq_1_PH083_DNase_seq_paired_HiSeqXTen',
    category: ['samples'],
    assemblyNames: ['Pyrus_bretschneideri'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_499_Pear_Shandong_immature_Dnaseseq_1_PH083_DNase_seq_paired_HiSeqXTen.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_499_Pear_Shandong_immature_Dnaseseq_1_PH083_DNase_seq_paired_HiSeqXTen.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_500_Pear_Y_immature_Dnaseseq_2_PH083_DNase_seq_paired_HiSeqXTen',
    name: 'Sample_01_500_Pear_Y_immature_Dnaseseq_2_PH083_DNase_seq_paired_HiSeqXTen',
    category: ['samples'],
    assemblyNames: ['Pyrus_bretschneideri'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_500_Pear_Y_immature_Dnaseseq_2_PH083_DNase_seq_paired_HiSeqXTen.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_500_Pear_Y_immature_Dnaseseq_2_PH083_DNase_seq_paired_HiSeqXTen.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_501_Pear_Y_immature_Dnaseseq_1_PH083_DNase_seq_paired_HiSeqXTen',
    name: 'Sample_01_501_Pear_Y_immature_Dnaseseq_1_PH083_DNase_seq_paired_HiSeqXTen',
    category: ['samples'],
    assemblyNames: ['Pyrus_bretschneideri'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_501_Pear_Y_immature_Dnaseseq_1_PH083_DNase_seq_paired_HiSeqXTen.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_501_Pear_Y_immature_Dnaseseq_1_PH083_DNase_seq_paired_HiSeqXTen.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
]// JavaScript Document