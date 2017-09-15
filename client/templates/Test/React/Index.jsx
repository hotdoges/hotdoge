import React from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';
import { BrowserRouter as Router, 
    Route, HashRouter, BrowserRouter, Link } from 'react-router-dom';

import MainLayout from './Layout/MainLayout.jsx';
import OneLayout from './Layout/OneLayout.jsx';
import Test1 from './Test1.jsx';
import Test2 from './Test2.jsx';

function renderMyApp() {
    if (document.getElementById('app'))
        return render((
            <Router basename="/test">
                <div>
                    <ul style={{fontSize: '18px'}}>
                        <li><Link to="/main">main</Link></li>
                        <li><Link to="/one">one</Link></li>
                        <li><Link to="/test1">test1</Link></li>
                        <li><Link to="/test2">test2</Link></li>
                    </ul>

                    <hr />

                    <Route exact path="/" component={MainLayout} />
                    <Route exact path="#/one" component={OneLayout} />
                    <Route exact path="/test1" component={Test1} />
                    <Route exact path="/test2" component={Test2} />
                </div>
            </Router>
        ), document.getElementById('app'));
    else
        console.log('null');
}

export {
    renderMyApp
}