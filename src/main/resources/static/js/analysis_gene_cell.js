import {GetSamInfoBySamId, GetPeakFile, GetFootprintStatistics, GetTFFootprintImg, GetPlotImg,GetFootprintStatisticsByFilter} from "./api.js";

let searchResultData;
let footprintTableData;
let myChart
let samInfo;
let chrMap = new Map();
$(window).on('load', function () {
    let search = location.search;
    var dom = document.getElementById("container");
    myChart = echarts.init(dom);
    var pcrdom = document.getElementById("pcr");
    var pcrChart = echarts.init(pcrdom);
    $.ajax({
        timeout : 10000,
        url: GetSamInfoBySamId + search,
        async: false,
        success: function (res) {
            samInfo = res["data"];
            $('#regionID')[0].innerHTML = res["data"]["samId"];
            $('#datatype')[0].innerHTML = res["data"]["typeName"];
            $('#class')[0].innerHTML = res["data"]["className"];
            $('#layout')[0].innerHTML = res["data"]["layoutName"];
            $('#species')[0].innerHTML = res["data"]["speciesName"];
            $('#description')[0].innerHTML = res["data"]["description"];
            $('#tissue')[0].innerHTML = res["data"]["tissueName"];
            $('#regionNumber')[0].innerHTML = res["data"]["regionNumber"];
            $('#regionLength')[0].innerHTML = res["data"]["regionLength"];
            $('#Runs')[0].innerHTML = res["data"]["runs"];
            $('#tss_score')[0].innerHTML = res["data"]["score"];
            $('#FRiP')[0].innerHTML = res["data"]["friP"];
            $('#Mean_insert_size')[0].innerHTML = res["data"]["meanInsertSize"];
            $('#Standard_deviation')[0].innerHTML = res["data"]["standardDeviation"];
            $('#tssEnrichment').attr("src", GetPlotImg + "/TssEnrichment/" + samInfo["samId"] + "_TssEnrichment.png");
            $('#annotatedGenomic').attr("src", GetPlotImg + "/AnnotatedGenomic/" + samInfo["samId"] + "_AnnotatedGenomic.png");
            $('#combinationChart').attr("src", GetPlotImg + "/CombinationChart/" + samInfo["samId"] + "_CombinationChart.png");
            $('#peakContribution').attr("src", GetPlotImg + "/PeakContribution/" + samInfo["samId"] + "_PeakContribution.png");
        }
    });
    $.ajax({
        timeout : 10000,
        url: GetPeakFile + search,
        async: false,
        success: function (res) {
            searchResultData = res["data"];
        }
    });
    $.ajax({
        timeout : 10000,
        url: GetFootprintStatistics + search,
        async: false,
        success: function (res) {
            footprintTableData = res["data"];
        }
    });

    $('#searchResult').bootstrapTable({

        data: searchResultData,
        cache: false,
        pageNumber: 1,
        pagination: true,
        sidePagination: 'client',
        pageSize: 10,
        pageList: [10, 20, 50, 100, 200],
        search: true,
        columns: [
            {
                title: "Chr",
                align: 'center',
                sortable: true,
            },
            {
                title: "Start",
                align: 'center',
                sortable: true,
            }, {
                title: "End",
                align: 'center',
                sortable: true,
            }, {
                title: "length",
                align: 'center',
                sortable: true,
            }, {
                title: "abs_summit",
                align: 'center',
                sortable: true,
            }, {
                title: "pileup",
                align: 'center',
                sortable: true,
            }, {
                title: "-Log<sub>10</sub>pvalue",
                align: 'center',
                sortable: true,
            }, {
                title: "fold_enrichment",
                align: 'center',
                sortable: true,
            }, {
                title: "-Log<sub>10</sub>qvalue",
                align: 'center',
                sortable: true,
            },
            {
                title: "Region ID",
                align: 'center',
                sortable: true,
                formatter: linkFormatter,
            }
            , {
                title: "Type",
                sortable: true,
                align: 'center',
            }
        ],
    });
    $('#searchResult').bootstrapTable('hideLoading');  //取消Loading
    function linkFormatter(value, row, index) {
        // return "<a href='search_car_detail.html?sampleId="+data.sampleName[0]+"&ATACId="+value+"' target='_blank'>"+value+"</a>";
        return "<a href='/PlantCADB/search/search_car_detail?samId=" + $('#regionID')[0].innerHTML + "&ATAC=" + value + "'target='_blank'style='color: #337ab7'>" + value + "</a>";
    }

    $('#footprint_table').bootstrapTable({

        data: footprintTableData,
        cache: false,
        pageNumber: 1,
        pagination: 'client',
        pageSize: 10,
        pageList: [10, 20, 50, 100, 200],
        search: true,
        sortable: true,
        columns: [{
            title: "Motif ID",
            align: 'center',
            sortable: true
        }, {
            title: "Num",
            align: 'center',
            sortable: true,
        }, {
            title: "Protection_Score",
            align: 'center',
            sortable: true,
        }, {
            title: "TC",
            align: 'center',
            sortable: true,
        }
            , {
                title: "Logo",
                align: 'center',
                width: 100,
                formatter: imgFormatter
            }
        ]
    });
    $('#footprint_table').bootstrapTable('hideLoading');  //取消Loading

    function imgFormatter(value, row, index) {
        return "<img class='pic'src=" + GetTFFootprintImg + value + " width='100%' onclick='picLayerShow(this)'>";
    }


    searchResultData.forEach(item => {
        let chr = item[0];
        if (chrMap.has(chr)) {
            let count = chrMap.get(chr);
            chrMap.set(chr, count + 1);
        } else {
            chrMap.set(chr, 1);
        }
    });

    // chrNum echarts图
        let chrNumber =[];
        let chrNum=[];
        let count = 0;
        for(let s of chrMap){
            chrNumber.push(s[0]);
            chrNum[count]={value:s[1],name:s[0]};
            count++;
        }

    var option = {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            type: 'scroll',
            orient: 'vertical',
            left: 'left',
            data: chrNumber
        },
        series: [
            {
                name: 'Number',
                type: 'pie',
                radius: '55%',
                label: { //标签显示
                    normal: {
                        show: false,
                    }
                },
                center: ['50%', '50%'],
                data: chrNum,
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)',

                    }
                }
            }
        ]
    };
    ;
    myChart.setOption(option, true);


    // PCRNumber charts
    var option1 = {
        title: {
            left: 'center'
        },
        color: ['#0098d9', '#E87C25', '#e6b600'],
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            data: ['dACR', 'gACR', 'pACR']
        },
        series: [
            {
                name: 'Number',
                type: 'pie',
                radius: '55%',
                data: [
                    {value: samInfo["dacr"], name: 'dACR'},
                    {value: samInfo["gacr"], name: 'gACR'},
                    {value: samInfo["pacr"], name: 'pACR'},
                ],
                label: { //标签显示
                    formatter: "{b}\n\n",
                    padding: [0, -55]
                },
                center: ['50%', '50%'],
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };
    pcrChart.setOption(option1, true);
    //
    //
    //
    //footprint Table


    // }
    //
    //
    // })
    //
    //
    var timer ;//定时器
    var wait = 0 ; //等待时间
    let number=-999;
    let protection=-999;
    let tc=-999;
    $('.number').each(function (){
        $(this).click(function (){
            let temp=event.currentTarget.childNodes[1].innerText;
            if(temp=='none') number=-999;
            else number=parseInt(temp);
            $('#NumThreshHold')[0].innerText=event.currentTarget.innerText;
            // console.log(number);
            onclick();
        })
    })
    //
    $('.protection').each(function (){
        $(this).click(function (){
            let temp=event.currentTarget.childNodes[1].innerText;
            if(temp=='none') protection=-999;
            else protection=parseInt(temp);
            $('#ProThreshHold')[0].innerText=event.currentTarget.innerText;
            // console.log(protection);
            onclick();
        })
    })
    //
    $('.TC').each(function (){
        $(this).click(function (){
            let temp=event.currentTarget.childNodes[1].innerText;
            if(temp=='none') tc=-999;
            else tc=parseInt(temp);
            $('#TCThreshHold')[0].innerText=event.currentTarget.innerText;
            // console.log(tc);
            onclick();
        })
    })
    //
    function onclick(){
        let tableUrl = GetFootprintStatisticsByFilter+"?samId="+samInfo["samId"];
        if(number!=-999||protection!=-999||tc!=-999||number!=-1||protection!=-1||tc!=-1){
            if(number!=-999&&number!=-1) {
                tableUrl = tableUrl + "&number=" + number;
            }
            if(protection!=-999&&protection!=-1) {
                tableUrl = tableUrl + "&score=" + protection;
            }
            if(tc!=-999&&tc!=-1) {
                tableUrl = tableUrl + "&TC=" + tc;
            }
        }

        $.ajax({
            timeout : 10000,
            url:tableUrl,
            async:false,
            cache: false,
            success:function (res){
                $('#footprint_table').bootstrapTable('destroy');//销毁表格，重新渲染
                $('#footprint_table').bootstrapTable({
                    data:res["data"],
                    pageNumber:1,
                    pagination:'client',
                    pageSize: 10,
                    pageList:[ 5, 10, 20, 30 ],
                    search:true,
                    columns: [{
                        title:"Motif ID",
                        align : 'center',
                        sortable:true,

                    },{
                        title: "Num",
                        align : 'center',
                        sortable:true,

                    },{
                        title: "Protection_Score",
                        align : 'center',
                        sortable:true,

                    },{
                        title: "TC",
                        align : 'center',
                        sortable:true,
                    }
                        ,{
                            title: "Logo",
                            align: 'center',
                            width:100,
                            sortable:true,
                            formatter:ImgFormatter
                        }
                    ]
                });
                $('#footprint_table').bootstrapTable('hideLoading');  //取消Loading
                function ImgFormatter(value, row, index) {
                    return "<img class='pic'src=" + GetTFFootprintImg + value + " width='100%' onclick='picLayerShow(this)'>";
                }
            }

        })
    }
});

$(window).onresize = function (){
    myChart.resize();
}

