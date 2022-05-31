import {GetStaticFile} from "../api.js";

export var tracks = [
  {
    type: 'BasicTrack',
    trackId:
      'gene',
    name: 'gene',
    category: ['Genes'],
    assemblyNames: ['Medicago_truncatula'],
    adapter: {
      type: 'Gff3TabixAdapter',
      gffGzLocation: {
        uri:
          GetStaticFile+"/data/Medicago_truncatula/gff3/gene.gff3.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/Medicago_truncatula/gff3/gene.gff3.gz.tbi"
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
    assemblyNames: ['Medicago_truncatula'],
    adapter: {
      type: 'Gff3TabixAdapter',
      gffGzLocation: {
        uri:
          GetStaticFile+"/data/Medicago_truncatula/gff3/lnc_RNA.gff3.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/Medicago_truncatula/gff3/lnc_RNA.gff3.gz.tbi"
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
    assemblyNames: ['Medicago_truncatula'],
    adapter: {
      type: 'Gff3TabixAdapter',
      gffGzLocation: {
        uri:
          GetStaticFile+"/data/Medicago_truncatula/gff3/ncRNA.gff3.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/Medicago_truncatula/gff3/ncRNA.gff3.gz.tbi"
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
    assemblyNames: ['Medicago_truncatula'],
    adapter: {
      type: 'Gff3TabixAdapter',
      gffGzLocation: {
        uri:
          GetStaticFile+"/data/Medicago_truncatula/gff3/tRNA.gff3.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/Medicago_truncatula/gff3/tRNA.gff3.gz.tbi"
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
    assemblyNames: ['Medicago_truncatula'],
    adapter: {
      type: 'Gff3TabixAdapter',
      gffGzLocation: {
        uri:
          GetStaticFile+"/data/Medicago_truncatula/gff3/snRNA.gff3.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/Medicago_truncatula/gff3/snRNA.gff3.gz.tbi"
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
    assemblyNames: ['Medicago_truncatula'],
    adapter: {
      type: 'Gff3TabixAdapter',
      gffGzLocation: {
        uri:
          GetStaticFile+"/data/Medicago_truncatula/gff3/snoRNA.gff3.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/Medicago_truncatula/gff3/snoRNA.gff3.gz.tbi"
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
    assemblyNames: ['Medicago_truncatula'],
    adapter: {
      type: 'Gff3TabixAdapter',
      gffGzLocation: {
        uri:
          GetStaticFile+"/data/Medicago_truncatula/gff3/rRNA.gff3.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/Medicago_truncatula/gff3/rRNA.gff3.gz.tbi"
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
    assemblyNames: ['Medicago_truncatula'],
    adapter: {
      type: 'Gff3TabixAdapter',
      gffGzLocation: {
        uri:
          GetStaticFile+"/data/Medicago_truncatula/gff3/pre_miRNA.gff3.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/Medicago_truncatula/gff3/pre_miRNA.gff3.gz.tbi"
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
    assemblyNames: ['Medicago_truncatula'],
    adapter: {
      type: 'Gff3TabixAdapter',
      gffGzLocation: {
        uri:
          GetStaticFile+"/data/Medicago_truncatula/gff3/SRP_RNA.gff3.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/Medicago_truncatula/gff3/SRP_RNA.gff3.gz.tbi"
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
    assemblyNames: ['Medicago_truncatula'],
    adapter: {
      type: 'Gff3TabixAdapter',
      gffGzLocation: {
        uri:
          GetStaticFile+"/data/Medicago_truncatula/gff3/RNase_MRP_RNA.gff3.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/Medicago_truncatula/gff3/RNase_MRP_RNA.gff3.gz.tbi"
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
      'Sample_00_105_Mt_root_tip_ATAC_rep1',
    name: 'Sample_00_105_Mt_root_tip_ATAC_rep1',
    category: ['samples'],
    assemblyNames: ['Medicago_truncatula'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_105_Mt_root_tip_ATAC_rep1.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_105_Mt_root_tip_ATAC_rep1.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_106_Mt_root_tip_ATAC_rep2',
    name: 'Sample_00_106_Mt_root_tip_ATAC_rep2',
    category: ['samples'],
    assemblyNames: ['Medicago_truncatula'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_106_Mt_root_tip_ATAC_rep2.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_106_Mt_root_tip_ATAC_rep2.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_107_4_week-old_composite_plant_1_cm_root_tips',
    name: 'Sample_00_107_4_week-old_composite_plant_1_cm_root_tips',
    category: ['samples'],
    assemblyNames: ['Medicago_truncatula'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_107_4_week-old_composite_plant_1_cm_root_tips.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_107_4_week-old_composite_plant_1_cm_root_tips.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_108_4_week-old_composite_plant_1_cm_root_tips',
    name: 'Sample_00_108_4_week-old_composite_plant_1_cm_root_tips',
    category: ['samples'],
    assemblyNames: ['Medicago_truncatula'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_108_4_week-old_composite_plant_1_cm_root_tips.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_108_4_week-old_composite_plant_1_cm_root_tips.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_109_4_week-old_composite_plant_1_cm_root_tips',
    name: 'Sample_00_109_4_week-old_composite_plant_1_cm_root_tips',
    category: ['samples'],
    assemblyNames: ['Medicago_truncatula'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_109_4_week-old_composite_plant_1_cm_root_tips.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_109_4_week-old_composite_plant_1_cm_root_tips.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_110_4_week-old_composite_plant_1_cm_root_tips',
    name: 'Sample_00_110_4_week-old_composite_plant_1_cm_root_tips',
    category: ['samples'],
    assemblyNames: ['Medicago_truncatula'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_110_4_week-old_composite_plant_1_cm_root_tips.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_110_4_week-old_composite_plant_1_cm_root_tips.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_111_4_week-old_composite_plant_1_cm_root_tips',
    name: 'Sample_00_111_4_week-old_composite_plant_1_cm_root_tips',
    category: ['samples'],
    assemblyNames: ['Medicago_truncatula'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_111_4_week-old_composite_plant_1_cm_root_tips.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_111_4_week-old_composite_plant_1_cm_root_tips.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_112_4_week-old_composite_plant_1_cm_root_tips',
    name: 'Sample_00_112_4_week-old_composite_plant_1_cm_root_tips',
    category: ['samples'],
    assemblyNames: ['Medicago_truncatula'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_112_4_week-old_composite_plant_1_cm_root_tips.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_112_4_week-old_composite_plant_1_cm_root_tips.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_113_4_week-old_composite_plant_1_cm_root_tips',
    name: 'Sample_00_113_4_week-old_composite_plant_1_cm_root_tips',
    category: ['samples'],
    assemblyNames: ['Medicago_truncatula'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_113_4_week-old_composite_plant_1_cm_root_tips.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_113_4_week-old_composite_plant_1_cm_root_tips.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
]// JavaScript Document