import React from 'react';
import PropTypes from 'prop-types';
import { Route, HashRouter } from 'react-router-dom';
import { render } from 'react-dom';

function renderMyApp() {
    if(document.getElementById('app'))
        return render((
            <div>hello</div>
        ), document.getElementById('app'));
    else
        console.log('');
}

export {
    renderMyApp
}