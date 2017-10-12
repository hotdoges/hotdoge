import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import 'antd/dist/antd.css';

import SiderLayout from './Layout/SiderLayout.jsx';
import Hello from './Layout/HelloWord.jsx';

function renderMyApp() {
    if (document.getElementById('app'))
        return ReactDOM.render((
            <Router >
                <Switch>
                    <Route exact path="/" component={SiderLayout} />
                    <Route path="/hello" component={Hello} />
                </Switch>
            </Router>
        ), document.getElementById('app'));
    else
        console.log(`document.getElementById('app'): null`);
}

export {
    renderMyApp
}