import {GetStaticFile} from "../api.js";

export var tracks = [
  {
    type: 'BasicTrack',
    trackId:
      'gene',
    name: 'gene',
    category: ['Genes'],
    assemblyNames: ['Anans_comosus'],
    adapter: {
      type: 'Gff3TabixAdapter',
      gffGzLocation: {
        uri:
          GetStaticFile+"/data/Anans_comosus/gff3/gene.gff3.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/Anans_comosus/gff3/gene.gff3.gz.tbi"
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
      'biological_region',
    name: 'biological_region',
    category: ['biological_region'],
    assemblyNames: ['Anans_comosus'],
    adapter: {
      type: 'Gff3TabixAdapter',
      gffGzLocation: {
        uri:
          GetStaticFile+"/data/Anans_comosus/gff3/biological_region.gff3.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/Anans_comosus/gff3/biological_region.gff3.gz.tbi"
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
      'Sample_01_587_AcW10_digested_replicate1',
    name: 'Sample_01_587_AcW10_digested_replicate1',
    category: ['samples'],
    assemblyNames: ['Anans_comosus'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_587_AcW10_digested_replicate1.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_587_AcW10_digested_replicate1.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_588_AcG2_digested_replicate2',
    name: 'Sample_01_588_AcG2_digested_replicate2',
    category: ['samples'],
    assemblyNames: ['Anans_comosus'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_588_AcG2_digested_replicate2.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_588_AcG2_digested_replicate2.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_589_AcG2_digested_replicate3',
    name: 'Sample_01_589_AcG2_digested_replicate3',
    category: ['samples'],
    assemblyNames: ['Anans_comosus'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_589_AcG2_digested_replicate3.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_589_AcG2_digested_replicate3.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_590_AcG2_digested_replicate1',
    name: 'Sample_01_590_AcG2_digested_replicate1',
    category: ['samples'],
    assemblyNames: ['Anans_comosus'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_590_AcG2_digested_replicate1.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_590_AcG2_digested_replicate1.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_591_AcW2_digested_replicate2',
    name: 'Sample_01_591_AcW2_digested_replicate2',
    category: ['samples'],
    assemblyNames: ['Anans_comosus'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_591_AcW2_digested_replicate2.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_591_AcW2_digested_replicate2.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_592_AcW2_digested_replicate3',
    name: 'Sample_01_592_AcW2_digested_replicate3',
    category: ['samples'],
    assemblyNames: ['Anans_comosus'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_592_AcW2_digested_replicate3.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_592_AcW2_digested_replicate3.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_593_AcW2_digested_replicate1',
    name: 'Sample_01_593_AcW2_digested_replicate1',
    category: ['samples'],
    assemblyNames: ['Anans_comosus'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_593_AcW2_digested_replicate1.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_593_AcW2_digested_replicate1.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_594_AcG10_digested_replicate2',
    name: 'Sample_01_594_AcG10_digested_replicate2',
    category: ['samples'],
    assemblyNames: ['Anans_comosus'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_594_AcG10_digested_replicate2.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_594_AcG10_digested_replicate2.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_595_AcG10_digested_replicate3',
    name: 'Sample_01_595_AcG10_digested_replicate3',
    category: ['samples'],
    assemblyNames: ['Anans_comosus'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_595_AcG10_digested_replicate3.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_595_AcG10_digested_replicate3.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_596_AcG10_digested_replicate1',
    name: 'Sample_01_596_AcG10_digested_replicate1',
    category: ['samples'],
    assemblyNames: ['Anans_comosus'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_596_AcG10_digested_replicate1.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_596_AcG10_digested_replicate1.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_597_AcW10_digested_replicate2',
    name: 'Sample_01_597_AcW10_digested_replicate2',
    category: ['samples'],
    assemblyNames: ['Anans_comosus'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_597_AcW10_digested_replicate2.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_597_AcW10_digested_replicate2.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_598_AcW10_digested_replicate3',
    name: 'Sample_01_598_AcW10_digested_replicate3',
    category: ['samples'],
    assemblyNames: ['Anans_comosus'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_598_AcW10_digested_replicate3.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_598_AcW10_digested_replicate3.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
]