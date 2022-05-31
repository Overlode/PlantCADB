import {GetStaticFile} from "../api.js";

export var tracks = [
  {
    type: 'BasicTrack',
    trackId:
      'gene',
    name: 'gene',
    category: ['Genes'],
    assemblyNames: ['Asparagus_officinalis'],
    adapter: {
      type: 'Gff3TabixAdapter',
      gffGzLocation: {
        uri:
          GetStaticFile+"/data/Asparagus_officinalis/gff3/gene.gff3.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/Asparagus_officinalis/gff3/gene.gff3.gz.tbi"
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
    assemblyNames: ['Asparagus_officinalis'],
    adapter: {
      type: 'Gff3TabixAdapter',
      gffGzLocation: {
        uri:
          GetStaticFile+"/data/Asparagus_officinalis/gff3/lnc_RNA.gff3.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/Asparagus_officinalis/gff3/lnc_RNA.gff3.gz.tbi"
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
    assemblyNames: ['Asparagus_officinalis'],
    adapter: {
      type: 'Gff3TabixAdapter',
      gffGzLocation: {
        uri:
          GetStaticFile+"/data/Asparagus_officinalis/gff3/pseudogene.gff3.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/Asparagus_officinalis/gff3/pseudogene.gff3.gz.tbi"
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
    assemblyNames: ['Asparagus_officinalis'],
    adapter: {
      type: 'Gff3TabixAdapter',
      gffGzLocation: {
        uri:
          GetStaticFile+"/data/Asparagus_officinalis/gff3/tRNA.gff3.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/Asparagus_officinalis/gff3/tRNA.gff3.gz.tbi"
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
    assemblyNames: ['Asparagus_officinalis'],
    adapter: {
      type: 'Gff3TabixAdapter',
      gffGzLocation: {
        uri:
          GetStaticFile+"/data/Asparagus_officinalis/gff3/cDNA_match.gff3.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/Asparagus_officinalis/gff3/cDNA_match.gff3.gz.tbi"
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
      'match',
    name: 'cDNA_match',
    category: ['RNA'],
    assemblyNames: ['Asparagus_officinalis'],
    adapter: {
      type: 'Gff3TabixAdapter',
      gffGzLocation: {
        uri:
          GetStaticFile+"/data/Asparagus_officinalis/gff3/match.gff3.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/Asparagus_officinalis/gff3/match.gff3.gz.tbi"
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
      'Sample_00_086_ATAC_Asparagus_10days_leaf_rep1',
    name: 'Sample_00_086_ATAC_Asparagus_10days_leaf_rep1',
    category: ['samples'],
    assemblyNames: ['Asparagus_officinalis'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_086_ATAC_Asparagus_10days_leaf_rep1.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_086_ATAC_Asparagus_10days_leaf_rep1.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_087_ATAC_Asparagus_10days_leaf_rep2',
    name: 'Sample_00_087_ATAC_Asparagus_10days_leaf_rep2',
    category: ['samples'],
    assemblyNames: ['Asparagus_officinalis'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_087_ATAC_Asparagus_10days_leaf_rep2.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_087_ATAC_Asparagus_10days_leaf_rep2.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_088_ATAC_Asparagus_10days_leaf_Input',
    name: 'Sample_00_088_ATAC_Asparagus_10days_leaf_Input',
    category: ['samples'],
    assemblyNames: ['Asparagus_officinalis'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_088_ATAC_Asparagus_10days_leaf_Input.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_088_ATAC_Asparagus_10days_leaf_Input.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
]// JavaScript Document