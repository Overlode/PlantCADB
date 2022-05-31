import {GetAllData, GetClass, GetDataType, GetLayout, GetSpecies, GetTissue,GetClassify} from './api.js'

$(window).on('load', function () {
    let search=location.search;
    let searchUrl = GetAllData;
    if(search!=='') searchUrl+=search;
    $('#example').bootstrapTable({
        url: searchUrl,
        cache: false,
        pageNumber: 1,
        pagination: true,
        sidePagination: 'server',
        pageSize: 20,
        pageList: [20, 50, 100, 200],
        search: true,
        columns: [{
            title: "Sample ID",
            sortable: true,
            align: 'center',
            width: 120,
            field: 'samId',
            formatter: linkFormatter
        }, {
            // field:'Data Type',
            align: "center",
            title: "Data Type",
            field: "typeName",
            visible: false,
            // width:100,
        }, {
            // field:'Class',
            align: 'center',
            title: "Class",
            field: "className",
            visible: false,
            // width:100
        }, {
            // field:'Layout',
            align: 'center',
            title: "Layout",
            field: "layoutName",
            visible: false,
            // width:80,
        }, {
            align: 'center',
            title: "Species",
            field: "speciesName",
            width: 95

        }, {
            align: 'center',
            title: "Description",
            field: "description",
            width: 170
        }, {
            align: 'center',
            field: "tissueName",
            title: "Tissue",
            width: 70
        }, {
            align: "center",
            title: "Region Number",
            field: "regionNumber",
            sortable: true,
            width: 145
        }, {
            align: "center",
            title: "Region Length",
            field:"regionLength",
            sortable: true,
            width: 145
        }, {
            align: 'center',
            title: "Runs",
            field:"runs",
            sortable: true,
            // width:100
        }
        ],
    });
    $('#example').bootstrapTable('hideLoading');
    function linkFormatter(value, row, index) {
        return "<a href='/PlantCADB/search/analysis_gene_cell?samId="+value+"'target='_blank'>"+value+"</a>"
    }

    let db_datatype = [];
    let db_species = [];
    let db_layout = [];
    let db_tissue = [];
    let db_class = [];
    let dataNo=0;
    let classNo=0;
    let layoutNo=0;
    let speciesNo=0;
    let tissueNo=0;
    let optionSelected='';
    let db_classify;


    $.ajax({
        timeout : 10000,
        url:GetDataType,
        async:false,
        success:function(result){
            db_datatype=result["data"];
            db_datatype.forEach(function (element){
                $('<a class="list-group-item datatype" data-dataNo="'+element.dataNo+'"><span class="badge">' + element.count + '</span>' +  element.typeName+ '</a>').appendTo($('#data_type'));
            });
        }});

    $.ajax({
        timeout : 10000,
        url:GetClass,
        async:false,
        success:function(result){
            db_class=result["data"];
            db_class.forEach(function (element){
                $('<a class="list-group-item class" data-classNo="'+element.classNo +'" ><span class="badge">' + element.count + '</span>' +  element.className+ '</a>').appendTo($('#class'));
            });
        }});
    $.ajax({
        timeout : 10000,
        url:GetLayout,
        async:false,
        success:function(result){
            db_layout=result["data"];
            db_layout.forEach(function (element){
                $('<a class="list-group-item layout" data-layoutNo="'+element.layoutNo+'" ><span class="badge">' + element.count + '</span>' +  element.layoutName+ '</a>').appendTo($('#layout'));
            });
        }});

    let count = 0;
    $.ajax({
        timeout : 10000,
        url:GetSpecies,
        async:false,
        success:function(result){
            db_species=result["data"];
            db_species.forEach(function (element){
                count++;
                if (count <= 4) {
                    $('<a class="list-group-item organisms" data-speciesNo="'+element.speciesNo+'" ><span class="badge">' + element.count + '</span>' + element.speciesName + '</a>').appendTo($('#organisms'));
                }
                else if(count === 5){
                    $('<div class="collapse" id="organisms_collapse"></div>' +
                        '<a id="organisms_collapse_btn" class="text-center list-group-item" role="button" data-toggle="collapse" href="#organisms_collapse" aria-expanded="false">\n' +
                        '\t\t\t\t\t\t<span class="glyphicon glyphicon-chevron-down"></span>\n' +
                        '\t\t\t\t\t</a>').appendTo($('#organisms'));
                }
                else{
                    $('<a class="list-group-item organisms"  data-speciesNo="'+element.speciesNo+'"><span class="badge">' + element.count + '</span>' + element.speciesName + '</a>').appendTo($('#organisms_collapse'));
                }
            });
        }});

    let organisms_collapse_status =false;
    $('#organisms_collapse').on('show.bs.collapse', function () {
        organisms_collapse_status=true;
    })
    $('#organisms_collapse').on('hidden.bs.collapse', function () {
        organisms_collapse_status=false;
    })


    let count1 = 0;
    $.ajax({
        timeout : 10000,
        url:GetTissue,
        async:false,
        success:function(result){
            db_tissue=result["data"];
            db_tissue.forEach(function (element){
                count1++;
                if (count1 <= 4) {
                    $('<a class="list-group-item tissue" data-tissueNo="'+element.tissueNo+'" ><span class="badge">' + element.count + '</span>' + element.tissueName + '</a>').appendTo($('#tissue'));
                }
                else if(count1 === 5){
                    $('<div class="collapse" id="tissue_collapse"></div>' +
                        '<a id="tissue_collapse_btn" class="text-center list-group-item" role="button" data-toggle="collapse" href="#tissue_collapse" aria-expanded="false">\n' +
                        '\t\t\t\t\t\t<span class="glyphicon glyphicon-chevron-down"></span>\n' +
                        '\t\t\t\t\t</a>').appendTo($('#tissue'));
                }
                else{
                    $('<a class="list-group-item tissue" data-tissueNo="'+element.tissueNo+'" ><span class="badge">' + element.count + '</span>' + element.tissueName + '</a>').appendTo($('#tissue_collapse'));
                }
            });
        }});

    let tissue_collapse_status =false;
    $('#tissue_collapse').on('show.bs.collapse', function () {
        tissue_collapse_status=true;
    })
    $('#tissue_collapse').on('hidden.bs.collapse', function () {
        tissue_collapse_status=false;
    })

    let count6 = 0;
    $.ajax({
        timeout : 10000,
        url:GetClassify,
        async:false,
        success:function(result){
            db_classify = result["data"];
            let options = db_classify["options"];
            let countMap = db_classify["count"];
            for(let i=0;i<options.length;i++){
                let o = options[i];
                let optionName = o["optionName"];
                let option = o["option"];
                count6++;
                if (count6 <= 4) {
                    $('<a class="list-group-item classify" data-option="'+option+'" ><span class="badge">' + countMap[option] + '</span>' + optionName + '</a>').appendTo($('#classify'));
                }
                else if(count6 === 5){
                    $('<div class="collapse" id="classify_collapse"></div>' +
                        '<a id="classify_collapse_btn" class="text-center list-group-item" role="button" data-toggle="collapse" href="#classify_collapse" aria-expanded="false">\n' +
                        '\t\t\t\t\t\t<span class="glyphicon glyphicon-chevron-down"></span>\n' +
                        '\t\t\t\t\t</a>').appendTo($('#classify'));
                }
                else{
                    $('<a class="list-group-item classify" data-option="'+option+'" ><span class="badge">' + countMap[option] + '</span>' + optionName + '</a>').appendTo($('#classify_collapse'));
                }
            }
            count6=0;
        }});

    let classify_collapse_status =false;
    $('#classify_collapse').on('show.bs.collapse', function () {
        classify_collapse_status=true;
    })
    $('#classify_collapse').on('hidden.bs.collapse', function () {
        classify_collapse_status=false;
    })

    $('.datatype').click(function (){
        if(dataNo===0) {
            dataNo = this.dataset.datano;
            $(this).addClass("active");
            $(this).siblings().slideToggle();
        }
        else{
            dataNo=0;
            $(this).removeClass("active");
            $(this).siblings().slideToggle();
        }
        onclick();
    })

    $('.tissue').click(function (){
        if(tissueNo===0) {
            tissueNo = this.dataset.tissueno;
            if(tissue_collapse_status===false){
                for(let i=0;i<4;i++){
                    if($('#tissue').children()[i].dataset.tissueno!==tissueNo){
                        $($('#tissue').children()[i]).slideToggle();
                    }
                    else{
                        $($('#tissue').children()[i]).addClass("active");
                    }
                }
                $($('#tissue').children()[5]).slideToggle();
            }
            else{
                $(this).addClass("active");
                if($(this).parent().attr("id")==='tissue') $(this).siblings().slideToggle();
                else{
                    $(this).siblings().slideToggle();
                    $($('#tissue').children()[0]).slideToggle();
                    $($('#tissue').children()[1]).slideToggle();
                    $($('#tissue').children()[2]).slideToggle();
                    $($('#tissue').children()[3]).slideToggle();
                    $($('#tissue').children()[5]).slideToggle();
                }
            }
        }
        else{
            tissueNo=0;
            if(tissue_collapse_status===false){
                for(let i=0;i<4;i++){
                    if($('#tissue').children()[i].dataset.tissueno!==this.dataset.tissueno){
                        $($('#tissue').children()[i]).slideToggle();
                    }
                    else{
                        $($('#tissue').children()[i]).removeClass("active");
                    }
                }
                $($('#tissue').children()[5]).slideToggle();
            }
            else{
                $(this).removeClass("active");
                if($(this).parent().attr("id")==='tissue') $(this).siblings().slideToggle();
                else{
                    $(this).siblings().slideToggle();
                    $($('#tissue').children()[0]).slideToggle();
                    $($('#tissue').children()[1]).slideToggle();
                    $($('#tissue').children()[2]).slideToggle();
                    $($('#tissue').children()[3]).slideToggle();
                    $($('#tissue').children()[5]).slideToggle();
                }
            }
        }
        onclick();
    })

    $('.class').click(function (){
        if(classNo===0) {
            classNo = this.dataset.classno;
            $(this).addClass("active");
            $(this).siblings().slideToggle();
        }
        else{
            classNo=0;
            $(this).removeClass("active");
            $(this).siblings().slideToggle();
        }
        onclick();
    })

    $('.organisms').click(function (){
        if(speciesNo===0) {
            speciesNo = this.dataset.speciesno;
            if(organisms_collapse_status===false){
                for(let i=0;i<4;i++){
                    if($('#organisms').children()[i].dataset.speciesno!==speciesNo){
                        $($('#organisms').children()[i]).slideToggle();
                    }
                    else{
                        $($('#organisms').children()[i]).addClass("active");
                    }
                }
                $($('#organisms').children()[5]).slideToggle();
            }
            else{
                $(this).addClass("active");
                if($(this).parent().attr("id")==='organisms') $(this).siblings().slideToggle();
                else{
                    $(this).siblings().slideToggle();
                    $($('#organisms').children()[0]).slideToggle();
                    $($('#organisms').children()[1]).slideToggle();
                    $($('#organisms').children()[2]).slideToggle();
                    $($('#organisms').children()[3]).slideToggle();
                    $($('#organisms').children()[5]).slideToggle();
                }
            }
        }
        else{
            speciesNo=0;
            if(organisms_collapse_status===false){
                for(let i=0;i<4;i++){
                    if($('#organisms').children()[i].dataset.speciesno!==this.dataset.speciesno){
                        $($('#organisms').children()[i]).slideToggle();
                    }
                    else{
                        $($('#organisms').children()[i]).removeClass("active");
                    }
                }
                $($('#organisms').children()[5]).slideToggle();
            }
            else{
                $(this).removeClass("active");
                if($(this).parent().attr("id")==='organisms') $(this).siblings().slideToggle();
                else{
                    $(this).siblings().slideToggle();
                    $($('#organisms').children()[0]).slideToggle();
                    $($('#organisms').children()[1]).slideToggle();
                    $($('#organisms').children()[2]).slideToggle();
                    $($('#organisms').children()[3]).slideToggle();
                    $($('#organisms').children()[5]).slideToggle();
                }
            }
        }
        onclick();
    })

    $('.layout').click(function (){
        if(layoutNo===0) {
            layoutNo = this.dataset.layoutno;
            $(this).addClass("active");
            $(this).siblings().slideToggle();
        }
        else{
            layoutNo=0;
            $(this).removeClass("active");
            $(this).siblings().slideToggle();
        }
        onclick();
    })
    $('.classify').click(function (){
        if(optionSelected==='') {
            optionSelected = this.dataset.option;
            if(classify_collapse_status===false){
                for(let i=0;i<4;i++){
                    if($('#classify').children()[i].dataset.option!==optionSelected){
                        $($('#classify').children()[i]).slideToggle();
                    }
                    else{
                        $($('#classify').children()[i]).addClass("active");
                    }
                }
                $($('#classify').children()[5]).slideToggle();
            }
            else{
                $(this).addClass("active");
                if($(this).parent().attr("id")==='classify') $(this).siblings().slideToggle();
                else{
                    $(this).siblings().slideToggle();
                    $($('#classify').children()[0]).slideToggle();
                    $($('#classify').children()[1]).slideToggle();
                    $($('#classify').children()[2]).slideToggle();
                    $($('#classify').children()[3]).slideToggle();
                    $($('#classify').children()[5]).slideToggle();
                }
            }
        }
        else{
            optionSelected='';
            if(classify_collapse_status===false){
                for(let i=0;i<4;i++){
                    if($('#classify').children()[i].dataset.option!==this.dataset.option){
                        $($('#classify').children()[i]).slideToggle();
                    }
                    else{
                        $($('#classify').children()[i]).removeClass("active");
                    }
                }
                $($('#classify').children()[5]).slideToggle();
            }
            else{
                $(this).removeClass("active");
                if($(this).parent().attr("id")==='classify') $(this).siblings().slideToggle();
                else{
                    $(this).siblings().slideToggle();
                    $($('#classify').children()[0]).slideToggle();
                    $($('#classify').children()[1]).slideToggle();
                    $($('#classify').children()[2]).slideToggle();
                    $($('#classify').children()[3]).slideToggle();
                    $($('#classify').children()[5]).slideToggle();
                }
            }
        }
        onclick();
    })

    function onclick() {
        let tableUrl=GetAllData;
        let former=false;
        if(dataNo!==0||speciesNo!==0||classNo!==0||tissueNo!==0||layoutNo!==0||optionSelected!==''){
            tableUrl+="?";
            if(dataNo!==0) {
                tableUrl = tableUrl + "dataNo=" + dataNo;
                former=true;
            }
            if(speciesNo!==0) {
                if(former){
                    tableUrl+="&";
                }
                else  former=true;
                tableUrl = tableUrl + "speciesNo=" + speciesNo;
            }
            if(classNo!==0) {
                if(former){
                    tableUrl+="&";
                }
                else  former=true;
                tableUrl = tableUrl + "classNo=" + classNo;
            }
            if(tissueNo!==0) {
                if(former){
                    tableUrl+="&";
                }
                else  former=true;
                tableUrl = tableUrl + "tissueNo=" + tissueNo;
            }
            if(layoutNo!==0) {
                if(former){
                    tableUrl+="&";
                }
                else  former=true;
                tableUrl = tableUrl + "layoutNo=" + layoutNo;
            }
            if(optionSelected!=='') {
                if(former){
                    tableUrl+="&";
                }
                else  former=true;
                tableUrl = tableUrl + "option=" + optionSelected;
            }
        }
        $('#example').bootstrapTable('destroy');
        $('#example').bootstrapTable({
            url: tableUrl,
            cache: false,
            pageNumber: 1,
            pagination: true,
            sidePagination: 'server',
            pageSize: 20,
            pageList: [20, 50, 100, 200],
            search: true,
            columns: [{
                title: "Sample ID",
                sortable: true,
                align: 'center',
                width: 120,
                field: 'samId',
                formatter: linkFormatter
            }, {
                // field:'Data Type',
                align: "center",
                title: "Data Type",
                field: "typeName",
                visible: false,
                // width:100,
            }, {
                // field:'Class',
                align: 'center',
                title: "Class",
                field: "className",
                visible: false,
                // width:100
            }, {
                // field:'Layout',
                align: 'center',
                title: "Layout",
                field: "layoutName",
                visible: false,
                // width:80,
            }, {
                align: 'center',
                title: "Species",
                field: "speciesName",
                width: 95

            }, {
                align: 'center',
                title: "Description",
                field: "description",
                width: 170
            }, {
                align: 'center',
                field: "tissueName",
                title: "Tissue",
                width: 70
            }, {
                align: "center",
                title: "Region Number",
                field: "regionNumber",
                sortable: true,
                width: 145
            }, {
                align: "center",
                title: "Region Length",
                field:"regionLength",
                sortable: true,
                width: 145
            }, {
                align: 'center',
                title: "Runs",
                field:"runs",
                sortable: true,
                // width:100
            }
            ],
        });

    }
})

