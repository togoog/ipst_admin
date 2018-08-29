
/**
 * 创建geo3D地图 options
 * @param mapName 
 * @param seriesData 
 */
function geoOptions(mapName: string, 
    seriesData: any = {
        bar3dData:[],
        scatter3dData:[],
        alirl:[],
}) {
    const options = {
        title: {
            text: '',
            x: 'left',
            top: "10",
            textStyle: {
                color: '#000',
                fontSize: 14
            }
        },
        tooltip: {
            show: true,
            //  formatter:(params)=>{
            //    let data = "测试1:"+params.name + "<br/>"+"值:"+ params.value[2]+"<br/>"+"地理坐标:[" + params.value[0]+","+params.value[1] +"]";
            //    return data;
            //  },
        },
        visualMap: [{
            type: 'continuous',
            seriesIndex: 0,
            text: ['bar3D'],
            calculable: true,
            max: 300,
            inRange: {
                color: ['rgb(74, 169, 255)', '#eba438', '#d94d4c']
            }
        }, {
            type: 'continuous',
            seriesIndex: 1,
            text: ['scatter3D'],
            left: 'right',
            max: 100,
            calculable: true,
            inRange: {
                color: ['#000', 'blue', 'purple']
            }
        }],
        geo3D: {
            map: mapName,
            roam: true,
            normal: {
                areaColor: 'rgb(74, 169, 255)', // '#ffff33',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2
            },
            itemStyle: {
                color: '#ffff33',
                areaColor: 'rgb(24, 144, 255)', //  '#ffff33',
                opacity: 1,
                borderWidth: 1,
                borderColor: '#000'
            },
            shading: {
                color: '#333'
            },
            label: {
                show: true,
                textStyle: {
                    color: '#000', //  地图初始化区域字体颜色
                    fontSize: 8,
                    opacity: 1,
                    backgroundColor: 'rgba(0,23,11,0)'
                }
            },
            emphasis: { // 当鼠标放上去  地区区域是否显示名称
                label: {
                    show: true,
                    textStyle: {
                        color: '#fff',
                        fontSize: 3,
                        backgroundColor: 'rgba(0,23,11,0)'
                    }
                },
                areaColor: 'transparent'
            },
            // shading: 'lambert',
            light: { // 光照阴影
                main: {
                    color: '#fff', //  光照颜色
                    intensity: 1, //  光照强度
                    // shadowQuality: 'high', // 阴影亮度
                    shadow: false, // 是否显示阴影
                    alpha: 55,
                    beta: 10

                },
                ambient: {
                    intensity: 0.3
                }
            }
        },
        series: [
            // 柱状图
            {
                name: 'bar3D',
                type: "bar3D",
                coordinateSystem: 'geo3D',
                barSize: 1, // 柱子粗细
                shading: 'lambert',
                opacity: 1,
                bevelSize: 0.3,
                label: {
                    show: false,
                    formatter: '{b}'
                },
                data: seriesData.bar3dData

            },
            {
                name: 'scatter3D',
                type: "scatter3D",
                coordinateSystem: 'geo3D',
                symbol: 'pin',
                symbolSize: 30,
                opacity: 1,
                label: {
                    show: false,
                    formatter: '{b}'
                },
                itemStyle: {
                    borderWidth: 0.5,
                    borderColor: '#fff'
                },
                data: seriesData.scatter3dData
            },
            // 画线
            {
                type: 'lines3D',

                coordinateSystem: 'geo3D',

                effect: {
                    show: true,
                    trailWidth: 1,
                    trailOpacity: 0.5,
                    trailLength: 0.2,
                    constantSpeed: 5
                },

                blendMode: 'lighter',

                lineStyle: {
                    width: 3,
                    opacity: 1,
                    color: [123, 23, 63, 1]
                },

                data: seriesData.alirl
            }
        ]
    }
    return options
}



export default geoOptions