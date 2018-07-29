import * as React from 'react'
import Child from './Child'
import './style.less'
export interface IProps {
    name: string
}
interface IState {
    count: number
}
// interface Props {
//     name: string;
// }
// ts 这里怎么写？
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
            <div className="content">
                <p>react lift {this.props.name}</p>
                <Child name="child" />
                {/* <button onClick={this.handleClickBtn}></button> */}
            </div>
        )
    }
}