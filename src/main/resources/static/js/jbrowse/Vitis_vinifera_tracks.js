import {GetStaticFile} from "../api.js";
export var tracks = [
  {
    type: 'BasicTrack',
    trackId:
      'gene',
    name: 'gene',
    category: ['Genes'],
    assemblyNames: ['Vitis_vinifera'],
    adapter: {
      type: 'Gff3TabixAdapter',
      gffGzLocation: {
        uri:
          GetStaticFile+"/data/Vitis_vinifera/gff3/gene.gff3.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/Vitis_vinifera/gff3/gene.gff3.gz.tbi"
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
    assemblyNames: ['Vitis_vinifera'],
    adapter: {
      type: 'Gff3TabixAdapter',
      gffGzLocation: {
        uri:
          GetStaticFile+"/data/Vitis_vinifera/gff3/lnc_RNA.gff3.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/Vitis_vinifera/gff3/lnc_RNA.gff3.gz.tbi"
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
    assemblyNames: ['Vitis_vinifera'],
    adapter: {
      type: 'Gff3TabixAdapter',
      gffGzLocation: {
        uri:
          GetStaticFile+"/data/Vitis_vinifera/gff3/tRNA.gff3.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/Vitis_vinifera/gff3/tRNA.gff3.gz.tbi"
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
    assemblyNames: ['Vitis_vinifera'],
    adapter: {
      type: 'Gff3TabixAdapter',
      gffGzLocation: {
        uri:
          GetStaticFile+"/data/Vitis_vinifera/gff3/snRNA.gff3.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/Vitis_vinifera/gff3/snRNA.gff3.gz.tbi"
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
    assemblyNames: ['Vitis_vinifera'],
    adapter: {
      type: 'Gff3TabixAdapter',
      gffGzLocation: {
        uri:
          GetStaticFile+"/data/Vitis_vinifera/gff3/snoRNA.gff3.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/Vitis_vinifera/gff3/snoRNA.gff3.gz.tbi"
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
    assemblyNames: ['Vitis_vinifera'],
    adapter: {
      type: 'Gff3TabixAdapter',
      gffGzLocation: {
        uri:
          GetStaticFile+"/data/Vitis_vinifera/gff3/rRNA.gff3.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/Vitis_vinifera/gff3/rRNA.gff3.gz.tbi"
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
    assemblyNames: ['Vitis_vinifera'],
    adapter: {
      type: 'Gff3TabixAdapter',
      gffGzLocation: {
        uri:
          GetStaticFile+"/data/Vitis_vinifera/gff3/pre_miRNA.gff3.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/Vitis_vinifera/gff3/pre_miRNA.gff3.gz.tbi"
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
    assemblyNames: ['Vitis_vinifera'],
    adapter: {
      type: 'Gff3TabixAdapter',
      gffGzLocation: {
        uri:
          GetStaticFile+"/data/Vitis_vinifera/gff3/ncRNA.gff3.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/Vitis_vinifera/gff3/ncRNA.gff3.gz.tbi"
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
    assemblyNames: ['Vitis_vinifera'],
    adapter: {
      type: 'Gff3TabixAdapter',
      gffGzLocation: {
        uri:
          GetStaticFile+"/data/Vitis_vinifera/gff3/SRP_RNA.gff3.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/Vitis_vinifera/gff3/SRP_RNA.gff3.gz.tbi"
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
    assemblyNames: ['Vitis_vinifera'],
    adapter: {
      type: 'Gff3TabixAdapter',
      gffGzLocation: {
        uri:
          GetStaticFile+"/data/Vitis_vinifera/gff3/RNase_MRP_RNA.gff3.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/Vitis_vinifera/gff3/RNase_MRP_RNA.gff3.gz.tbi"
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
      'Sample_01_579_Grape_ripe_DNaseseq_3_SZ056_DNase_seq_paired_HiSeqXTen',
    name: 'Sample_01_579_Grape_ripe_DNaseseq_3_SZ056_DNase_seq_paired_HiSeqXTen',
    category: ['samples'],
    assemblyNames: ['Vitis_vinifera'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_579_Grape_ripe_DNaseseq_3_SZ056_DNase_seq_paired_HiSeqXTen.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_579_Grape_ripe_DNaseseq_3_SZ056_DNase_seq_paired_HiSeqXTen.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_580_Grape_ripe_DNaseseq_2_SZ056_DNase_seq_paired_HiSeqXTen',
    name: 'Sample_01_580_Grape_ripe_DNaseseq_2_SZ056_DNase_seq_paired_HiSeqXTen',
    category: ['samples'],
    assemblyNames: ['Vitis_vinifera'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_580_Grape_ripe_DNaseseq_2_SZ056_DNase_seq_paired_HiSeqXTen.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_580_Grape_ripe_DNaseseq_2_SZ056_DNase_seq_paired_HiSeqXTen.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_581_Grape_ripe_DNaseseq_1_SZ056_DNase_seq_paired_HiSeqXTen',
    name: 'Sample_01_581_Grape_ripe_DNaseseq_1_SZ056_DNase_seq_paired_HiSeqXTen',
    category: ['samples'],
    assemblyNames: ['Vitis_vinifera'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_581_Grape_ripe_DNaseseq_1_SZ056_DNase_seq_paired_HiSeqXTen.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_581_Grape_ripe_DNaseseq_1_SZ056_DNase_seq_paired_HiSeqXTen.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_582_Grape_ripe_DNaseseq_5_PH003_DNase_seq_paired_HiSeqXTen',
    name: 'Sample_01_582_Grape_ripe_DNaseseq_5_PH003_DNase_seq_paired_HiSeqXTen',
    category: ['samples'],
    assemblyNames: ['Vitis_vinifera'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_582_Grape_ripe_DNaseseq_5_PH003_DNase_seq_paired_HiSeqXTen.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_582_Grape_ripe_DNaseseq_5_PH003_DNase_seq_paired_HiSeqXTen.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_583_Grape_ripe_DNaseseq_4_PH003_DNase_seq_paired_HiSeqXTen',
    name: 'Sample_01_583_Grape_ripe_DNaseseq_4_PH003_DNase_seq_paired_HiSeqXTen',
    category: ['samples'],
    assemblyNames: ['Vitis_vinifera'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_583_Grape_ripe_DNaseseq_4_PH003_DNase_seq_paired_HiSeqXTen.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_583_Grape_ripe_DNaseseq_4_PH003_DNase_seq_paired_HiSeqXTen.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_584_Grape_leaf_DNaseseq_3_SZ056_DNase_seq_paired_HiSeqXTen',
    name: 'Sample_01_584_Grape_leaf_DNaseseq_3_SZ056_DNase_seq_paired_HiSeqXTen',
    category: ['samples'],
    assemblyNames: ['Vitis_vinifera'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_584_Grape_leaf_DNaseseq_3_SZ056_DNase_seq_paired_HiSeqXTen.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_584_Grape_leaf_DNaseseq_3_SZ056_DNase_seq_paired_HiSeqXTen.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_585_Grape_leaf_DNaseseq_2_SZ056_DNase_seq_paired_HiSeqXTen',
    name: 'Sample_01_585_Grape_leaf_DNaseseq_2_SZ056_DNase_seq_paired_HiSeqXTen',
    category: ['samples'],
    assemblyNames: ['Vitis_vinifera'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_585_Grape_leaf_DNaseseq_2_SZ056_DNase_seq_paired_HiSeqXTen.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_585_Grape_leaf_DNaseseq_2_SZ056_DNase_seq_paired_HiSeqXTen.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_586_Grape_leaf_DNaseseq_1_SZ056_DNase_seq_paired_HiSeqXTen',
    name: 'Sample_01_586_Grape_leaf_DNaseseq_1_SZ056_DNase_seq_paired_HiSeqXTen',
    category: ['samples'],
    assemblyNames: ['Vitis_vinifera'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_586_Grape_leaf_DNaseseq_1_SZ056_DNase_seq_paired_HiSeqXTen.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_586_Grape_leaf_DNaseseq_1_SZ056_DNase_seq_paired_HiSeqXTen.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
]// JavaScript Document