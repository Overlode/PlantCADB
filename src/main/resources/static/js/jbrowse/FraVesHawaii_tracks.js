import {GetStaticFile} from "../api.js";
export var tracks = [
  {
    type: 'BasicTrack',
    trackId:
      'gene',
    name: 'gene',
    category: ['Genes'],
    assemblyNames: ['FraVesHawaii'],
    adapter: {
      type: 'Gff3TabixAdapter',
      gffGzLocation: {
        uri:
          GetStaticFile+"/data/FraVesHawaii/gff3/gene.gff3.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/FraVesHawaii/gff3/gene.gff3.gz.tbi"
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
    assemblyNames: ['FraVesHawaii'],
    adapter: {
      type: 'Gff3TabixAdapter',
      gffGzLocation: {
        uri:
          GetStaticFile+"/data/FraVesHawaii/gff3/lnc_RNA.gff3.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/FraVesHawaii/gff3/lnc_RNA.gff3.gz.tbi"
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
    assemblyNames: ['FraVesHawaii'],
    adapter: {
      type: 'Gff3TabixAdapter',
      gffGzLocation: {
        uri:
          GetStaticFile+"/data/FraVesHawaii/gff3/pseudogene.gff3.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/FraVesHawaii/gff3/pseudogene.gff3.gz.tbi"
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
    assemblyNames: ['FraVesHawaii'],
    adapter: {
      type: 'Gff3TabixAdapter',
      gffGzLocation: {
        uri:
          GetStaticFile+"/data/FraVesHawaii/gff3/tRNA.gff3.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/FraVesHawaii/gff3/tRNA.gff3.gz.tbi"
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
    assemblyNames: ['FraVesHawaii'],
    adapter: {
      type: 'Gff3TabixAdapter',
      gffGzLocation: {
        uri:
          GetStaticFile+"/data/FraVesHawaii/gff3/rRNA.gff3.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/FraVesHawaii/gff3/rRNA.gff3.gz.tbi"
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
    assemblyNames: ['FraVesHawaii'],
    adapter: {
      type: 'Gff3TabixAdapter',
      gffGzLocation: {
        uri:
          GetStaticFile+"/data/FraVesHawaii/gff3/cDNA_match.gff3.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/FraVesHawaii/gff3/cDNA_match.gff3.gz.tbi"
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
      'Sample_01_447_Strawberry_ripe_DNaseseq_3_SZ030_DNase_seq_paired_HiSeqXTen',
    name: 'Sample_01_447_Strawberry_ripe_DNaseseq_3_SZ030_DNase_seq_paired_HiSeqXTen',
    category: ['samples'],
    assemblyNames: ['FraVesHawaii'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_447_Strawberry_ripe_DNaseseq_3_SZ030_DNase_seq_paired_HiSeqXTen.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_447_Strawberry_ripe_DNaseseq_3_SZ030_DNase_seq_paired_HiSeqXTen.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_448_Strawberry_ripe_DNaseseq_2_SZ030_DNase_seq_paired_HiSeqXTen',
    name: 'Sample_01_448_Strawberry_ripe_DNaseseq_2_SZ030_DNase_seq_paired_HiSeqXTen',
    category: ['samples'],
    assemblyNames: ['FraVesHawaii'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_448_Strawberry_ripe_DNaseseq_2_SZ030_DNase_seq_paired_HiSeqXTen.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_448_Strawberry_ripe_DNaseseq_2_SZ030_DNase_seq_paired_HiSeqXTen.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_449_Strawberry_ripe_DNaseseq_1_SZ030_DNase_seq_paired_HiSeqXTen',
    name: 'Sample_01_449_Strawberry_ripe_DNaseseq_1_SZ030_DNase_seq_paired_HiSeqXTen',
    category: ['samples'],
    assemblyNames: ['FraVesHawaii'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_449_Strawberry_ripe_DNaseseq_1_SZ030_DNase_seq_paired_HiSeqXTen.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_449_Strawberry_ripe_DNaseseq_1_SZ030_DNase_seq_paired_HiSeqXTen.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_450_Strawberry_leaf_DNaseseq_2_SZ030_DNase_seq_paired_HiSeqXTen',
    name: 'Sample_01_450_Strawberry_leaf_DNaseseq_2_SZ030_DNase_seq_paired_HiSeqXTen',
    category: ['samples'],
    assemblyNames: ['FraVesHawaii'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_450_Strawberry_leaf_DNaseseq_2_SZ030_DNase_seq_paired_HiSeqXTen.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_450_Strawberry_leaf_DNaseseq_2_SZ030_DNase_seq_paired_HiSeqXTen.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_451_Strawberry_leaf_DNaseseq_1_SZ030_DNase_seq_paired_HiSeqXTen',
    name: 'Sample_01_451_Strawberry_leaf_DNaseseq_1_SZ030_DNase_seq_paired_HiSeqXTen',
    category: ['samples'],
    assemblyNames: ['FraVesHawaii'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_451_Strawberry_leaf_DNaseseq_1_SZ030_DNase_seq_paired_HiSeqXTen.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_451_Strawberry_leaf_DNaseseq_1_SZ030_DNase_seq_paired_HiSeqXTen.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_452_Strawberry_immature_DNaseseq_2_PH002_DNase_seq_paired_HiSeqXTen',
    name: 'Sample_01_452_Strawberry_immature_DNaseseq_2_PH002_DNase_seq_paired_HiSeqXTen',
    category: ['samples'],
    assemblyNames: ['FraVesHawaii'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_452_Strawberry_immature_DNaseseq_2_PH002_DNase_seq_paired_HiSeqXTen.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_452_Strawberry_immature_DNaseseq_2_PH002_DNase_seq_paired_HiSeqXTen.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_453_Strawberry_immature_DNaseseq_1_PH002_DNase_seq_paired_HiSeqXTen',
    name: 'Sample_01_453_Strawberry_immature_DNaseseq_1_PH002_DNase_seq_paired_HiSeqXTen',
    category: ['samples'],
    assemblyNames: ['FraVesHawaii'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_453_Strawberry_immature_DNaseseq_1_PH002_DNase_seq_paired_HiSeqXTen.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_453_Strawberry_immature_DNaseseq_1_PH002_DNase_seq_paired_HiSeqXTen.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
]// JavaScript Document