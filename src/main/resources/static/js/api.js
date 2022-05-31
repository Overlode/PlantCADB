// let BASE_URL = "http://10.181.152.179:8080";
let BASE_URL = "https://bioinfor.nefu.edu.cn/PlantCADB";
let GetData = "/getData";
let IndexInfo = "/info/echarts";
let DatatypeEChartInfo = BASE_URL+IndexInfo+"/datatype";
let TissueEChartInfo = BASE_URL+IndexInfo+"/tissue";
let SpeciesEChartInfo = BASE_URL+IndexInfo+"/bar";
let GetAllData = BASE_URL + GetData + "/all";
let GetDataType = BASE_URL + GetData + "/getDataTypeCount";
let GetClassify = BASE_URL + GetData + "/getClassifyCount";
let GetLayout = BASE_URL + GetData + "/getLayoutCount";
let GetTissue = BASE_URL + GetData + "/getTissueCount";
let GetSpecies = BASE_URL + GetData + "/getSpeciesCount";
let GetClass = BASE_URL + GetData + "/getClassCount";
let GetSamInfoBySamId = BASE_URL + GetData + "/getSamInfoBySamId";
let GetPeakFile = BASE_URL + GetData + "/getPeakFile";
let GetFootprintStatistics = BASE_URL + GetData + "/getFootprintStatistics"
let GetFootprintStatisticsByFilter = BASE_URL + GetData + "/getFootprintStatisticsByFilter"
let GetTFFootprintImg = BASE_URL + "/static/TFFootprint/";
let GetPlotImg = BASE_URL + "/static/Picture/";
let GetPeakFileLineByATAC = BASE_URL + GetData + "/getPeakFileLineByATAC";
let GetAssociatedGene = BASE_URL + GetData + "/getAssociatedGene";
let GetPeakMotifFile = BASE_URL + GetData + "/getPeakMotifFile";
let GetFootprintMbpsFile = BASE_URL + GetData + "/getFootprintMbpsFile";
let GetSNP = BASE_URL + GetData + "/getSNP";
let GetAnalysisData = BASE_URL+GetData+"/analysis";
let GetChr = BASE_URL + GetData +"/getChr?samId=";
let GetSearchTFName = BASE_URL + GetData +"/searchTFName"
let GetStaticFile = BASE_URL+"/static";
let SearchTF = BASE_URL + GetData +"/searchTF"
let SelectRegionIdDetail = BASE_URL+GetData +"/selectRegionIdDetail";
let SearchGene = BASE_URL + GetData +"/searchGene";
let DoSearchChr = BASE_URL + GetData +"/doSearchChr";
let GetAnalysisOptions = BASE_URL + GetData +"/getAnalysisOptions";
let DoAnalysis = BASE_URL + GetData +"/doAnalysis";
let AnalysisTwo = BASE_URL + GetData +"/analysisTwo";
let GetAllSamId = BASE_URL + GetData +"/getAllSamId";
let DownloadData = BASE_URL + GetData +"/downloadData";
let GetIndexForm = BASE_URL + GetData +"/indexForm";
export {
    GetAllData,
    GetLayout,
    GetSpecies,
    GetTissue,
    GetDataType,
    GetClass,
    GetSamInfoBySamId,
    GetPeakFile,
    GetFootprintStatistics,
    BASE_URL,
    GetTFFootprintImg,
    GetPlotImg,
    GetFootprintStatisticsByFilter,
    GetPeakFileLineByATAC,
    GetAssociatedGene,
    GetPeakMotifFile,
    GetFootprintMbpsFile,
    GetSNP,
    GetAnalysisData,
    GetChr,
    GetStaticFile,
    GetSearchTFName,
    SearchTF,
    SelectRegionIdDetail,
    SearchGene,
    DatatypeEChartInfo,
    TissueEChartInfo,
    SpeciesEChartInfo,
    DoSearchChr,
    GetAnalysisOptions,
    DoAnalysis,
    AnalysisTwo,
    GetAllSamId,
    DownloadData,
    GetIndexForm,
    GetClassify,
}