import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import {
    HashRouter as Router, Route,
    HashRouter, Switch
} from 'react-router-dom';

import LoginApp from './LoginApp.jsx';
import Register from './Register.jsx';
import MainLayout from './Layout/MainLayout.jsx';
import 'antd/dist/antd.css';


function renderMyApp() {
    if (document.getElementById('app'))
        return ReactDOM.render((
            <Router >
                <div>
                    <Route exact path="/" component={LoginApp} />
                    <Route path="/register" component={Register} />
                </div>
            </Router>
        ), document.getElementById('app'));
    else
        console.log(`document.getElementById('app'): null`);
}

export {
    renderMyApp
}