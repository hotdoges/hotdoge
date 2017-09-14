import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, browserHistory, HashRouter } from 'react-router-dom';
import { render } from 'react-dom';

import MainLayout from './Layout/MainLayout.jsx';
import Test1 from './Test1.jsx';
import Test2 from './Layout/Test2.jsx';

function renderMyApp() {
    if (document.getElementById('app'))
        return render((
            <HashRouter>
                <div>
                    <h1>我是router</h1>
                    {/* <Route exact path="/main" component={MainLayout} /> */}
                    {/* <Route path="/test1/:id" component={Test1} /> */}
                    <Route exact path="/test2" component={Test2} />
                </div>
            </HashRouter>
        ), document.getElementById('app'));
    else
        console.log('null');
}

export {
    renderMyApp
}