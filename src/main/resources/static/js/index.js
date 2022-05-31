import {DatatypeEChartInfo, GetIndexForm, SpeciesEChartInfo, TissueEChartInfo} from "./api.js";

let DataTypeChart;
let TissueTypeChart;
let SpeciesTypeChart;
$(window).on('load', function () {

    //data type
    DataTypeChart = echarts.init(document.getElementById("DataType"));
    TissueTypeChart = echarts.init(document.getElementById("TissueType"));
    SpeciesTypeChart = echarts.init(document.getElementById("SpeciesType"));
    $.ajax({
        url:DatatypeEChartInfo,
        timeout:10000,
        success:function (res){
            let dataTypeChartData = res["data"]["data"];
            DataTypeChart = echarts.init(document.getElementById("DataType"));
            DataTypeChart.setOption({
                color:res["data"]["color"],
                toolbox: {
                    feature: {
                        dataView: { show: true, readOnly: false,title:"Data View",lang: ["Data View", "Close", "Restore"]},
                        restore: { show: true,title:"Restore" },
                        saveAsImage: { show: true,title:"Save As Image" }
                    },
                    top: '25',
                },
                title: {
                    x: 'center'
                },
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b}: {c} ({d}%)'
                },

                graphic: {       //图形中间文字
                    type: "text",
                    left: "center",
                    top: "30%",
                    style: {
                        text: "638",
                        textAlign: "center",
                        fill: "#000000",
                        fontSize: 58
                    }
                },
                legend: {
                    orient: 'vertical',
                    x: 'left',      //可设定图例在左、右、居中
                    y: 'bottom',
                    padding: [0, 300, 50, 0],
                    left: 0,
                },
                series: [
                    {
                        name: 'Data Type',
                        type: 'pie',
                        radius: ['40%', '55%'],
                        center: ['50%', '35%'],
                        avoidLabelOverlap: false,
                        itemStyle: {
                            normal: {
                                borderColor: '#fff',
                                borderWidth: 3
                            }
                        },
                        label: { //标签显示
                            normal: {
                                show: false
                            },
                        },

                        emphasis: {
                            label: {
                                show: false,
                                fontSize: '70',
                                fontWeight: 'bold'
                            }
                        },
                        data: dataTypeChartData,
                    }
                ]
            });
        }
    });

    //TissueType
    $.ajax({
        url:TissueEChartInfo,
        timeout:10000,
        success:function (res){
            TissueTypeChart = echarts.init(document.getElementById("TissueType"));
            let data = res["data"]["data"];
            TissueTypeChart.setOption({
                color:res["data"]["color"],
                toolbox: {
                    feature: {
                        dataView: { show: true, readOnly: false,title:"Data View",lang: ["Data View", "Close", "Restore"]},
                        restore: { show: true,title:"Restore" },
                        saveAsImage: { show: true,title:"Save As Image" }
                    },
                    top: '25',
                },
                title: {
                    x: 'center'
                },
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b}: {c} ({d}%)'
                },

                graphic: {
                    type: "text",
                    left: "center",
                    top: "30%",
                    style: {
                        text: "638",
                        textAlign: "center",
                        fill: "#000000",
                        fontSize: 58
                    }
                },
                legend: {
                    orient: 'vertical',
                    x: 'left',      //可设定图例在左、右、居中
                    y: 'bottom',
                    padding: [320, 0, 40, 0],
                    left: 0,
                },
                series: [
                    {
                        name: 'Tissue Type',
                        type: 'pie',
                        radius: ['40%', '55%'],
                        center: ['50%', '35%'],
                        avoidLabelOverlap: false,
                        itemStyle: {
                            normal: {
                                borderColor: '#fff',
                                borderWidth: 3
                            }
                        },
                        label: { //标签显示
                            normal: {
                                show: false
                            },
                        },

                        emphasis: {
                            label: {
                                show: false,
                                fontSize: '70',
                                fontWeight: 'bold'
                            }
                        },
                        data: data
                    }
                ]
            });
        }
    });
    //SpeciesType
    $.ajax({
        url:SpeciesEChartInfo,
        timeout:10000,
        success:function (res){
            SpeciesTypeChart = echarts.init(document.getElementById("SpeciesType"));
            let data =res["data"];

            // let arr=new Array();
            // let temp = new Object();
            // data.forEach(function (i){
            //     temp.value=i.value;
            //     temp.name=i.name;
            //     temp.itemStyle=new Map();
            //     temp.itemStyle.set("color",i.itemStyle["color"]);
            //     arr.push(temp);
            // })
            SpeciesTypeChart.setOption({
                color:data["list"],
                xAxis:{
                    type: 'category',
                    axisPointer: {
                        type: 'shadow'
                    },
                    data:data['name']
                },
                toolbox: {
                    feature: {
                        dataView: { show: true, readOnly: false,title:"Data View",lang: ["Data View", "Close", "Restore"]},
                        restore: { show: true,title:"Restore" },
                        saveAsImage: { show: true,title:"Save As Image" },
                        magicType: {show: true, type: ['line', 'bar'],title:"Switch"},
                    }
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                        crossStyle: {
                            color: '#999'
                        }
                    }
                },
                yAxis:[
                    {
                        type: 'value',
                        name: 'Count',
                        min: 0,
                        max:210,
                        interval: 50,
                        axisLabel: {
                            formatter: '{value}'
                        }
                    }
                ],
                series:{
                    name:'',
                    type:'bar',
                    data:data['value']
                }
            })
        }
    });

    $.ajax({
       url:GetIndexForm,
       timeout:10000,
       success:function (res){
           let data = res["data"];
           let classList = data["classList"];
           let datatypeList = data["datatypeList"];
           let speciesList = data["speciesList"];
           let result = data["result"];
           for(let i=0;i<datatypeList.length;i++){
               let typename = datatypeList[i]["typeName"];
               let insertLine='<th colSpan="2" style="text-align: center;font-size: medium">'+typename+'</th>';
               $("#formHead").append(insertLine);

           }
           for(let i=0;i<classList.length;i++){
               let className = classList[i]["className"];
               let classNo = classList[i]["classNo"];
               let classMap=result[className];
               let index=0;
               for(let j=0;j<speciesList.length;j++){
                   let speciesName = speciesList[j]["speciesName"];
                   let speciesNo = speciesList[j]["speciesNo"];
                   if(typeof (classMap[speciesName]) != "undefined"){
                       let insertLine ;
                       if(index===0) {
                           insertLine = '<tr style="border-top: 1px solid lightgray">';
                           index++;
                           let query='?classNo='+classNo;
                           insertLine += '<td rowspan="'+data["countMap"][className]+'" class="植物分类" style="vertical-align: middle;font-size: large"><strong>' + '<a href="/PlantCADB/data-browse'+query+'" style="color: black">'+className+'</a>' + '<br></strong></td>';
                       }
                       else{
                           insertLine = '<tr>';
                       }
                       let query1 = '?speciesNo='+speciesNo;
                       let line1 = '<td class="'+'TRspecies'+'" >'+'<div><a href="/PlantCADB/data-browse'+query1+'" style="color: black">'+speciesName+'</a></div>'+'</td>'
                       insertLine+=line1;
                       for(let k=0;k<datatypeList.length;k++){
                           let typeName=datatypeList[k]["typeName"]
                           let dataNo = datatypeList[k]["dataNo"]
                           if(typeof result[className][speciesName][typeName] != "undefined"){
                               for (let x = 0; x < 2; x++) {
                                   {
                                       let count = result[className][speciesName][typeName][x];
                                       let line2;
                                       let query = '?speciesNo='+speciesNo+'&dataNo='+dataNo+'&classNo='+classNo+'&database='+x;
                                       //style="background-color: darkseagreen"
                                       if(count!==0) line2 = '<td class="' + typeName + '" style="background-color: lightyellow">' +''+ '<a href="/PlantCADB/data-browse'+query+'" style="color: black">'+count+'</a>' + '</td>'
                                       else{
                                           line2 = '<td class="' + typeName + '" >'+ '</td>'
                                       }
                                       insertLine += line2;
                                   }
                               }
                           }

                       }
                       insertLine+='</tr>';
                       $('#indexForm').append(insertLine);
                   }
               }
           }
       }
    });
})

$(window).onresize = function (){
    DataTypeChart.resize();
    TissueTypeChart.resize();
    SpeciesTypeChart.resize();
}

function getRandomColor() {
    let a = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    let c = Math.floor(Math.random() * 255);
    return "rgb(" + a + "," + b + "," + c + ")";
}