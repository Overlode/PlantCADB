import {GetAnalysisOptions, GetSearchTFName} from "./api.js";
let data;
$(document).ready(function () {
    $('#select_species').change(function () {
        let speciesOption = $('#select_species option:selected');
        if (speciesOption.val() !== '') {
            $.ajax({
                url: GetAnalysisOptions + '?' + 'species=' + speciesOption.val(),
                timeout: 10000,
                success: function (res) {
                    data = res["data"];
                    let optionsList = data["options"];
                    $("#select_SampleId").empty();
                    $("#select_SampleId1").empty();
                    $("#select_classify").empty();
                    let firstClassify = '<option value="" style="color: lightgray">please choose eg:abiotic stress</option>'
                    $("#select_classify").append(firstClassify);
                    for (let i = 0; i < optionsList.length; i++) {
                        let option = optionsList[i]["option"];
                        let optionName = optionsList[i]["optionName"];
                        $("#select_classify").append('<option value=' + option + '>'+optionName+'</option>');
                    }
                }
            })
        }
    });
    $("#select_classify").change(function (){
        let classifySelected = $("#select_classify option:selected").val();
        let list = data["result"][classifySelected];
        $("#select_SampleId").empty();
        $("#select_SampleId1").empty();
        for(let i=0;i<list.length;i++){
            let sampleId = list[i]["samId"];
            let appendLine = '<option value="'+sampleId+'">'+sampleId+":"+list[i]["description"]+'</option>';
            $("#select_SampleId").append(appendLine);
            $("#select_SampleId1").append(appendLine);
        }
    })
    $('#analysis_species_byTF').change(function () {
        let option = $('#analysis_species_byTF option:selected');
        if (option.val() !== '') {

            $.ajax({
                url: GetSearchTFName + '?' + 'species=' + option.val(),
                timeout: 10000,
                success: function (res) {
                    let list = res["data"]["list"];
                    $('#alys_TFOnename').empty();
                    $('#alys_TFTwoname').empty();
                    for (let i = 0; i < list.length; i++) {
                        let chr = list[i];
                        $('#alys_TFOnename').append("<option value='" + chr + "'>" + chr + "</option>");
                        $('#alys_TFTwoname').append("<option value='" + chr + "'>" + chr + "</option>");
                    }
                }
            })
        }


    });
})


