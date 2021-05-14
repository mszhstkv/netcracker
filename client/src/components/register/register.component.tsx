import React, { FC, PropsWithChildren } from 'react';
import { Col, DatePicker, Form, Input, Row } from 'antd';
import { NavLink, Redirect } from 'react-router-dom';
import {
    formItemLayout,
    formLayout,
    LoginButton,
    RegisterButton,
    tailFormItemLayout,
    Title
} from 'components/register/register.styles';
import Loader from 'common/loader.component';
import { RegisterProps } from 'components/register/interfaces/register.component.interfaces';
import {
    FULL_NAME_INPUT_PATTERN,
    LOGIN_INPUT_PATTERN,
    MIN_LENGTH_LOGIN,
    MIN_LENGTH_PASSWORD,
    PASSWORD_INPUT_PATTERN
} from './register.constants';

const Register: FC<RegisterProps> = ({
    registerIsLoading,
    fromRegister,
    onFinish,
    disabledDate
}: PropsWithChildren<RegisterProps>) => {
    if (registerIsLoading) {
        return <Loader />;
    }

    if (fromRegister) {
        return <Redirect to="/login" />;
    }

    return (
        <Row>
            <Col {...formLayout}>
                <Form
                    {...formItemLayout}
                    name="register"
                    className="register-form"
                    scrollToFirstError
                    onFinish={onFinish}
                >
                    <Title>Registration</Title>

                    <Form.Item
                        name="login"
                        label="Login"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your nickname'
                            },
                            {
                                type: 'string',
                                min: MIN_LENGTH_LOGIN,
                                message: `Min length is ${MIN_LENGTH_LOGIN}`
                            },
                            {
                                pattern: LOGIN_INPUT_PATTERN,
                                message: `Don't use whitespace or symbols`
                            }
                        ]}
                    >
                        <Input placeholder="Input your login" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        label="Password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password'
                            },
                            {
                                type: 'string',
                                min: MIN_LENGTH_PASSWORD,
                                message: `Min length is ${MIN_LENGTH_PASSWORD}`
                            },
                            {
                                pattern: PASSWORD_INPUT_PATTERN,
                                message: `Don't use whitespace or symbols`
                            }
                        ]}
                    >
                        <Input.Password placeholder="Input your password" />
                    </Form.Item>
                    <Form.Item
                        label="Full name"
                        name="fullName"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your full name'
                            },
                            {
                                pattern: FULL_NAME_INPUT_PATTERN,
                                message: `Don't use symbols or numbers`
                            }
                        ]}
                    >
                        <Input placeholder="Input your full name" />
                    </Form.Item>
                    <Form.Item
                        name="dateOfBirth"
                        label="Date of Birth"
                        rules={[
                            {
                                required: true,
                                message: 'Please select your date of birth'
                            }
                        ]}
                    >
                        <DatePicker disabledDate={disabledDate} />
                    </Form.Item>
                    <Form.Item
                        label="Position"
                        name="position"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your position'
                            }
                        ]}
                    >
                        <Input placeholder="Input your position" />
                    </Form.Item>
                    <Form.Item {...tailFormItemLayout}>
                        <RegisterButton type="primary" htmlType="submit">
                            Register Now
                        </RegisterButton>
                        <Row>
                            <Col span={12} offset={6}>
                                <LoginButton>
                                    <NavLink
                                        to="/login"
                                        className="register-form_login-link"
                                    >
                                        Login
                                    </NavLink>
                                </LoginButton>
                            </Col>
                        </Row>
                    </Form.Item>
                </Form>
            </Col>
        </Row>
    );
};

export default Register;
