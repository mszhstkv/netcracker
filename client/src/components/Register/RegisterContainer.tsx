import React, {FC, PropsWithChildren} from 'react';
import {connect} from "react-redux";
import {register, setRegisterFormValues} from "../../redux/register-reducer"
import Register from './Register';
import {AppStateType} from "../../redux/store";
import moment from "moment";
import {RegisterFormType} from "../../types/types";

type MapStatePropsType = {
    fromRegister: boolean
    registerForm : RegisterFormType
    registerIsLoading: boolean
}

type MapDispatchPropsType = {
    register: (login: string, password: string, fullName: string, dateOfBirth: string, position: string) => void
    setRegisterFormValues: (value: RegisterFormType) => void
}

type PropsType = MapStatePropsType & MapDispatchPropsType;

const RegisterContainer: FC <PropsType> = (props: PropsWithChildren<PropsType>) => {

    const disabledDate = (current: moment.Moment): boolean => {
        return current && current > moment().startOf('day');
    }

    const onRegisterFormValuesChange = (value: RegisterFormType): void => {
        props.setRegisterFormValues(value);
    };

    const onFinish = (values: {login: string, password: string, fullName: string, dateOfBirth: string, position: string }): void => {
        props.register(values.login, values.password, values.fullName, values.dateOfBirth, values.position);
    }

    return (
    <Register
        fromRegister={props.fromRegister}
        onRegisterFormValuesChange={onRegisterFormValuesChange}
        onFinish={onFinish}
        disabledDate={disabledDate}
        registerForm={props.registerForm}
        registerIsLoading={props.registerIsLoading}
    />
    )
};

const mapStateToProps = (state: AppStateType) => ({
    fromRegister: state.register.fromRegister,
    registerForm: state.register.registerForm,
    registerIsLoading: state.register.registerIsLoading
})

export default connect(mapStateToProps, {register, setRegisterFormValues})(RegisterContainer);