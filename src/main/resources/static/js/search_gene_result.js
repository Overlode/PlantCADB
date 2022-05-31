import {SearchGene} from "./api.js";

$(window).on('load',function () {
//发送请求

    function GetQueryString(name)
    {
        let reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
        let r = window.location.search.substr(1).match(reg);
        if(r!=null)return  unescape(r[2]); return null;
    }

    let species=GetQueryString("species");
    let type=GetQueryString("type");
    let name=GetQueryString("name");


    $.ajax({
        timeout:10000,
        url: SearchGene+"?species=" + species + "&type=" + type+"&name="+name,
        async: false,
        cache: false,
        beforeSend: function (XMLHttpRequest) {
            XMLHttpRequest.setRequestHeader("Access-Control-Allow-Origin", "*");
        },
        success: function (res) {
            let data = res["data"];
            console.log(data);

            //Accessible Chromatin Region
            $('#RegionTable').bootstrapTable({
                data:data["result"],
                cache:false,
                pageNumber:1,
                pagination:'client',
                pageSize: 10,
                pageList:[ 20, 50, 100, 200 ],
                search:true,
                columns:[{
                    title:"Sample ID",
                    align : 'center',
                    sortable:true,
                    formatter:LinkFormatter,
                },{
                    title: "Chr",
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
                    title: "Region ID",
                    align : 'center',
                    formatter:linkFormatter,
                    sortable:true,
                },{
                    title: "OVERLAP_GENES_ID",
                    align : 'center',
                    // formatter:OverlapFormatter,
                    sortable:true,
                },{
                    title: "PROXIMAL_GENES_ID_1kb",
                    align : 'center',
                    // formatter:pro_gene_1kbFormatter,
                    sortable:true,
                },{
                    title: "PROXIMAL_GENES__ID_10kb",
                    align : 'center',
                    // formatter:pro_gene_10kbFormatter,
                    // events:linkEvents,
                    sortable:true,
                },{
                    title: "PROXIMAL_GENES_ID_20kb",
                    align : 'center',
                    // formatter:pro_gene_20kbFormatter,
                    sortable:true,
                },{
                    title: "CLOSEST_GENE_ID",
                    align : 'center',
                    // formatter:ClosestFormatter,
                    sortable:true,
                }]
                //showLoading:false
            });
            $('#RegionTable').bootstrapTable('hideLoading');  //取消Loading


            function LinkFormatter(value,row,index){
                return "<a href='/PlantCADB/search/analysis_gene_cell?samId="+value+"' target='_blank'>"+value+"</a>"
            }

            function linkFormatter(value,row,index){
                return "<a href='/PlantCADB/search/search_car_detail?samId="+row[0]+"&ATAC="+value+"' target='_blank' >"+value+"</a>";

            }
            function ClosestFormatter(value,row,index){
                return "<a href='https://www.uniprot.org/uniprot/?query="+value+"'&sort=score' target='_blank'>"+value+"</a>";
            }





            //Region Overview
            $('#geneName')[0].innerHTML=data["GeneOverview"][0][4];
            $('#geneEnsembl')[0].innerHTML="<a href='https://www.uniprot.org/uniprot/?query="+data["GeneOverview"][0][5]+"'&sort=score' target='_blank'>"+data["GeneOverview"][0][5]+"</a>";
            $('#strand')[0].innerHTML=data["GeneOverview"][0][3];
            $('#geneChr')[0].innerHTML=data["GeneOverview"][0][0];
            $('#geneStart')[0].innerHTML=data["GeneOverview"][0][1];
            $('#geneEnd')[0].innerHTML=data["GeneOverview"][0][2];





        }

    })

})