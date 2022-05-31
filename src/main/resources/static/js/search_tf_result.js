import {SearchTF,SelectRegionIdDetail} from "./api.js"

$(window).on('load',function () {
//发送请求
//    获取dataBrowse传参

    function GetQueryString(name)
    {
        var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if(r!=null)return  unescape(r[2]); return null;
    }

    let species=GetQueryString("species");
    let name=GetQueryString("name");


    $.ajax({
        url:SearchTF+ "?species=" + species +"&name="+name,
        timeout : 10000,
        async: false,
        cache: false,
        success: function (res) {

            let data = res["data"];
            //Region Overview
            $('#TFname')[0].innerHTML=data.name;
            $('#TFfamily')[0].innerHTML=data.family;



            //TF FOOTPRINT
            $('#TF_footprint_table').bootstrapTable({
                data:data.result,
                cache:false,
                pageNumber:1,
                pagination:'client',
                pageSize: 10,
                pageList:[ 20, 50, 100, 200 ],
                search:true,
                sortable:true,
                columns:[{
                    title:"Sample ID",
                    align : 'center',
                    sortable:true,
                    formatter:LinkFormatter

                },{
                    title: "Motif ID",
                    align : 'center',
                    sortable:true,
                },{
                    title: "Protection_Score",
                    sortable:true,
                    align : 'center',
                },{
                    title: "TC",
                    sortable:true,
                    align : 'center',
                },{
                    title: "Num",
                    sortable:true,
                    align : 'center',
                },{
                    title: "Description",
                    align : 'center',
                },{
                    title: "Tissue",
                    align : 'center',
                }]
                //showLoading:false
            });
            $('#TF_footprint_table').bootstrapTable('hideLoading');  //取消Loading

            function LinkFormatter(value,row,index){
                return "<a href='/PlantCADB/search/analysis_gene_cell?samId="+value+"' target='_blank'>"+value+"</a>";
            }



            //The Accessibile Chromatin Regions Bound
            $('#accessibile_regions_table').bootstrapTable({
                data:data.accessible,
                cache:false,
                pageNumber:1,
                pagination:'client',
                pageSize: 10,
                pageList:[ 20, 50, 100, 200 ],
                search:true,
                columns:[{
                    title:"TF ID",

                    align : 'center',
                    sortable:true,
                },{
                    title: "Gene ID",

                    sortable:true,
                    align : 'center',
                },{
                    title: "Motif ID",

                    sortable:true,
                    align : 'center',
                },{
                    title: "TF Family",

                    align : 'center',
                },{
                    title: "Region ID",

                    align : 'center',
                    formatter:linkFormatter
                },{
                    title: "Chr",

                    sortable:true,
                    align : 'center',
                },{
                    title: "Start",
                    sortable:true,
                    align : 'center',
                },{
                    title: "Stop",
                    sortable:true,
                    align : 'center',
                },{
                    title: "Strand",

                    align : 'center',
                },{
                    title: "Score",
                    sortable:true,
                    align : 'center',
                },{
                    title: "P_value",
                    sortable:true,
                    align : 'center',
                },{
                    title: "matched_sequence",
                    align : 'center',
                }]
            });
            $('#accessibile_regions_table').bootstrapTable('hideLoading');  //取消Loading
            function linkFormatter(value,row,index){
				var sampleId;
				$.ajax({
                    timeout : 10000,
					type: "GET",
					url: SelectRegionIdDetail+"?name="+value,
					async: false,
					cache: false,
					dataType: "json",
					beforeSend: function (XMLHttpRequest) {
						XMLHttpRequest.setRequestHeader("Access-Control-Allow-Origin", "*");
					},
					success: function (res) {
                        sampleId=res["data"]["SampleId"];
					}
					})
				return "<a href ='/PlantCADB/search/search_car_detail?samId="+sampleId+"&ATAC="+value+"' target='_blank'>"+value+"</a>"
            }
        }
    })
})