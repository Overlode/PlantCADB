import {GetStaticFile} from "../api.js";
export var tracks = [
  {
    type: 'BasicTrack',
    trackId:
      'gene',
    name: 'gene',
    category: ['Genes'],
    assemblyNames: ['Citrullus_lanatus'],
    adapter: {
      type: 'Gff3TabixAdapter',
      gffGzLocation: {
        uri:
          GetStaticFile+"/data/Citrullus_lanatus/gff3/gene.gff3.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/Citrullus_lanatus/gff3/gene.gff3.gz.tbi"
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
    assemblyNames: ['Citrullus_lanatus'],
    adapter: {
      type: 'Gff3TabixAdapter',
      gffGzLocation: {
        uri:
          GetStaticFile+"/data/Citrullus_lanatus/gff3/biological_region.gff3.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/Citrullus_lanatus/gff3/biological_region.gff3.gz.tbi"
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
      'Sample_01_397_Watermelon_34DPA_DNaseseq_3_SZ030_DNase_seq_paired_HiSeqXTen',
    name: 'Sample_01_397_Watermelon_34DPA_DNaseseq_3_SZ030_DNase_seq_paired_HiSeqXTen',
    category: ['samples'],
    assemblyNames: ['Citrullus_lanatus'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_397_Watermelon_34DPA_DNaseseq_3_SZ030_DNase_seq_paired_HiSeqXTen.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_397_Watermelon_34DPA_DNaseseq_3_SZ030_DNase_seq_paired_HiSeqXTen.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_398_Watermelon_34DPA_DNaseseq_2_SZ030_DNase_seq_paired_HiSeqXTen',
    name: 'Sample_01_398_Watermelon_34DPA_DNaseseq_2_SZ030_DNase_seq_paired_HiSeqXTen',
    category: ['samples'],
    assemblyNames: ['Citrullus_lanatus'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_398_Watermelon_34DPA_DNaseseq_2_SZ030_DNase_seq_paired_HiSeqXTen.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_398_Watermelon_34DPA_DNaseseq_2_SZ030_DNase_seq_paired_HiSeqXTen.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_399_Watermelon_34DPA_DNaseseq_1_SZ030_DNase_seq_paired_HiSeqXTen',
    name: 'Sample_01_399_Watermelon_34DPA_DNaseseq_1_SZ030_DNase_seq_paired_HiSeqXTen',
    category: ['samples'],
    assemblyNames: ['Citrullus_lanatus'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_399_Watermelon_34DPA_DNaseseq_1_SZ030_DNase_seq_paired_HiSeqXTen.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_399_Watermelon_34DPA_DNaseseq_1_SZ030_DNase_seq_paired_HiSeqXTen.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_400_Watermelon_leaf_DNaseseq_4_SZ030_DNase_seq_paired_HiSeqXTen',
    name: 'Sample_01_400_Watermelon_leaf_DNaseseq_4_SZ030_DNase_seq_paired_HiSeqXTen',
    category: ['samples'],
    assemblyNames: ['Citrullus_lanatus'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_400_Watermelon_leaf_DNaseseq_4_SZ030_DNase_seq_paired_HiSeqXTen.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_400_Watermelon_leaf_DNaseseq_4_SZ030_DNase_seq_paired_HiSeqXTen.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_401_Watermelon_leaf_DNaseseq_3_SZ030_DNase_seq_paired_HiSeqXTen',
    name: 'Sample_01_401_Watermelon_leaf_DNaseseq_3_SZ030_DNase_seq_paired_HiSeqXTen',
    category: ['samples'],
    assemblyNames: ['Citrullus_lanatus'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_401_Watermelon_leaf_DNaseseq_3_SZ030_DNase_seq_paired_HiSeqXTen.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_401_Watermelon_leaf_DNaseseq_3_SZ030_DNase_seq_paired_HiSeqXTen.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_402_Watermelon_leaf_DNaseseq_2_SZ030_DNase_seq_paired_HiSeqXTen',
    name: 'Sample_01_402_Watermelon_leaf_DNaseseq_2_SZ030_DNase_seq_paired_HiSeqXTen',
    category: ['samples'],
    assemblyNames: ['Citrullus_lanatus'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_402_Watermelon_leaf_DNaseseq_2_SZ030_DNase_seq_paired_HiSeqXTen.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_402_Watermelon_leaf_DNaseseq_2_SZ030_DNase_seq_paired_HiSeqXTen.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_403_Watermelon_leaf_DNaseseq_1_SZ030_DNase_seq_paired_HiSeqXTen',
    name: 'Sample_01_403_Watermelon_leaf_DNaseseq_1_SZ030_DNase_seq_paired_HiSeqXTen',
    category: ['samples'],
    assemblyNames: ['Citrullus_lanatus'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_403_Watermelon_leaf_DNaseseq_1_SZ030_DNase_seq_paired_HiSeqXTen.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_403_Watermelon_leaf_DNaseseq_1_SZ030_DNase_seq_paired_HiSeqXTen.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_404_Watermelon_10DPA_DNaseseq_3_SZ030_DNase_seq_paired_HiSeqXTen',
    name: 'Sample_01_404_Watermelon_10DPA_DNaseseq_3_SZ030_DNase_seq_paired_HiSeqXTen',
    category: ['samples'],
    assemblyNames: ['Citrullus_lanatus'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_404_Watermelon_10DPA_DNaseseq_3_SZ030_DNase_seq_paired_HiSeqXTen.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_404_Watermelon_10DPA_DNaseseq_3_SZ030_DNase_seq_paired_HiSeqXTen.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_405_Watermelon_10DPA_DNaseseq_2_SZ030_DNase_seq_paired_HiSeqXTen',
    name: 'Sample_01_405_Watermelon_10DPA_DNaseseq_2_SZ030_DNase_seq_paired_HiSeqXTen',
    category: ['samples'],
    assemblyNames: ['Citrullus_lanatus'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_405_Watermelon_10DPA_DNaseseq_2_SZ030_DNase_seq_paired_HiSeqXTen.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_405_Watermelon_10DPA_DNaseseq_2_SZ030_DNase_seq_paired_HiSeqXTen.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_406_Watermelon_10DPA_DNaseseq_1_SZ030_DNase_seq_paired_HiSeqXTen',
    name: 'Sample_01_406_Watermelon_10DPA_DNaseseq_1_SZ030_DNase_seq_paired_HiSeqXTen',
    category: ['samples'],
    assemblyNames: ['Citrullus_lanatus'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_406_Watermelon_10DPA_DNaseseq_1_SZ030_DNase_seq_paired_HiSeqXTen.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_406_Watermelon_10DPA_DNaseseq_1_SZ030_DNase_seq_paired_HiSeqXTen.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
]// JavaScript Document