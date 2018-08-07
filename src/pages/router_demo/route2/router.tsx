import * as React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import Main from '../route1/Main'
import About from '../route1/About'
import Topic from '../route1/topic'
import Home from './home'
export default class IRoute extends React.Component {
    public render() {
        return (
            <Router>
                <Home>
                    <Route exact={true} path="/" component={Main} />
                    <Route path="/about" component={About} />
                    <Route path="/topics" component={Topic} />
                </Home>
            </Router>
        )
    }
}