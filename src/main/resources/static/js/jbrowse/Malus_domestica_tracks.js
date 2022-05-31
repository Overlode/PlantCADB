import {GetStaticFile} from "../api.js";

export var tracks = [
  {
    type: 'BasicTrack',
    trackId:
      'gene',
    name: 'gene',
    category: ['Genes'],
    assemblyNames: ['Malus_domestica'],
    adapter: {
      type: 'Gff3TabixAdapter',
      gffGzLocation: {
        uri:
          GetStaticFile+"/data/Malus_domestica/gff3/gene.gff3.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/Malus_domestica/gff3/gene.gff3.gz.tbi"
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
    assemblyNames: ['Malus_domestica'],
    adapter: {
      type: 'Gff3TabixAdapter',
      gffGzLocation: {
        uri:
          GetStaticFile+"/data/Malus_domestica/gff3/ncRNA.gff3.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/Malus_domestica/gff3/ncRNA.gff3.gz.tbi"
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
    assemblyNames: ['Malus_domestica'],
    adapter: {
      type: 'Gff3TabixAdapter',
      gffGzLocation: {
        uri:
          GetStaticFile+"/data/Malus_domestica/gff3/tRNA.gff3.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/Malus_domestica/gff3/tRNA.gff3.gz.tbi"
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
    assemblyNames: ['Malus_domestica'],
    adapter: {
      type: 'Gff3TabixAdapter',
      gffGzLocation: {
        uri:
          GetStaticFile+"/data/Malus_domestica/gff3/snoRNA.gff3.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/Malus_domestica/gff3/snoRNA.gff3.gz.tbi"
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
      'Sample_01_454_Apple_fruit_DNaseseq_2_PH027_DNase_seq_paired_HiSeqXTen',
    name: 'Sample_01_454_Apple_fruit_DNaseseq_2_PH027_DNase_seq_paired_HiSeqXTen',
    category: ['samples'],
    assemblyNames: ['Malus_domestica'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_454_Apple_fruit_DNaseseq_2_PH027_DNase_seq_paired_HiSeqXTen.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_454_Apple_fruit_DNaseseq_2_PH027_DNase_seq_paired_HiSeqXTen.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_455_Apple_fruit_DNaseseq_1_PH023_DNase_seq_paired_HiSeqXTen',
    name: 'Sample_01_455_Apple_fruit_DNaseseq_1_PH023_DNase_seq_paired_HiSeqXTen',
    category: ['samples'],
    assemblyNames: ['Malus_domestica'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_455_Apple_fruit_DNaseseq_1_PH023_DNase_seq_paired_HiSeqXTen.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_455_Apple_fruit_DNaseseq_1_PH023_DNase_seq_paired_HiSeqXTen.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_456_Apple_leaf_DNaseseq_2_PH027_DNase_seq_paired_HiSeqXTen',
    name: 'Sample_01_456_Apple_leaf_DNaseseq_2_PH027_DNase_seq_paired_HiSeqXTen',
    category: ['samples'],
    assemblyNames: ['Malus_domestica'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_456_Apple_leaf_DNaseseq_2_PH027_DNase_seq_paired_HiSeqXTen.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_456_Apple_leaf_DNaseseq_2_PH027_DNase_seq_paired_HiSeqXTen.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_457_Apple_leaf_DNaseseq_1_PH022_DNase_seq_paired_HiSeqXTen',
    name: 'Sample_01_457_Apple_leaf_DNaseseq_1_PH022_DNase_seq_paired_HiSeqXTen',
    category: ['samples'],
    assemblyNames: ['Malus_domestica'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_457_Apple_leaf_DNaseseq_1_PH022_DNase_seq_paired_HiSeqXTen.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_457_Apple_leaf_DNaseseq_1_PH022_DNase_seq_paired_HiSeqXTen.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_458_Apple_immature_DNaseseq_3_PH066_DNase_seq_paired_HiSeqXTen',
    name: 'Sample_01_458_Apple_immature_DNaseseq_3_PH066_DNase_seq_paired_HiSeqXTen',
    category: ['samples'],
    assemblyNames: ['Malus_domestica'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_458_Apple_immature_DNaseseq_3_PH066_DNase_seq_paired_HiSeqXTen.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_458_Apple_immature_DNaseseq_3_PH066_DNase_seq_paired_HiSeqXTen.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_459_Apple_immature_DNaseseq_1_PH066_DNase_seq_paired_HiSeqXTen',
    name: 'Sample_01_459_Apple_immature_DNaseseq_1_PH066_DNase_seq_paired_HiSeqXTen',
    category: ['samples'],
    assemblyNames: ['Malus_domestica'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_459_Apple_immature_DNaseseq_1_PH066_DNase_seq_paired_HiSeqXTen.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_459_Apple_immature_DNaseseq_1_PH066_DNase_seq_paired_HiSeqXTen.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_460_Apple_immature_DNaseseq_2_PH066_DNase_seq_paired_HiSeqXTen',
    name: 'Sample_01_460_Apple_immature_DNaseseq_2_PH066_DNase_seq_paired_HiSeqXTen',
    category: ['samples'],
    assemblyNames: ['Malus_domestica'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_460_Apple_immature_DNaseseq_2_PH066_DNase_seq_paired_HiSeqXTen.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_460_Apple_immature_DNaseseq_2_PH066_DNase_seq_paired_HiSeqXTen.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
]// JavaScript Document