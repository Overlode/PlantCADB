import {GetStaticFile} from "../api.js";
export var tracks = [
  {
    type: 'BasicTrack',
    trackId:
      'gene',
    name: 'gene',
    category: ['Genes'],
    assemblyNames: ['Cucumis_melo'],
    adapter: {
      type: 'Gff3TabixAdapter',
      gffGzLocation: {
        uri:
          GetStaticFile+"/data/Cucumis_melo/gff3/gene.gff3.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/Cucumis_melo/gff3/gene.gff3.gz.tbi"
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
      'Sample_01_407_VED_40DPA_DNaseseq_4_SZ060316C_DNase_seq_paired_HiSeqXTen',
    name: 'Sample_01_407_VED_40DPA_DNaseseq_4_SZ060316C_DNase_seq_paired_HiSeqXTen',
    category: ['samples'],
    assemblyNames: ['Cucumis_melo'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_407_VED_40DPA_DNaseseq_4_SZ060316C_DNase_seq_paired_HiSeqXTen.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_407_VED_40DPA_DNaseseq_4_SZ060316C_DNase_seq_paired_HiSeqXTen.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_408_VED_40DPA_DNaseseq_3_SZ060316C_DNase_seq_paired_HiSeqXTen',
    name: 'Sample_01_408_VED_40DPA_DNaseseq_3_SZ060316C_DNase_seq_paired_HiSeqXTen',
    category: ['samples'],
    assemblyNames: ['Cucumis_melo'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_408_VED_40DPA_DNaseseq_3_SZ060316C_DNase_seq_paired_HiSeqXTen.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_408_VED_40DPA_DNaseseq_3_SZ060316C_DNase_seq_paired_HiSeqXTen.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_409_VED_40DPA_DNaseseq_2_SZ060316C_DNase_seq_paired_HiSeqXTen',
    name: 'Sample_01_409_VED_40DPA_DNaseseq_2_SZ060316C_DNase_seq_paired_HiSeqXTen',
    category: ['samples'],
    assemblyNames: ['Cucumis_melo'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_409_VED_40DPA_DNaseseq_2_SZ060316C_DNase_seq_paired_HiSeqXTen.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_409_VED_40DPA_DNaseseq_2_SZ060316C_DNase_seq_paired_HiSeqXTen.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_410_VED_40DPA_DNaseseq_1_SZ060316C_DNase_seq_paired_HiSeqXTen',
    name: 'Sample_01_410_VED_40DPA_DNaseseq_1_SZ060316C_DNase_seq_paired_HiSeqXTen',
    category: ['samples'],
    assemblyNames: ['Cucumis_melo'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_410_VED_40DPA_DNaseseq_1_SZ060316C_DNase_seq_paired_HiSeqXTen.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_410_VED_40DPA_DNaseseq_1_SZ060316C_DNase_seq_paired_HiSeqXTen.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_411_VED_40DPA_DNaseseq_8_PH027_DNase_seq_paired_HiSeqXTen',
    name: 'Sample_01_411_VED_40DPA_DNaseseq_8_PH027_DNase_seq_paired_HiSeqXTen',
    category: ['samples'],
    assemblyNames: ['Cucumis_melo'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_411_VED_40DPA_DNaseseq_8_PH027_DNase_seq_paired_HiSeqXTen.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_411_VED_40DPA_DNaseseq_8_PH027_DNase_seq_paired_HiSeqXTen.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_412_VED_40DPA_DNaseseq_7_PH025_DNase_seq_paired_HiSeqXTen',
    name: 'Sample_01_412_VED_40DPA_DNaseseq_7_PH025_DNase_seq_paired_HiSeqXTen',
    category: ['samples'],
    assemblyNames: ['Cucumis_melo'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_412_VED_40DPA_DNaseseq_7_PH025_DNase_seq_paired_HiSeqXTen.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_412_VED_40DPA_DNaseseq_7_PH025_DNase_seq_paired_HiSeqXTen.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_413_VED_40DPA_DNaseseq_6_PH023_DNase_seq_paired_HiSeqXTen',
    name: 'Sample_01_413_VED_40DPA_DNaseseq_6_PH023_DNase_seq_paired_HiSeqXTen',
    category: ['samples'],
    assemblyNames: ['Cucumis_melo'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_413_VED_40DPA_DNaseseq_6_PH023_DNase_seq_paired_HiSeqXTen.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_413_VED_40DPA_DNaseseq_6_PH023_DNase_seq_paired_HiSeqXTen.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_414_VED_40DPA_DNaseseq_5_PH023_DNase_seq_paired_HiSeqXTen',
    name: 'Sample_01_414_VED_40DPA_DNaseseq_5_PH023_DNase_seq_paired_HiSeqXTen',
    category: ['samples'],
    assemblyNames: ['Cucumis_melo'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_414_VED_40DPA_DNaseseq_5_PH023_DNase_seq_paired_HiSeqXTen.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_414_VED_40DPA_DNaseseq_5_PH023_DNase_seq_paired_HiSeqXTen.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_415_VED_leaf_DNaseseq_3_SZ060316C_DNase_seq_paired_HiSeqXTen',
    name: 'Sample_01_415_VED_leaf_DNaseseq_3_SZ060316C_DNase_seq_paired_HiSeqXTen',
    category: ['samples'],
    assemblyNames: ['Cucumis_melo'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_415_VED_leaf_DNaseseq_3_SZ060316C_DNase_seq_paired_HiSeqXTen.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_415_VED_leaf_DNaseseq_3_SZ060316C_DNase_seq_paired_HiSeqXTen.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_416_VED_leaf_DNaseseq_2_SZ060316C_DNase_seq_paired_HiSeqXTen',
    name: 'Sample_01_416_VED_leaf_DNaseseq_2_SZ060316C_DNase_seq_paired_HiSeqXTen',
    category: ['samples'],
    assemblyNames: ['Cucumis_melo'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_416_VED_leaf_DNaseseq_2_SZ060316C_DNase_seq_paired_HiSeqXTen.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_416_VED_leaf_DNaseseq_2_SZ060316C_DNase_seq_paired_HiSeqXTen.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_417_VED_leaf_DNaseseq_1_SZ060316C_DNase_seq_paired_HiSeqXTen',
    name: 'Sample_01_417_VED_leaf_DNaseseq_1_SZ060316C_DNase_seq_paired_HiSeqXTen',
    category: ['samples'],
    assemblyNames: ['Cucumis_melo'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_417_VED_leaf_DNaseseq_1_SZ060316C_DNase_seq_paired_HiSeqXTen.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_417_VED_leaf_DNaseseq_1_SZ060316C_DNase_seq_paired_HiSeqXTen.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_418_VED_10DPA_DNaseseq_3_SZ060416E_DNase_seq_paired_HiSeqXTen',
    name: 'Sample_01_418_VED_10DPA_DNaseseq_3_SZ060416E_DNase_seq_paired_HiSeqXTen',
    category: ['samples'],
    assemblyNames: ['Cucumis_melo'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_418_VED_10DPA_DNaseseq_3_SZ060416E_DNase_seq_paired_HiSeqXTen.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_418_VED_10DPA_DNaseseq_3_SZ060416E_DNase_seq_paired_HiSeqXTen.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_419_VED_10DPA_DNaseseq_2_SZ060416E_DNase_seq_paired_HiSeqXTen',
    name: 'Sample_01_419_VED_10DPA_DNaseseq_2_SZ060416E_DNase_seq_paired_HiSeqXTen',
    category: ['samples'],
    assemblyNames: ['Cucumis_melo'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_419_VED_10DPA_DNaseseq_2_SZ060416E_DNase_seq_paired_HiSeqXTen.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_419_VED_10DPA_DNaseseq_2_SZ060416E_DNase_seq_paired_HiSeqXTen.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_420_VED_10DPA_DNaseseq_1_SZ060416E_DNase_seq_paired_HiSeqXTen',
    name: 'Sample_01_420_VED_10DPA_DNaseseq_1_SZ060416E_DNase_seq_paired_HiSeqXTen',
    category: ['samples'],
    assemblyNames: ['Cucumis_melo'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_420_VED_10DPA_DNaseseq_1_SZ060416E_DNase_seq_paired_HiSeqXTen.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_420_VED_10DPA_DNaseseq_1_SZ060416E_DNase_seq_paired_HiSeqXTen.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_421_PS_40DPA_DNaseseq_2_SZ043_DNase_seq_paired_HiSeqXTen',
    name: 'Sample_01_421_PS_40DPA_DNaseseq_2_SZ043_DNase_seq_paired_HiSeqXTen',
    category: ['samples'],
    assemblyNames: ['Cucumis_melo'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_421_PS_40DPA_DNaseseq_2_SZ043_DNase_seq_paired_HiSeqXTen.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_421_PS_40DPA_DNaseseq_2_SZ043_DNase_seq_paired_HiSeqXTen.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_422_PS_40DPA_DNaseseq_1_SZ043_DNase_seq_paired_HiSeqXTen',
    name: 'Sample_01_422_PS_40DPA_DNaseseq_1_SZ043_DNase_seq_paired_HiSeqXTen',
    category: ['samples'],
    assemblyNames: ['Cucumis_melo'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_422_PS_40DPA_DNaseseq_1_SZ043_DNase_seq_paired_HiSeqXTen.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_422_PS_40DPA_DNaseseq_1_SZ043_DNase_seq_paired_HiSeqXTen.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_423_PS_leaf_DNaseseq_3_SZ056_DNase_seq_paired_HiSeqXTen',
    name: 'Sample_01_423_PS_leaf_DNaseseq_3_SZ056_DNase_seq_paired_HiSeqXTen',
    category: ['samples'],
    assemblyNames: ['Cucumis_melo'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_423_PS_leaf_DNaseseq_3_SZ056_DNase_seq_paired_HiSeqXTen.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_423_PS_leaf_DNaseseq_3_SZ056_DNase_seq_paired_HiSeqXTen.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_424_PS_leaf_DNaseseq_2_SZ056_DNase_seq_paired_HiSeqXTen',
    name: 'Sample_01_424_PS_leaf_DNaseseq_2_SZ056_DNase_seq_paired_HiSeqXTen',
    category: ['samples'],
    assemblyNames: ['Cucumis_melo'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_424_PS_leaf_DNaseseq_2_SZ056_DNase_seq_paired_HiSeqXTen.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_424_PS_leaf_DNaseseq_2_SZ056_DNase_seq_paired_HiSeqXTen.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_425_PS_leaf_DNaseseq_1_SZ056_DNase_seq_paired_HiSeqXTen',
    name: 'Sample_01_425_PS_leaf_DNaseseq_1_SZ056_DNase_seq_paired_HiSeqXTen',
    category: ['samples'],
    assemblyNames: ['Cucumis_melo'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_425_PS_leaf_DNaseseq_1_SZ056_DNase_seq_paired_HiSeqXTen.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_425_PS_leaf_DNaseseq_1_SZ056_DNase_seq_paired_HiSeqXTen.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_426_PS_10DPA_DNaseseq_2_SZ043_DNase_seq_paired_HiSeqXTen',
    name: 'Sample_01_426_PS_10DPA_DNaseseq_2_SZ043_DNase_seq_paired_HiSeqXTen',
    category: ['samples'],
    assemblyNames: ['Cucumis_melo'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_426_PS_10DPA_DNaseseq_2_SZ043_DNase_seq_paired_HiSeqXTen.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_426_PS_10DPA_DNaseseq_2_SZ043_DNase_seq_paired_HiSeqXTen.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_427_PS_10DPA_DNaseseq_1_SZ043_DNase_seq_paired_HiSeqXTen',
    name: 'Sample_01_427_PS_10DPA_DNaseseq_1_SZ043_DNase_seq_paired_HiSeqXTen',
    category: ['samples'],
    assemblyNames: ['Cucumis_melo'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_427_PS_10DPA_DNaseseq_1_SZ043_DNase_seq_paired_HiSeqXTen.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_427_PS_10DPA_DNaseseq_1_SZ043_DNase_seq_paired_HiSeqXTen.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_428_PI_40DPA_DNaseseq_3_SZ060316D_DNase_seq_paired_HiSeqXTen',
    name: 'Sample_01_428_PI_40DPA_DNaseseq_3_SZ060316D_DNase_seq_paired_HiSeqXTen',
    category: ['samples'],
    assemblyNames: ['Cucumis_melo'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_428_PI_40DPA_DNaseseq_3_SZ060316D_DNase_seq_paired_HiSeqXTen.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_428_PI_40DPA_DNaseseq_3_SZ060316D_DNase_seq_paired_HiSeqXTen.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_429_PI_40DPA_DNaseseq_2_SZ060316D_DNase_seq_paired_HiSeqXTen',
    name: 'Sample_01_429_PI_40DPA_DNaseseq_2_SZ060316D_DNase_seq_paired_HiSeqXTen',
    category: ['samples'],
    assemblyNames: ['Cucumis_melo'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_429_PI_40DPA_DNaseseq_2_SZ060316D_DNase_seq_paired_HiSeqXTen.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_429_PI_40DPA_DNaseseq_2_SZ060316D_DNase_seq_paired_HiSeqXTen.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_430_PI_40DPA_DNaseseq_1_SZ021_DNase_seq_paired_HiSeqXTen',
    name: 'Sample_01_430_PI_40DPA_DNaseseq_1_SZ021_DNase_seq_paired_HiSeqXTen',
    category: ['samples'],
    assemblyNames: ['Cucumis_melo'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_430_PI_40DPA_DNaseseq_1_SZ021_DNase_seq_paired_HiSeqXTen.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_430_PI_40DPA_DNaseseq_1_SZ021_DNase_seq_paired_HiSeqXTen.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_431_PI_leaf_DNaseseq_2_SZ015_DNase_seq_paired_HiSeqXTen',
    name: 'Sample_01_431_PI_leaf_DNaseseq_2_SZ015_DNase_seq_paired_HiSeqXTen',
    category: ['samples'],
    assemblyNames: ['Cucumis_melo'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_431_PI_leaf_DNaseseq_2_SZ015_DNase_seq_paired_HiSeqXTen.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_431_PI_leaf_DNaseseq_2_SZ015_DNase_seq_paired_HiSeqXTen.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_432_PI_leaf_DNaseseq_1_SZ015_DNase_seq_paired_HiSeqXTen',
    name: 'Sample_01_432_PI_leaf_DNaseseq_1_SZ015_DNase_seq_paired_HiSeqXTen',
    category: ['samples'],
    assemblyNames: ['Cucumis_melo'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_432_PI_leaf_DNaseseq_1_SZ015_DNase_seq_paired_HiSeqXTen.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_432_PI_leaf_DNaseseq_1_SZ015_DNase_seq_paired_HiSeqXTen.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_433_PI_10DPA_DNaseseq_4_SZ027_DNase_seq_paired_HiSeqXTen',
    name: 'Sample_01_433_PI_10DPA_DNaseseq_4_SZ027_DNase_seq_paired_HiSeqXTen',
    category: ['samples'],
    assemblyNames: ['Cucumis_melo'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_433_PI_10DPA_DNaseseq_4_SZ027_DNase_seq_paired_HiSeqXTen.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_433_PI_10DPA_DNaseseq_4_SZ027_DNase_seq_paired_HiSeqXTen.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_434_PI_10DPA_DNaseseq_3_SZ027_DNase_seq_paired_HiSeqXTen',
    name: 'Sample_01_434_PI_10DPA_DNaseseq_3_SZ027_DNase_seq_paired_HiSeqXTen',
    category: ['samples'],
    assemblyNames: ['Cucumis_melo'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_434_PI_10DPA_DNaseseq_3_SZ027_DNase_seq_paired_HiSeqXTen.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_434_PI_10DPA_DNaseseq_3_SZ027_DNase_seq_paired_HiSeqXTen.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_435_PI_10DPA_DNaseseq_2_SZ015_DNase_seq_paired_HiSeqXTen',
    name: 'Sample_01_435_PI_10DPA_DNaseseq_2_SZ015_DNase_seq_paired_HiSeqXTen',
    category: ['samples'],
    assemblyNames: ['Cucumis_melo'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_435_PI_10DPA_DNaseseq_2_SZ015_DNase_seq_paired_HiSeqXTen.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_435_PI_10DPA_DNaseseq_2_SZ015_DNase_seq_paired_HiSeqXTen.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
  {
    type: 'BasicTrack',
    trackId:
      'Sample_01_436_PI_10DPA_DNaseseq_1_SZ015_DNase_seq_paired_HiSeqXTen',
    name: 'Sample_01_436_PI_10DPA_DNaseseq_1_SZ015_DNase_seq_paired_HiSeqXTen',
    category: ['samples'],
    assemblyNames: ['Cucumis_melo'],
    adapter: {
      type: 'BedTabixAdapter',
      bedGzLocation: {
        uri:
          GetStaticFile+"/data/bed/Sample_01_436_PI_10DPA_DNaseseq_1_SZ015_DNase_seq_paired_HiSeqXTen.bed.gz"
      },
      index: {
        location: {
          uri:
            GetStaticFile+"/data/bed/Sample_01_436_PI_10DPA_DNaseseq_1_SZ015_DNase_seq_paired_HiSeqXTen.bed.gz.tbi"
        },
        indexType: 'TBI',
      },
    },
  },
  
]// JavaScript Document