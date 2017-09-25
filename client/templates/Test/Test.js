import { renderMyApp } from './React/Index.jsx';
import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, HashRouter, BrowserRouter, Link } from 'react-router-dom';

// function renderMyApp() {
//     if (document.getElementById('app'))
//         return ReactDOM.render((
//             <HashRouter >
//                 <div>
//                     <Route exact path="/" component={Index} />
//                 </div>
//             </HashRouter>
//         ), document.getElementById('app'));
//     else
//         console.log('null');
// }

Template.Test.onRendered(function () {
    renderMyApp();
});