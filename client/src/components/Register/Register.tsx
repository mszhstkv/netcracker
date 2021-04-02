import React, { FC, PropsWithChildren, useEffect } from 'react';
import { Col, DatePicker, Form, Input, Row } from 'antd';
import { NavLink, Redirect } from 'react-router-dom';
import moment from 'moment';
import {
    formItemLayout,
    formLayout,
    LoginButton,
    RegisterButton,
    tailFormItemLayout,
    Title
} from 'components/Register/Register.styles';
import Loader from 'common/Loader/Loader';
import { RegisterFormType } from 'common/types/types';

const minLengthLogin: number = 3;
const minLengthPassword: number = 6;

type PropsType = {
    fromRegister: boolean;
    onRegisterFormValuesChange: (value: RegisterFormType) => void;
    onFinish: (values: {
        login: string;
        password: string;
        fullName: string;
        dateOfBirth: string;
        position: string;
    }) => void;
    registerForm: RegisterFormType;
    registerIsLoading: boolean;
    disabledDate: (current: moment.Moment) => boolean;
};

const Register: FC<PropsType> = ({
    ...props
}: PropsWithChildren<PropsType>) => {
    const [form] = Form.useForm();

    useEffect((): void => {
        form.setFieldsValue({ ...props.registerForm });
    }, [props.registerForm]);

    if (props.registerIsLoading) {
        return <Loader />;
    }

    if (props.fromRegister) {
        return <Redirect to="/login" />;
    }

    return (
        <Row>
            <Col {...formLayout}>
                <Form
                    {...formItemLayout}
                    name="register"
                    form={form}
                    style={{
                        background: '#fff',
                        borderRadius: '5px',
                        boxShadow: '0px 0px 10px 4px rgba(34, 60, 80, 0.2)'
                    }}
                    scrollToFirstError
                    onValuesChange={props.onRegisterFormValuesChange}
                    onFinish={props.onFinish}
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
                                min: minLengthLogin,
                                message: `Min length is ${minLengthLogin}`
                            },
                            {
                                pattern: /^[A-z-0-9-А-яЁё]*$/,
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
                                min: minLengthPassword,
                                message: `Min length is ${minLengthPassword}`
                            },
                            {
                                pattern: /^[A-z-0-9]*$/,
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
                                pattern: /^[A-zА-яЁё\s]*$/,
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
                        <DatePicker disabledDate={props.disabledDate} />
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
                                        style={{ color: 'black' }}
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
