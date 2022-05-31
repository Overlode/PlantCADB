import {GetPeakFileLineByATAC, GetAssociatedGene, GetPeakMotifFile, GetFootprintMbpsFile, GetSNP} from "./api.js";


let PeakFileLineData;
let AssociatedGeneFileData;
let PeakMotifFileData;
let tfId = [];
let overlapGene;
let Proximal_Gene_1kb;
let Proximal_Gene_10kb;
let Proximal_Gene_20kb;
let ClosestGene;
let asscoited;
let FootprintMbpsFileData;
let SNPData;
let genomicRegion;
let overlapAyy;
let Pro_1kb_Ayy;
let Pro_10kb_Ayy;
let ProAyy;
let closest_gene_Ayy;
let myChart1;
let myChart2;
$(window).on('load', function () {

    function GetQueryString(name) {
        let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        let r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]);
        return null;
    }

    let sampleId = GetQueryString("samId");
    let ATACId = GetQueryString("ATAC");
    //Region Overview
    let ajax1 = $.ajax({
        timeout : 10000,
        type: "GET",
        url: GetPeakFileLineByATAC + location.search,
        async: false,
        cache: false,
        success: function (res) {
            let data = res["data"];
            PeakFileLineData = data;
            $('#atacID')[0].innerHTML = data["name"];
            $('#atacChr')[0].innerHTML = data["chr"];
            $('#atacStart')[0].innerHTML = data["start"];
            $('#atacEnd')[0].innerHTML = data["end"];
            $('#atacLength')[0].innerHTML = data["length"];
            $('#atacAbs_summit')[0].innerHTML = data["abs_summit"];
            $('#atacPileup')[0].innerHTML = data["pileUp"];
            $('#atacPvalue')[0].innerHTML = data["pvalue"];
            $('#atacFold_enrichment')[0].innerHTML = data["fold_enrichment"];
            $('#atacQvalue')[0].innerHTML = data["qvalue"];
            $('#type')[0].innerHTML = data["label"];
            genomicRegion = PeakFileLineData["chr"] + ":" + PeakFileLineData["start"] + "-" + PeakFileLineData["end"];
        }

    });

    //Accessible chromatin region associated SNP
    let ajax2 = $.ajax({
        timeout : 10000,
        url: GetSNP + location.search,
        async: false,
        cache: false,
        dataType: "json",
        success: function (res) {
            SNPData = res["data"];
            $('#snp_table').bootstrapTable({
                data: SNPData,
                cache: false,
                pageNumber: 1,
                pagination: 'client',
                pageSize: 10,
                pageList: [10, 20, 50, 100, 200],
                search: true,
                sortable: true,
                columns: [{
                    title: "SNP chr",
                    sortable: true,
                    align: 'center',
                }, {
                    title: "SNP position",
                    sortable: true,
                    align: 'center',
                }, {
                    title: "SNP ID",
                    sortable: true,
                    align: 'center',
                }, {
                    title: "SNP ref",
                    align: 'center',
                }, {
                    title: "SNP alt",
                    align: 'center',
                }]
                //showLoading:false
            });
            // $('#snp_table').bootstrapTable('hideLoading');  //取消Loading
        }
    })


    //TF footprint Analysis
    let ajax3 = $.ajax({
        timeout : 10000,
        url: GetFootprintMbpsFile + location.search,
        success: function (res) {
            FootprintMbpsFileData = res["data"];
            $('#footprint_table').bootstrapTable({
                data: FootprintMbpsFileData,
                cache: false,
                pageNumber: 1,
                pagination: 'client',
                pageSize: 10,
                pageList: [10, 20, 50, 100, 200],
                search: true,
                sortable: true,
                columns: [{
                    title: "Chr",
                    align: 'center',
                    sortable: true,


                }, {
                    title: "Start",
                    align: 'center',
                    sortable: true,
                }, {
                    title: "End",
                    align: 'center',
                    sortable: true,
                }, {
                    title: "ID",
                    align: 'center',
                    sortable: true,
                }, {
                    title: "score",
                    align: 'center',
                    sortable: true,
                }, {
                    title: "strand",
                    align: 'center',
                }]
            });
            $('#footprint_table').bootstrapTable('hideLoading');  //取消Loading
        }
    })

    //Motif Analysis
    let ajax4 = $.ajax({
        timeout : 10000,
        url: GetPeakMotifFile + location.search,
        success: function (res) {
            PeakMotifFileData = res["data"];
            PeakMotifFileData.forEach((item) => {
                tfId.push(item[0]);
            });
            $('#motif_table').bootstrapTable({
                data: PeakMotifFileData,
                cache: false,
                pageNumber: 1,
                pagination: 'client',
                pageSize: 10,
                pageList: [10, 20, 50, 100, 200],
                search: true,
                sortable: true,
                columns: [{
                    title: "TF_ID",
                    sortable: true,
                    align: 'center',
                }, {
                    title: "Gene_ID",
                    sortable: true,
                    align: 'center',
                }, {
                    title: "Motif_ID",
                    sortable: true,
                    align: 'center',
                }, {
                    title: "TF_family",
                    align: 'center',
                }, {
                    field: "sequence_name",
                    title: "sequence_name",
                    align: 'center',
                }, {
                    title: "chr",
                    align: 'center',
                    sortable: true,
                }, {
                    title: "start",
                    align: 'center',
                    sortable: true,
                }, {
                    title: "stop",
                    align: 'center',
                    sortable: true,
                }, {
                    title: "strand",
                    align: 'center',
                }, {
                    title: "score",
                    align: 'center',
                    sortable: true,
                }, {
                    title: "p-value",
                    align: 'center',
                    sortable: true,
                }, {
                    title: "matched_sequence",
                    align: 'center',
                }]
                //showLoading:false
            });
            $('#motif_table').bootstrapTable('hideLoading');  //取消Loading
            $('#motif_table').bootstrapTable('hideColumn', 'sequence_name');
            openView1(genomicRegion, tfId, ProAyy, "Accessible chromatin region");
        }
    });

    //Accessible chromatin region associated gene
    let ajax5 = $.ajax({
        timeout : 10000,
        url: GetAssociatedGene + location.search,
        async: false,
        success: function (res) {
            AssociatedGeneFileData = res["data"];
            overlapGene = AssociatedGeneFileData["overlapGene"];
            Proximal_Gene_1kb = AssociatedGeneFileData["proximal_Gene_1kb"];
            Proximal_Gene_10kb = AssociatedGeneFileData["proximal_Gene_10kb"];
            Proximal_Gene_20kb = AssociatedGeneFileData["proximal_Gene_20kb"];
            ClosestGene = AssociatedGeneFileData["closestGene"];
            asscoited = Proximal_Gene_10kb;
            overlapAyy = overlapGene.split(',');
            Pro_1kb_Ayy = Proximal_Gene_1kb.split(',');
            Pro_10kb_Ayy = Proximal_Gene_10kb.split(',');
            ProAyy = Proximal_Gene_20kb.split(',');
            closest_gene_Ayy = ClosestGene.split(',');

            //链接uniprot，Cloest Gene
            $.each(overlapAyy, function (index, value) {
                $('#overlapGene').append("<a href='https://www.uniprot.org/uniprot/?query=" + value + "'&sort=score' target='_blank'>" + value + "&nbsp;&nbsp;&nbsp;" + "</a>");
            })
            $.each(Pro_10kb_Ayy, function (index, value) {
                $('#Proximal_Gene_1kb').append("<a href='https://www.uniprot.org/uniprot/?query=" + value + "'&sort=score' target='_blank'>" + value + "&nbsp;&nbsp;&nbsp;" + "</a>");
            })
            $.each(Pro_1kb_Ayy, function (index, value) {
                $('#Proximal_Gene_10kb').append("<a href='https://www.uniprot.org/uniprot/?query=" + value + "'&sort=score' target='_blank'>" + value + "&nbsp;&nbsp;&nbsp;" + "</a>");
            })
            $.each(ProAyy, function (index, value) {
                $('#Proximal_Gene_20kb').append("<a href='https://www.uniprot.org/uniprot/?query=" + value + "'&sort=score' target='_blank'>" + value + "&nbsp;&nbsp;&nbsp;" + "</a>");
            })
            $.each(closest_gene_Ayy, function (index, value) {
                $('#ClosestGene').append("<a href='https://www.uniprot.org/uniprot/?query=" + value + "'&sort=score' target='_blank'>" + value + "&nbsp;&nbsp;&nbsp;" + "</a>");
            })
            openView(genomicRegion, overlapGene, Proximal_Gene_20kb, ClosestGene, "Accessible chromatin region");
        }
    });

    function openView1(Chromatin_Accessibility_Region, tfId, ProAyy, title) {
        let open = function () {
            myChart1 = echarts.init(document.getElementById('region_overview_view'));
            let links = [], data = [];
            let onlys = [];
            data.push({
                category: 0,
                id: title,
                name: Chromatin_Accessibility_Region,
                symbolSize: 40,
                value: 1
            });
            for (let i = 0; i < tfId.length; i++) {
                if (tfId[i] == "-") continue;
                links.push({source: title, target: tfId[i]});
                if (onlys.indexOf(tfId[i]) != -1) continue;
                onlys.push(tfId[i]);
                data.push({
                    category: 1,
                    id: tfId[i],
                    name: tfId[i],
                    symbolSize: 18,
                    value: 1
                });
            }
            for (let j = 0; j < ProAyy.length; j++) {
                // console.log(ProAyy[j]);
                if (ProAyy[j] == "-") continue;
                links.push({source: title, target: ProAyy[j]});
                if (onlys.indexOf(ProAyy[j]) != -1) continue;
                onlys.push(ProAyy[j]);
                data.push({
                    category: 2,
                    id: ProAyy[j],
                    name: ProAyy[j],
                    symbolSize: 18,
                    value: 1
                });
            }
            let option = {
                legend: {
                    data: [title, 'TF Binding', 'Associated Gene']
                },
                animationDuration: 1500,
                animationEasingUpdate: 'quinticInOut',
                color: ['#B82E00', '#6e7074', '#d48265'],
                series: [{
                    type: 'graph',
                    layout: 'force',
                    animation: false,
                    roam: true,
                    focusNodeAdjacency: true,
                    itemStyle: {
                        normal: {
                            borderColor: '#fff',
                            borderWidth: 1,
                            shadowBlur: 10,
                            shadowColor: 'rgba(0, 0, 0, 0.3)'
                        }
                    },
                    label: {
                        normal: {
                            show: true,
                            position: 'right',
                            formatter: '{b}'
                        }
                    },
                    lineStyle: {
                        normal: {
                            color: 'source',
                            curveness: 0
                        }
                    },
                    emphasis: {
                        normal: {
                            lineStyle: {
                                width: 10
                            }
                        }
                    },
                    draggable: true,
                    data: data,
                    links: links,
                    categories: [{name: title}, {name: 'TF Binding'}, {name: 'Associated Gene'}],
                    force: {
                        repulsion: 200,
                        gravity: 0.1,
                        edgeLength: 100,
                        layoutAnimation: false
                    }
                }]
            };
            myChart1.setOption(option);
        }
        open();
    }

    function openView(Chromatin_Accessibility_Region, Overlap_genes, Proximal_genes, Closest_gene, title) {
        let open = function () {
            myChart2 = echarts.init(document.getElementById('view'));
            let links = [], data = [];
            let onlys = [];
            data.push({
                category: 0,
                id: title,
                name: Chromatin_Accessibility_Region,
                symbolSize: 40,
                value: 1
            }, {
                category: 1,
                id: "Overlap",
                name: "Overlap",
                symbolSize: 20,
                value: 1
            }, {
                category: 1,
                id: "Proximal",
                name: "Proximal",
                symbolSize: 20,
                value: 1
            }, {
                category: 1,
                id: "Closest",
                name: "Closest",
                symbolSize: 20,
                value: 1
            });
            links.push({source: title, target: "Overlap"}, {source: title, target: "Proximal"}, {
                source: title,
                target: "Closest"
            })
            for (let element in Overlap_genes.split(",")) {
                if (Overlap_genes.split(",")[element] == "-") continue;
                links.push({source: "Overlap", target: Overlap_genes.split(",")[element]});
                if (onlys.indexOf(Overlap_genes.split(",")[element]) != -1) continue;
                onlys.push(Overlap_genes.split(",")[element]);
                data.push({
                    category: 2,
                    id: Overlap_genes.split(",")[element],
                    name: Overlap_genes.split(",")[element],
                    symbolSize: 20,
                    value: 1
                });
            }
            for (let element in Proximal_genes.split(",")) {
                if (Proximal_genes.split(",")[element] == "-") continue;
                links.push({source: "Proximal", target: Proximal_genes.split(",")[element]});
                if (onlys.indexOf(Proximal_genes.split(",")[element]) != -1) continue;
                onlys.push(Proximal_genes.split(",")[element]);
                data.push({
                    category: 2,
                    id: Proximal_genes.split(",")[element],
                    name: Proximal_genes.split(",")[element],
                    symbolSize: 20,
                    value: 1
                });
            }

            for (let element in Closest_gene.split(",")) {
                if (Closest_gene.split(",")[element] == "-") continue;
                links.push({source: "Closest", target: Closest_gene.split(",")[element]});
                if (onlys.indexOf(Closest_gene.split(",")[element]) != -1) continue;
                onlys.push(Closest_gene.split(",")[element]);
                data.push({
                    category: 2,
                    id: Closest_gene.split(",")[element],
                    name: Closest_gene.split(",")[element],
                    symbolSize: 20,
                    value: 1
                });
            }

            let option = {
                legend: {
                    data: [title, 'Gene type', 'Gene']
                },
                animationDuration: 1500,
                animationEasingUpdate: 'quinticInOut',
                color: ['#B82E00', '#d48265', '#6e7074'],
                series: [{
                    type: 'graph',
                    layout: 'force',
                    animation: false,
                    roam: true,
                    focusNodeAdjacency: true,
                    itemStyle: {
                        normal: {
                            borderColor: '#fff',
                            borderWidth: 1,
                            shadowBlur: 10,
                            shadowColor: 'rgba(0, 0, 0, 0.3)'
                        }
                    },
                    label: {
                        normal: {
                            show: true,
                            position: 'right',
                            formatter: '{b}'
                        }
                    },
                    lineStyle: {
                        normal: {
                            color: 'source',
                            curveness: 0
                        }
                    },
                    emphasis: {
                        normal: {
                            lineStyle: {
                                width: 10
                            }
                        }
                    },
                    draggable: true,
                    data: data,
                    links: links,
                    categories: [{name: title}, {name: 'Gene type'}, {name: 'Gene'}],
                    force: {
                        repulsion: 200,
                        gravity: 0.1,
                        edgeLength: 100,
                        layoutAnimation: true
                    }
                }]
            };
            myChart2.setOption(option);
        }
        open();
    }

})

$(window).onresize = function (){
    myChart1.resize();
    myChart2.resize();
}


