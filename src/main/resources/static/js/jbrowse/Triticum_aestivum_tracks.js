import {GetStaticFile} from "../api.js";
export var tracks = [
  /*{
    type: 'BasicTrack',
    trackId:
      'gene',
    name: 'gene',
    category: ['Genes'],
    assemblyNames: ['Triticum_aestivum'],
    adapter: {
      type: 'Gff3TabixAdapter',
      gffGzLocation: {
        uri:
          GetStaticFile+"/data/Triticum_aestivum/gff3/gene.gff3.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/Triticum_aestivum/gff3/gene.gff3.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
    renderer: {
      type: 'SvgFeatureRenderer',
    },
  }, */
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_00_226_Wheat_ATAC_S1_001',
    name: 'Sample_00_226_Wheat_ATAC_S1_001',
    category: ['samples'],
    assemblyNames: ['Triticum_aestivum'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_00_226_Wheat_ATAC_S1_001.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_00_226_Wheat_ATAC_S1_001.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
]// JavaScript Document