import React, { Component } from 'react'
import { Button, WhiteBlock } from 'components';
import { Form, Input, Checkbox } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

class RegistrationForm extends Component {
    render() {
        const onFinish = values => {
            console.log('Received values of form: ', values);
        };
        return (
            <div>
                <div className="auth__top">
                    <h2>Registration</h2>
                    <p>You have to register before start chatting</p>
                </div>
                <WhiteBlock>
                    <Form name="normal_login" className="login-form" initialValues={{ remember: true }} onFinish={onFinish}>
                        <Form.Item hasFeedback name="email">
                            <Input size="large" validateStatus='success' prefix={<MailOutlined type="mail" />} placeholder="Email" />
                        </Form.Item>
                        <Form.Item hasFeedback name="username">
                            <Input size="large" validateStatus='success' prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                        </Form.Item>
                        <Form.Item name="password" hasFeedback>
                            <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="Password" size="large" />
                        </Form.Item>
                        <Form.Item name="password" hasFeedback>
                            <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="Confirm password" size="large" />
                        </Form.Item>
                        <Form.Item>
                            <Button size="large" type="primary">Register</Button>
                        </Form.Item>

                        <Link className="auth__registration-link" to="/login">Already registered?</Link>

                    </Form>
                </WhiteBlock>
            </div>
        )
    }
};

export default RegistrationForm;