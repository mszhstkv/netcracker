import React, { FC, PropsWithChildren } from 'react';
import { Form, Input, Row, Col } from 'antd';
import { NavLink } from 'react-router-dom';
import { UserOutlined, DiffFilled, KeyOutlined } from '@ant-design/icons/lib';
import {
    formLayout,
    layout,
    LoginButton,
    loginLayout,
    RegisterButton,
    tailLayout,
    Title,
    titleLayout
} from 'components/Auth/Auth.styles';
import Loader from 'common/Loader/Loader';
import { AuthProps } from 'components/Auth/features/interfaces/Auth.interfaces';

const Auth: FC<AuthProps> = ({
    loginIsLoading,
    onFinish,
    fromRegisterReset
}: PropsWithChildren<AuthProps>) => {
    if (loginIsLoading) {
        return <Loader />;
    }

    return (
        <Row>
            <Col {...loginLayout}>
                <Form
                    className="login-form"
                    {...layout}
                    name="loginForm"
                    onFinish={onFinish}
                >
                    <Row>
                        <Col {...titleLayout}>
                            <Title>
                                Manage your incidents{' '}
                                <DiffFilled className="login-form_title-icon" />
                            </Title>
                        </Col>
                        <Col {...formLayout}>
                            <Form.Item
                                label="Login"
                                name="login"
                                className="login-form__item-login"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your login'
                                    }
                                ]}
                            >
                                <Input
                                    placeholder="Enter your login"
                                    prefix={<UserOutlined />}
                                />
                            </Form.Item>
                            <Form.Item
                                label="Password"
                                name="password"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your password'
                                    }
                                ]}
                            >
                                <Input.Password
                                    placeholder="Enter your password"
                                    prefix={<KeyOutlined />}
                                />
                            </Form.Item>
                            <Form.Item {...tailLayout}>
                                <LoginButton type="primary" htmlType="submit">
                                    Log in
                                </LoginButton>
                            </Form.Item>
                            <Row>
                                <Col span={12} offset={6}>
                                    <RegisterButton>
                                        <NavLink
                                            to="/register"
                                            className="login-form_register-link"
                                            onClick={fromRegisterReset}
                                        >
                                            Register
                                        </NavLink>
                                    </RegisterButton>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Form>
            </Col>
        </Row>
    );
};

export default Auth;
