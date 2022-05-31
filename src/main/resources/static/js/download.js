import {GetAllSamId,DownloadData} from "./api.js"

$(window).on('load',function (){
    $.ajax({
        method:'POST',
        url:GetAllSamId,
        async:false,
        cache: false,
        timeout:10000,
        beforeSend: function (XMLHttpRequest) {XMLHttpRequest.setRequestHeader("Access-Control-Allow-Origin", "*");},
        success:function (res){
            let data=res["data"];
            $('#downloadTable').bootstrapTable({
                data:data["list"],
                cache:false,
                pageNumber:1,
                pagination:'client',
                pageSize: 10,
                pageList:[10, 20, 50, 100, 200 ],
                search:true,
                sortable:true,
                columns:[{
                    title:"Sample ID",
                    sortable:true,
                    align : 'center',
                    formatter:linkFormatter
                },{
                    title: "Accessible chromatin region",
                    align : 'center',
                    formatter:agFormatter

                },{
                    title: "Associated Genes",
                    align : 'center',
                    formatter:tfFormatter
                }, {
                    title: "Motif",
                    align : 'center',
                    formatter:motifyFormatter
                    }, {
                    title: "TF Footprint",
                    align : 'center',
                    formatter:TfFormatter
                }]

            });
            $('#downloadTable').bootstrapTable('hideLoading');  //取消Loading
            function linkFormatter(value,row,index){
                return "<a href='/PlantCADB/search/analysis_gene_cell?samId="+value+"'>"+value+"</a>"
            }
            function agFormatter(value,row,index){
                return ".tar.gz&nbsp<a href=\"" +
                    DownloadData +
                    "?sampleId="+value+"&typeFlag=0&type=0\"><span class=\"glyphicon glyphicon-download-alt\" aria-hidden=\"true\"></span></a>"

            }
            function tfFormatter(value,row,index){
                return ".tar.gz<a href=\"" +
                    DownloadData +
                    "?sampleId="+value+"&typeFlag=0&type=1\"><span class=\"glyphicon glyphicon-download-alt\" aria-hidden=\"true\"></span></a>"
            }

            function motifyFormatter(value,row,index){
                return ".tar.gz<a href=\"" +
                    DownloadData +
                    "?sampleId="+value+"&type=2&typeFlag=1\">" +
                    "<span class=\"glyphicon glyphicon-download-alt\" aria-hidden=\"true\"></span></a>"

            }

            function TfFormatter(value,row,index){
                return "txt&nbsp;&nbsp;<a href=\"" +
                    DownloadData +
                    "?sampleId="+value+"&typeFlag=0&type=3\"><span class=\"glyphicon glyphicon-download-alt\" aria-hidden=\"true\"></span></a>&nbsp;&nbsp;&nbsp;&nbsp;" +
                    ".tar.gz<a href=\"" +
                    DownloadData +
                    "?sampleId="+value+"&typeFlag=1&type=3\"><span class=\"glyphicon glyphicon-download-alt\" aria-hidden=\"true\"></span></a>&nbsp;&nbsp;&nbsp;&nbsp;"+
                    "pdf&nbsp;<a href=\"" +
                    DownloadData +
                    "?sampleId="+value+"&typeFlag=2&type=3\"><span class=\"glyphicon glyphicon-download-alt\" aria-hidden=\"true\"></span></a>  "
            }




        }

    })
})
