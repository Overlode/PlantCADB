import {GetStaticFile} from "../api.js";
export var tracks = [
  {
    type: 'BasicTrack',
    trackId:
      'gene',
    name: 'gene',
    category: ['Genes'],
    assemblyNames: ['Eucalyptus_grandis'],
    adapter: {
      type: 'Gff3TabixAdapter',
      gffGzLocation: {
        uri:
          GetStaticFile+"/data/Eucalyptus_grandis/gff3/gene.gff3.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/Eucalyptus_grandis/gff3/gene.gff3.gz.tbi"
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
    assemblyNames: ['Eucalyptus_grandis'],
    adapter: {
      type: 'Gff3TabixAdapter',
      gffGzLocation: {
        uri:
          GetStaticFile+"/data/Eucalyptus_grandis/gff3/lnc_RNA.gff3.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/Eucalyptus_grandis/gff3/lnc_RNA.gff3.gz.tbi"
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
    assemblyNames: ['Eucalyptus_grandis'],
    adapter: {
      type: 'Gff3TabixAdapter',
      gffGzLocation: {
        uri:
          GetStaticFile+"/data/Eucalyptus_grandis/gff3/pseudogene.gff3.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/Eucalyptus_grandis/gff3/pseudogene.gff3.gz.tbi"
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
    assemblyNames: ['Eucalyptus_grandis'],
    adapter: {
      type: 'Gff3TabixAdapter',
      gffGzLocation: {
        uri:
          GetStaticFile+"/data/Eucalyptus_grandis/gff3/tRNA.gff3.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/Eucalyptus_grandis/gff3/tRNA.gff3.gz.tbi"
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
    assemblyNames: ['Eucalyptus_grandis'],
    adapter: {
      type: 'Gff3TabixAdapter',
      gffGzLocation: {
        uri:
          GetStaticFile+"/data/Eucalyptus_grandis/gff3/snRNA.gff3.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/Eucalyptus_grandis/gff3/snRNA.gff3.gz.tbi"
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
    assemblyNames: ['Eucalyptus_grandis'],
    adapter: {
      type: 'Gff3TabixAdapter',
      gffGzLocation: {
        uri:
          GetStaticFile+"/data/Eucalyptus_grandis/gff3/snoRNA.gff3.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/Eucalyptus_grandis/gff3/snoRNA.gff3.gz.tbi"
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
    assemblyNames: ['Eucalyptus_grandis'],
    adapter: {
      type: 'Gff3TabixAdapter',
      gffGzLocation: {
        uri:
          GetStaticFile+"/data/Eucalyptus_grandis/gff3/rRNA.gff3.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/Eucalyptus_grandis/gff3/rRNA.gff3.gz.tbi"
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
    assemblyNames: ['Eucalyptus_grandis'],
    adapter: {
      type: 'Gff3TabixAdapter',
      gffGzLocation: {
        uri:
          GetStaticFile+"/data/Eucalyptus_grandis/gff3/cDNA_match.gff3.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/Eucalyptus_grandis/gff3/cDNA_match.gff3.gz.tbi"
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
    assemblyNames: ['Eucalyptus_grandis'],
    adapter: {
      type: 'Gff3TabixAdapter',
      gffGzLocation: {
        uri:
          GetStaticFile+"/data/Eucalyptus_grandis/gff3/repeat_region.gff3.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/Eucalyptus_grandis/gff3/repeat_region.gff3.gz.tbi"
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
    assemblyNames: ['Eucalyptus_grandis'],
    adapter: {
      type: 'Gff3TabixAdapter',
      gffGzLocation: {
        uri:
          GetStaticFile+"/data/Eucalyptus_grandis/gff3/inverted_repeat.gff3.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/Eucalyptus_grandis/gff3/inverted_repeat.gff3.gz.tbi"
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
    assemblyNames: ['Eucalyptus_grandis'],
    adapter: {
      type: 'Gff3TabixAdapter',
      gffGzLocation: {
        uri:
          GetStaticFile+"/data/Eucalyptus_grandis/gff3/sequence_feature.gff3.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/Eucalyptus_grandis/gff3/sequence_feature.gff3.gz.tbi"
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
      'Sample_01_599_W8_developing_secondary_xylem_DNase_seq_large_fragment',
    name: 'Sample_01_599_W8_developing_secondary_xylem_DNase_seq_large_fragment',
    category: ['samples'],
    assemblyNames: ['Eucalyptus_grandis'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_599_W8_developing_secondary_xylem_DNase_seq_large_fragment.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_599_W8_developing_secondary_xylem_DNase_seq_large_fragment.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_600_W7_developing_secondary_xylem_DNase_seq_large_fragment',
    name: 'Sample_01_600_W7_developing_secondary_xylem_DNase_seq_large_fragment',
    category: ['samples'],
    assemblyNames: ['Eucalyptus_grandis'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_600_W7_developing_secondary_xylem_DNase_seq_large_fragment.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_600_W7_developing_secondary_xylem_DNase_seq_large_fragment.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_601_W7_naked_DNA_control_DNase_seq_small_fragment',
    name: 'Sample_01_601_W7_naked_DNA_control_DNase_seq_small_fragment',
    category: ['samples'],
    assemblyNames: ['Eucalyptus_grandis'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_601_W7_naked_DNA_control_DNase_seq_small_fragment.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_601_W7_naked_DNA_control_DNase_seq_small_fragment.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_602_W9_developing_secondary_xylem_DNase_seq_large_fragment',
    name: 'Sample_01_602_W9_developing_secondary_xylem_DNase_seq_large_fragment',
    category: ['samples'],
    assemblyNames: ['Eucalyptus_grandis'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_602_W9_developing_secondary_xylem_DNase_seq_large_fragment.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_602_W9_developing_secondary_xylem_DNase_seq_large_fragment.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_603_W8_developing_secondary_xylem_DNase_seq_small_fragment',
    name: 'Sample_01_603_W8_developing_secondary_xylem_DNase_seq_small_fragment',
    category: ['samples'],
    assemblyNames: ['Eucalyptus_grandis'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_603_W8_developing_secondary_xylem_DNase_seq_small_fragment.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_603_W8_developing_secondary_xylem_DNase_seq_small_fragment.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_604_W7_developing_secondary_xylem_DNase_seq_small_fragment',
    name: 'Sample_01_604_W7_developing_secondary_xylem_DNase_seq_small_fragment',
    category: ['samples'],
    assemblyNames: ['Eucalyptus_grandis'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_604_W7_developing_secondary_xylem_DNase_seq_small_fragment.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_604_W7_developing_secondary_xylem_DNase_seq_small_fragment.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_605_W12_developing_secondary_phloem_DNase_seq_TR',
    name: 'Sample_01_605_W12_developing_secondary_phloem_DNase_seq_TR',
    category: ['samples'],
    assemblyNames: ['Eucalyptus_grandis'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_605_W12_developing_secondary_phloem_DNase_seq_TR.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_605_W12_developing_secondary_phloem_DNase_seq_TR.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_606_W12_developing_secondary_phloem_DNase_seq',
    name: 'Sample_01_606_W12_developing_secondary_phloem_DNase_seq',
    category: ['samples'],
    assemblyNames: ['Eucalyptus_grandis'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_606_W12_developing_secondary_phloem_DNase_seq.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_606_W12_developing_secondary_phloem_DNase_seq.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_607_W9_developing_secondary_xylem_DNase_seq_small_fragment_TR',
    name: 'Sample_01_607_W9_developing_secondary_xylem_DNase_seq_small_fragment_TR',
    category: ['samples'],
    assemblyNames: ['Eucalyptus_grandis'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_607_W9_developing_secondary_xylem_DNase_seq_small_fragment_TR.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_607_W9_developing_secondary_xylem_DNase_seq_small_fragment_TR.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_608_W11_developing_secondary_phloem_DNase_seq',
    name: 'Sample_01_608_W11_developing_secondary_phloem_DNase_seq',
    category: ['samples'],
    assemblyNames: ['Eucalyptus_grandis'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_608_W11_developing_secondary_phloem_DNase_seq.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_608_W11_developing_secondary_phloem_DNase_seq.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_609_W10_developing_secondary_phloem_DNase_seq',
    name: 'Sample_01_609_W10_developing_secondary_phloem_DNase_seq',
    category: ['samples'],
    assemblyNames: ['Eucalyptus_grandis'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_609_W10_developing_secondary_phloem_DNase_seq.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_609_W10_developing_secondary_phloem_DNase_seq.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_610_W9_developing_secondary_xylem_DNase_seq_small_fragment',
    name: 'Sample_01_610_W9_developing_secondary_xylem_DNase_seq_small_fragment',
    category: ['samples'],
    assemblyNames: ['Eucalyptus_grandis'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_610_W9_developing_secondary_xylem_DNase_seq_small_fragment.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_610_W9_developing_secondary_xylem_DNase_seq_small_fragment.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
]// JavaScript Document