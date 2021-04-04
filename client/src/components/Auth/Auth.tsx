import React, { FC, PropsWithChildren, useEffect } from 'react';
import { Form, Input, Row, Col } from 'antd';
import { NavLink } from 'react-router-dom';
import { UserOutlined, DiffFilled, KeyOutlined } from '@ant-design/icons/lib';
import {
    formLayout,
    layout,
    LoginButton,
    LoginForm,
    loginLayout,
    RegisterButton,
    tailLayout,
    Title,
    titleLayout
} from 'components/Auth/Auth.styles';
import Loader from 'common/Loader/Loader';
import { IAuthProps } from 'components/Auth/interfaces/Auth.interfaces';

const Auth: FC<IAuthProps> = ({ ...props }: PropsWithChildren<IAuthProps>) => {
    const [form] = Form.useForm();

    useEffect((): void => {
        form.setFieldsValue({ ...props.loginForm });
    }, [props.loginForm]);

    if (props.loginIsLoading) {
        return <Loader />;
    }

    return (
        <Row>
            <Col {...loginLayout}>
                <LoginForm />
                <Form
                    className="login-form"
                    {...layout}
                    name="loginForm"
                    onFinish={props.onFinish}
                    form={form}
                    onValuesChange={props.onLoginFormValuesChange}
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
                                className="login-form_item_login"
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
                                            onClick={props.fromRegisterReset}
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
