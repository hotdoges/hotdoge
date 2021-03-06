import React from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { Link } from 'react-router-dom';

import {Button, Form, Input, Icon, Checkbox} from 'antd';
import Register from './Register.jsx';

import { createContainer } from 'meteor/react-meteor-data';


class LoginApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            password: ''
        };
    }

    handleClick() {
        this.props.history.push('/register');
    }

    loginErr = (err) => {
        if(err) {
            console.log('login_err: ', err);
        } else {
            console.log('login_Success: Success!');
            location.replace("/admin");
        }  
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            console.log('antd_form: ', values);
            if(!err) {
                Meteor.loginWithPassword(
                    values.userName,
                    values.password,
                    this.loginErr);
            }else {
                console.log('antd_err: ', err)
            }
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return(
            <div style={{ 
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '60vh',
                textAlign: 'center'
             }}>
                <div style={{ width: '300px' }}>
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <Form.Item>
                            {getFieldDecorator('userName', {
                                rules: [{ 
                                    required: true, message: '请输入账号!', 
                                }],
                            })(
                                <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="用户名" />
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('password', {
                                rules: [{ 
                                    required: true, message: '请输入密码',
                                }],
                            })(
                                <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="密码" />
                            )}
                        </Form.Item>
                        <span id="tip" style={{ fontSize: 8, color: 'red' }} > </span>
                        <Form.Item>
                            {getFieldDecorator('remember', {
                                valuePropName: 'checked',
                                initialValue: false,
                            })(
                                <Checkbox style={{ float: 'left' }}>记住账号</Checkbox>
                            )}
                            <a className="login-form-forgot" href="" style={{ float: 'right' }}>忘记密码</a>
                            <Button type="primary" htmlType="submit" className="login-form-button" style={{ width: '100%' }}>登录</Button>
                            <a onClick={this.handleClick.bind(this)}>注册</a>
                        </Form.Item>
                    </Form>
                </div>
            </div>
    )}

}

LoginApp.PropTypes = {
    // str: PropTypes.string.isRequired
}

const WrappedNormalLoginForm = Form.create()(LoginApp);
export default createContainer(() => {
    return {
        // users: Users.find({}).fetch(),
    };
}, WrappedNormalLoginForm);