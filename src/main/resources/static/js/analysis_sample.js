import {DoAnalysis} from './api.js'

$(window).on('load', function () {

    function GetQueryString(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]);
        return null;
    }

    var sampleId;
    let sampleIdOne = GetQueryString("sampleIdOne");
    let sampleIdTwo = GetQueryString("sampleIdTwo");


    $.ajax({
        url: DoAnalysis+"?sampleIdOne=" + sampleIdOne + "&sampleIdTwo=" + sampleIdTwo,
        async: false,
        cache: false,
        timeout: 10000,
        beforeSend: function (XMLHttpRequest) {
            XMLHttpRequest.setRequestHeader("Access-Control-Allow-Origin", "*");
        },
        success: function (res) {
            let data = res["data"];
            //echarts图
            var dom = document.getElementById("table_a_overlap_ratio_pic");
            var myChart = echarts.init(dom);
            var app = {};
            let option = {
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                color: ['#A4ABA7', '#093d63'],
                legend: {
                    orient: 'vertical',
                    left: 'left',

                    padding: [43, 0, 0, 0],
                    data: ['diff_region', 'overlap_region']
                },
                series: [
                    {
                        name: 'Number',
                        type: 'pie',
                        radius: '45%',
                        center: ['45%', '55%'],
                        label: { //标签显示
                            normal: {
                                show: false
                            }
                        },
                        data: [
                            {value: data.peakOverNumber, name: 'overlap_region'},
                            {value: data.peakTwoNumber, name: 'diff_region'},

                        ],
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
            if (option && typeof option === "object") {
                myChart.setOption(option, true);
            }


            //echart图2
            var dom1 = document.getElementById("table_b_overlap_ratio_pic");
            var myChart1 = echarts.init(dom1);
            var app = {};
            option = {
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                color: ['#A4ABA7', '#1d885d'],
                legend: {
                    orient: 'vertical',
                    left: 'left',

                    padding: [43, 0, 0, 0],
                    data: ['diff_region', 'overlap_region']
                },
                series: [
                    {
                        name: 'Number',
                        type: 'pie',
                        radius: '45%',
                        center: ['45%', '55%'],
                        label: { //标签显示
                            normal: {
                                show: false
                            }
                        },
                        data: [
                            {value: data.peakOverNumber, name: 'overlap_region'},
                            {value: data.peakOneNumber, name: 'diff_region'},

                        ],
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
            if (option && typeof option === "object") {
                myChart1.setOption(option, true);
            }

            //acr图
            //echarts图
            var dom2 = document.getElementById("acr");
            var myChart2 = echarts.init(dom2);
            var app = {};
            option = null;
            option = {
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                color: ['#043b60', '#0b5b7e', '#3c91b8'],
                legend: {
                    orient: 'vertical',
                    left: 'left',

                    padding: [43, 0, 0, 0],
                    data: ['dACR', 'gACR', 'pACR']
                },
                series: [
                    {
                        name: 'Number',
                        type: 'pie',
                        radius: '45%',
                        center: ['45%', '65%'],
                        label: { //标签显示
                            normal: {
                                show: false
                            }
                        },
                        data: [
                            {value: data.sampleOneDetail[16], name: 'dACR'},
                            {value: data.sampleOneDetail[17], name: 'gACR'},
                            {value: data.sampleOneDetail[18], name: 'pACR'},
                        ],
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
            if (option && typeof option === "object") {
                myChart2.setOption(option, true);
            }


            //echart图2
            var dom3 = document.getElementById("acr1");
            var myChart3 = echarts.init(dom3);
            var app = {};
            option = null;
            option = {
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                color: ['#1e835a', '#2fa471', '#76c39c'],
                legend: {
                    orient: 'vertical',
                    left: 'left',

                    padding: [43, 0, 0, 0],
                    data: ['dACR', 'gACR', 'pACR']
                },
                series: [
                    {
                        name: 'Number',
                        type: 'pie',
                        radius: '45%',
                        center: ['45%', '65%'],
                        label: { //标签显示
                            normal: {
                                show: false
                            }
                        },
                        data: [
                            {value: data.sampleTwoDetail[16], name: 'dACR'},
                            {value: data.sampleTwoDetail[17], name: 'gACR'},
                            {value: data.sampleTwoDetail[18], name: 'pACR'},
                        ],
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
            if (option && typeof option === "object") {
                myChart3.setOption(option, true);
            }

            //sampleOne
            $('#regionID').html(data.sampleOneDetail[0]);
            $('#datatype').html(data.sampleOneDetail[1]);
            $('#class').html(data.sampleOneDetail[2]);
            $('#layout').html(data.sampleOneDetail[3]);
            $('#species').html(data.sampleOneDetail[4]);
            $('#description').html(data.sampleOneDetail[5]);
            $('#tissue').html(data.sampleOneDetail[6]);
            $('#regionNumber').html(data.sampleOneDetail[7]);
            $('#regionLength').html(data.sampleOneDetail[8]);
            $('#Runs').html(data.sampleOneDetail[10]);
            $('#tss_score').html(data.sampleOneDetail[11]);
            $('#FRiP').html(data.sampleOneDetail[12]);
            $('#Mean_insert_size').html(data.sampleOneDetail[13]);
            $('#Standard_deviation').html(data.sampleOneDetail[14]);
            // $('#motif').html(data.sampleOneDetail[15]);
            // $('#dacr').html(data.sampleOneDetail[16]);
            // $('#gacr').html(data.sampleOneDetail[17]);
            // $('#pacr').html(data.sampleOneDetail[18]);

            // $('#dacr')[0].innerHTML=data.sampleOneDetail[15];
            // $('#gacr')[0].innerHTML=data.sampleOneDetail[16];
            // $('#pacr')[0].innerHTML=data.sampleOneDetail[17];


            $('#alysSampleId').attr('href', '/PlantCADB/search/analysis_gene_cell?samId=' + data.sampleOneDetail[0]);

            //sampleTwo
            $('#regionID1').html(data.sampleTwoDetail[0]);
            $('#datatype1').html(data.sampleTwoDetail[1]);
            $('#class1').html(data.sampleTwoDetail[2]);
            $('#layout1').html(data.sampleTwoDetail[3]);
            $('#species1').html(data.sampleTwoDetail[4]);
            $('#description1').html(data.sampleTwoDetail[5]);
            $('#tissue1').html(data.sampleTwoDetail[6]);
            $('#regionNumber1').html(data.sampleTwoDetail[7]);
            $('#regionLength1').html(data.sampleTwoDetail[8]);
            $('#Runs1').html(data.sampleTwoDetail[10]);
            $('#tss_score1').html(data.sampleTwoDetail[11]);
            $('#FRiP1').html(data.sampleTwoDetail[12]);
            $('#Mean_insert_size1').html(data.sampleTwoDetail[13]);
            $('#Standard_deviation1').html(data.sampleTwoDetail[14]);
            // $('#motif1').html(data.sampleTwoDetail[15]);
            // $('#dacr1').html(data.sampleTwoDetail[16]);
            // $('#gacr1').html(data.sampleTwoDetail[17]);
            // $('#pacr1').html(data.sampleTwoDetail[18]);

            // $('#a_diffRegion').html(data.peakOverNumber);
            // $('#a_overRegion').html(data.peakTwoNumber);
            //
            // $('#b_diffRegion').html(data.peakOverNumber);
            // $('#b_overRegion').html(data.peakOneNumber);

            $('#alysSampleId1').attr('href', '/PlantCADB/search/analysis_gene_cell?samId=' + data.sampleTwoDetail[0]);

            //differential regions sample1
            $('#differential_Region_Table').bootstrapTable({
                data: data.peakTwoDiff,
                cache: false,
                pageNumber: 1,
                pagination: 'client',
                pageSize: 10,
                pageList: [20, 50, 100, 200],
                search: true,
                sortable: true,
                columns: [{
                    title: "Chr",
                    sortable: true,
                    align: 'center',

                }, {
                    title: "Start",
                    sortable: true,
                    align: 'center',
                }, {
                    title: "End",
                    sortable: true,
                    align: 'center',
                }, {
                    title: "length",
                    sortable: true,
                    align: 'center',
                }, {
                    title: "abs_summit",
                    sortable: true,
                    align: 'center',
                }, {
                    title: "pileup",
                    sortable: true,
                    align: 'center',
                }, {
                    title: "-Log<sub>10</sub>pvalue",
                    sortable: true,
                    align: 'center',
                }, {
                    title: "fold_enrichment",
                    sortable: true,
                    align: 'center',
                }, {
                    title: "-Log<sub>10</sub>qvalue",
                    sortable: true,
                    align: 'center',
                }, {
                    title: "Region ID",
                    align: 'center',
                    sortable: true,
                    formatter: linkFormatter
                }, {
                    title: "Type",
                    sortable: true,
                    align: 'center',
                }]
            });
            $('#differential_Region_Table').bootstrapTable('hideLoading');  //取消Loading

            function linkFormatter(value, row, index) {
                return "<a href='/PlantCADB/search/search_car_detail?samId=" + sampleIdOne + "&ATAC=" + value + "' target='_blank'>" + value + "</a>"
            }


            //differential regions sample2
            $('#differential_Region_Table1').bootstrapTable({
                data: data.peakOneDiff,
                cache: false,
                pageNumber: 1,
                pagination: 'client',
                pageSize: 10,
                pageList: [20, 50, 100, 200],
                search: true,
                sortable: true,
                columns: [{
                    title: "Chr",
                    sortable: true,
                    align: 'center',

                }, {
                    title: "Start",
                    sortable: true,
                    align: 'center',
                }, {
                    title: "End",
                    sortable: true,
                    align: 'center',
                }, {
                    title: "length",
                    sortable: true,
                    align: 'center',
                }, {
                    title: "abs_summit",
                    sortable: true,
                    align: 'center',
                }, {
                    title: "pileup",
                    sortable: true,
                    align: 'center',
                }, {
                    title: "-Log<sub>10</sub>pvalue",
                    sortable: true,
                    align: 'center',
                }, {
                    title: "fold_enrichment",
                    sortable: true,
                    align: 'center',
                }, {
                    title: "-Log<sub>10</sub>qvalue",
                    sortable: true,
                    align: 'center',
                }, {
                    title: "Region ID",
                    align: 'center',
                    sortable: true,
                    formatter: LinkFormatter
                }, {
                    title: "Type",
                    sortable: true,
                    align: 'center',
                }]
                //showLoading:false
            });
            $('#differential_Region_Table1').bootstrapTable('hideLoading');  //取消Loading

            function LinkFormatter(value, row, index) {
                return "<a href='/PlantCADB/search/search_car_detail?samId=" + sampleIdTwo + "&ATAC=" + value + "' target='_blank'>" + value + "</a>"
            }


            //Overlapping regions
            $('#overlap_Region_Table').bootstrapTable({
                data: data.peakOver,
                cache: false,
                pageNumber: 1,
                pagination: 'client',
                pageSize: 10,
                pageList: [20, 50, 100, 200],
                search: true,
                sortable: true,
                columns: [{
                    title: "Region ID",
                    align: 'center',
                    sortable: true,
                    formatter: linkFormatter

                }, {
                    title: "Genomic Region",
                    align: 'center',
                }, {
                    title: "Length",
                    sortable: true,
                    align: 'center',
                }, {
                    title: "Region ID",
                    align: 'center',
                    sortable: true,
                    formatter: LinkFormatter
                }, {
                    title: "Genomic Region",
                    align: 'center',
                }, {
                    title: "Length",
                    sortable: true,
                    align: 'center',
                }, {
                    title: "Overlapping Length",
                    sortable: true,
                    align: 'center',
                }, {
                    title: "Ratio(a)",
                    sortable: true,
                    align: 'center',
                }, {
                    title: "Ratio(b)",
                    sortable: true,
                    align: 'center',
                }, {
                    title: "Overlapping type",
                    sortable: true,
                    align: 'center',
                }]
                //showLoading:false
            });
            $('#overlap_Region_Table').bootstrapTable('hideLoading');  //取消Loading


        }

    })
})