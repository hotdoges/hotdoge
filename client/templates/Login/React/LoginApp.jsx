import React from 'react';
import PropTypes from 'prop-types';

import Button from 'antd/lib/button';
import Form from 'antd/lib/form';


class LoginApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            password: ''
        };
    }

    render() {
        return(
            <div>
                <h1> { this.props.str } </h1>
                <Form>
                    <Button >登录</Button>
                </Form>
            </div>
            
    )}

}

LoginApp.PropTypes = {
    str: PropTypes.string.isRequired
}

export default LoginApp;