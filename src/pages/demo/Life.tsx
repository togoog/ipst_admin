import * as React from 'react'
import Child from './Child'
// import './demo.css'
import './style.styl'
import './style.less'

// import { Button, Input } from 'antd'; // 引入antd burron
import Button from 'antd/lib/button'
import Input from 'antd/lib/input'
export interface IProps {
    name: string
}
interface IState {
    count: number
}
export default class Life extends React.Component<IProps, object> {
    constructor(props: IProps, public state:IState) {
        super(props)
        this.state = { count: 0 }
        this.handleClickBtn = this.handleClickBtn.bind(this)
    }
    public handleClickBtn ():void {
        console.log('handle binded', this)
        this.setState({
            count: this.state.count + 1
        })
    }
    public handleAdd ():void {
        console.log('handle add...', this)
    }
    public render(){
        // const { name } = this.props
        // const style:object = {
        //     padding: 30
        // }
        return (
            <div className="fui-content styl-content">
                <p>react lift {this.props.name}</p>
                <Child name="child" />
                {/* <button onClick={this.handleClickBtn}></button> */}
                <Button type="primary" >button</Button>
                <Input />
            </div>
        )
    }
}