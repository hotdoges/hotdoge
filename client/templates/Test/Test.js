// import { renderMyApp } from './React/Index.jsx';
import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import Index from './React/Index.jsx';

function renderMyApp() {
    if (document.getElementById('app'))
        return ReactDOM.render((
            <Index />
        ), document.getElementById('app'));
    else
        console.log('null');
}

Template.Test.onRendered(function () {
    renderMyApp();
});