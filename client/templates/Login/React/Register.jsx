import React from 'react';
import PropTypes from 'prop-types';

import { Accounts } from 'meteor/accounts-base';
import { createContainer } from 'meteor/react-meteor-data';

import { Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete } from 'antd';

const Option = Select.Option;
const AutoCompleteOption = AutoComplete.Option;

const residences = [{
    value: 'zhuhai',
    label: '珠海',
}];

class Register extends React.Component {
    state = {
        confirmDirty: false,
        autoCompleteResult: [],
    };

    onClickBack() {
        // window.history.back(-1);
        this.props.history.goBack();
    }
    returnLogin(){
        //对象才能调用props.history
        this.props.history.push('/admin/');
    }

    checkInsert = (err, id) => {
        console.log(err);
        console.log(id);
        if (id) {
            console.log('注册成功');
            this.returnLogin();
        } else {
            console.log('已注册用户');
        }
    }

    //对象等于方法
    registerErr = (err) => {
        if (err) {
            console.log('register_err: ', err);
            return;
        }
        console.log('register_Success! ');
        this.returnLogin();
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('antd_注册表单: ', values);
                Accounts.createUser({
                    username: values.username,
                    email: values.email,
                    password: values.password,
                    profile: {
                        nickname: values.nickname,
                        phone: values.phone,
                        captch: values.captch,
                        website: values.website,
                    },
                }, this.registerErr);  
            } else {
                console.log('antd_错误信息：', err);
            }
        });
    }

    handleConfirmBlur = (e) => {
        const value = e.target.value;
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    }
    checkPassword = (rule, value, callback) => {
        const form = this.props.form;
        console.log(value + ',' + form.getFieldValue('password'));
        if (value && value !== form.getFieldValue('password')) {
            callback('两次输入密码不一致！');
        } else {
            callback();
        }
    }
    checkConfirm = (rule, value, callback) => {
        const form = this.props.form;
        if (value && this.state.confirmDirty) {
            form.validateFields(['confirm'], { force: true });
        }
        callback();
    }
    cheackAgreement = (rule, value, callback) => {
        if (!value) {
            callback('请阅读协议并确定!');
        } else {
            callback();
        }
    }

    handleWebsiteChange = (value) => {
        let autoCompleteResult;
        if (!value) {
            autoCompleteResult = [];
        } else {
            autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`);
        }
        this.setState({ autoCompleteResult });
    }


    render() {
        const { getFieldDecorator } = this.props.form;
        const { autoCompleteResult } = this.state;

        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { spam: 6 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 14 },
            },
        };
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 14,
                    offset: 6,
                },
            },
        };
        const prefixSelector = getFieldDecorator('prefix', {
            initialValue: '86',
        })(
            <Select style={{ width: 60 }}>
                <Option value="86">+86</Option>
                <Option value="00852">+00852</Option>
            </Select>
            );

        const websiteOptions = autoCompleteResult.map(website => (
            <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
        ));

        return (
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '-webkit-fill-available',
                textAlign: 'center'
            }} >
                <Form onSubmit={this.handleSubmit}>
                    <Form.Item
                        {...formItemLayout}
                        label={(
                            <span>
                                用户名&nbsp;
                                <Tooltip title="账户名称">
                                    <Icon type="question-circle-o" />
                                </Tooltip>
                            </span>
                        )}
                        hasFeedback
                    >
                        {getFieldDecorator('username', {
                            rules: [{ required: true, message: '请输入你的昵称!', whitespace: true }],
                        })(
                            <Input />
                            )}
                    </Form.Item>
                    <Form.Item
                        {...formItemLayout}
                        label="E-mail"
                        hasFeedback
                    >
                        {getFieldDecorator('email', {
                            rules: [{
                                type: 'email', message: '请输入有效的E-mail',
                            }, {
                                required: true, message: '请输入E-mail!',
                            }],
                        })(
                            <Input />
                            )}
                    </Form.Item>
                    <Form.Item
                        {...formItemLayout}
                        label="手机号码"
                    >
                        {getFieldDecorator('phone', {
                            rules: [{ required: true, message: '请输入你的电话号码！' }],
                        })(
                            <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
                            )}
                    </Form.Item>
                    <Form.Item
                        {...formItemLayout}
                        label="输入密码"
                        hasFeedback
                    >
                        {getFieldDecorator('password', {
                            rules: [{
                                required: true, message: '请输入密码!',
                            }, {
                                validator: this.checkConfirm,
                            }],
                        })(
                            <Input type="password" />
                            )}
                    </Form.Item>
                    <Form.Item
                        {...formItemLayout}
                        label="再次输入密码"
                        hasFeedback
                    >
                        {getFieldDecorator('confirm', {
                            rules: [{
                                required: true, message: '请再次输入密码!',
                            }, {
                                validator: this.checkPassword,
                            }],
                        })(
                            <Input type="password" onBlur={this.handleConfirmBlur} />
                            )}
                    </Form.Item>
                    <Form.Item
                        {...formItemLayout}
                        label={(
                            <span>
                                昵称&nbsp;
                                <Tooltip title="站内称呼">
                                    <Icon type="question-circle-o" />
                                </Tooltip>
                            </span>
                        )}
                        hasFeedback
                    >
                        {getFieldDecorator('nickname', {
                            rules: [{ required: false, message: '请输入你的昵称!', whitespace: true }],
                        })(
                            <Input />
                            )}
                    </Form.Item>
                    <Form.Item
                        {...formItemLayout}
                        label="常住地址"
                    >
                        {getFieldDecorator('residence', {
                            initialValue: ['zhejiang', 'hangzhou', 'xihu'],
                            rules: [{ type: 'array', required: false, message: '请选择您惯常居住的地方！' }],
                        })(
                            <Cascader options={residences} />
                            )}
                    </Form.Item>
                    <Form.Item
                        {...formItemLayout}
                        label="个人网址"
                    >
                        {getFieldDecorator('website', {
                            rules: [{ required: false, message: '请输入个人网站！' }],
                        })(
                            <AutoComplete
                                dataSource={websiteOptions}
                                onChange={this.handleWebsiteChange}
                                placeholder="个人主页"
                            >
                                <Input />
                            </AutoComplete>
                            )}
                    </Form.Item>
                    <Form.Item
                        {...formItemLayout}
                        label="验证码"
                        extra="We must make sure that your are a human."
                    >
                        <Row gutter={8}>
                            <Col span={12}>
                                {getFieldDecorator('captcha', {
                                    rules: [{ required: true, message: '请输入您收到的验证码！' }],
                                })(
                                    <Input size="large" />
                                    )}
                            </Col>
                            <Col span={12}>
                                <Button size="large">获取验证码</Button>
                            </Col>
                        </Row>
                    </Form.Item>
                    <Form.Item {...tailFormItemLayout} style={{ marginBottom: 8 }}>
                        {getFieldDecorator('agreement', {
                            valuePropName: 'checked',
                            rules: [{ validator: this.cheackAgreement }],
                        })(
                            <Checkbox>我已经阅读<a href="">协议</a></Checkbox>
                            )}
                    </Form.Item>
                    <Form.Item {...tailFormItemLayout}>
                        <Button type="primary" htmlType="submit">注册</Button>
                        <Button type="button" onClick={this.onClickBack.bind(this)}>返回</Button>
                    </Form.Item>
                </Form>
            </div>
        );
    }
}

const WrappedRegisterForm = Form.create()(Register);
export default createContainer(() => {
    return {
        // users: Users.find({}).fetch(),
    };
}, WrappedRegisterForm);