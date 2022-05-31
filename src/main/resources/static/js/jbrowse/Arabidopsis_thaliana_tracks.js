import {GetStaticFile} from "../api.js";

export var tracks = [
  {
    type: 'BasicTrack',
    trackId:
      'gene',
    name: 'gene',
    category: ['Genes'],
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'Gff3TabixAdapter',
      gffGzLocation: {
        uri:
          GetStaticFile+"/data/Arabidopsis_thaliana/gff3/gene.gff3.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/Arabidopsis_thaliana/gff3/gene.gff3.gz.tbi"
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
      'miRNA',
    name: 'miRNA',
    category: ['RNA'],
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'Gff3TabixAdapter',
      gffGzLocation: {
        uri:
          GetStaticFile+"/data/Arabidopsis_thaliana/gff3/miRNA.gff3.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/Arabidopsis_thaliana/gff3/miRNA.gff3.gz.tbi"
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
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'Gff3TabixAdapter',
      gffGzLocation: {
        uri:
          GetStaticFile+"/data/Arabidopsis_thaliana/gff3/tRNA.gff3.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/Arabidopsis_thaliana/gff3/tRNA.gff3.gz.tbi"
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
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'Gff3TabixAdapter',
      gffGzLocation: {
        uri:
          GetStaticFile+"/data/Arabidopsis_thaliana/gff3/lnc_RNA.gff3.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/Arabidopsis_thaliana/gff3/lnc_RNA.gff3.gz.tbi"
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
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'Gff3TabixAdapter',
      gffGzLocation: {
        uri:
          GetStaticFile+"/data/Arabidopsis_thaliana/gff3/pre_miRNA.gff3.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/Arabidopsis_thaliana/gff3/pre_miRNA.gff3.gz.tbi"
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
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'Gff3TabixAdapter',
      gffGzLocation: {
        uri:
          GetStaticFile+"/data/Arabidopsis_thaliana/gff3/RNase_MRP_RNA.gff3.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/Arabidopsis_thaliana/gff3/RNase_MRP_RNA.gff3.gz.tbi"
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
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'Gff3TabixAdapter',
      gffGzLocation: {
        uri:
          GetStaticFile+"/data/Arabidopsis_thaliana/gff3/rRNA.gff3.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/Arabidopsis_thaliana/gff3/rRNA.gff3.gz.tbi"
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
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'Gff3TabixAdapter',
      gffGzLocation: {
        uri:
          GetStaticFile+"/data/Arabidopsis_thaliana/gff3/snoRNA.gff3.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/Arabidopsis_thaliana/gff3/snoRNA.gff3.gz.tbi"
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
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'Gff3TabixAdapter',
      gffGzLocation: {
        uri:
          GetStaticFile+"/data/Arabidopsis_thaliana/gff3/snRNA.gff3.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/Arabidopsis_thaliana/gff3/snRNA.gff3.gz.tbi"
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
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'Gff3TabixAdapter',
      gffGzLocation: {
        uri:
          GetStaticFile+"/data/Arabidopsis_thaliana/gff3/SRP_RNA.gff3.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/Arabidopsis_thaliana/gff3/SRP_RNA.gff3.gz.tbi"
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
      'Sample_00_001_At_root_tip_ATAC_rep1',
    name: 'Sample_00_001_At_root_tip_ATAC_rep1',
    category: ['samples'],
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_001_At_root_tip_ATAC_rep1.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_001_At_root_tip_ATAC_rep1.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_002_At_root_tip_ATAC_rep2',
    name: 'Sample_00_002_At_root_tip_ATAC_rep2',
    category: ['samples'],
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_002_At_root_tip_ATAC_rep2.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_002_At_root_tip_ATAC_rep2.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_003_At_root_tip_ATAC_Crude_rep1',
    name: 'Sample_00_003_At_root_tip_ATAC_Crude_rep1',
    category: ['samples'],
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_003_At_root_tip_ATAC_Crude_rep1.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_003_At_root_tip_ATAC_Crude_rep1.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_004_At_root_tip_ATAC_Crude_rep2',
    name: 'Sample_00_004_At_root_tip_ATAC_Crude_rep2',
    category: ['samples'],
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_004_At_root_tip_ATAC_Crude_rep2.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_004_At_root_tip_ATAC_Crude_rep2.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_005_At_root_non_hair_cell_ATAC_rep1',
    name: 'Sample_00_005_At_root_non_hair_cell_ATAC_rep1',
    category: ['samples'],
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_005_At_root_non_hair_cell_ATAC_rep1.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_005_At_root_non_hair_cell_ATAC_rep1.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_006_At_root_non_hair_cell_ATAC_rep2',
    name: 'Sample_00_006_At_root_non_hair_cell_ATAC_rep2',
    category: ['samples'],
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_006_At_root_non_hair_cell_ATAC_rep2.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_006_At_root_non_hair_cell_ATAC_rep2.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_007_At_root_hair_cell_ATAC_rep1',
    name: 'Sample_00_007_At_root_hair_cell_ATAC_rep1',
    category: ['samples'],
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_007_At_root_hair_cell_ATAC_rep1.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_007_At_root_hair_cell_ATAC_rep1.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_008_At_root_hair_cell_ATAC_rep2',
    name: 'Sample_00_008_At_root_hair_cell_ATAC_rep2',
    category: ['samples'],
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_008_At_root_hair_cell_ATAC_rep2.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_008_At_root_hair_cell_ATAC_rep2.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_009_At_genomic_DNA_ATAC',
    name: 'Sample_00_009_At_genomic_DNA_ATAC',
    category: ['samples'],
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_009_At_genomic_DNA_ATAC.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_009_At_genomic_DNA_ATAC.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_010_At_stem_cell_ATAC_rep1',
    name: 'Sample_00_010_At_stem_cell_ATAC_rep1',
    category: ['samples'],
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_010_At_stem_cell_ATAC_rep1.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_010_At_stem_cell_ATAC_rep1.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_011_At_stem_cell_ATAC_rep2',
    name: 'Sample_00_011_At_stem_cell_ATAC_rep2',
    category: ['samples'],
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_011_At_stem_cell_ATAC_rep2.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_011_At_stem_cell_ATAC_rep2.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_012_At_stem_cell_ATAC_rep3',
    name: 'Sample_00_012_At_stem_cell_ATAC_rep3',
    category: ['samples'],
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_012_At_stem_cell_ATAC_rep3.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_012_At_stem_cell_ATAC_rep3.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_013_At_mesophyll_cell_ATAC_rep1',
    name: 'Sample_00_013_At_mesophyll_cell_ATAC_rep1',
    category: ['samples'],
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_013_At_mesophyll_cell_ATAC_rep1.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_013_At_mesophyll_cell_ATAC_rep1.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
    
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_014_At_mesophyll_cell_ATAC_rep2',
    name: 'Sample_00_014_At_mesophyll_cell_ATAC_rep2',
    category: ['samples'],
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_014_At_mesophyll_cell_ATAC_rep2.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_014_At_mesophyll_cell_ATAC_rep2.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_015_At_mesophyll_cell_ATAC_rep3',
    name: 'Sample_00_015_At_mesophyll_cell_ATAC_rep3',
    category: ['samples'],
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_015_At_mesophyll_cell_ATAC_rep3.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_015_At_mesophyll_cell_ATAC_rep3.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_016_ATACseq_suvh1_3_rep1',
    name: 'Sample_00_016_ATACseq_suvh1_3_rep1',
    category: ['samples'],
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_016_ATACseq_suvh1_3_rep1.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_016_ATACseq_suvh1_3_rep1.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_017_ATACseq_suvh1_3_rep2',
    name: 'Sample_00_017_ATACseq_suvh1_3_rep2',
    category: ['samples'],
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_017_ATACseq_suvh1_3_rep2.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_017_ATACseq_suvh1_3_rep2.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_018_ATACseq_WT_rep1',
    name: 'Sample_00_018_ATACseq_WT_rep1',
    category: ['samples'],
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_018_ATACseq_WT_rep1.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_018_ATACseq_WT_rep1.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_019_ATACseq_WT_rep2',
    name: 'Sample_00_019_ATACseq_WT_rep2',
    category: ['samples'],
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_019_ATACseq_WT_rep2.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_019_ATACseq_WT_rep2.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_020_ATAC-Seq_of_control_treated_roots_replicate_1',
    name: 'Sample_00_020_ATAC-Seq_of_control_treated_roots_replicate_1',
    category: ['samples'],
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_020_ATAC-Seq_of_control_treated_roots_replicate_1.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_020_ATAC-Seq_of_control_treated_roots_replicate_1.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_021_ATAC-Seq_of_control_treated_roots_replicate_2',
    name: 'Sample_00_021_ATAC-Seq_of_control_treated_roots_replicate_2',
    category: ['samples'],
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_021_ATAC-Seq_of_control_treated_roots_replicate_2.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_021_ATAC-Seq_of_control_treated_roots_replicate_2.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_022_ATAC-Seq_of_control_treated_roots_replicate_3',
    name: 'Sample_00_022_ATAC-Seq_of_control_treated_roots_replicate_3',
    category: ['samples'],
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_022_ATAC-Seq_of_control_treated_roots_replicate_3.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_022_ATAC-Seq_of_control_treated_roots_replicate_3.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_023_ATAC-Seq_of_control_treated_roots_replicate_4',
    name: 'Sample_00_023_ATAC-Seq_of_control_treated_roots_replicate_4',
    category: ['samples'],
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_023_ATAC-Seq_of_control_treated_roots_replicate_4.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_023_ATAC-Seq_of_control_treated_roots_replicate_4.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
    
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_024_ATAC-Seq_of_BA_treated_roots_replicate_1',
    name: 'Sample_00_024_ATAC-Seq_of_BA_treated_roots_replicate_1',
    category: ['samples'],
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_024_ATAC-Seq_of_BA_treated_roots_replicate_1.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_024_ATAC-Seq_of_BA_treated_roots_replicate_1.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_025_ATAC-Seq_of_BA_treated_roots_replicate_2',
    name: 'Sample_00_025_ATAC-Seq_of_BA_treated_roots_replicate_2',
    category: ['samples'],
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_025_ATAC-Seq_of_BA_treated_roots_replicate_2.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_025_ATAC-Seq_of_BA_treated_roots_replicate_2.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_026_ATAC-Seq_of_BA_treated_roots_replicate_3',
    name: 'Sample_00_026_ATAC-Seq_of_BA_treated_roots_replicate_3',
    category: ['samples'],
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_026_ATAC-Seq_of_BA_treated_roots_replicate_3.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_026_ATAC-Seq_of_BA_treated_roots_replicate_3.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_027_ATAC-Seq_of_BA_treated_roots_replicate_4',
    name: 'Sample_00_027_ATAC-Seq_of_BA_treated_roots_replicate_4',
    category: ['samples'],
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_027_ATAC-Seq_of_BA_treated_roots_replicate_4.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_027_ATAC-Seq_of_BA_treated_roots_replicate_4.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_028_ATAC-Seq_of_control_treated_shoots_replicate_1',
    name: 'Sample_00_028_ATAC-Seq_of_control_treated_shoots_replicate_1',
    category: ['samples'],
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_028_ATAC-Seq_of_control_treated_shoots_replicate_1.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_028_ATAC-Seq_of_control_treated_shoots_replicate_1.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_029_ATAC-Seq_of_control_treated_shoots_replicate_2',
    name: 'Sample_00_029_ATAC-Seq_of_control_treated_shoots_replicate_2',
    category: ['samples'],
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_029_ATAC-Seq_of_control_treated_shoots_replicate_2.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_029_ATAC-Seq_of_control_treated_shoots_replicate_2.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_030_ATAC-Seq_of_BA_treated_shoots_replicate_1',
    name: 'Sample_00_030_ATAC-Seq_of_BA_treated_shoots_replicate_1',
    category: ['samples'],
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_030_ATAC-Seq_of_BA_treated_shoots_replicate_1.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_030_ATAC-Seq_of_BA_treated_shoots_replicate_1.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_031_ATAC-Seq_of_BA_treated_shoots_replicate_2',
    name: 'Sample_00_031_ATAC-Seq_of_BA_treated_shoots_replicate_2',
    category: ['samples'],
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_031_ATAC-Seq_of_BA_treated_shoots_replicate_2.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_031_ATAC-Seq_of_BA_treated_shoots_replicate_2.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_032_ATAC-Seq_of_control_treated_arr1_10_12_roots_replicate_1',
    name: 'Sample_00_032_ATAC-Seq_of_control_treated_arr1_10_12_roots_replicate_1',
    category: ['samples'],
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_032_ATAC-Seq_of_control_treated_arr1_10_12_roots_replicate_1.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_032_ATAC-Seq_of_control_treated_arr1_10_12_roots_replicate_1.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_033_ATAC-Seq_of_control_treated_arr1_10_12_roots_replicate_2',
    name: 'Sample_00_033_ATAC-Seq_of_control_treated_arr1_10_12_roots_replicate_2',
    category: ['samples'],
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_033_ATAC-Seq_of_control_treated_arr1_10_12_roots_replicate_2.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_033_ATAC-Seq_of_control_treated_arr1_10_12_roots_replicate_2.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
    
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_034_ATAC-Seq_of_BA_treated_arr1_10_12_roots_replicate_1',
    name: 'Sample_00_034_ATAC-Seq_of_BA_treated_arr1_10_12_roots_replicate_1',
    category: ['samples'],
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_034_ATAC-Seq_of_BA_treated_arr1_10_12_roots_replicate_1.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_034_ATAC-Seq_of_BA_treated_arr1_10_12_roots_replicate_1.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_035_ATAC-Seq_of_BA_treated_arr1_10_12_roots_replicate_2',
    name: 'Sample_00_035_ATAC-Seq_of_BA_treated_arr1_10_12_roots_replicate_2',
    category: ['samples'],
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_035_ATAC-Seq_of_BA_treated_arr1_10_12_roots_replicate_2.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_035_ATAC-Seq_of_BA_treated_arr1_10_12_roots_replicate_2.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_036_GFP+_rep1',
    name: 'Sample_00_036_GFP+_rep1',
    category: ['samples'],
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_036_GFP+_rep1.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_036_GFP+_rep1.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_037_GFP+_rep2',
    name: 'Sample_00_037_GFP+_rep2',
    category: ['samples'],
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_037_GFP+_rep2.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_037_GFP+_rep2.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_038_GFP+_rep3',
    name: 'Sample_00_038_GFP+_rep3',
    category: ['samples'],
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_038_GFP+_rep3.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_038_GFP+_rep3.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_039_GFP-_rep1',
    name: 'Sample_00_039_GFP-_rep1',
    category: ['samples'],
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_039_GFP-_rep1.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_039_GFP-_rep1.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_040_GFP-_rep2',
    name: 'Sample_00_040_GFP-_rep2',
    category: ['samples'],
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_040_GFP-_rep2.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_040_GFP-_rep2.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_041_GFP-_rep3',
    name: 'Sample_00_041_GFP-_rep3',
    category: ['samples'],
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_041_GFP-_rep3.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_041_GFP-_rep3.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_042_Control1',
    name: 'Sample_00_042_Control1',
    category: ['samples'],
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_042_Control1.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_042_Control1.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_043_Control2',
    name: 'Sample_00_043_Control2',
    category: ['samples'],
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_043_Control2.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_043_Control2.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
    
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_044_Root_ATAC_seq_Lib_1',
    name: 'Sample_00_044_Root_ATAC_seq_Lib_1',
    category: ['samples'],
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_044_Root_ATAC_seq_Lib_1.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_044_Root_ATAC_seq_Lib_1.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_045_Root_ATAC_seq_Lib_2',
    name: 'Sample_00_045_Root_ATAC_seq_Lib_2',
    category: ['samples'],
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_045_Root_ATAC_seq_Lib_2.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_045_Root_ATAC_seq_Lib_2.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_046_Root_ATAC_seq_Lib_3',
    name: 'Sample_00_046_Root_ATAC_seq_Lib_3',
    category: ['samples'],
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_046_Root_ATAC_seq_Lib_3.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_046_Root_ATAC_seq_Lib_3.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_047_ATAC-seq_1R_Rep_1',
    name: 'Sample_00_047_ATAC-seq_1R_Rep_1',
    category: ['samples'],
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_047_ATAC-seq_1R_Rep_1.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_047_ATAC-seq_1R_Rep_1.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_048_ATAC-seq_1R_Rep_2',
    name: 'Sample_00_048_ATAC-seq_1R_Rep_2',
    category: ['samples'],
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_048_ATAC-seq_1R_Rep_2.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_048_ATAC-seq_1R_Rep_2.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_049_ATAC-seq_2NS_Rep_1',
    name: 'Sample_00_049_ATAC-seq_2NS_Rep_1',
    category: ['samples'],
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_049_ATAC-seq_2NS_Rep_1.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_049_ATAC-seq_2NS_Rep_1.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_050_ATAC-seq_2HS_Rep_1',
    name: 'Sample_00_050_ATAC-seq_2HS_Rep_1',
    category: ['samples'],
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_050_ATAC-seq_2HS_Rep_1.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_050_ATAC-seq_2HS_Rep_1.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_051_ATAC-seq_9NS_Rep_1',
    name: 'Sample_00_051_ATAC-seq_9NS_Rep_1',
    category: ['samples'],
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_051_ATAC-seq_9NS_Rep_1.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_051_ATAC-seq_9NS_Rep_1.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_052_ATAC-seq_9HS_Rep_1',
    name: 'Sample_00_052_ATAC-seq_9HS_Rep_1',
    category: ['samples'],
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_052_ATAC-seq_9HS_Rep_1.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_052_ATAC-seq_9HS_Rep_1.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_053_ATAC-seq_2NS_Rep_2',
    name: 'Sample_00_053_ATAC-seq_2NS_Rep_2',
    category: ['samples'],
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_053_ATAC-seq_2NS_Rep_2.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_053_ATAC-seq_2NS_Rep_2.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
    
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_054_ATAC-seq_2HS_Rep_2',
    name: 'Sample_00_054_ATAC-seq_2HS_Rep_2',
    category: ['samples'],
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_054_ATAC-seq_2HS_Rep_2.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_054_ATAC-seq_2HS_Rep_2.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_055_ATAC-seq_9NS_Rep_2',
    name: 'Sample_00_055_ATAC-seq_9NS_Rep_2',
    category: ['samples'],
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_055_ATAC-seq_9NS_Rep_2.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_055_ATAC-seq_9NS_Rep_2.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_056_ATAC-seq_9HS_Rep_2',
    name: 'Sample_00_056_ATAC-seq_9HS_Rep_2',
    category: ['samples'],
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_056_ATAC-seq_9HS_Rep_2.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_056_ATAC-seq_9HS_Rep_2.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_057_ATAC_Arabidopsis_7days_leaf_rep1',
    name: 'Sample_00_057_ATAC_Arabidopsis_7days_leaf_rep1',
    category: ['samples'],
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_057_ATAC_Arabidopsis_7days_leaf_rep1.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_057_ATAC_Arabidopsis_7days_leaf_rep1.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_058_ATAC_Arabidopsis_7days_leaf_rep2',
    name: 'Sample_00_058_ATAC_Arabidopsis_7days_leaf_rep2',
    category: ['samples'],
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_058_ATAC_Arabidopsis_7days_leaf_rep2.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_058_ATAC_Arabidopsis_7days_leaf_rep2.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_059_ATAC_Arabidopsis_7days_leaf_Input',
    name: 'Sample_00_059_ATAC_Arabidopsis_7days_leaf_Input',
    category: ['samples'],
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_059_ATAC_Arabidopsis_7days_leaf_Input.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_059_ATAC_Arabidopsis_7days_leaf_Input.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_060_atac_col0_1',
    name: 'Sample_00_060_atac_col0_1',
    category: ['samples'],
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_060_atac_col0_1.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_060_atac_col0_1.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_061_atac_col0_2',
    name: 'Sample_00_061_atac_col0_2',
    category: ['samples'],
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_061_atac_col0_2.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_061_atac_col0_2.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_062_atac_bmi1abc_1',
    name: 'Sample_00_062_atac_bmi1abc_1',
    category: ['samples'],
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_062_atac_bmi1abc_1.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_062_atac_bmi1abc_1.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_063_atac_bmi1abc_2',
    name: 'Sample_00_063_atac_bmi1abc_2',
    category: ['samples'],
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_063_atac_bmi1abc_2.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_063_atac_bmi1abc_2.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
    
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_064_atac_clfswn_1',
    name: 'Sample_00_064_atac_clfswn_1',
    category: ['samples'],
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_064_atac_clfswn_1.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_064_atac_clfswn_1.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_065_atac_clfswn_2',
    name: 'Sample_00_065_atac_clfswn_2',
    category: ['samples'],
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_065_atac_clfswn_2.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_065_atac_clfswn_2.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_066_atac_emf1_1',
    name: 'Sample_00_066_atac_emf1_1',
    category: ['samples'],
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_066_atac_emf1_1.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_066_atac_emf1_1.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_067_atac_emf1_2',
    name: 'Sample_00_067_atac_emf1_2',
    category: ['samples'],
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_067_atac_emf1_2.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_067_atac_emf1_2.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_068_atac_lhp1_1',
    name: 'Sample_00_068_atac_lhp1_1',
    category: ['samples'],
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_068_atac_lhp1_1.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_068_atac_lhp1_1.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_069_atac_lhp1_2',
    name: 'Sample_00_069_atac_lhp1_2',
    category: ['samples'],
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_069_atac_lhp1_2.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_069_atac_lhp1_2.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_070_atac_ring1ab_1',
    name: 'Sample_00_070_atac_ring1ab_1',
    category: ['samples'],
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_070_atac_ring1ab_1.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_070_atac_ring1ab_1.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_071_atac_ring1ab_2',
    name: 'Sample_00_071_atac_ring1ab_2',
    category: ['samples'],
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_071_atac_ring1ab_2.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_071_atac_ring1ab_2.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_072_Col-0_50k_seedling_nuclei_FANS-ATAC-seq_rep1',
    name: 'Sample_00_072_Col-0_50k_seedling_nuclei_FANS-ATAC-seq_rep1',
    category: ['samples'],
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_072_Col-0_50k_seedling_nuclei_FANS-ATAC-seq_rep1.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_072_Col-0_50k_seedling_nuclei_FANS-ATAC-seq_rep1.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_073_Col-0_50k_seedling_nuclei_FANS-ATAC-seq_rep2',
    name: 'Sample_00_073_Col-0_50k_seedling_nuclei_FANS-ATAC-seq_rep2',
    category: ['samples'],
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_073_Col-0_50k_seedling_nuclei_FANS-ATAC-seq_rep2.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_073_Col-0_50k_seedling_nuclei_FANS-ATAC-seq_rep2.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
    
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_074_Col-0_500_seedling_nuclei_FANS-ATAC-seq_rep1',
    name: 'Sample_00_074_Col-0_500_seedling_nuclei_FANS-ATAC-seq_rep1',
    category: ['samples'],
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_074_Col-0_500_seedling_nuclei_FANS-ATAC-seq_rep1.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_074_Col-0_500_seedling_nuclei_FANS-ATAC-seq_rep1.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_075_Col-0_500_seedling_nuclei_FANS-ATAC-seq_rep2',
    name: 'Sample_00_075_Col-0_500_seedling_nuclei_FANS-ATAC-seq_rep2',
    category: ['samples'],
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_075_Col-0_500_seedling_nuclei_FANS-ATAC-seq_rep2.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_075_Col-0_500_seedling_nuclei_FANS-ATAC-seq_rep2.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_076_Col-0_50k_root_nuclei_FANS-ATAC-seq_rep1',
    name: 'Sample_00_076_Col-0_50k_root_nuclei_FANS-ATAC-seq_rep1',
    category: ['samples'],
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_076_Col-0_50k_root_nuclei_FANS-ATAC-seq_rep1.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_076_Col-0_50k_root_nuclei_FANS-ATAC-seq_rep1.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_077_Col-0_50k_root_nuclei_FANS-ATAC-seq_rep2',
    name: 'Sample_00_077_Col-0_50k_root_nuclei_FANS-ATAC-seq_rep2',
    category: ['samples'],
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_077_Col-0_50k_root_nuclei_FANS-ATAC-seq_rep2.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_077_Col-0_50k_root_nuclei_FANS-ATAC-seq_rep2.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_078_Col-0_50k_crude_nuclei_FANS-ATAC-seq_rep1',
    name: 'Sample_00_078_Col-0_50k_crude_nuclei_FANS-ATAC-seq_rep1',
    category: ['samples'],
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_078_Col-0_50k_crude_nuclei_FANS-ATAC-seq_rep1.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_078_Col-0_50k_crude_nuclei_FANS-ATAC-seq_rep1.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_079_Col-0_50k_crude_nuclei_FANS-ATAC-seq_rep2',
    name: 'Sample_00_079_Col-0_50k_crude_nuclei_FANS-ATAC-seq_rep2',
    category: ['samples'],
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_079_Col-0_50k_crude_nuclei_FANS-ATAC-seq_rep2.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_079_Col-0_50k_crude_nuclei_FANS-ATAC-seq_rep2.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_080_H2AX-GFP_50k_nuclei_FANS-ATAC-seq_rep1',
    name: 'Sample_00_080_H2AX-GFP_50k_nuclei_FANS-ATAC-seq_rep1',
    category: ['samples'],
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_080_H2AX-GFP_50k_nuclei_FANS-ATAC-seq_rep1.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_080_H2AX-GFP_50k_nuclei_FANS-ATAC-seq_rep1.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_081_H2AX-GFP_50k_nuclei_FANS-ATAC-seq_rep2',
    name: 'Sample_00_081_H2AX-GFP_50k_nuclei_FANS-ATAC-seq_rep2',
    category: ['samples'],
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_081_H2AX-GFP_50k_nuclei_FANS-ATAC-seq_rep2.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_081_H2AX-GFP_50k_nuclei_FANS-ATAC-seq_rep2.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_082_gDNA_ATAC-seq_rep1',
    name: 'Sample_00_082_gDNA_ATAC-seq_rep1',
    category: ['samples'],
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_082_gDNA_ATAC-seq_rep1.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_082_gDNA_ATAC-seq_rep1.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_083_gDNA_ATAC-seq_rep2',
    name: 'Sample_00_083_gDNA_ATAC-seq_rep2',
    category: ['samples'],
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_083_gDNA_ATAC-seq_rep2.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_083_gDNA_ATAC-seq_rep2.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
    
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_084_Col-0_50k_seedling_nuclei_FANS-ATAC-seq_1million_reads',
    name: 'Sample_00_084_Col-0_50k_seedling_nuclei_FANS-ATAC-seq_1million_reads',
    category: ['samples'],
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_084_Col-0_50k_seedling_nuclei_FANS-ATAC-seq_1million_reads.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_084_Col-0_50k_seedling_nuclei_FANS-ATAC-seq_1million_reads.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_085_ATACseq_in_WT',
    name: 'Sample_00_085_ATACseq_in_WT',
    category: ['samples'],
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_085_ATACseq_in_WT.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_085_ATACseq_in_WT.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_250_4%_FA',
    name: 'Sample_00_250_4%_FA',
    category: ['samples'],
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_250_4%_FA.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_250_4%_FA.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_251_1%_FA',
    name: 'Sample_00_251_1%_FA',
    category: ['samples'],
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_251_1%_FA.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_251_1%_FA.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_252_Light_2C_rep2',
    name: 'Sample_00_252_Light_2C_rep2',
    category: ['samples'],
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_252_Light_2C_rep2.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_252_Light_2C_rep2.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_253_Light_2C_rep1',
    name: 'Sample_00_253_Light_2C_rep1',
    category: ['samples'],
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_253_Light_2C_rep1.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_253_Light_2C_rep1.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_254_Light_16C_rep2',
    name: 'Sample_00_254_Light_16C_rep2',
    category: ['samples'],
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_254_Light_16C_rep2.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_254_Light_16C_rep2.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_255_Light_16C_rep1',
    name: 'Sample_00_255_Light_16C_rep1',
    category: ['samples'],
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_255_Light_16C_rep1.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_255_Light_16C_rep1.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_256_Dark_2C_rep2',
    name: 'Sample_00_256_Dark_2C_rep2',
    category: ['samples'],
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_256_Dark_2C_rep2.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_256_Dark_2C_rep2.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_257_Dark_2C_rep1',
    name: 'Sample_00_257_Dark_2C_rep1',
    category: ['samples'],
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_257_Dark_2C_rep1.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_257_Dark_2C_rep1.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
    
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_258_Dark_16C_rep2',
    name: 'Sample_00_258_Dark_16C_rep2',
    category: ['samples'],
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_258_Dark_16C_rep2.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_258_Dark_16C_rep2.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_259_Dark_16C_rep1',
    name: 'Sample_00_259_Dark_16C_rep1',
    category: ['samples'],
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_259_Dark_16C_rep1.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_259_Dark_16C_rep1.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_260_Arabidopsis_kaku4-2',
    name: 'Sample_00_260_Arabidopsis_kaku4-2',
    category: ['samples'],
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_260_Arabidopsis_kaku4-2.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_260_Arabidopsis_kaku4-2.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_261_Arabidopsis_kaku4-2',
    name: 'Sample_00_261_Arabidopsis_kaku4-2',
    category: ['samples'],
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_261_Arabidopsis_kaku4-2.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_261_Arabidopsis_kaku4-2.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_262_Arabidopsis_Col-0',
    name: 'Sample_00_262_Arabidopsis_Col-0',
    category: ['samples'],
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_262_Arabidopsis_Col-0.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_262_Arabidopsis_Col-0.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_263_Arabidopsis_Col-0',
    name: 'Sample_00_263_Arabidopsis_Col-0',
    category: ['samples'],
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_263_Arabidopsis_Col-0.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_263_Arabidopsis_Col-0.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_264_Arabidopsis_crwn1-1',
    name: 'Sample_00_264_Arabidopsis_crwn1-1',
    category: ['samples'],
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_264_Arabidopsis_crwn1-1.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_264_Arabidopsis_crwn1-1.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_265_Arabidopsis_crwn1-1',
    name: 'Sample_00_265_Arabidopsis_crwn1-1',
    category: ['samples'],
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_265_Arabidopsis_crwn1-1.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_265_Arabidopsis_crwn1-1.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_266_Arabidopsis_Col-0',
    name: 'Sample_00_266_Arabidopsis_Col-0',
    category: ['samples'],
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_266_Arabidopsis_Col-0.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_266_Arabidopsis_Col-0.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_267_Arabidopsis_Col-0',
    name: 'Sample_00_267_Arabidopsis_Col-0',
    category: ['samples'],
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_267_Arabidopsis_Col-0.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_267_Arabidopsis_Col-0.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
    
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_268_Arabidopsis_morc6-3',
    name: 'Sample_00_268_Arabidopsis_morc6-3',
    category: ['samples'],
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_268_Arabidopsis_morc6-3.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_268_Arabidopsis_morc6-3.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_269_Arabidopsis_morc6-3',
    name: 'Sample_00_269_Arabidopsis_morc6-3',
    category: ['samples'],
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_269_Arabidopsis_morc6-3.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_269_Arabidopsis_morc6-3.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_270_Bur-0_ATAC-seq_R1',
    name: 'Sample_00_270_Bur-0_ATAC-seq_R1',
    category: ['samples'],
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_270_Bur-0_ATAC-seq_R1.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_270_Bur-0_ATAC-seq_R1.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_271_Bur-0_ATAC-seq_R2',
    name: 'Sample_00_271_Bur-0_ATAC-seq_R2',
    category: ['samples'],
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_271_Bur-0_ATAC-seq_R2.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_271_Bur-0_ATAC-seq_R2.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_272_Col-0_ATAC-seq_R1',
    name: 'Sample_00_272_Col-0_ATAC-seq_R1',
    category: ['samples'],
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_272_Col-0_ATAC-seq_R1.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_272_Col-0_ATAC-seq_R1.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_273_Col-0_ATAC-seq_R2',
    name: 'Sample_00_273_Col-0_ATAC-seq_R2',
    category: ['samples'],
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_273_Col-0_ATAC-seq_R2.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_273_Col-0_ATAC-seq_R2.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_274_Col-0_ATAC-seq_R2',
    name: 'Sample_00_274_Col-0_ATAC-seq_R2',
    category: ['samples'],
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_274_Col-0_ATAC-seq_R2.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_274_Col-0_ATAC-seq_R2.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_275_Bur-0_aligned_reads',
    name: 'Sample_00_275_Bur-0_aligned_reads',
    category: ['samples'],
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_275_Bur-0_aligned_reads.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_275_Bur-0_aligned_reads.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_276_Col-0_aligned_reads',
    name: 'Sample_00_276_Col-0_aligned_reads',
    category: ['samples'],
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_276_Col-0_aligned_reads.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_276_Col-0_aligned_reads.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_303_DH_012_KNO3_replicate1',
    name: 'Sample_01_303_DH_012_KNO3_replicate1',
    category: ['samples'],
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_303_DH_012_KNO3_replicate1.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_303_DH_012_KNO3_replicate1.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
    
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_304_DH_012_KCl_replicate2',
    name: 'Sample_01_304_DH_012_KCl_replicate2',
    category: ['samples'],
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_304_DH_012_KCl_replicate2.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_304_DH_012_KCl_replicate2.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_305_DH_012_KCl_replicate1',
    name: 'Sample_01_305_DH_012_KCl_replicate1',
    category: ['samples'],
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_305_DH_012_KCl_replicate1.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_305_DH_012_KCl_replicate1.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_306_DH_T0_replicate2',
    name: 'Sample_01_306_DH_T0_replicate2',
    category: ['samples'],
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_306_DH_T0_replicate2.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_306_DH_T0_replicate2.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_307_DH_T0_replicate1',
    name: 'Sample_01_307_DH_T0_replicate1',
    category: ['samples'],
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_307_DH_T0_replicate1.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_307_DH_T0_replicate1.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_308_DH_2H_KNO3_replicate2',
    name: 'Sample_01_308_DH_2H_KNO3_replicate2',
    category: ['samples'],
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_308_DH_2H_KNO3_replicate2.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_308_DH_2H_KNO3_replicate2.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_309_DH_2H_KNO3_replicate1',
    name: 'Sample_01_309_DH_2H_KNO3_replicate1',
    category: ['samples'],
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_309_DH_2H_KNO3_replicate1.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_309_DH_2H_KNO3_replicate1.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_310_DH_2H_KCl_replicate2',
    name: 'Sample_01_310_DH_2H_KCl_replicate2',
    category: ['samples'],
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_310_DH_2H_KCl_replicate2.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_310_DH_2H_KCl_replicate2.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_311_DH_2H_KCl_replicate1',
    name: 'Sample_01_311_DH_2H_KCl_replicate1',
    category: ['samples'],
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_311_DH_2H_KCl_replicate1.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_311_DH_2H_KCl_replicate1.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_312_NAKED_DNA_replicate2',
    name: 'Sample_01_312_NAKED_DNA_replicate2',
    category: ['samples'],
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_312_NAKED_DNA_replicate2.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_312_NAKED_DNA_replicate2.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_313_NAKED_DNA_replicate1',
    name: 'Sample_01_313_NAKED_DNA_replicate1',
    category: ['samples'],
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_313_NAKED_DNA_replicate1.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_313_NAKED_DNA_replicate1.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
    
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_314_DH_012_KNO3_replicate2',
    name: 'Sample_01_314_DH_012_KNO3_replicate2',
    category: ['samples'],
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_314_DH_012_KNO3_replicate2.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_314_DH_012_KNO3_replicate2.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_315_DNaseI_seq_0d_biological_reps_1_and_2',
    name: 'Sample_01_315_DNaseI_seq_0d_biological_reps_1_and_2',
    category: ['samples'],
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_315_DNaseI_seq_0d_biological_reps_1_and_2.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_315_DNaseI_seq_0d_biological_reps_1_and_2.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_316_DNaseI_seq_2d_biological_reps_1_and_2',
    name: 'Sample_01_316_DNaseI_seq_2d_biological_reps_1_and_2',
    category: ['samples'],
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_316_DNaseI_seq_2d_biological_reps_1_and_2.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_316_DNaseI_seq_2d_biological_reps_1_and_2.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_317_DNaseI_seq_4d_biological_reps_1_and_2',
    name: 'Sample_01_317_DNaseI_seq_4d_biological_reps_1_and_2',
    category: ['samples'],
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_317_DNaseI_seq_4d_biological_reps_1_and_2.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_317_DNaseI_seq_4d_biological_reps_1_and_2.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_318_DNaseI_seq_8d_biological_reps_1_and_2',
    name: 'Sample_01_318_DNaseI_seq_8d_biological_reps_1_and_2',
    category: ['samples'],
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_318_DNaseI_seq_8d_biological_reps_1_and_2.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_318_DNaseI_seq_8d_biological_reps_1_and_2.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_319_DNaseI_seq_control',
    name: 'Sample_01_319_DNaseI_seq_control',
    category: ['samples'],
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_319_DNaseI_seq_control.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_319_DNaseI_seq_control.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_320_DS23077_DNaseI_seq_Bur_0_7_day_old_seedling',
    name: 'Sample_01_320_DS23077_DNaseI_seq_Bur_0_7_day_old_seedling',
    category: ['samples'],
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_320_DS23077_DNaseI_seq_Bur_0_7_day_old_seedling.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_320_DS23077_DNaseI_seq_Bur_0_7_day_old_seedling.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_321_DS22973_DNaseI_seq_Bay_0_7_day_old_seedling',
    name: 'Sample_01_321_DS22973_DNaseI_seq_Bay_0_7_day_old_seedling',
    category: ['samples'],
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_321_DS22973_DNaseI_seq_Bay_0_7_day_old_seedling.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_321_DS22973_DNaseI_seq_Bay_0_7_day_old_seedling.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_322_DS22974_DNaseI_seq_Est_1_7_day_old_seedling',
    name: 'Sample_01_322_DS22974_DNaseI_seq_Est_1_7_day_old_seedling',
    category: ['samples'],
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_322_DS22974_DNaseI_seq_Est_1_7_day_old_seedling.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_322_DS22974_DNaseI_seq_Est_1_7_day_old_seedling.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_323_DS22968_DNaseI_seq_Tsu_1_7_day_old_seedling',
    name: 'Sample_01_323_DS22968_DNaseI_seq_Tsu_1_7_day_old_seedling',
    category: ['samples'],
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_323_DS22968_DNaseI_seq_Tsu_1_7_day_old_seedling.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_323_DS22968_DNaseI_seq_Tsu_1_7_day_old_seedling.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
    
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_324_DS21511_DNaseI_seq_whole_root_7_day',
    name: 'Sample_01_324_DS21511_DNaseI_seq_whole_root_7_day',
    category: ['samples'],
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_324_DS21511_DNaseI_seq_whole_root_7_day.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_324_DS21511_DNaseI_seq_whole_root_7_day.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_325_DS21513_DNaseI_seq_root_hair_cell_7_day',
    name: 'Sample_01_325_DS21513_DNaseI_seq_root_hair_cell_7_day',
    category: ['samples'],
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_325_DS21513_DNaseI_seq_root_hair_cell_7_day.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_325_DS21513_DNaseI_seq_root_hair_cell_7_day.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_326_DS20201_PE_DNaseI_seq_seed_coat_cell_4DPA',
    name: 'Sample_01_326_DS20201_PE_DNaseI_seq_seed_coat_cell_4DPA',
    category: ['samples'],
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_326_DS20201_PE_DNaseI_seq_seed_coat_cell_4DPA.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_326_DS20201_PE_DNaseI_seq_seed_coat_cell_4DPA.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_327_DS21306_DNaseI_seq_seed_coat_cell_7DPA',
    name: 'Sample_01_327_DS21306_DNaseI_seq_seed_coat_cell_7DPA',
    category: ['samples'],
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_327_DS21306_DNaseI_seq_seed_coat_cell_7DPA.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_327_DS21306_DNaseI_seq_seed_coat_cell_7DPA.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_328_DS21510',
    name: 'Sample_01_328_DS21510',
    category: ['samples'],
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_328_DS21510.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_328_DS21510.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_329_DS21512',
    name: 'Sample_01_329_DS21512',
    category: ['samples'],
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_329_DS21512.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_329_DS21512.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_330_DS16398_DNaseI_seq_root_non_hair_cell_10_day',
    name: 'Sample_01_330_DS16398_DNaseI_seq_root_non_hair_cell_10_day',
    category: ['samples'],
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_330_DS16398_DNaseI_seq_root_non_hair_cell_10_day.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_330_DS16398_DNaseI_seq_root_non_hair_cell_10_day.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_331_DS20201_SE_DNaseI_seq_seed_coat_cell_4DPA',
    name: 'Sample_01_331_DS20201_SE_DNaseI_seq_seed_coat_cell_4DPA',
    category: ['samples'],
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_331_DS20201_SE_DNaseI_seq_seed_coat_cell_4DPA.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_331_DS20201_SE_DNaseI_seq_seed_coat_cell_4DPA.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_332_DS20427_DNaseI_seq_open_flowers',
    name: 'Sample_01_332_DS20427_DNaseI_seq_open_flowers',
    category: ['samples'],
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_332_DS20427_DNaseI_seq_open_flowers.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_332_DS20427_DNaseI_seq_open_flowers.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_333_DS20434_DNaseI_seq_up_open_flowers',
    name: 'Sample_01_333_DS20434_DNaseI_seq_up_open_flowers',
    category: ['samples'],
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_333_DS20434_DNaseI_seq_up_open_flowers.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_333_DS20434_DNaseI_seq_up_open_flowers.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
    
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_334_DS17498',
    name: 'Sample_01_334_DS17498',
    category: ['samples'],
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_334_DS17498.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_334_DS17498.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_335_DS17499',
    name: 'Sample_01_335_DS17499',
    category: ['samples'],
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_335_DS17499.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_335_DS17499.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_336_DS20694',
    name: 'Sample_01_336_DS20694',
    category: ['samples'],
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_336_DS20694.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_336_DS20694.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_337_DS20134',
    name: 'Sample_01_337_DS20134',
    category: ['samples'],
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_337_DS20134.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_337_DS20134.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_338_DS20131',
    name: 'Sample_01_338_DS20131',
    category: ['samples'],
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_338_DS20131.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_338_DS20131.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_339_DS20132',
    name: 'Sample_01_339_DS20132',
    category: ['samples'],
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_339_DS20132.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_339_DS20132.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_340_DS19056',
    name: 'Sample_01_340_DS19056',
    category: ['samples'],
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_340_DS19056.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_340_DS19056.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_341_Control_D_R1',
    name: 'Sample_01_341_Control_D_R1',
    category: ['samples'],
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_341_Control_D_R1.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_341_Control_D_R1.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_342_Control_D_R2',
    name: 'Sample_01_342_Control_D_R2',
    category: ['samples'],
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_342_Control_D_R2.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_342_Control_D_R2.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_343_Control_D_R3',
    name: 'Sample_01_343_Control_D_R3',
    category: ['samples'],
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_343_Control_D_R3.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_343_Control_D_R3.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
    
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_344_Cold_D_R1',
    name: 'Sample_01_344_Cold_D_R1',
    category: ['samples'],
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_344_Cold_D_R1.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_344_Cold_D_R1.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_345_Cold_D_R2',
    name: 'Sample_01_345_Cold_D_R2',
    category: ['samples'],
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_345_Cold_D_R2.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_345_Cold_D_R2.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_346_Heat_D_R1',
    name: 'Sample_01_346_Heat_D_R1',
    category: ['samples'],
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_346_Heat_D_R1.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_346_Heat_D_R1.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_347_Heat_D_R2',
    name: 'Sample_01_347_Heat_D_R2',
    category: ['samples'],
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_347_Heat_D_R2.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_347_Heat_D_R2.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_348_Heat_D_R3',
    name: 'Sample_01_348_Heat_D_R3',
    category: ['samples'],
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_348_Heat_D_R3.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_348_Heat_D_R3.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_349_Salt_D_R1',
    name: 'Sample_01_349_Salt_D_R1',
    category: ['samples'],
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_349_Salt_D_R1.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_349_Salt_D_R1.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_350_Salt_D_R2',
    name: 'Sample_01_350_Salt_D_R2',
    category: ['samples'],
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_350_Salt_D_R2.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_350_Salt_D_R2.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_351_Salt_D_R3',
    name: 'Sample_01_351_Salt_D_R3',
    category: ['samples'],
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_351_Salt_D_R3.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_351_Salt_D_R3.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_352_Drought_D_R1',
    name: 'Sample_01_352_Drought_D_R1',
    category: ['samples'],
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_352_Drought_D_R1.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_352_Drought_D_R1.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_353_Drought_D_R2',
    name: 'Sample_01_353_Drought_D_R2',
    category: ['samples'],
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_353_Drought_D_R2.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_353_Drought_D_R2.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
    
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_354_Drought_D_R3',
    name: 'Sample_01_354_Drought_D_R3',
    category: ['samples'],
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_354_Drought_D_R3.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_354_Drought_D_R3.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_355_WT_seedling_replicate1_lane1',
    name: 'Sample_01_355_WT_seedling_replicate1_lane1',
    category: ['samples'],
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_355_WT_seedling_replicate1_lane1.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_355_WT_seedling_replicate1_lane1.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_356_WT_seedling_replicate1_lane2',
    name: 'Sample_01_356_WT_seedling_replicate1_lane2',
    category: ['samples'],
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_356_WT_seedling_replicate1_lane2.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_356_WT_seedling_replicate1_lane2.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_357_WT_seedling_replicate2_lane1',
    name: 'Sample_01_357_WT_seedling_replicate2_lane1',
    category: ['samples'],
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_357_WT_seedling_replicate2_lane1.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_357_WT_seedling_replicate2_lane1.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_358_WT_flower_replicate1_lane1',
    name: 'Sample_01_358_WT_flower_replicate1_lane1',
    category: ['samples'],
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_358_WT_flower_replicate1_lane1.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_358_WT_flower_replicate1_lane1.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_359_WT_flower_replicate2_lane1',
    name: 'Sample_01_359_WT_flower_replicate2_lane1',
    category: ['samples'],
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_359_WT_flower_replicate2_lane1.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_359_WT_flower_replicate2_lane1.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_360_ddm1_seedling_replicate1_lane1',
    name: 'Sample_01_360_ddm1_seedling_replicate1_lane1',
    category: ['samples'],
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_360_ddm1_seedling_replicate1_lane1.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_360_ddm1_seedling_replicate1_lane1.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_361_ddm1_seedling_replicate1_lane2',
    name: 'Sample_01_361_ddm1_seedling_replicate1_lane2',
    category: ['samples'],
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_361_ddm1_seedling_replicate1_lane2.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_361_ddm1_seedling_replicate1_lane2.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_362_ddm1_flower_replicate1_lane1',
    name: 'Sample_01_362_ddm1_flower_replicate1_lane1',
    category: ['samples'],
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_362_ddm1_flower_replicate1_lane1.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_362_ddm1_flower_replicate1_lane1.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_02_620_FAIRE-seq_in_WT',
    name: 'Sample_02_620_FAIRE-seq_in_WT',
    category: ['samples'],
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_02_620_FAIRE-seq_in_WT.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_02_620_FAIRE-seq_in_WT.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
    
  {
    type: 'BasicTrack',
    trackId:
      'Sample_02_621_Control',
    name: 'Sample_02_621_Control',
    category: ['samples'],
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_02_621_Control.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_02_621_Control.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_02_622_Control',
    name: 'Sample_02_622_Control',
    category: ['samples'],
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_02_622_Control.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_02_622_Control.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_02_623_Control',
    name: 'Sample_02_623_Control',
    category: ['samples'],
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_02_623_Control.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_02_623_Control.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_02_624_Cold',
    name: 'Sample_02_624_Cold',
    category: ['samples'],
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_02_624_Cold.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_02_624_Cold.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_02_625_Cold',
    name: 'Sample_02_625_Cold',
    category: ['samples'],
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_02_625_Cold.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_02_625_Cold.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_02_626_Heat',
    name: 'Sample_02_626_Heat',
    category: ['samples'],
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_02_626_Heat.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_02_626_Heat.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_02_627_Heat',
    name: 'Sample_02_627_Heat',
    category: ['samples'],
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_02_627_Heat.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_02_627_Heat.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_02_628_Heat',
    name: 'Sample_02_628_Heat',
    category: ['samples'],
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_02_628_Heat.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_02_628_Heat.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_02_629_Salt',
    name: 'Sample_02_629_Salt',
    category: ['samples'],
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_02_629_Salt.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_02_629_Salt.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_02_630_Salt',
    name: 'Sample_02_630_Salt',
    category: ['samples'],
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_02_630_Salt.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_02_630_Salt.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
    
  {
    type: 'BasicTrack',
    trackId:
      'Sample_02_631_Salt',
    name: 'Sample_02_631_Salt',
    category: ['samples'],
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_02_631_Salt.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_02_631_Salt.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_02_632_Drought',
    name: 'Sample_02_632_Drought',
    category: ['samples'],
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_02_632_Drought.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_02_632_Drought.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_02_633_Drought',
    name: 'Sample_02_633_Drought',
    category: ['samples'],
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_02_633_Drought.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_02_633_Drought.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_02_634_Drought',
    name: 'Sample_02_634_Drought',
    category: ['samples'],
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_02_634_Drought.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_02_634_Drought.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_03_635_Mnase_in_WT',
    name: 'Sample_03_635_Mnase_in_WT',
    category: ['samples'],
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_03_635_Mnase_in_WT.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_03_635_Mnase_in_WT.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_03_636_MH-seq',
    name: 'Sample_03_636_MH-seq',
    category: ['samples'],
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_03_636_MH-seq.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_03_636_MH-seq.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_03_637_MH-seq_replicate_2',
    name: 'Sample_03_637_MH-seq_replicate_2',
    category: ['samples'],
    assemblyNames: ['Arabidopsis_thaliana'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_03_637_MH-seq_replicate_2.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_03_637_MH-seq_replicate_2.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
]


