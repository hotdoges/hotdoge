import React from 'react';
import PropTypes from 'prop-types';

import {Button, Form, Input, Icon, Checkbox} from 'antd';
import Register from './Register.jsx';

import { createContainer } from 'meteor/react-meteor-data';
import { Users } from '../../../../imports/collections/users.js';


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

    checkLoginBtnDisabled() {
        if(this.state.userName || this.state.password){
            return false;
        }
        return true;
    }

    btnOnClickLogin() {
        if(this.checkLoginBtnDisabled()) {
            return ;
        }
    }
    
    // checkAccount = (rule, value, callback) => {
    //     const user = Users.findOne({'account': value});
    //     if(!user) {
    //         callback('账号错误或者没注册账号');
    //     }
    // }
    // checkPassword = (rule, value, callback) => {
    //     if(!(value == user.password)) {
    //         callback('密码错误');
    //     }
    // }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if(!err) {
                console.log('收到的值: ', values);

                const user = Users.findOne({'account': values.userName});
                if(!user) {
                    console.log("账号不正确");
                    document.getElementById('tip').innerHTML = "账号不正确";
                    return;
                } else if (user.password == values.password){
                    console.log("成功登录");
                    this.setState({userName: values.userName});
                    this.setState({password: values.password});
                    document.getElementById('tip').innerHTML = "";
                    window.location = "/admin/";
                    return;
                } else {
                    console.log("密码错误");
                    document.getElementById('tip').innerHTML = "密码错误";
                }
                
            }else {
                console.log('err: ', err)
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
        users: Users.find({}).fetch(),
    };
}, WrappedNormalLoginForm);