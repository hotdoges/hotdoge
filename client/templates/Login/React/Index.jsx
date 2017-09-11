import React from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';

import LoginApp from './LoginApp.jsx';
import 'antd/dist/antd.css';


function renderMyApp() {
    if(document.getElementById('app'))
        return render((
            <LoginApp str = '请登录'/>
        ), document.getElementById('app'));
    else
        console.log(`document.getElementById('app'): null`);
}

export {
    renderMyApp
}