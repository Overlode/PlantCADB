import {GetStaticFile} from "../api.js";

export var tracks = [
  {
    type: 'BasicTrack',
    trackId:
      'gene',
    name: 'gene',
    category: ['Genes'],
    assemblyNames: ['Carica_papaya'],
    adapter: {
      type: 'Gff3TabixAdapter',
      gffGzLocation: {
        uri:
          GetStaticFile+"/data/Carica_papaya/gff3/gene.gff3.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/Carica_papaya/gff3/gene.gff3.gz.tbi"
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
    assemblyNames: ['Carica_papaya'],
    adapter: {
      type: 'Gff3TabixAdapter',
      gffGzLocation: {
        uri:
          GetStaticFile+"/data/Carica_papaya/gff3/lnc_RNA.gff3.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/Carica_papaya/gff3/lnc_RNA.gff3.gz.tbi"
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
    assemblyNames: ['Carica_papaya'],
    adapter: {
      type: 'Gff3TabixAdapter',
      gffGzLocation: {
        uri:
          GetStaticFile+"/data/Carica_papaya/gff3/pseudogene.gff3.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/Carica_papaya/gff3/pseudogene.gff3.gz.tbi"
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
    assemblyNames: ['Carica_papaya'],
    adapter: {
      type: 'Gff3TabixAdapter',
      gffGzLocation: {
        uri:
          GetStaticFile+"/data/Carica_papaya/gff3/tRNA.gff3.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/Carica_papaya/gff3/tRNA.gff3.gz.tbi"
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
    assemblyNames: ['Carica_papaya'],
    adapter: {
      type: 'Gff3TabixAdapter',
      gffGzLocation: {
        uri:
          GetStaticFile+"/data/Carica_papaya/gff3/rRNA.gff3.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/Carica_papaya/gff3/rRNA.gff3.gz.tbi"
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
    assemblyNames: ['Carica_papaya'],
    adapter: {
      type: 'Gff3TabixAdapter',
      gffGzLocation: {
        uri:
          GetStaticFile+"/data/Carica_papaya/gff3/cDNA_match.gff3.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/Carica_papaya/gff3/cDNA_match.gff3.gz.tbi"
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
      'direct_repeat',
    name: 'direct_repeat',
    category: ['repeat'],
    assemblyNames: ['Carica_papaya'],
    adapter: {
      type: 'Gff3TabixAdapter',
      gffGzLocation: {
        uri:
          GetStaticFile+"/data/Carica_papaya/gff3/direct_repeat.gff3.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/Carica_papaya/gff3/direct_repeat.gff3.gz.tbi"
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
      'inverted_repeat',
    name: 'inverted_repeat',
    category: ['repeat'],
    assemblyNames: ['Carica_papaya'],
    adapter: {
      type: 'Gff3TabixAdapter',
      gffGzLocation: {
        uri:
          GetStaticFile+"/data/Carica_papaya/gff3/inverted_repeat.gff3.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/Carica_papaya/gff3/inverted_repeat.gff3.gz.tbi"
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
      'Sample_01_391_Papaya_ripe_DNaseseq_2_SZ160123B_DNase_seq_single_HiSeq4000',
    name: 'Sample_01_391_Papaya_ripe_DNaseseq_2_SZ160123B_DNase_seq_single_HiSeq4000',
    category: ['samples'],
    assemblyNames: ['Carica_papaya'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_391_Papaya_ripe_DNaseseq_2_SZ160123B_DNase_seq_single_HiSeq4000.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_391_Papaya_ripe_DNaseseq_2_SZ160123B_DNase_seq_single_HiSeq4000.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_392_Papaya_ripe_DNaseseq_1_SZ060416E_DNase_seq_paired_HiSeqXTen',
    name: 'Sample_01_392_Papaya_ripe_DNaseseq_1_SZ060416E_DNase_seq_paired_HiSeqXTen',
    category: ['samples'],
    assemblyNames: ['Carica_papaya'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_392_Papaya_ripe_DNaseseq_1_SZ060416E_DNase_seq_paired_HiSeqXTen.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_392_Papaya_ripe_DNaseseq_1_SZ060416E_DNase_seq_paired_HiSeqXTen.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_393_Papaya_leaf_DNaseseq_2_SZ041_DNase_seq_paired_HiSeqXTen',
    name: 'Sample_01_393_Papaya_leaf_DNaseseq_2_SZ041_DNase_seq_paired_HiSeqXTen',
    category: ['samples'],
    assemblyNames: ['Carica_papaya'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_393_Papaya_leaf_DNaseseq_2_SZ041_DNase_seq_paired_HiSeqXTen.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_393_Papaya_leaf_DNaseseq_2_SZ041_DNase_seq_paired_HiSeqXTen.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_394_Papaya_leaf_DNaseseq_1_SZ041_DNase_seq_paired_HiSeqXTen',
    name: 'Sample_01_394_Papaya_leaf_DNaseseq_1_SZ041_DNase_seq_paired_HiSeqXTen',
    category: ['samples'],
    assemblyNames: ['Carica_papaya'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_394_Papaya_leaf_DNaseseq_1_SZ041_DNase_seq_paired_HiSeqXTen.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_394_Papaya_leaf_DNaseseq_1_SZ041_DNase_seq_paired_HiSeqXTen.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_395_Papaya_immature_DNaseseq_2_SZ160123B_DNase_seq_single_HiSeq4000',
    name: 'Sample_01_395_Papaya_immature_DNaseseq_2_SZ160123B_DNase_seq_single_HiSeq4000',
    category: ['samples'],
    assemblyNames: ['Carica_papaya'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_395_Papaya_immature_DNaseseq_2_SZ160123B_DNase_seq_single_HiSeq4000.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_395_Papaya_immature_DNaseseq_2_SZ160123B_DNase_seq_single_HiSeq4000.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_396_Papaya_immature_DNaseseq_1_SZ160123A_DNase_seq_paired_HiSeqXTen',
    name: 'Sample_01_396_Papaya_immature_DNaseseq_1_SZ160123A_DNase_seq_paired_HiSeqXTen',
    category: ['samples'],
    assemblyNames: ['Carica_papaya'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_396_Papaya_immature_DNaseseq_1_SZ160123A_DNase_seq_paired_HiSeqXTen.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_396_Papaya_immature_DNaseseq_1_SZ160123A_DNase_seq_paired_HiSeqXTen.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
]// JavaScript Document