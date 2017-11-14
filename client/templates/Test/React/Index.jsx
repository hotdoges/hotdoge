import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';

import { 
    BrowserRouter as Router, Route, HashRouter, 
    BrowserRouter, Link, Switch, withRouter
} from 'react-router-dom';

// import MainLayout from './Layout/MainLayout.jsx';
import OneLayout from './Layout/OneLayout.jsx';
import Test1 from './Test1.jsx';
import Test2 from './Test2.jsx';

const About = () => (
    <div>
        <h2>About</h2>
    </div>
)

const routes = [
    {
        // path: '/main',
        // component: MainLayout
    },
    {
        path: '/one',
        component: OneLayout
    },
    {
        path: '/test2',
        component: Test2
    },
    {
        path: '/about',
        component: About
    }
]

class Index extends Component {

    render() {
        return (
            <BrowserRouter basename="/test/#">
                <div>
                    <ul style={{ fontSize: '18px' }}>
                        <li><Link to="/main">main</Link></li>
                        <li><Link to="/one">one</Link></li>
                        {/* <li><Link to="/test1">test1</Link></li> */}
                        <li><Link to="/test2">test2</Link></li>
                        <li><Link to="/about">about</Link></li>
                    </ul>

                    <hr />

                    <Switch>
                        {/* <Route exact path="/main" component={MainLayout} /> */}
                        <Route exact path="/one" component={OneLayout} />
                        {/* <Route exact path="/test1" component={Test1} /> */}
                        <Route exact path="/test2" component={Test2} />
                        <Route path="/about" component={About} />
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

// export default withRouter(connect(mapStateToProps)(Index))
export default Index;