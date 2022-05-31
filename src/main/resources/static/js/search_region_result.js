import {DoSearchChr,GetPlotImg} from "./api.js";

$(window).on('load',function () {

    function GetQueryString(name)
    {
        var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if(r!=null)return  unescape(r[2]); return null;
    }

    let sampleId=GetQueryString("sampleId");
    let chrs=GetQueryString("chrs");
    let start=GetQueryString("start");
    let end=GetQueryString("end");
    //"https://ptr.nefu.edu.cn/PlantCADB/dataBrowse/doSearchChr?sampleId=" + sampleId + "&chrs=" + chrs+"&start="+start+"&end="+end,
    $.ajax({
        url: DoSearchChr+"?sampleId=" + sampleId + "&chrs=" + chrs+"&start="+start+"&end="+end,
        async: false,
        cache: false,
        timeout:10000,
        beforeSend: function (XMLHttpRequest) {
            XMLHttpRequest.setRequestHeader("Access-Control-Allow-Origin", "*");
        },
        success: function (res) {

            let data = res["data"];
            //Accessible chromatin region associated network

            var dom = document.getElementById("car_chr_pic");
            var myChart = echarts.init(dom);
            var chrNumber =[];
            var chrnum=[];
            for (var i=0;i<data.chrNum.length;i++){
                chrNumber.push(data.chrNumber[i]);
                chrnum[i]={value:data.chrNum[i],name:data.chrNumber[i]};
            }
            var option = {
                tooltip : {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                legend: {
                    orient: 'vertical',
                    left: 'left',
                    data:chrNumber
                },
                series : [
                    {
                        name: 'Number',
                        type: 'pie',
                        radius : '55%',
                        label: { //标签显示
                            normal:{
                                show:false
                            }
                        },
                        center: ['60%', '50%'],
                        data:chrnum,
                        itemStyle: {
                            emphasis: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    }
                ]
            };
            ;
            myChart.setOption(option, true);

            //Region Overview
            $('#RegionID')[0].innerHTML=data.sampleName[0];
            $('#DataType')[0].innerHTML=data.sampleName[1];
            $('#Species')[0].innerHTML=data.sampleName[2];
            $('#Layout')[0].innerHTML=data.sampleName[3];
            $('#Organisms')[0].innerHTML=data.sampleName[4];
            $('#Tissue')[0].innerHTML=data.sampleName[5];
            $('#Description')[0].innerHTML=data.sampleName[6];
            $('#RegionNumber')[0].innerHTML=data.sampleName[7];
            $('#GEOID')[0].innerHTML=data.sampleName[8];

            $('#chrID')[0].innerHTML=chrs;

            if (start==-1 && end==-1){
                $('#StartPosition')[0].innerHTML=data.startPosition;
                $('#EndPosition')[0].innerHTML=data.startPosition;
            }
            else {
                $('#StartPosition')[0].innerHTML=start;
                $('#EndPosition')[0].innerHTML=end;
            }



            //Accessible Chromatin Region
            $('#car_table').bootstrapTable({
                data:data.result,
                pageNumber:1,
                pagination:'client',
                pageSize: 10,
                pageList:[ 20, 50, 100, 200 ],
                search:true,
                columns:[{
                    title:"Chr",
                    align : 'center',
                    sortable:true,

                },{
                    title: "Start",
                    align : 'center',
                    sortable:true,
                },{
                    title: "End",
                    align : 'center',
                    sortable:true,
                },{
                    title: "length",
                    align : 'center',
                    sortable:true,
                },{
                    title: "abs_summit",
                    align : 'center',
                    sortable:true,
                },{
                    title: "pileup",
                    align : 'center',
                    sortable:true,
                },{
                    title: "-Log<sub>10</sub>pvalue",
                    align : 'center',
                    sortable:true,
                },{
                    title: "fold_enrichment",
                    align : 'center',
                    sortable:true,
                },{
                    title: "-Log<sub>10</sub>qvalue",
                    align : 'center',
                    sortable:true,
                },{
                    title: "Region ID",
                    align : 'center',
                    sortable:true,
                    formatter:linkFormatter
                },{
                    title: "Type",
                    align : 'center',
                    sortable:true,
                }]
                //showLoading:false
            });
            $('#car_table').bootstrapTable('hideLoading');  //取消Loading

            function linkFormatter(value,row,index){
                return "<a href='/PlantCADB/search/search_car_detail?samId="+data.sampleName[0]+"&ATAC="+value+"' target='_blank' style='color: #337ab7'>"+value+"</a>";

            }



            //Plot ABCD
            $('#tssEnrichment').attr("src",GetPlotImg+data.TssEnrichment);
            $('#annotatedGenomic').attr("src",GetPlotImg+data.AnnotatedGenomic);
            $('#combinationChart').attr("src",GetPlotImg+data.CombinationChart);
            $('#peakContribution').attr("src",GetPlotImg+data.PeakContribution);

        }

    })


})

function picLayer(obj){
    var picsrc = $(obj).attr("src");
    layer.open({
        type: 2,
        title: false,
        area: ['1200px', '700px'],
        shade: 0.8,
        closeBtn: 0,
        shadeClose: true,
        content: picsrc
    });
}

