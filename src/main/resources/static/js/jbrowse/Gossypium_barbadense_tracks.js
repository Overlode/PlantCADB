import {GetStaticFile} from "../api.js";
export var tracks = [
  {
    type: 'BasicTrack',
    trackId:
      'gene',
    name: 'gene',
    category: ['Genes'],
    assemblyNames: ['Gossypium_barbadense'],
    adapter: {
      type: 'Gff3TabixAdapter',
      gffGzLocation: {
        uri:
          GetStaticFile+"/data/Gossypium_barbadense/gff3/gene.gff3.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/Gossypium_barbadense/gff3/gene.gff3.gz.tbi"
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
      'Sample_01_611_Gossypium_barbadense_DNase_Seq_data_from_leaves',
    name: 'Sample_01_611_Gossypium_barbadense_DNase_Seq_data_from_leaves',
    category: ['samples'],
    assemblyNames: ['Gossypium_barbadense'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_611_Gossypium_barbadense_DNase_Seq_data_from_leaves.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_611_Gossypium_barbadense_DNase_Seq_data_from_leaves.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
]// JavaScript Document