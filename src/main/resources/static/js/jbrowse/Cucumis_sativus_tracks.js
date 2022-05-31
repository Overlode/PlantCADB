import {GetStaticFile} from "../api.js";
export var tracks = [
  {
    type: 'BasicTrack',
    trackId:
      'gene',
    name: 'gene',
    category: ['Genes'],
    assemblyNames: ['Cucumis_sativus'],
    adapter: {
      type: 'Gff3TabixAdapter',
      gffGzLocation: {
        uri:
          GetStaticFile+"/data/Cucumis_sativus/gff3/gene.gff3.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/Cucumis_sativus/gff3/gene.gff3.gz.tbi"
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
    assemblyNames: ['Cucumis_sativus'],
    adapter: {
      type: 'Gff3TabixAdapter',
      gffGzLocation: {
        uri:
          GetStaticFile+"/data/Cucumis_sativus/gff3/lnc_RNA.gff3.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/Cucumis_sativus/gff3/lnc_RNA.gff3.gz.tbi"
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
    assemblyNames: ['Cucumis_sativus'],
    adapter: {
      type: 'Gff3TabixAdapter',
      gffGzLocation: {
        uri:
          GetStaticFile+"/data/Cucumis_sativus/gff3/pseudogene.gff3.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/Cucumis_sativus/gff3/pseudogene.gff3.gz.tbi"
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
    assemblyNames: ['Cucumis_sativus'],
    adapter: {
      type: 'Gff3TabixAdapter',
      gffGzLocation: {
        uri:
          GetStaticFile+"/data/Cucumis_sativus/gff3/tRNA.gff3.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/Cucumis_sativus/gff3/tRNA.gff3.gz.tbi"
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
    assemblyNames: ['Cucumis_sativus'],
    adapter: {
      type: 'Gff3TabixAdapter',
      gffGzLocation: {
        uri:
          GetStaticFile+"/data/Cucumis_sativus/gff3/snRNA.gff3.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/Cucumis_sativus/gff3/snRNA.gff3.gz.tbi"
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
    assemblyNames: ['Cucumis_sativus'],
    adapter: {
      type: 'Gff3TabixAdapter',
      gffGzLocation: {
        uri:
          GetStaticFile+"/data/Cucumis_sativus/gff3/snoRNA.gff3.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/Cucumis_sativus/gff3/snoRNA.gff3.gz.tbi"
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
    assemblyNames: ['Cucumis_sativus'],
    adapter: {
      type: 'Gff3TabixAdapter',
      gffGzLocation: {
        uri:
          GetStaticFile+"/data/Cucumis_sativus/gff3/rRNA.gff3.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/Cucumis_sativus/gff3/rRNA.gff3.gz.tbi"
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
    assemblyNames: ['Cucumis_sativus'],
    adapter: {
      type: 'Gff3TabixAdapter',
      gffGzLocation: {
        uri:
          GetStaticFile+"/data/Cucumis_sativus/gff3/cDNA_match.gff3.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/Cucumis_sativus/gff3/cDNA_match.gff3.gz.tbi"
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
    assemblyNames: ['Cucumis_sativus'],
    adapter: {
      type: 'Gff3TabixAdapter',
      gffGzLocation: {
        uri:
          GetStaticFile+"/data/Cucumis_sativus/gff3/direct_repeat.gff3.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/Cucumis_sativus/gff3/direct_repeat.gff3.gz.tbi"
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
      'sequence_feature',
    name: 'sequence_feature',
    category: ['feature'],
    assemblyNames: ['Cucumis_sativus'],
    adapter: {
      type: 'Gff3TabixAdapter',
      gffGzLocation: {
        uri:
          GetStaticFile+"/data/Cucumis_sativus/gff3/sequence_feature.gff3.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/Cucumis_sativus/gff3/sequence_feature.gff3.gz.tbi"
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
      'Sample_01_437_Cucumber_40DPA_DNaseseq_3_SZ160123B_DNase_seq_single_HiSeq4000',
    name: 'Sample_01_437_Cucumber_40DPA_DNaseseq_3_SZ160123B_DNase_seq_single_HiSeq4000',
    category: ['samples'],
    assemblyNames: ['Cucumis_sativus'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_437_Cucumber_40DPA_DNaseseq_3_SZ160123B_DNase_seq_single_HiSeq4000.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_437_Cucumber_40DPA_DNaseseq_3_SZ160123B_DNase_seq_single_HiSeq4000.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_438_Cucumber_40DPA_DNaseseq_2_SZ160123B_DNase_seq_single_HiSeq4000',
    name: 'Sample_01_438_Cucumber_40DPA_DNaseseq_2_SZ160123B_DNase_seq_single_HiSeq4000',
    category: ['samples'],
    assemblyNames: ['Cucumis_sativus'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_438_Cucumber_40DPA_DNaseseq_2_SZ160123B_DNase_seq_single_HiSeq4000.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_438_Cucumber_40DPA_DNaseseq_2_SZ160123B_DNase_seq_single_HiSeq4000.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_439_Cucumber_40DPA_DNaseseq_1_SZ060416E_DNase_seq_paired_HiSeqXTen',
    name: 'Sample_01_439_Cucumber_40DPA_DNaseseq_1_SZ060416E_DNase_seq_paired_HiSeqXTen',
    category: ['samples'],
    assemblyNames: ['Cucumis_sativus'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_439_Cucumber_40DPA_DNaseseq_1_SZ060416E_DNase_seq_paired_HiSeqXTen.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_439_Cucumber_40DPA_DNaseseq_1_SZ060416E_DNase_seq_paired_HiSeqXTen.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_440_Cucumber_leaf_DNaseseq_4_SZ021_DNase_seq_paired_HiSeqXTen',
    name: 'Sample_01_440_Cucumber_leaf_DNaseseq_4_SZ021_DNase_seq_paired_HiSeqXTen',
    category: ['samples'],
    assemblyNames: ['Cucumis_sativus'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_440_Cucumber_leaf_DNaseseq_4_SZ021_DNase_seq_paired_HiSeqXTen.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_440_Cucumber_leaf_DNaseseq_4_SZ021_DNase_seq_paired_HiSeqXTen.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_441_Cucumber_leaf_DNaseseq_3_SZ021_DNase_seq_paired_HiSeqXTen',
    name: 'Sample_01_441_Cucumber_leaf_DNaseseq_3_SZ021_DNase_seq_paired_HiSeqXTen',
    category: ['samples'],
    assemblyNames: ['Cucumis_sativus'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_441_Cucumber_leaf_DNaseseq_3_SZ021_DNase_seq_paired_HiSeqXTen.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_441_Cucumber_leaf_DNaseseq_3_SZ021_DNase_seq_paired_HiSeqXTen.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_442_Cucumber_leaf_DNaseseq_2_SZ021_DNase_seq_paired_HiSeqXTen',
    name: 'Sample_01_442_Cucumber_leaf_DNaseseq_2_SZ021_DNase_seq_paired_HiSeqXTen',
    category: ['samples'],
    assemblyNames: ['Cucumis_sativus'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_442_Cucumber_leaf_DNaseseq_2_SZ021_DNase_seq_paired_HiSeqXTen.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_442_Cucumber_leaf_DNaseseq_2_SZ021_DNase_seq_paired_HiSeqXTen.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_443_Cucumber_leaf_DNaseseq_1_SZ021_DNase_seq_paired_HiSeqXTen',
    name: 'Sample_01_443_Cucumber_leaf_DNaseseq_1_SZ021_DNase_seq_paired_HiSeqXTen',
    category: ['samples'],
    assemblyNames: ['Cucumis_sativus'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_443_Cucumber_leaf_DNaseseq_1_SZ021_DNase_seq_paired_HiSeqXTen.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_443_Cucumber_leaf_DNaseseq_1_SZ021_DNase_seq_paired_HiSeqXTen.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_444_Cucumber_10DPA_DNaseseq_3_SZ060416E_DNase_seq_paired_HiSeqXTen',
    name: 'Sample_01_444_Cucumber_10DPA_DNaseseq_3_SZ060416E_DNase_seq_paired_HiSeqXTen',
    category: ['samples'],
    assemblyNames: ['Cucumis_sativus'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_444_Cucumber_10DPA_DNaseseq_3_SZ060416E_DNase_seq_paired_HiSeqXTen.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_444_Cucumber_10DPA_DNaseseq_3_SZ060416E_DNase_seq_paired_HiSeqXTen.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_445_Cucumber_10DPA_DNaseseq_2_SZ060416E_DNase_seq_paired_HiSeqXTen',
    name: 'Sample_01_445_Cucumber_10DPA_DNaseseq_2_SZ060416E_DNase_seq_paired_HiSeqXTen',
    category: ['samples'],
    assemblyNames: ['Cucumis_sativus'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_445_Cucumber_10DPA_DNaseseq_2_SZ060416E_DNase_seq_paired_HiSeqXTen.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_445_Cucumber_10DPA_DNaseseq_2_SZ060416E_DNase_seq_paired_HiSeqXTen.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_446_Cucumber_10DPA_DNaseseq_1_SZ060416E_DNase_seq_paired_HiSeqXTen',
    name: 'Sample_01_446_Cucumber_10DPA_DNaseseq_1_SZ060416E_DNase_seq_paired_HiSeqXTen',
    category: ['samples'],
    assemblyNames: ['Cucumis_sativus'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_446_Cucumber_10DPA_DNaseseq_1_SZ060416E_DNase_seq_paired_HiSeqXTen.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_446_Cucumber_10DPA_DNaseseq_1_SZ060416E_DNase_seq_paired_HiSeqXTen.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
]// JavaScript Document