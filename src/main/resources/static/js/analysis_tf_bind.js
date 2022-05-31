import {AnalysisTwo} from './api.js'
$(window).on('load',function () {

    function GetQueryString(name)
    {
        var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if(r!=null)return  unescape(r[2]); return null;
    }

    let species=GetQueryString("species");
    let TFOneName=GetQueryString("TFOneName");
    let TFTwoName=GetQueryString("TFTwoName");
    let windowlength=GetQueryString("length");


    $.ajax({
        url: AnalysisTwo+"?species=" + species +"&TFOneName="+TFOneName+"&TFTwoName="+TFTwoName+"&length="+windowlength,
        async: false,
        cache: false,
        timeout:10000,
        beforeSend: function (XMLHttpRequest) {
            XMLHttpRequest.setRequestHeader("Access-Control-Allow-Origin", "*");
        },
        success: function (res) {

            let data = res["data"];
            //Region Overview
            $('#OneName')[0].innerHTML=data.oneName;
            $('#Onefamily')[0].innerHTML=data.oneFamily;

            $('#TwoName')[0].innerHTML=data.twoName;
            $('#Twofamily')[0].innerHTML=data.twoFamily;



            //TF FOOTPRINT
            $('#regions_byTFs_table').bootstrapTable({
                data:data.result,
                cache:false,
                pageNumber:1,
                pagination:'client',
                pageSize: 10,
                pageList:[ 20, 50, 100, 200 ],
                search:true,
                sortable:true,
                columns:[{
                    title:data.oneName,
                    sortable:true,
                    align : 'center',
                },{
                    title: data.twoName,
                    sortable:true,
                    align : 'center',
                },{
                    title: "Overlapping Length",
                    sortable:true,
                    align : 'center',
                },{
                    title: "Ratio(a)",
                    sortable:true,
                    align : 'center',
                },{
                    title: "Ratio(b)",
                    sortable:true,
                    align : 'center',
                }]
                //showLoading:false
            });
            $('#regions_byTFs_table').bootstrapTable('hideLoading');  //取消Loading












        }

    })

})