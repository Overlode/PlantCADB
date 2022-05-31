import {GetStaticFile} from "../api.js";

export var tracks = [
  {
    type: 'BasicTrack',
    trackId:
      'gene',
    name: 'gene',
    category: ['Genes'],
    assemblyNames: ['Oryza_sativa'],
    adapter: {
      type: 'Gff3TabixAdapter',
      gffGzLocation: {
        uri:
          GetStaticFile+"/data/Oryza_sativa/gff3/gene.gff3.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/Oryza_sativa/gff3/gene.gff3.gz.tbi"
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
    assemblyNames: ['Oryza_sativa'],
    adapter: {
      type: 'Gff3TabixAdapter',
      gffGzLocation: {
        uri:
          GetStaticFile+"/data/Oryza_sativa/gff3/lnc_RNA.gff3.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/Oryza_sativa/gff3/lnc_RNA.gff3.gz.tbi"
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
    assemblyNames: ['Oryza_sativa'],
    adapter: {
      type: 'Gff3TabixAdapter',
      gffGzLocation: {
        uri:
          GetStaticFile+"/data/Oryza_sativa/gff3/ncRNA.gff3.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/Oryza_sativa/gff3/ncRNA.gff3.gz.tbi"
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
    assemblyNames: ['Oryza_sativa'],
    adapter: {
      type: 'Gff3TabixAdapter',
      gffGzLocation: {
        uri:
          GetStaticFile+"/data/Oryza_sativa/gff3/tRNA.gff3.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/Oryza_sativa/gff3/tRNA.gff3.gz.tbi"
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
    assemblyNames: ['Oryza_sativa'],
    adapter: {
      type: 'Gff3TabixAdapter',
      gffGzLocation: {
        uri:
          GetStaticFile+"/data/Oryza_sativa/gff3/snRNA.gff3.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/Oryza_sativa/gff3/snRNA.gff3.gz.tbi"
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
    assemblyNames: ['Oryza_sativa'],
    adapter: {
      type: 'Gff3TabixAdapter',
      gffGzLocation: {
        uri:
          GetStaticFile+"/data/Oryza_sativa/gff3/snoRNA.gff3.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/Oryza_sativa/gff3/snoRNA.gff3.gz.tbi"
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
    assemblyNames: ['Oryza_sativa'],
    adapter: {
      type: 'Gff3TabixAdapter',
      gffGzLocation: {
        uri:
          GetStaticFile+"/data/Oryza_sativa/gff3/rRNA.gff3.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/Oryza_sativa/gff3/rRNA.gff3.gz.tbi"
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
    assemblyNames: ['Oryza_sativa'],
    adapter: {
      type: 'Gff3TabixAdapter',
      gffGzLocation: {
        uri:
          GetStaticFile+"/data/Oryza_sativa/gff3/pre_miRNA.gff3.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/Oryza_sativa/gff3/pre_miRNA.gff3.gz.tbi"
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
    assemblyNames: ['Oryza_sativa'],
    adapter: {
      type: 'Gff3TabixAdapter',
      gffGzLocation: {
        uri:
          GetStaticFile+"/data/Oryza_sativa/gff3/SRP_RNA.gff3.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/Oryza_sativa/gff3/SRP_RNA.gff3.gz.tbi"
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
    assemblyNames: ['Oryza_sativa'],
    adapter: {
      type: 'Gff3TabixAdapter',
      gffGzLocation: {
        uri:
          GetStaticFile+"/data/Oryza_sativa/gff3/RNase_MRP_RNA.gff3.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/Oryza_sativa/gff3/RNase_MRP_RNA.gff3.gz.tbi"
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
    assemblyNames: ['Oryza_sativa'],
    adapter: {
      type: 'Gff3TabixAdapter',
      gffGzLocation: {
        uri:
          GetStaticFile+"/data/Oryza_sativa/gff3/pseudogene.gff3.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/Oryza_sativa/gff3/pseudogene.gff3.gz.tbi"
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
      'pseudogenic_transcript',
    name: 'pseudogenic_transcript',
    category: ['RNA'],
    assemblyNames: ['Oryza_sativa'],
    adapter: {
      type: 'Gff3TabixAdapter',
      gffGzLocation: {
        uri:
          GetStaticFile+"/data/Oryza_sativa/gff3/pseudogenic_transcript.gff3.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/Oryza_sativa/gff3/pseudogenic_transcript.gff3.gz.tbi"
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
      'Sample_00_114_Os_root_tip_ATAC_rep1',
    name: 'Sample_00_114_Os_root_tip_ATAC_rep1',
    category: ['samples'],
    assemblyNames: ['Oryza_sativa'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_114_Os_root_tip_ATAC_rep1.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_114_Os_root_tip_ATAC_rep1.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_115_Os_root_tip_ATAC_rep2',
    name: 'Sample_00_115_Os_root_tip_ATAC_rep2',
    category: ['samples'],
    assemblyNames: ['Oryza_sativa'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_115_Os_root_tip_ATAC_rep2.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_115_Os_root_tip_ATAC_rep2.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_116_FP3_ATAC_rep1',
    name: 'Sample_00_116_FP3_ATAC_rep1',
    category: ['samples'],
    assemblyNames: ['Oryza_sativa'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_116_FP3_ATAC_rep1.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_116_FP3_ATAC_rep1.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_117_FP3_ATAC_rep2',
    name: 'Sample_00_117_FP3_ATAC_rep2',
    category: ['samples'],
    assemblyNames: ['Oryza_sativa'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_117_FP3_ATAC_rep2.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_117_FP3_ATAC_rep2.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_118_SP3_ATAC_rep1',
    name: 'Sample_00_118_SP3_ATAC_rep1',
    category: ['samples'],
    assemblyNames: ['Oryza_sativa'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_118_SP3_ATAC_rep1.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_118_SP3_ATAC_rep1.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_119_SP3_ATAC_rep2',
    name: 'Sample_00_119_SP3_ATAC_rep2',
    category: ['samples'],
    assemblyNames: ['Oryza_sativa'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_119_SP3_ATAC_rep2.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_119_SP3_ATAC_rep2.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_120_FP4_ATAC_rep1',
    name: 'Sample_00_120_FP4_ATAC_rep1',
    category: ['samples'],
    assemblyNames: ['Oryza_sativa'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_120_FP4_ATAC_rep1.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_120_FP4_ATAC_rep1.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_121_FP4_ATAC_rep2',
    name: 'Sample_00_121_FP4_ATAC_rep2',
    category: ['samples'],
    assemblyNames: ['Oryza_sativa'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_121_FP4_ATAC_rep2.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_121_FP4_ATAC_rep2.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_122_SP4_ATAC_rep1',
    name: 'Sample_00_122_SP4_ATAC_rep1',
    category: ['samples'],
    assemblyNames: ['Oryza_sativa'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_122_SP4_ATAC_rep1.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_122_SP4_ATAC_rep1.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_123_SP4_ATAC_rep2',
    name: 'Sample_00_123_SP4_ATAC_rep2',
    category: ['samples'],
    assemblyNames: ['Oryza_sativa'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_123_SP4_ATAC_rep2.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_123_SP4_ATAC_rep2.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_124_ATAC_Rice_7days_leaf_rep1',
    name: 'Sample_00_124_ATAC_Rice_7days_leaf_rep1',
    category: ['samples'],
    assemblyNames: ['Oryza_sativa'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_124_ATAC_Rice_7days_leaf_rep1.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_124_ATAC_Rice_7days_leaf_rep1.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_125_ATAC_Rice_7days_leaf_rep2',
    name: 'Sample_00_125_ATAC_Rice_7days_leaf_rep2',
    category: ['samples'],
    assemblyNames: ['Oryza_sativa'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_125_ATAC_Rice_7days_leaf_rep2.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_125_ATAC_Rice_7days_leaf_rep2.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_126_ATAC_Rice_7days_leaf_Input',
    name: 'Sample_00_126_ATAC_Rice_7days_leaf_Input',
    category: ['samples'],
    assemblyNames: ['Oryza_sativa'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_126_ATAC_Rice_7days_leaf_Input.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_126_ATAC_Rice_7days_leaf_Input.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_127_OS_ATAC_CON1_[OS-ATACCON1]',
    name: 'Sample_00_127_OS_ATAC_CON1_[OS-ATACCON1]',
    category: ['samples'],
    assemblyNames: ['Oryza_sativa'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_127_OS_ATAC_CON1_[OS-ATACCON1].bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_127_OS_ATAC_CON1_[OS-ATACCON1].bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_128_OS_ATAC_CON2_[OS-ATACCON2]',
    name: 'Sample_00_128_OS_ATAC_CON2_[OS-ATACCON2]',
    category: ['samples'],
    assemblyNames: ['Oryza_sativa'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_128_OS_ATAC_CON2_[OS-ATACCON2].bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_128_OS_ATAC_CON2_[OS-ATACCON2].bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_129_OS_ATAC_CON3_[OS-ATACCON3]',
    name: 'Sample_00_129_OS_ATAC_CON3_[OS-ATACCON3]',
    category: ['samples'],
    assemblyNames: ['Oryza_sativa'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_129_OS_ATAC_CON3_[OS-ATACCON3].bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_129_OS_ATAC_CON3_[OS-ATACCON3].bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_130_OS_ATAC_CON4_[OS-ATACCON4]',
    name: 'Sample_00_130_OS_ATAC_CON4_[OS-ATACCON4]',
    category: ['samples'],
    assemblyNames: ['Oryza_sativa'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_130_OS_ATAC_CON4_[OS-ATACCON4].bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_130_OS_ATAC_CON4_[OS-ATACCON4].bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_131_OS_ATAC_SUB1_[OS-ATACSUB1]',
    name: 'Sample_00_131_OS_ATAC_SUB1_[OS-ATACSUB1]',
    category: ['samples'],
    assemblyNames: ['Oryza_sativa'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_131_OS_ATAC_SUB1_[OS-ATACSUB1].bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_131_OS_ATAC_SUB1_[OS-ATACSUB1].bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_132_OS_ATAC_SUB2_[OS-ATACSUB2]',
    name: 'Sample_00_132_OS_ATAC_SUB2_[OS-ATACSUB2]',
    category: ['samples'],
    assemblyNames: ['Oryza_sativa'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_132_OS_ATAC_SUB2_[OS-ATACSUB2].bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_132_OS_ATAC_SUB2_[OS-ATACSUB2].bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_133_OS_ATAC_SUB3_[OS-ATACSUB3]',
    name: 'Sample_00_133_OS_ATAC_SUB3_[OS-ATACSUB3]',
    category: ['samples'],
    assemblyNames: ['Oryza_sativa'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_133_OS_ATAC_SUB3_[OS-ATACSUB3].bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_133_OS_ATAC_SUB3_[OS-ATACSUB3].bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
    
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_134_OS_ATAC_SUB4_[OS-ATACSUB4]',
    name: 'Sample_00_134_OS_ATAC_SUB4_[OS-ATACSUB4]',
    category: ['samples'],
    assemblyNames: ['Oryza_sativa'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_134_OS_ATAC_SUB4_[OS-ATACSUB4].bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_134_OS_ATAC_SUB4_[OS-ATACSUB4].bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_135_OS_gDNA_[OS-gDNA]',
    name: 'Sample_00_135_OS_gDNA_[OS-gDNA]',
    category: ['samples'],
    assemblyNames: ['Oryza_sativa'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_135_OS_gDNA_[OS-gDNA].bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_135_OS_gDNA_[OS-gDNA].bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_136_NMCP1OE_ATACseq_1',
    name: 'Sample_00_136_NMCP1OE_ATACseq_1',
    category: ['samples'],
    assemblyNames: ['Oryza_sativa'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_136_NMCP1OE_ATACseq_1.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_136_NMCP1OE_ATACseq_1.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_137_NMCP1OE_ATACseq_2',
    name: 'Sample_00_137_NMCP1OE_ATACseq_2',
    category: ['samples'],
    assemblyNames: ['Oryza_sativa'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_137_NMCP1OE_ATACseq_2.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_137_NMCP1OE_ATACseq_2.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_138_NMCP1OE_ATACseq_3',
    name: 'Sample_00_138_NMCP1OE_ATACseq_3',
    category: ['samples'],
    assemblyNames: ['Oryza_sativa'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_138_NMCP1OE_ATACseq_3.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_138_NMCP1OE_ATACseq_3.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_139_ZH11-WT_ATACseq_1',
    name: 'Sample_00_139_ZH11-WT_ATACseq_1',
    category: ['samples'],
    assemblyNames: ['Oryza_sativa'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_139_ZH11-WT_ATACseq_1.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_139_ZH11-WT_ATACseq_1.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_140_ZH11-WT_ATACseq_2',
    name: 'Sample_00_140_ZH11-WT_ATACseq_2',
    category: ['samples'],
    assemblyNames: ['Oryza_sativa'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_140_ZH11-WT_ATACseq_2.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_140_ZH11-WT_ATACseq_2.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_141_ZH11-WT_ATACseq_3',
    name: 'Sample_00_141_ZH11-WT_ATACseq_3',
    category: ['samples'],
    assemblyNames: ['Oryza_sativa'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_141_ZH11-WT_ATACseq_3.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_141_ZH11-WT_ATACseq_3.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_142_SWI3C-RNAi_ATACseq_1',
    name: 'Sample_00_142_SWI3C-RNAi_ATACseq_1',
    category: ['samples'],
    assemblyNames: ['Oryza_sativa'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_142_SWI3C-RNAi_ATACseq_1.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_142_SWI3C-RNAi_ATACseq_1.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_143_SWI3C-RNAi_ATACseq_2',
    name: 'Sample_00_143_SWI3C-RNAi_ATACseq_2',
    category: ['samples'],
    assemblyNames: ['Oryza_sativa'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_143_SWI3C-RNAi_ATACseq_2.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_143_SWI3C-RNAi_ATACseq_2.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
    
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_144_SWI3C-RNAi_ATACseq_3',
    name: 'Sample_00_144_SWI3C-RNAi_ATACseq_3',
    category: ['samples'],
    assemblyNames: ['Oryza_sativa'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_144_SWI3C-RNAi_ATACseq_3.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_144_SWI3C-RNAi_ATACseq_3.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_145_NMCP1OE_D_ATACseq_1',
    name: 'Sample_00_145_NMCP1OE_D_ATACseq_1',
    category: ['samples'],
    assemblyNames: ['Oryza_sativa'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_145_NMCP1OE_D_ATACseq_1.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_145_NMCP1OE_D_ATACseq_1.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_146_NMCP1OE_D_ATACseq_2',
    name: 'Sample_00_146_NMCP1OE_D_ATACseq_2',
    category: ['samples'],
    assemblyNames: ['Oryza_sativa'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_146_NMCP1OE_D_ATACseq_2.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_146_NMCP1OE_D_ATACseq_2.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_147_NMCP1OE_D_ATACseq_3',
    name: 'Sample_00_147_NMCP1OE_D_ATACseq_3',
    category: ['samples'],
    assemblyNames: ['Oryza_sativa'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_147_NMCP1OE_D_ATACseq_3.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_147_NMCP1OE_D_ATACseq_3.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_148_ZH11-WT_D_ATACseq_1',
    name: 'Sample_00_148_ZH11-WT_D_ATACseq_1',
    category: ['samples'],
    assemblyNames: ['Oryza_sativa'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_148_ZH11-WT_D_ATACseq_1.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_148_ZH11-WT_D_ATACseq_1.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_149_ZH11-WT_D_ATACseq_2',
    name: 'Sample_00_149_ZH11-WT_D_ATACseq_2',
    category: ['samples'],
    assemblyNames: ['Oryza_sativa'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_149_ZH11-WT_D_ATACseq_2.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_149_ZH11-WT_D_ATACseq_2.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_150_ZH11-WT_D_ATACseq_3',
    name: 'Sample_00_150_ZH11-WT_D_ATACseq_3',
    category: ['samples'],
    assemblyNames: ['Oryza_sativa'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_150_ZH11-WT_D_ATACseq_3.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_150_ZH11-WT_D_ATACseq_3.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_151_SWI3C-RNAi_D_ATACseq_1',
    name: 'Sample_00_151_SWI3C-RNAi_D_ATACseq_1',
    category: ['samples'],
    assemblyNames: ['Oryza_sativa'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_151_SWI3C-RNAi_D_ATACseq_1.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_151_SWI3C-RNAi_D_ATACseq_1.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_152_SWI3C-RNAi_D_ATACseq_2',
    name: 'Sample_00_152_SWI3C-RNAi_D_ATACseq_2',
    category: ['samples'],
    assemblyNames: ['Oryza_sativa'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_152_SWI3C-RNAi_D_ATACseq_2.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_152_SWI3C-RNAi_D_ATACseq_2.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_153_SWI3C-RNAi_D_ATACseq_3',
    name: 'Sample_00_153_SWI3C-RNAi_D_ATACseq_3',
    category: ['samples'],
    assemblyNames: ['Oryza_sativa'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_153_SWI3C-RNAi_D_ATACseq_3.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_153_SWI3C-RNAi_D_ATACseq_3.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
    
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_154_heat_30min_3',
    name: 'Sample_00_154_heat_30min_3',
    category: ['samples'],
    assemblyNames: ['Oryza_sativa'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_154_heat_30min_3.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_154_heat_30min_3.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_155_heat_2h_1',
    name: 'Sample_00_155_heat_2h_1',
    category: ['samples'],
    assemblyNames: ['Oryza_sativa'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_155_heat_2h_1.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_155_heat_2h_1.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_156_heat_2h_3',
    name: 'Sample_00_156_heat_2h_3',
    category: ['samples'],
    assemblyNames: ['Oryza_sativa'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_156_heat_2h_3.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_156_heat_2h_3.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_157_control_4h_1',
    name: 'Sample_00_157_control_4h_1',
    category: ['samples'],
    assemblyNames: ['Oryza_sativa'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_157_control_4h_1.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_157_control_4h_1.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_158_drought_2h_2',
    name: 'Sample_00_158_drought_2h_2',
    category: ['samples'],
    assemblyNames: ['Oryza_sativa'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_158_drought_2h_2.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_158_drought_2h_2.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_159_control_2h_1',
    name: 'Sample_00_159_control_2h_1',
    category: ['samples'],
    assemblyNames: ['Oryza_sativa'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_159_control_2h_1.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_159_control_2h_1.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_160_heat_recovery_4h_2',
    name: 'Sample_00_160_heat_recovery_4h_2',
    category: ['samples'],
    assemblyNames: ['Oryza_sativa'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_160_heat_recovery_4h_2.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_160_heat_recovery_4h_2.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_161_heat_4h_3',
    name: 'Sample_00_161_heat_4h_3',
    category: ['samples'],
    assemblyNames: ['Oryza_sativa'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_161_heat_4h_3.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_161_heat_4h_3.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_162_drought_recovery_4h_2',
    name: 'Sample_00_162_drought_recovery_4h_2',
    category: ['samples'],
    assemblyNames: ['Oryza_sativa'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_162_drought_recovery_4h_2.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_162_drought_recovery_4h_2.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_163_control_2h_3',
    name: 'Sample_00_163_control_2h_3',
    category: ['samples'],
    assemblyNames: ['Oryza_sativa'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_163_control_2h_3.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_163_control_2h_3.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
    
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_164_drought_2h_3',
    name: 'Sample_00_164_drought_2h_3',
    category: ['samples'],
    assemblyNames: ['Oryza_sativa'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_164_drought_2h_3.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_164_drought_2h_3.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_165_drought_recovery_4h_1',
    name: 'Sample_00_165_drought_recovery_4h_1',
    category: ['samples'],
    assemblyNames: ['Oryza_sativa'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_165_drought_recovery_4h_1.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_165_drought_recovery_4h_1.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_166_heat_recovery_4h_1',
    name: 'Sample_00_166_heat_recovery_4h_1',
    category: ['samples'],
    assemblyNames: ['Oryza_sativa'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_166_heat_recovery_4h_1.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_166_heat_recovery_4h_1.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_167_control_30min_3',
    name: 'Sample_00_167_control_30min_3',
    category: ['samples'],
    assemblyNames: ['Oryza_sativa'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_167_control_30min_3.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_167_control_30min_3.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_168_heat_30min_2',
    name: 'Sample_00_168_heat_30min_2',
    category: ['samples'],
    assemblyNames: ['Oryza_sativa'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_168_heat_30min_2.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_168_heat_30min_2.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_169_heat_4h_2',
    name: 'Sample_00_169_heat_4h_2',
    category: ['samples'],
    assemblyNames: ['Oryza_sativa'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_169_heat_4h_2.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_169_heat_4h_2.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_170_control_30min_2',
    name: 'Sample_00_170_control_30min_2',
    category: ['samples'],
    assemblyNames: ['Oryza_sativa'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_170_control_30min_2.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_170_control_30min_2.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_171_control_4h_2',
    name: 'Sample_00_171_control_4h_2',
    category: ['samples'],
    assemblyNames: ['Oryza_sativa'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_171_control_4h_2.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_171_control_4h_2.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_277_OsMC_ATAC_1_2',
    name: 'Sample_00_277_OsMC_ATAC_1_2',
    category: ['samples'],
    assemblyNames: ['Oryza_sativa'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_277_OsMC_ATAC_1_2.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_277_OsMC_ATAC_1_2.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_278_OsMC_ATAC_1_1',
    name: 'Sample_00_278_OsMC_ATAC_1_1',
    category: ['samples'],
    assemblyNames: ['Oryza_sativa'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_278_OsMC_ATAC_1_1.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_278_OsMC_ATAC_1_1.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
    
]// JavaScript Document