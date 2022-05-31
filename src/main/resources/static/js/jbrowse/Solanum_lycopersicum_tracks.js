import {GetStaticFile} from "../api.js";
export var tracks = [
  {
    type: 'BasicTrack',
    trackId:
      'gene',
    name: 'gene',
    category: ['Genes'],
    assemblyNames: ['Solanum_lycopersicum'],
    adapter: {
      type: 'Gff3TabixAdapter',
      gffGzLocation: {
        uri:
          GetStaticFile+"/data/Solanum_lycopersicum/gff3/gene.gff3.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/Solanum_lycopersicum/gff3/gene.gff3.gz.tbi"
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
    assemblyNames: ['Solanum_lycopersicum'],
    adapter: {
      type: 'Gff3TabixAdapter',
      gffGzLocation: {
        uri:
          GetStaticFile+"/data/Solanum_lycopersicum/gff3/lnc_RNA.gff3.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/Solanum_lycopersicum/gff3/lnc_RNA.gff3.gz.tbi"
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
    assemblyNames: ['Solanum_lycopersicum'],
    adapter: {
      type: 'Gff3TabixAdapter',
      gffGzLocation: {
        uri:
          GetStaticFile+"/data/Solanum_lycopersicum/gff3/tRNA.gff3.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/Solanum_lycopersicum/gff3/tRNA.gff3.gz.tbi"
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
    assemblyNames: ['Solanum_lycopersicum'],
    adapter: {
      type: 'Gff3TabixAdapter',
      gffGzLocation: {
        uri:
          GetStaticFile+"/data/Solanum_lycopersicum/gff3/snRNA.gff3.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/Solanum_lycopersicum/gff3/snRNA.gff3.gz.tbi"
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
    assemblyNames: ['Solanum_lycopersicum'],
    adapter: {
      type: 'Gff3TabixAdapter',
      gffGzLocation: {
        uri:
          GetStaticFile+"/data/Solanum_lycopersicum/gff3/snoRNA.gff3.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/Solanum_lycopersicum/gff3/snoRNA.gff3.gz.tbi"
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
    assemblyNames: ['Solanum_lycopersicum'],
    adapter: {
      type: 'Gff3TabixAdapter',
      gffGzLocation: {
        uri:
          GetStaticFile+"/data/Solanum_lycopersicum/gff3/rRNA.gff3.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/Solanum_lycopersicum/gff3/rRNA.gff3.gz.tbi"
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
    assemblyNames: ['Solanum_lycopersicum'],
    adapter: {
      type: 'Gff3TabixAdapter',
      gffGzLocation: {
        uri:
          GetStaticFile+"/data/Solanum_lycopersicum/gff3/pre_miRNA.gff3.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/Solanum_lycopersicum/gff3/pre_miRNA.gff3.gz.tbi"
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
    assemblyNames: ['Solanum_lycopersicum'],
    adapter: {
      type: 'Gff3TabixAdapter',
      gffGzLocation: {
        uri:
          GetStaticFile+"/data/Solanum_lycopersicum/gff3/ncRNA.gff3.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/Solanum_lycopersicum/gff3/ncRNA.gff3.gz.tbi"
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
    assemblyNames: ['Solanum_lycopersicum'],
    adapter: {
      type: 'Gff3TabixAdapter',
      gffGzLocation: {
        uri:
          GetStaticFile+"/data/Solanum_lycopersicum/gff3/SRP_RNA.gff3.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/Solanum_lycopersicum/gff3/SRP_RNA.gff3.gz.tbi"
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
    assemblyNames: ['Solanum_lycopersicum'],
    adapter: {
      type: 'Gff3TabixAdapter',
      gffGzLocation: {
        uri:
          GetStaticFile+"/data/Solanum_lycopersicum/gff3/RNase_MRP_RNA.gff3.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/Solanum_lycopersicum/gff3/RNase_MRP_RNA.gff3.gz.tbi"
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
      'Sample_00_196_Sl_root_tip_ATAC_rep1',
    name: 'Sample_00_196_Sl_root_tip_ATAC_rep1',
    category: ['samples'],
    assemblyNames: ['Solanum_lycopersicum'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_196_Sl_root_tip_ATAC_rep1.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_196_Sl_root_tip_ATAC_rep1.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_197_Sl_root_tip_ATAC_rep2',
    name: 'Sample_00_197_Sl_root_tip_ATAC_rep2',
    category: ['samples'],
    assemblyNames: ['Solanum_lycopersicum'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_197_Sl_root_tip_ATAC_rep2.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_197_Sl_root_tip_ATAC_rep2.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_198_ATACCONHAIRYROOT1_[ATAC-A21]',
    name: 'Sample_00_198_ATACCONHAIRYROOT1_[ATAC-A21]',
    category: ['samples'],
    assemblyNames: ['Solanum_lycopersicum'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_198_ATACCONHAIRYROOT1_[ATAC-A21].bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_198_ATACCONHAIRYROOT1_[ATAC-A21].bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_199_ATACSUBHAIRYROOT1_[ATAC-A22]',
    name: 'Sample_00_199_ATACSUBHAIRYROOT1_[ATAC-A22]',
    category: ['samples'],
    assemblyNames: ['Solanum_lycopersicum'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_199_ATACSUBHAIRYROOT1_[ATAC-A22].bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_199_ATACSUBHAIRYROOT1_[ATAC-A22].bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_200_ATACSUBCONSLSHOOT2_[ATAC-B06]',
    name: 'Sample_00_200_ATACSUBCONSLSHOOT2_[ATAC-B06]',
    category: ['samples'],
    assemblyNames: ['Solanum_lycopersicum'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_200_ATACSUBCONSLSHOOT2_[ATAC-B06].bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_200_ATACSUBCONSLSHOOT2_[ATAC-B06].bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_201_ATACSUBHAIRYROOT2_[ATAC-B22]',
    name: 'Sample_00_201_ATACSUBHAIRYROOT2_[ATAC-B22]',
    category: ['samples'],
    assemblyNames: ['Solanum_lycopersicum'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_201_ATACSUBHAIRYROOT2_[ATAC-B22].bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_201_ATACSUBHAIRYROOT2_[ATAC-B22].bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_202_ATACCONHAIRYROOT2_[ATAC-B23]',
    name: 'Sample_00_202_ATACCONHAIRYROOT2_[ATAC-B23]',
    category: ['samples'],
    assemblyNames: ['Solanum_lycopersicum'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_202_ATACCONHAIRYROOT2_[ATAC-B23].bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_202_ATACCONHAIRYROOT2_[ATAC-B23].bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_203_ATACCONSLSHOOT2_[ATAC-C05]',
    name: 'Sample_00_203_ATACCONSLSHOOT2_[ATAC-C05]',
    category: ['samples'],
    assemblyNames: ['Solanum_lycopersicum'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_203_ATACCONSLSHOOT2_[ATAC-C05].bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_203_ATACCONSLSHOOT2_[ATAC-C05].bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_204_ATACCONSLROOT1_[ATAC-C103]',
    name: 'Sample_00_204_ATACCONSLROOT1_[ATAC-C103]',
    category: ['samples'],
    assemblyNames: ['Solanum_lycopersicum'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_204_ATACCONSLROOT1_[ATAC-C103].bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_204_ATACCONSLROOT1_[ATAC-C103].bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_205_ATACCONSLROOT2_[ATAC-C13]',
    name: 'Sample_00_205_ATACCONSLROOT2_[ATAC-C13]',
    category: ['samples'],
    assemblyNames: ['Solanum_lycopersicum'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_205_ATACCONSLROOT2_[ATAC-C13].bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_205_ATACCONSLROOT2_[ATAC-C13].bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
    
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_206_ATACCONHAIRYROOT2B_[ATAC-C21]',
    name: 'Sample_00_206_ATACCONHAIRYROOT2B_[ATAC-C21]',
    category: ['samples'],
    assemblyNames: ['Solanum_lycopersicum'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_206_ATACCONHAIRYROOT2B_[ATAC-C21].bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_206_ATACCONHAIRYROOT2B_[ATAC-C21].bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_207_ATACSUBHAIRYROOT2B_[ATAC-C22]',
    name: 'Sample_00_207_ATACSUBHAIRYROOT2B_[ATAC-C22]',
    category: ['samples'],
    assemblyNames: ['Solanum_lycopersicum'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_207_ATACSUBHAIRYROOT2B_[ATAC-C22].bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_207_ATACSUBHAIRYROOT2B_[ATAC-C22].bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_208_ATACSUBSLSHOOT1_[ATAC-D06]',
    name: 'Sample_00_208_ATACSUBSLSHOOT1_[ATAC-D06]',
    category: ['samples'],
    assemblyNames: ['Solanum_lycopersicum'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_208_ATACSUBSLSHOOT1_[ATAC-D06].bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_208_ATACSUBSLSHOOT1_[ATAC-D06].bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_209_ATACCONSLSHOOT1_[ATAC-E05]',
    name: 'Sample_00_209_ATACCONSLSHOOT1_[ATAC-E05]',
    category: ['samples'],
    assemblyNames: ['Solanum_lycopersicum'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_209_ATACCONSLSHOOT1_[ATAC-E05].bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_209_ATACCONSLSHOOT1_[ATAC-E05].bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_210_ATACSUBSLROOT1_[ATAC-E13]',
    name: 'Sample_00_210_ATACSUBSLROOT1_[ATAC-E13]',
    category: ['samples'],
    assemblyNames: ['Solanum_lycopersicum'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_210_ATACSUBSLROOT1_[ATAC-E13].bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_210_ATACSUBSLROOT1_[ATAC-E13].bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_211_ATACSUBSLROOT2_[ATAC-E14]',
    name: 'Sample_00_211_ATACSUBSLROOT2_[ATAC-E14]',
    category: ['samples'],
    assemblyNames: ['Solanum_lycopersicum'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_211_ATACSUBSLROOT2_[ATAC-E14].bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_211_ATACSUBSLROOT2_[ATAC-E14].bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_502_rin_47DPA_DNaseseq_7_SZ060316D_DNase_seq_paired_HiSeqXTen',
    name: 'Sample_01_502_rin_47DPA_DNaseseq_7_SZ060316D_DNase_seq_paired_HiSeqXTen',
    category: ['samples'],
    assemblyNames: ['Solanum_lycopersicum'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_502_rin_47DPA_DNaseseq_7_SZ060316D_DNase_seq_paired_HiSeqXTen.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_502_rin_47DPA_DNaseseq_7_SZ060316D_DNase_seq_paired_HiSeqXTen.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_503_rin_47DPA_DNaseseq_6_SZ060316D_DNase_seq_paired_HiSeqXTen',
    name: 'Sample_01_503_rin_47DPA_DNaseseq_6_SZ060316D_DNase_seq_paired_HiSeqXTen',
    category: ['samples'],
    assemblyNames: ['Solanum_lycopersicum'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_503_rin_47DPA_DNaseseq_6_SZ060316D_DNase_seq_paired_HiSeqXTen.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_503_rin_47DPA_DNaseseq_6_SZ060316D_DNase_seq_paired_HiSeqXTen.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_504_rin_47DPA_DNaseseq_5_SZ060316D_DNase_seq_paired_HiSeqXTen',
    name: 'Sample_01_504_rin_47DPA_DNaseseq_5_SZ060316D_DNase_seq_paired_HiSeqXTen',
    category: ['samples'],
    assemblyNames: ['Solanum_lycopersicum'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_504_rin_47DPA_DNaseseq_5_SZ060316D_DNase_seq_paired_HiSeqXTen.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_504_rin_47DPA_DNaseseq_5_SZ060316D_DNase_seq_paired_HiSeqXTen.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_505_rin_47DPA_DNaseseq_4_SZ060316D_DNase_seq_paired_HiSeqXTen',
    name: 'Sample_01_505_rin_47DPA_DNaseseq_4_SZ060316D_DNase_seq_paired_HiSeqXTen',
    category: ['samples'],
    assemblyNames: ['Solanum_lycopersicum'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_505_rin_47DPA_DNaseseq_4_SZ060316D_DNase_seq_paired_HiSeqXTen.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_505_rin_47DPA_DNaseseq_4_SZ060316D_DNase_seq_paired_HiSeqXTen.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
    
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_506_rin_47DPA_DNaseseq_3_SZ060316D_DNase_seq_paired_HiSeqXTen',
    name: 'Sample_01_506_rin_47DPA_DNaseseq_3_SZ060316D_DNase_seq_paired_HiSeqXTen',
    category: ['samples'],
    assemblyNames: ['Solanum_lycopersicum'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_506_rin_47DPA_DNaseseq_3_SZ060316D_DNase_seq_paired_HiSeqXTen.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_506_rin_47DPA_DNaseseq_3_SZ060316D_DNase_seq_paired_HiSeqXTen.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_507_rin_47DPA_DNaseseq_2_SZ060316D_DNase_seq_paired_HiSeqXTen',
    name: 'Sample_01_507_rin_47DPA_DNaseseq_2_SZ060316D_DNase_seq_paired_HiSeqXTen',
    category: ['samples'],
    assemblyNames: ['Solanum_lycopersicum'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_507_rin_47DPA_DNaseseq_2_SZ060316D_DNase_seq_paired_HiSeqXTen.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_507_rin_47DPA_DNaseseq_2_SZ060316D_DNase_seq_paired_HiSeqXTen.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_508_rin_47DPA_DNaseseq_1_SZ060316C_DNase_seq_paired_HiSeqXTen',
    name: 'Sample_01_508_rin_47DPA_DNaseseq_1_SZ060316C_DNase_seq_paired_HiSeqXTen',
    category: ['samples'],
    assemblyNames: ['Solanum_lycopersicum'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_508_rin_47DPA_DNaseseq_1_SZ060316C_DNase_seq_paired_HiSeqXTen.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_508_rin_47DPA_DNaseseq_1_SZ060316C_DNase_seq_paired_HiSeqXTen.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_509_rin_leaf_DNaseseq_3_SZ060316D_DNase_seq_paired_HiSeqXTen',
    name: 'Sample_01_509_rin_leaf_DNaseseq_3_SZ060316D_DNase_seq_paired_HiSeqXTen',
    category: ['samples'],
    assemblyNames: ['Solanum_lycopersicum'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_509_rin_leaf_DNaseseq_3_SZ060316D_DNase_seq_paired_HiSeqXTen.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_509_rin_leaf_DNaseseq_3_SZ060316D_DNase_seq_paired_HiSeqXTen.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_510_rin_leaf_DNaseseq_2_SZ027_DNase_seq_paired_HiSeqXTen',
    name: 'Sample_01_510_rin_leaf_DNaseseq_2_SZ027_DNase_seq_paired_HiSeqXTen',
    category: ['samples'],
    assemblyNames: ['Solanum_lycopersicum'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_510_rin_leaf_DNaseseq_2_SZ027_DNase_seq_paired_HiSeqXTen.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_510_rin_leaf_DNaseseq_2_SZ027_DNase_seq_paired_HiSeqXTen.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_511_rin_leaf_DNaseseq_1_SZ011_DNase_seq_paired_HiSeqXTen',
    name: 'Sample_01_511_rin_leaf_DNaseseq_1_SZ011_DNase_seq_paired_HiSeqXTen',
    category: ['samples'],
    assemblyNames: ['Solanum_lycopersicum'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_511_rin_leaf_DNaseseq_1_SZ011_DNase_seq_paired_HiSeqXTen.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_511_rin_leaf_DNaseseq_1_SZ011_DNase_seq_paired_HiSeqXTen.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_512_rin_17DPA_DNaseseq_2_SZ060316D_DNase_seq_paired_HiSeqXTen',
    name: 'Sample_01_512_rin_17DPA_DNaseseq_2_SZ060316D_DNase_seq_paired_HiSeqXTen',
    category: ['samples'],
    assemblyNames: ['Solanum_lycopersicum'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_512_rin_17DPA_DNaseseq_2_SZ060316D_DNase_seq_paired_HiSeqXTen.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_512_rin_17DPA_DNaseseq_2_SZ060316D_DNase_seq_paired_HiSeqXTen.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_513_rin_17DPA_DNaseseq_1_SZ021_DNase_seq_paired_HiSeqXTen',
    name: 'Sample_01_513_rin_17DPA_DNaseseq_1_SZ021_DNase_seq_paired_HiSeqXTen',
    category: ['samples'],
    assemblyNames: ['Solanum_lycopersicum'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_513_rin_17DPA_DNaseseq_1_SZ021_DNase_seq_paired_HiSeqXTen.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_513_rin_17DPA_DNaseseq_1_SZ021_DNase_seq_paired_HiSeqXTen.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_514_nr_47DPA_DNaseseq_2_SZ060316C_DNase_seq_paired_HiSeqXTen',
    name: 'Sample_01_514_nr_47DPA_DNaseseq_2_SZ060316C_DNase_seq_paired_HiSeqXTen',
    category: ['samples'],
    assemblyNames: ['Solanum_lycopersicum'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_514_nr_47DPA_DNaseseq_2_SZ060316C_DNase_seq_paired_HiSeqXTen.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_514_nr_47DPA_DNaseseq_2_SZ060316C_DNase_seq_paired_HiSeqXTen.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_515_nr_47DPA_DNaseseq_1_SZ060316C_DNase_seq_paired_HiSeqXTen',
    name: 'Sample_01_515_nr_47DPA_DNaseseq_1_SZ060316C_DNase_seq_paired_HiSeqXTen',
    category: ['samples'],
    assemblyNames: ['Solanum_lycopersicum'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_515_nr_47DPA_DNaseseq_1_SZ060316C_DNase_seq_paired_HiSeqXTen.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_515_nr_47DPA_DNaseseq_1_SZ060316C_DNase_seq_paired_HiSeqXTen.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
    
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_516_nr_leaf_DNaseseq_2_SZ060316D_DNase_seq_paired_HiSeqXTen',
    name: 'Sample_01_516_nr_leaf_DNaseseq_2_SZ060316D_DNase_seq_paired_HiSeqXTen',
    category: ['samples'],
    assemblyNames: ['Solanum_lycopersicum'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_516_nr_leaf_DNaseseq_2_SZ060316D_DNase_seq_paired_HiSeqXTen.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_516_nr_leaf_DNaseseq_2_SZ060316D_DNase_seq_paired_HiSeqXTen.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_517_nr_leaf_DNaseseq_1_SZ011_DNase_seq_paired_HiSeqXTen',
    name: 'Sample_01_517_nr_leaf_DNaseseq_1_SZ011_DNase_seq_paired_HiSeqXTen',
    category: ['samples'],
    assemblyNames: ['Solanum_lycopersicum'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_517_nr_leaf_DNaseseq_1_SZ011_DNase_seq_paired_HiSeqXTen.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_517_nr_leaf_DNaseseq_1_SZ011_DNase_seq_paired_HiSeqXTen.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_518_nr_17DPA_DNaseseq_2_SZ060316C_DNase_seq_paired_HiSeqXTen',
    name: 'Sample_01_518_nr_17DPA_DNaseseq_2_SZ060316C_DNase_seq_paired_HiSeqXTen',
    category: ['samples'],
    assemblyNames: ['Solanum_lycopersicum'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_518_nr_17DPA_DNaseseq_2_SZ060316C_DNase_seq_paired_HiSeqXTen.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_518_nr_17DPA_DNaseseq_2_SZ060316C_DNase_seq_paired_HiSeqXTen.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_519_nr_17DPA_DNaseseq_1_SZ060316C_DNase_seq_paired_HiSeqXTen',
    name: 'Sample_01_519_nr_17DPA_DNaseseq_1_SZ060316C_DNase_seq_paired_HiSeqXTen',
    category: ['samples'],
    assemblyNames: ['Solanum_lycopersicum'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_519_nr_17DPA_DNaseseq_1_SZ060316C_DNase_seq_paired_HiSeqXTen.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_519_nr_17DPA_DNaseseq_1_SZ060316C_DNase_seq_paired_HiSeqXTen.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_520_nor_47DPA_DNaseseq_2_SZ008_DNase_seq_paired_HiSeqXTen',
    name: 'Sample_01_520_nor_47DPA_DNaseseq_2_SZ008_DNase_seq_paired_HiSeqXTen',
    category: ['samples'],
    assemblyNames: ['Solanum_lycopersicum'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_520_nor_47DPA_DNaseseq_2_SZ008_DNase_seq_paired_HiSeqXTen.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_520_nor_47DPA_DNaseseq_2_SZ008_DNase_seq_paired_HiSeqXTen.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_521_nor_47DPA_DNaseseq_1_SZ008_DNase_seq_paired_HiSeqXTen',
    name: 'Sample_01_521_nor_47DPA_DNaseseq_1_SZ008_DNase_seq_paired_HiSeqXTen',
    category: ['samples'],
    assemblyNames: ['Solanum_lycopersicum'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_521_nor_47DPA_DNaseseq_1_SZ008_DNase_seq_paired_HiSeqXTen.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_521_nor_47DPA_DNaseseq_1_SZ008_DNase_seq_paired_HiSeqXTen.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_522_nor_leaf_DNaseseq_3_SZ060316D_DNase_seq_paired_HiSeqXTen',
    name: 'Sample_01_522_nor_leaf_DNaseseq_3_SZ060316D_DNase_seq_paired_HiSeqXTen',
    category: ['samples'],
    assemblyNames: ['Solanum_lycopersicum'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_522_nor_leaf_DNaseseq_3_SZ060316D_DNase_seq_paired_HiSeqXTen.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_522_nor_leaf_DNaseseq_3_SZ060316D_DNase_seq_paired_HiSeqXTen.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_523_nor_leaf_DNaseseq_2_SZ027_DNase_seq_paired_HiSeqXTen',
    name: 'Sample_01_523_nor_leaf_DNaseseq_2_SZ027_DNase_seq_paired_HiSeqXTen',
    category: ['samples'],
    assemblyNames: ['Solanum_lycopersicum'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_523_nor_leaf_DNaseseq_2_SZ027_DNase_seq_paired_HiSeqXTen.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_523_nor_leaf_DNaseseq_2_SZ027_DNase_seq_paired_HiSeqXTen.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_524_nor_leaf_DNaseseq_1_SZ011_DNase_seq_paired_HiSeqXTen',
    name: 'Sample_01_524_nor_leaf_DNaseseq_1_SZ011_DNase_seq_paired_HiSeqXTen',
    category: ['samples'],
    assemblyNames: ['Solanum_lycopersicum'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_524_nor_leaf_DNaseseq_1_SZ011_DNase_seq_paired_HiSeqXTen.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_524_nor_leaf_DNaseseq_1_SZ011_DNase_seq_paired_HiSeqXTen.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_525_nor_17DPA_DNaseseq_6_SZ060316D_DNase_seq_paired_HiSeqXTen',
    name: 'Sample_01_525_nor_17DPA_DNaseseq_6_SZ060316D_DNase_seq_paired_HiSeqXTen',
    category: ['samples'],
    assemblyNames: ['Solanum_lycopersicum'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_525_nor_17DPA_DNaseseq_6_SZ060316D_DNase_seq_paired_HiSeqXTen.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_525_nor_17DPA_DNaseseq_6_SZ060316D_DNase_seq_paired_HiSeqXTen.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
    
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_526_nor_17DPA_DNaseseq_5_SZ060316D_DNase_seq_paired_HiSeqXTen',
    name: 'Sample_01_526_nor_17DPA_DNaseseq_5_SZ060316D_DNase_seq_paired_HiSeqXTen',
    category: ['samples'],
    assemblyNames: ['Solanum_lycopersicum'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_526_nor_17DPA_DNaseseq_5_SZ060316D_DNase_seq_paired_HiSeqXTen.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_526_nor_17DPA_DNaseseq_5_SZ060316D_DNase_seq_paired_HiSeqXTen.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_527_nor_17DPA_DNaseseq_4_SZ060316D_DNase_seq_paired_HiSeqXTen',
    name: 'Sample_01_527_nor_17DPA_DNaseseq_4_SZ060316D_DNase_seq_paired_HiSeqXTen',
    category: ['samples'],
    assemblyNames: ['Solanum_lycopersicum'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_527_nor_17DPA_DNaseseq_4_SZ060316D_DNase_seq_paired_HiSeqXTen.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_527_nor_17DPA_DNaseseq_4_SZ060316D_DNase_seq_paired_HiSeqXTen.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_528_nor_17DPA_DNaseseq_3_SZ060316D_DNase_seq_paired_HiSeqXTen',
    name: 'Sample_01_528_nor_17DPA_DNaseseq_3_SZ060316D_DNase_seq_paired_HiSeqXTen',
    category: ['samples'],
    assemblyNames: ['Solanum_lycopersicum'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_528_nor_17DPA_DNaseseq_3_SZ060316D_DNase_seq_paired_HiSeqXTen.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_528_nor_17DPA_DNaseseq_3_SZ060316D_DNase_seq_paired_HiSeqXTen.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_529_nor_17DPA_DNaseseq_2_SZ015_DNase_seq_paired_HiSeqXTen',
    name: 'Sample_01_529_nor_17DPA_DNaseseq_2_SZ015_DNase_seq_paired_HiSeqXTen',
    category: ['samples'],
    assemblyNames: ['Solanum_lycopersicum'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_529_nor_17DPA_DNaseseq_2_SZ015_DNase_seq_paired_HiSeqXTen.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_529_nor_17DPA_DNaseseq_2_SZ015_DNase_seq_paired_HiSeqXTen.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_530_nor_17DPA_DNaseseq_1_SZ015_DNase_seq_paired_HiSeqXTen',
    name: 'Sample_01_530_nor_17DPA_DNaseseq_1_SZ015_DNase_seq_paired_HiSeqXTen',
    category: ['samples'],
    assemblyNames: ['Solanum_lycopersicum'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_530_nor_17DPA_DNaseseq_1_SZ015_DNase_seq_paired_HiSeqXTen.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_530_nor_17DPA_DNaseseq_1_SZ015_DNase_seq_paired_HiSeqXTen.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_531_Microtom_mature_Dnaseseq_6_SZ160123A_ChIP_Seq_paired_HiSeqXTen',
    name: 'Sample_01_531_Microtom_mature_Dnaseseq_6_SZ160123A_ChIP_Seq_paired_HiSeqXTen',
    category: ['samples'],
    assemblyNames: ['Solanum_lycopersicum'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_531_Microtom_mature_Dnaseseq_6_SZ160123A_ChIP_Seq_paired_HiSeqXTen.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_531_Microtom_mature_Dnaseseq_6_SZ160123A_ChIP_Seq_paired_HiSeqXTen.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_532_Microtom_mature_Dnaseseq_5_SZ160123A_ChIP_Seq_paired_HiSeqXTen',
    name: 'Sample_01_532_Microtom_mature_Dnaseseq_5_SZ160123A_ChIP_Seq_paired_HiSeqXTen',
    category: ['samples'],
    assemblyNames: ['Solanum_lycopersicum'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_532_Microtom_mature_Dnaseseq_5_SZ160123A_ChIP_Seq_paired_HiSeqXTen.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_532_Microtom_mature_Dnaseseq_5_SZ160123A_ChIP_Seq_paired_HiSeqXTen.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_533_Microtom_mature_Dnaseseq_4_SZ160123A_ChIP_Seq_paired_HiSeqXTen',
    name: 'Sample_01_533_Microtom_mature_Dnaseseq_4_SZ160123A_ChIP_Seq_paired_HiSeqXTen',
    category: ['samples'],
    assemblyNames: ['Solanum_lycopersicum'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_533_Microtom_mature_Dnaseseq_4_SZ160123A_ChIP_Seq_paired_HiSeqXTen.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_533_Microtom_mature_Dnaseseq_4_SZ160123A_ChIP_Seq_paired_HiSeqXTen.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_534_Microtom_mature_Dnaseseq_3_SZ160123A_ChIP_Seq_paired_HiSeqXTen',
    name: 'Sample_01_534_Microtom_mature_Dnaseseq_3_SZ160123A_ChIP_Seq_paired_HiSeqXTen',
    category: ['samples'],
    assemblyNames: ['Solanum_lycopersicum'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_534_Microtom_mature_Dnaseseq_3_SZ160123A_ChIP_Seq_paired_HiSeqXTen.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_534_Microtom_mature_Dnaseseq_3_SZ160123A_ChIP_Seq_paired_HiSeqXTen.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_535_Microtom_mature_Dnaseseq_2_Silin3392_2015_12_29_ChIP_Seq_single_HiSeq4000',
    name: 'Sample_01_535_Microtom_mature_Dnaseseq_2_Silin3392_2015_12_29_ChIP_Seq_single_HiSeq4000',
    category: ['samples'],
    assemblyNames: ['Solanum_lycopersicum'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_535_Microtom_mature_Dnaseseq_2_Silin3392_2015_12_29_ChIP_Seq_single_HiSeq4000.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_535_Microtom_mature_Dnaseseq_2_Silin3392_2015_12_29_ChIP_Seq_single_HiSeq4000.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
    
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_536_Microtom_mature_Dnaseseq_1_Silin3392_2015_12_29_ChIP_Seq_single_HiSeq4000',
    name: 'Sample_01_536_Microtom_mature_Dnaseseq_1_Silin3392_2015_12_29_ChIP_Seq_single_HiSeq4000',
    category: ['samples'],
    assemblyNames: ['Solanum_lycopersicum'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_536_Microtom_mature_Dnaseseq_1_Silin3392_2015_12_29_ChIP_Seq_single_HiSeq4000.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_536_Microtom_mature_Dnaseseq_1_Silin3392_2015_12_29_ChIP_Seq_single_HiSeq4000.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_537_Microtom_immature_Dnaseseq_5_SZ160123B_ChIP_Seq_single_HiSeq4000',
    name: 'Sample_01_537_Microtom_immature_Dnaseseq_5_SZ160123B_ChIP_Seq_single_HiSeq4000',
    category: ['samples'],
    assemblyNames: ['Solanum_lycopersicum'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_537_Microtom_immature_Dnaseseq_5_SZ160123B_ChIP_Seq_single_HiSeq4000.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_537_Microtom_immature_Dnaseseq_5_SZ160123B_ChIP_Seq_single_HiSeq4000.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_538_Microtom_immature_Dnaseseq_4_SZ160123B_ChIP_Seq_single_HiSeq4000',
    name: 'Sample_01_538_Microtom_immature_Dnaseseq_4_SZ160123B_ChIP_Seq_single_HiSeq4000',
    category: ['samples'],
    assemblyNames: ['Solanum_lycopersicum'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_538_Microtom_immature_Dnaseseq_4_SZ160123B_ChIP_Seq_single_HiSeq4000.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_538_Microtom_immature_Dnaseseq_4_SZ160123B_ChIP_Seq_single_HiSeq4000.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_539_Microtom_immature_Dnaseseq_3_SZ160123A_ChIP_Seq_paired_HiSeqXTen',
    name: 'Sample_01_539_Microtom_immature_Dnaseseq_3_SZ160123A_ChIP_Seq_paired_HiSeqXTen',
    category: ['samples'],
    assemblyNames: ['Solanum_lycopersicum'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_539_Microtom_immature_Dnaseseq_3_SZ160123A_ChIP_Seq_paired_HiSeqXTen.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_539_Microtom_immature_Dnaseseq_3_SZ160123A_ChIP_Seq_paired_HiSeqXTen.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_540_Microtom_immature_Dnaseseq_2_SZ160123A_ChIP_Seq_paired_HiSeqXTen',
    name: 'Sample_01_540_Microtom_immature_Dnaseseq_2_SZ160123A_ChIP_Seq_paired_HiSeqXTen',
    category: ['samples'],
    assemblyNames: ['Solanum_lycopersicum'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_540_Microtom_immature_Dnaseseq_2_SZ160123A_ChIP_Seq_paired_HiSeqXTen.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_540_Microtom_immature_Dnaseseq_2_SZ160123A_ChIP_Seq_paired_HiSeqXTen.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_541_Microtom_immature_Dnaseseq_1_SZ160123A_ChIP_Seq_paired_HiSeqXTen',
    name: 'Sample_01_541_Microtom_immature_Dnaseseq_1_SZ160123A_ChIP_Seq_paired_HiSeqXTen',
    category: ['samples'],
    assemblyNames: ['Solanum_lycopersicum'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_541_Microtom_immature_Dnaseseq_1_SZ160123A_ChIP_Seq_paired_HiSeqXTen.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_541_Microtom_immature_Dnaseseq_1_SZ160123A_ChIP_Seq_paired_HiSeqXTen.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_542_Lichun_leaf_DNaseseq_4_SZ003_DNase_seq_paired_HiSeqXTen',
    name: 'Sample_01_542_Lichun_leaf_DNaseseq_4_SZ003_DNase_seq_paired_HiSeqXTen',
    category: ['samples'],
    assemblyNames: ['Solanum_lycopersicum'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_542_Lichun_leaf_DNaseseq_4_SZ003_DNase_seq_paired_HiSeqXTen.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_542_Lichun_leaf_DNaseseq_4_SZ003_DNase_seq_paired_HiSeqXTen.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_543_Lichun_leaf_DNaseseq_3_SZ003_DNase_seq_paired_HiSeqXTen',
    name: 'Sample_01_543_Lichun_leaf_DNaseseq_3_SZ003_DNase_seq_paired_HiSeqXTen',
    category: ['samples'],
    assemblyNames: ['Solanum_lycopersicum'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_543_Lichun_leaf_DNaseseq_3_SZ003_DNase_seq_paired_HiSeqXTen.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_543_Lichun_leaf_DNaseseq_3_SZ003_DNase_seq_paired_HiSeqXTen.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_544_Lichun_leaf_DNaseseq_2_Silin3392_2015_12_29_DNase_seq_single_HiSeq4000',
    name: 'Sample_01_544_Lichun_leaf_DNaseseq_2_Silin3392_2015_12_29_DNase_seq_single_HiSeq4000',
    category: ['samples'],
    assemblyNames: ['Solanum_lycopersicum'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_544_Lichun_leaf_DNaseseq_2_Silin3392_2015_12_29_DNase_seq_single_HiSeq4000.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_544_Lichun_leaf_DNaseseq_2_Silin3392_2015_12_29_DNase_seq_single_HiSeq4000.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_545_Lichun_leaf_DNaseseq_1_Silin3392_2015_12_29_DNase_seq_single_HiSeq4000',
    name: 'Sample_01_545_Lichun_leaf_DNaseseq_1_Silin3392_2015_12_29_DNase_seq_single_HiSeq4000',
    category: ['samples'],
    assemblyNames: ['Solanum_lycopersicum'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_545_Lichun_leaf_DNaseseq_1_Silin3392_2015_12_29_DNase_seq_single_HiSeq4000.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_545_Lichun_leaf_DNaseseq_1_Silin3392_2015_12_29_DNase_seq_single_HiSeq4000.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
    
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_546_cnr_47DPA_DNaseseq_4_SZ060316D_DNase_seq_paired_HiSeqXTen',
    name: 'Sample_01_546_cnr_47DPA_DNaseseq_4_SZ060316D_DNase_seq_paired_HiSeqXTen',
    category: ['samples'],
    assemblyNames: ['Solanum_lycopersicum'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_546_cnr_47DPA_DNaseseq_4_SZ060316D_DNase_seq_paired_HiSeqXTen.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_546_cnr_47DPA_DNaseseq_4_SZ060316D_DNase_seq_paired_HiSeqXTen.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_547_cnr_47DPA_DNaseseq_3_SZ060316D_DNase_seq_paired_HiSeqXTen',
    name: 'Sample_01_547_cnr_47DPA_DNaseseq_3_SZ060316D_DNase_seq_paired_HiSeqXTen',
    category: ['samples'],
    assemblyNames: ['Solanum_lycopersicum'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_547_cnr_47DPA_DNaseseq_3_SZ060316D_DNase_seq_paired_HiSeqXTen.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_547_cnr_47DPA_DNaseseq_3_SZ060316D_DNase_seq_paired_HiSeqXTen.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_548_cnr_47DPA_DNaseseq_2_SZ060316D_DNase_seq_paired_HiSeqXTen',
    name: 'Sample_01_548_cnr_47DPA_DNaseseq_2_SZ060316D_DNase_seq_paired_HiSeqXTen',
    category: ['samples'],
    assemblyNames: ['Solanum_lycopersicum'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_548_cnr_47DPA_DNaseseq_2_SZ060316D_DNase_seq_paired_HiSeqXTen.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_548_cnr_47DPA_DNaseseq_2_SZ060316D_DNase_seq_paired_HiSeqXTen.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_549_cnr_47DPA_DNaseseq_1_SZ060316D_DNase_seq_paired_HiSeqXTen',
    name: 'Sample_01_549_cnr_47DPA_DNaseseq_1_SZ060316D_DNase_seq_paired_HiSeqXTen',
    category: ['samples'],
    assemblyNames: ['Solanum_lycopersicum'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_549_cnr_47DPA_DNaseseq_1_SZ060316D_DNase_seq_paired_HiSeqXTen.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_549_cnr_47DPA_DNaseseq_1_SZ060316D_DNase_seq_paired_HiSeqXTen.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_550_cnr_leaf_DNaseseq_2_SZ060316D_DNase_seq_paired_HiSeqXTen',
    name: 'Sample_01_550_cnr_leaf_DNaseseq_2_SZ060316D_DNase_seq_paired_HiSeqXTen',
    category: ['samples'],
    assemblyNames: ['Solanum_lycopersicum'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_550_cnr_leaf_DNaseseq_2_SZ060316D_DNase_seq_paired_HiSeqXTen.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_550_cnr_leaf_DNaseseq_2_SZ060316D_DNase_seq_paired_HiSeqXTen.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_551_cnr_leaf_DNaseseq_1_SZ011_DNase_seq_paired_HiSeqXTen',
    name: 'Sample_01_551_cnr_leaf_DNaseseq_1_SZ011_DNase_seq_paired_HiSeqXTen',
    category: ['samples'],
    assemblyNames: ['Solanum_lycopersicum'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_551_cnr_leaf_DNaseseq_1_SZ011_DNase_seq_paired_HiSeqXTen.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_551_cnr_leaf_DNaseseq_1_SZ011_DNase_seq_paired_HiSeqXTen.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_552_cnr_17DPA_DNaseseq_2_SZ060316D_DNase_seq_paired_HiSeqXTen',
    name: 'Sample_01_552_cnr_17DPA_DNaseseq_2_SZ060316D_DNase_seq_paired_HiSeqXTen',
    category: ['samples'],
    assemblyNames: ['Solanum_lycopersicum'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_552_cnr_17DPA_DNaseseq_2_SZ060316D_DNase_seq_paired_HiSeqXTen.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_552_cnr_17DPA_DNaseseq_2_SZ060316D_DNase_seq_paired_HiSeqXTen.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_553_cnr_17DPA_DNaseseq_1_SZ060316D_DNase_seq_paired_HiSeqXTen',
    name: 'Sample_01_553_cnr_17DPA_DNaseseq_1_SZ060316D_DNase_seq_paired_HiSeqXTen',
    category: ['samples'],
    assemblyNames: ['Solanum_lycopersicum'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_553_cnr_17DPA_DNaseseq_1_SZ060316D_DNase_seq_paired_HiSeqXTen.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_553_cnr_17DPA_DNaseseq_1_SZ060316D_DNase_seq_paired_HiSeqXTen.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_554_AC_47DPA_DNaseseq_3_SZ021_DNase_seq_paired_HiSeqXTen',
    name: 'Sample_01_554_AC_47DPA_DNaseseq_3_SZ021_DNase_seq_paired_HiSeqXTen',
    category: ['samples'],
    assemblyNames: ['Solanum_lycopersicum'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_554_AC_47DPA_DNaseseq_3_SZ021_DNase_seq_paired_HiSeqXTen.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_554_AC_47DPA_DNaseseq_3_SZ021_DNase_seq_paired_HiSeqXTen.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_555_AC_47DPA_DNaseseq_2_SZ008_DNase_seq_paired_HiSeqXTen',
    name: 'Sample_01_555_AC_47DPA_DNaseseq_2_SZ008_DNase_seq_paired_HiSeqXTen',
    category: ['samples'],
    assemblyNames: ['Solanum_lycopersicum'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_555_AC_47DPA_DNaseseq_2_SZ008_DNase_seq_paired_HiSeqXTen.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_555_AC_47DPA_DNaseseq_2_SZ008_DNase_seq_paired_HiSeqXTen.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
    
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_556_AC_47DPA_DNaseseq_1_SZ008_DNase_seq_paired_HiSeqXTen',
    name: 'Sample_01_556_AC_47DPA_DNaseseq_1_SZ008_DNase_seq_paired_HiSeqXTen',
    category: ['samples'],
    assemblyNames: ['Solanum_lycopersicum'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_556_AC_47DPA_DNaseseq_1_SZ008_DNase_seq_paired_HiSeqXTen.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_556_AC_47DPA_DNaseseq_1_SZ008_DNase_seq_paired_HiSeqXTen.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_557_AC_leaf_DNaseseq_4_SZ240316D_DNase_seq_paired_HiSeqXTen',
    name: 'Sample_01_557_AC_leaf_DNaseseq_4_SZ240316D_DNase_seq_paired_HiSeqXTen',
    category: ['samples'],
    assemblyNames: ['Solanum_lycopersicum'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_557_AC_leaf_DNaseseq_4_SZ240316D_DNase_seq_paired_HiSeqXTen.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_557_AC_leaf_DNaseseq_4_SZ240316D_DNase_seq_paired_HiSeqXTen.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_558_AC_leaf_DNaseseq_3_SZ240316D_DNase_seq_paired_HiSeqXTen',
    name: 'Sample_01_558_AC_leaf_DNaseseq_3_SZ240316D_DNase_seq_paired_HiSeqXTen',
    category: ['samples'],
    assemblyNames: ['Solanum_lycopersicum'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_558_AC_leaf_DNaseseq_3_SZ240316D_DNase_seq_paired_HiSeqXTen.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_558_AC_leaf_DNaseseq_3_SZ240316D_DNase_seq_paired_HiSeqXTen.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_559_AC_leaf_DNaseseq_2_SZ240316D_DNase_seq_paired_HiSeqXTen',
    name: 'Sample_01_559_AC_leaf_DNaseseq_2_SZ240316D_DNase_seq_paired_HiSeqXTen',
    category: ['samples'],
    assemblyNames: ['Solanum_lycopersicum'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_559_AC_leaf_DNaseseq_2_SZ240316D_DNase_seq_paired_HiSeqXTen.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_559_AC_leaf_DNaseseq_2_SZ240316D_DNase_seq_paired_HiSeqXTen.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_560_AC_leaf_DNaseseq_1_SZ240316D_DNase_seq_paired_HiSeqXTen',
    name: 'Sample_01_560_AC_leaf_DNaseseq_1_SZ240316D_DNase_seq_paired_HiSeqXTen',
    category: ['samples'],
    assemblyNames: ['Solanum_lycopersicum'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_560_AC_leaf_DNaseseq_1_SZ240316D_DNase_seq_paired_HiSeqXTen.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_560_AC_leaf_DNaseseq_1_SZ240316D_DNase_seq_paired_HiSeqXTen.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_561_AC_leaf_DNaseseq_7_SZ060_DNase_seq_paired_HiSeqXTen',
    name: 'Sample_01_561_AC_leaf_DNaseseq_7_SZ060_DNase_seq_paired_HiSeqXTen',
    category: ['samples'],
    assemblyNames: ['Solanum_lycopersicum'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_561_AC_leaf_DNaseseq_7_SZ060_DNase_seq_paired_HiSeqXTen.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_561_AC_leaf_DNaseseq_7_SZ060_DNase_seq_paired_HiSeqXTen.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_562_AC_leaf_DNaseseq_6_SZ060_DNase_seq_paired_HiSeqXTen',
    name: 'Sample_01_562_AC_leaf_DNaseseq_6_SZ060_DNase_seq_paired_HiSeqXTen',
    category: ['samples'],
    assemblyNames: ['Solanum_lycopersicum'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_562_AC_leaf_DNaseseq_6_SZ060_DNase_seq_paired_HiSeqXTen.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_562_AC_leaf_DNaseseq_6_SZ060_DNase_seq_paired_HiSeqXTen.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_563_AC_leaf_DNaseseq_5_SZ060_DNase_seq_paired_HiSeqXTen',
    name: 'Sample_01_563_AC_leaf_DNaseseq_5_SZ060_DNase_seq_paired_HiSeqXTen',
    category: ['samples'],
    assemblyNames: ['Solanum_lycopersicum'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_563_AC_leaf_DNaseseq_5_SZ060_DNase_seq_paired_HiSeqXTen.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_563_AC_leaf_DNaseseq_5_SZ060_DNase_seq_paired_HiSeqXTen.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_564_AC_17DPA_DNaseseq_2_SZ240316D_DNase_seq_paired_HiSeqXTen',
    name: 'Sample_01_564_AC_17DPA_DNaseseq_2_SZ240316D_DNase_seq_paired_HiSeqXTen',
    category: ['samples'],
    assemblyNames: ['Solanum_lycopersicum'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_564_AC_17DPA_DNaseseq_2_SZ240316D_DNase_seq_paired_HiSeqXTen.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_564_AC_17DPA_DNaseseq_2_SZ240316D_DNase_seq_paired_HiSeqXTen.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_565_AC_17DPA_DNaseseq_1_SZ240316D_DNase_seq_paired_HiSeqXTen',
    name: 'Sample_01_565_AC_17DPA_DNaseseq_1_SZ240316D_DNase_seq_paired_HiSeqXTen',
    category: ['samples'],
    assemblyNames: ['Solanum_lycopersicum'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_565_AC_17DPA_DNaseseq_1_SZ240316D_DNase_seq_paired_HiSeqXTen.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_565_AC_17DPA_DNaseseq_1_SZ240316D_DNase_seq_paired_HiSeqXTen.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
    
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_566_AC_17DPA_DNaseseq_PH177_1',
    name: 'Sample_01_566_AC_17DPA_DNaseseq_PH177_1',
    category: ['samples'],
    assemblyNames: ['Solanum_lycopersicum'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_566_AC_17DPA_DNaseseq_PH177_1.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_566_AC_17DPA_DNaseseq_PH177_1.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_567_cnr_47DPA_DNaseseq_PH158_1',
    name: 'Sample_01_567_cnr_47DPA_DNaseseq_PH158_1',
    category: ['samples'],
    assemblyNames: ['Solanum_lycopersicum'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_567_cnr_47DPA_DNaseseq_PH158_1.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_567_cnr_47DPA_DNaseseq_PH158_1.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_568_nor_47DPA_DNaseseq_PH177_1',
    name: 'Sample_01_568_nor_47DPA_DNaseseq_PH177_1',
    category: ['samples'],
    assemblyNames: ['Solanum_lycopersicum'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_568_nor_47DPA_DNaseseq_PH177_1.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_568_nor_47DPA_DNaseseq_PH177_1.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_569_cnr_47DPA_DNaseseq_PH165_1',
    name: 'Sample_01_569_cnr_47DPA_DNaseseq_PH165_1',
    category: ['samples'],
    assemblyNames: ['Solanum_lycopersicum'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_569_cnr_47DPA_DNaseseq_PH165_1.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_569_cnr_47DPA_DNaseseq_PH165_1.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_570_cnr_47DPA_DNaseseq_PH158_2',
    name: 'Sample_01_570_cnr_47DPA_DNaseseq_PH158_2',
    category: ['samples'],
    assemblyNames: ['Solanum_lycopersicum'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_570_cnr_47DPA_DNaseseq_PH158_2.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_570_cnr_47DPA_DNaseseq_PH158_2.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_571_nor_47DPA_DNaseseq_PH165_1',
    name: 'Sample_01_571_nor_47DPA_DNaseseq_PH165_1',
    category: ['samples'],
    assemblyNames: ['Solanum_lycopersicum'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_571_nor_47DPA_DNaseseq_PH165_1.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_571_nor_47DPA_DNaseseq_PH165_1.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_572_cnr_47DPA_DNaseseq_PH177_1',
    name: 'Sample_01_572_cnr_47DPA_DNaseseq_PH177_1',
    category: ['samples'],
    assemblyNames: ['Solanum_lycopersicum'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_572_cnr_47DPA_DNaseseq_PH177_1.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_572_cnr_47DPA_DNaseseq_PH177_1.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_573_AC_17DPA_DNaseseq_PH165_1',
    name: 'Sample_01_573_AC_17DPA_DNaseseq_PH165_1',
    category: ['samples'],
    assemblyNames: ['Solanum_lycopersicum'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_573_AC_17DPA_DNaseseq_PH165_1.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_573_AC_17DPA_DNaseseq_PH165_1.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_574_MM_20_DPA',
    name: 'Sample_01_574_MM_20_DPA',
    category: ['samples'],
    assemblyNames: ['Solanum_lycopersicum'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_574_MM_20_DPA.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_574_MM_20_DPA.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_575_MM_break_fruit',
    name: 'Sample_01_575_MM_break_fruit',
    category: ['samples'],
    assemblyNames: ['Solanum_lycopersicum'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_575_MM_break_fruit.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_575_MM_break_fruit.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
    
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_576_MM_20_DPA_rep2',
    name: 'Sample_01_576_MM_20_DPA_rep2',
    category: ['samples'],
    assemblyNames: ['Solanum_lycopersicum'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_576_MM_20_DPA_rep2.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_576_MM_20_DPA_rep2.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
      
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_577_MM_break_fruit_rep2',
    name: 'Sample_01_577_MM_break_fruit_rep2',
    category: ['samples'],
    assemblyNames: ['Solanum_lycopersicum'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_577_MM_break_fruit_rep2.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_577_MM_break_fruit_rep2.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
      
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_578_DS_naked',
    name: 'Sample_01_578_DS_naked',
    category: ['samples'],
    assemblyNames: ['Solanum_lycopersicum'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_578_DS_naked.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_578_DS_naked.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
]// JavaScript Document