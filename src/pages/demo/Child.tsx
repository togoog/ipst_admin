import * as React from 'react'
export interface IProps {
    name: string
}
interface IState {
    count: number
}
export default class Child extends React.Component<IProps, object> {
    constructor(props: IProps, public state: IState ) {
        super(props)
        this.state = { count: 0 }
    }

    public render() {
        return (
            <div>
                <p>{this.props.name}</p>    
            </div>
        )
    }
}