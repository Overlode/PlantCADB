import {GetAnalysisData,GetChr,GetSearchTFName} from './api.js'

let data;
let List;
let select_SampleIdData;
let map;
$(window).on('load',function (){

    //sampleId species获取
    $.ajax({
        timeout : 10000,
        url:GetAnalysisData,
        async:false,
        cache: false,
        success:function (res){
            data = res["data"];
            List = data.result;
            for(var i=0;i<data.species.length;i++) {
                var speciesName = data.species[i];
                $('#select_species').append("<option value='" + speciesName + "'>" + speciesName + "</option>");
            }




            // $('#select_species').change(function (){
            //
            //     // $('#select_SampleId').append("<option value='" + sampleID + "'>" + sampleID + "</option>");
            //
            //     // $('#search_species_byTF').empty();
            //     // $('#search_species_byTF').append("<option style='color: lightgray'>Please choose &nbsp;&nbsp;&nbsp;</option>");
            // })

            $('#select_SampleId').change(function (){
                //chr获取
                $('#select_Chr').empty();
                $.ajax({
                    timeout : 10000,
                    url:GetChr+$('#select_SampleId option:selected').val(),
                    async:false,
                    cache: false,
                    success:function (res) {
                        let data = res["data"];
                        for(var i=0;i<data.chrs.length;i++) {
                            var chr = data.chrs[i];
                            $('#select_Chr').append("<option value='" + chr + "'>" + chr + "</option>");
                        }

                    }
                })
            })

            $('#search_species_byTF').change(function (){
                $('#search_name_byTF').empty();
                $('#search_name_byTF').append("<option style='color: lightgray'>Please choose &nbsp;&nbsp;&nbsp;</option>");
                $('#search_TFFamily_byspecies').empty();
                $('#search_TFFamily_byspecies').append("<option style='color: lightgray'>Please choose &nbsp;&nbsp;&nbsp;</option>");
                $.ajax({
                    timeout : 10000,
                    url:GetSearchTFName+"?species="+$('#search_species_byTF option:selected').val(),
                    async:false,
                    cache: false,
                    dataType:"json",
                    beforeSend: function (XMLHttpRequest) {XMLHttpRequest.setRequestHeader("Access-Control-Allow-Origin", "*");},
                    success:function (res) {
                        map=res["data"]["map"];
                        let familyList = res["data"]["map"]["familyList"];
                        if(res["data"]["list"][0]!=='No Available Data !'){
                            for (let i = 0; i < familyList.length; i++) {
                                let familyName = familyList[i];
                                $('#search_TFFamily_byspecies').append("<option value='" + familyName + "'>" + familyName + "</option>");
                            }
                        }
                        else{
                            $('#search_TFFamily_byspecies').append("<option value='" + "" + "'>" + "No Available Data !" + "</option>");
                        }
                    }
                })
            })

        }
    })


})


$('#select_species').change(function (){
    for (let i in List){
        if ($('#select_species option:selected').val()===i){
            $('#select_SampleId').empty();
            $('#select_SampleId').append("<option style='color: lightgray'>Please choose &nbsp;&nbsp;&nbsp;</option>");
            for (let j=0;j<List[i].length;j++){
                let sampleID = List[i][j];
                $('#select_SampleId').append("<option value='" + sampleID + "'>" + sampleID + "</option>");
            }

        }
    }
})
$('#search_TFFamily_byspecies').change(function (){
    let familyName = $('#search_TFFamily_byspecies option:selected').val();
    let list = map["result"][familyName];
    $('#search_name_byTF').empty();
    $('#search_name_byTF').append("<option style='color: lightgray'>Please choose &nbsp;&nbsp;&nbsp;</option>");
    for(let i =0;i<list.length;i++){
        $('#search_name_byTF').append("<option value='" + list[i] + "'>" + list[i] + "</option>");
    }
})

