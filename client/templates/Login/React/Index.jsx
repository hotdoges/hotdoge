import React from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';

import LoginApp from './LoginApp.jsx';
import { DatePicker } from 'antd';
import 'antd/dist/antd.css';



function renderMyApp() {
    if(document.getElementById('app'))
        return render((
            <DatePicker />
        ), document.getElementById('app'));
    else
        console.log('err');
}

export {
    renderMyApp
}