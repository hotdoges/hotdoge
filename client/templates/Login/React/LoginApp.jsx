import React from 'react';
import PropTypes from 'prop-types';

import {Button, Form, Input, Icon, Checkbox} from 'antd';
// import '../../../css/login.css'

class LoginApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            password: ''
        };
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

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if(!err) {
                console.log('收到的值: ', values);
                console.log('账号：', values.userName);
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
                                rules: [{ required: true, message: '请输入账号!' }],
                            })(
                                <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="用户名" />
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('password', {
                                rules: [{ required: true, message: '请输入密码'}],
                            })(
                                <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="密码" />
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('remember', {
                                valuePropName: 'checked',
                                initialValue: false,
                            })(
                                <Checkbox style={{ float: 'left' }}>记住账号</Checkbox>
                            )}
                            <a className="login-form-forgot" href="">忘记密码</a>
                            <Button type="primary" htmlType="submit" className="login-form-button">登录</Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
    )}

}

LoginApp.PropTypes = {
    str: PropTypes.string.isRequired
}

const WrappedNormalLoginForm = Form.create()(LoginApp);
export default WrappedNormalLoginForm;