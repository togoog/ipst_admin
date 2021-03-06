import * as React from 'react'
import * as echarts from 'echarts/lib/echarts'
// import BasePie from '../pie'
import createOptions from './normalPie'

interface INormalPieProps  {
    width?: number
    height?: number
    pieData?: any[] | undefined 
    onRef: any
}
class NoramlPie extends React.Component<INormalPieProps>{
    public pieChart: any = {}
    constructor(props:INormalPieProps) {
        super(props)
        this.initPie = this.initPie.bind(this)
        this.resize = this.resize.bind(this)
    }
    public componentDidMount() {
        this.props.onRef(this) // 调用父组件onChildRef方法,传入this
        this.initPie()
    }

    public initPie () {
        const pieContaierEle:any = document.getElementById('normal-pie')
        this.pieChart = echarts.init(pieContaierEle)
        this.pieChart.setOption(createOptions(this.props.pieData))
    }
  
    // 重置图标尺寸
    public resize() {
        this.pieChart.resize()
    }
    public render () {
        const style = {
            width: this.props.width,
            height: this.props.height
        }
        return (
            <div id="normal-pie" style={style} />
        )
    }
}

export default NoramlPie