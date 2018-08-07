import * as React from 'react'
import {HashRouter as Router, Link} from 'react-router-dom'
export default class Home extends React.Component {
    public render () {
        return (
            <Router>
                <div>
                    <ul>
                        <li>
                            <Link  to="/">Home</Link>
                        </li>
                        <li>
                            <Link  to="/about">about</Link>
                        </li>
                        <li>
                            <Link  to="/topics">topics</Link>
                        </li>
                    </ul>
                    
                    {/* <Route exact={true} path="/" component={Main}/>
                    <Route path="/about" component={About}/>
                    <Route path="/topics" component={Topic}/> */}
                </div>
            </Router>
        )
    }
}