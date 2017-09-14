import React from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';
import { BrowserRouter as Route, Router } from 'react-router-dom';
import { HashRouter, Switch, hashHistory, IndexRoute } from 'react-router-dom';

import LoginApp from './LoginApp.jsx';
import Register from './Register.jsx';
import MainLayout from './Layout/MainLayout.jsx';
import 'antd/dist/antd.css';


function renderMyApp() {
    if (document.getElementById('app'))
        return render((
            // <HashRouter history={hashHistory}>
            //     <Switch>
            //     </Switch>
            // </HashRouter>
            <Router>
                <Route path="/" component={MainLayout} >
                    <div>
                        <Route path="/login" component={LoginApp} />
                        <Route path="/register" component={Register} />
                    </div>
                </Route >
            </Router>
        ), document.getElementById('app'));
    else
        console.log(`document.getElementById('app'): null`);
}

export {
    renderMyApp
}