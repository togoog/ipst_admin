import * as React from 'react'
import { Link } from 'react-router-dom'
export default class Home extends React.Component {
    public render() {
        return (
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">about</Link>
                    </li>
                    <li>
                        <Link to="/topics">topics</Link>
                    </li>
                </ul>
                {this.props.children}
            </div>
        )
    }
}