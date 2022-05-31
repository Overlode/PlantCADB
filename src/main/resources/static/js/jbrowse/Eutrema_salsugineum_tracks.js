import {GetStaticFile} from "../api.js";
export var tracks = [
  {
    type: 'BasicTrack',
    trackId:
      'gene',
    name: 'gene',
    category: ['Genes'],
    assemblyNames: ['Eutrema_salsugineum'],
    adapter: {
      type: 'Gff3TabixAdapter',
      gffGzLocation: {
        uri:
          GetStaticFile+"/data/Eutrema_salsugineum/gff3/gene.gff3.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/Eutrema_salsugineum/gff3/gene.gff3.gz.tbi"
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
      'Sample_00_092_ATAC_Eutrema_10days_leaf_rep1',
    name: 'Sample_00_092_ATAC_Eutrema_10days_leaf_rep1',
    category: ['samples'],
    assemblyNames: ['Eutrema_salsugineum'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_092_ATAC_Eutrema_10days_leaf_rep1.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_092_ATAC_Eutrema_10days_leaf_rep1.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_093_ATAC_Eutrema_10days_leaf_rep2',
    name: 'Sample_00_093_ATAC_Eutrema_10days_leaf_rep2',
    category: ['samples'],
    assemblyNames: ['Eutrema_salsugineum'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_093_ATAC_Eutrema_10days_leaf_rep2.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_093_ATAC_Eutrema_10days_leaf_rep2.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_094_ATAC_Eutrema_10days_leaf_Input',
    name: 'Sample_00_094_ATAC_Eutrema_10days_leaf_Input',
    category: ['samples'],
    assemblyNames: ['Eutrema_salsugineum'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_094_ATAC_Eutrema_10days_leaf_Input.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_094_ATAC_Eutrema_10days_leaf_Input.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
]// JavaScript Document