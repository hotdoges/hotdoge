import React from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';
import { Route, HashRouter, Switch} from 'react-router-dom';

import LoginApp from './LoginApp.jsx';
import Register from './Register.jsx';
import 'antd/dist/antd.css';


function renderMyApp() {
    if(document.getElementById('app'))
        return render((
            <HashRouter>
                <Switch>
                    <Route path="/login" component={LoginApp} />
                    <Route path="/register" component={Register} />
                </Switch>
            </HashRouter>
        ), document.getElementById('app'));
    else
        console.log(`document.getElementById('app'): null`);
}

export {
    renderMyApp
}