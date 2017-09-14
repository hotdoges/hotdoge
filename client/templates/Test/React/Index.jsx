import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, HashRouter, Link } from 'react-router-dom';
import { render } from 'react-dom';

import MainLayout from './Layout/MainLayout.jsx';
import OneLayout from './Layout/OneLayout.jsx';
import Test1 from './Test1.jsx';
import Test2 from './Test2.jsx';

function renderMyApp() {
    if (document.getElementById('app'))
        return render((
            <HashRouter >
                <div>
                    <h1>我是router</h1>
                    <ul>
                        <li><Link to="/">main</Link></li>
                        <li><Link to="/one">one</Link></li>
                        <li><Link to="/test1">test1</Link></li>
                        <li><Link to="/test2">test2</Link></li>
                    </ul>

                    <hr />

                    <Route exact path="/" component={MainLayout} />
                    <Route path="/one" component={OneLayout} />
                    <Route path="/test1" component={Test1} />
                    <Route path="/test2" component={Test2} />
                </div>
            </HashRouter>
        ), document.getElementById('app'));
    else
        console.log('null');
}

export {
    renderMyApp
}