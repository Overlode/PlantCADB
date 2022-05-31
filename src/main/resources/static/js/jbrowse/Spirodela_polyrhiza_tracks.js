import {GetStaticFile} from "../api.js";

export var tracks = [

  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_223_ATAC_duckweed_3days_after_tranferring_rep1',
    name: 'Sample_00_223_ATAC_duckweed_3days_after_tranferring_rep1',
    category: ['samples'],
    assemblyNames: ['Spirodela_polyrhiza'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
         GetStaticFile+"/data/bed/Sample_00_223_ATAC_duckweed_3days_after_tranferring_rep1.bed.gz"
      },
      index: {
        location: {
          uri:
           GetStaticFile+"/data/bed/Sample_00_223_ATAC_duckweed_3days_after_tranferring_rep1.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_224_ATAC_duckweed_3days_after_tranferring_rep2',
    name: 'Sample_00_224_ATAC_duckweed_3days_after_tranferring_rep2',
    category: ['samples'],
    assemblyNames: ['Spirodela_polyrhiza'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
         GetStaticFile+"/data/bed/Sample_00_224_ATAC_duckweed_3days_after_tranferring_rep2.bed.gz"
      },
      index: {
        location: {
          uri:
           GetStaticFile+"/data/bed/Sample_00_224_ATAC_duckweed_3days_after_tranferring_rep2.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_225_ATAC_duckweed_3days_after_tranferring_Input',
    name: 'Sample_00_225_ATAC_duckweed_3days_after_tranferring_Input',
    category: ['samples'],
    assemblyNames: ['Spirodela_polyrhiza'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
         GetStaticFile+"/data/bed/Sample_00_225_ATAC_duckweed_3days_after_tranferring_Input.bed.gz"
      },
      index: {
        location: {
          uri:
           GetStaticFile+"/data/bed/Sample_00_225_ATAC_duckweed_3days_after_tranferring_Input.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
]// JavaScript Document