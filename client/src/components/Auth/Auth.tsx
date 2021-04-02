import React, { FC, PropsWithChildren, useEffect } from 'react';
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
import { LoginFormType } from 'common/types/types';

type PropsType = {
    onLoginFormValuesChange: (value: LoginFormType) => void;
    loginForm: LoginFormType;
    onFinish: (values: { login: string; password: string }) => void;
    fromRegisterReset: () => void;
    loginIsLoading: boolean;
};

const Auth: FC<PropsType> = ({ ...props }: PropsWithChildren<PropsType>) => {
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
                <Form
                    style={{
                        background: '#fff',
                        borderRadius: '5px',
                        boxShadow: '0px 0px 10px 4px rgba(34, 60, 80, 0.2)'
                    }}
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
                                <DiffFilled style={{ color: '#b07fb9' }} />{' '}
                            </Title>
                        </Col>
                        <Col {...formLayout}>
                            <Form.Item
                                label="Login"
                                name="login"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your login'
                                    }
                                ]}
                                style={{ paddingTop: '10px' }}
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
                                            style={{ color: 'black' }}
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
