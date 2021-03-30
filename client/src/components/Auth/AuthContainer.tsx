import React, {FC, PropsWithChildren} from 'react';
import Auth from './Auth';
import {connect} from "react-redux";
import {login, setLoginFormValues} from "../../redux/auth-reducer";
import {setFromRegister} from "../../redux/register-reducer";
import {AppStateType} from "../../redux/store";
import {LoginFormType} from "../../types/types";

type MapStatePropsType = {
    loginForm: LoginFormType
    loginIsLoading: boolean
}

type MapDispatchPropsType = {
    setLoginFormValues: (value: LoginFormType) => void
    login: (login: string, password: string) => void
    setFromRegister: (fromRegister: boolean) => void
}

type PropsType = MapStatePropsType & MapDispatchPropsType

const AuthContainer: FC <PropsType> = (props:PropsWithChildren<PropsType>) => {

    const onLoginFormValuesChange = (value: LoginFormType): void => {
        props.setLoginFormValues(value);
    };

    const onFinish = (values: {login: string, password: string}): void => {
        props.login(values.login, values.password)
    }

    const fromRegisterReset = (): void => {
        props.setFromRegister(false);
    }

    return (
        <Auth
            loginForm={props.loginForm}
            onLoginFormValuesChange={onLoginFormValuesChange}
            onFinish={onFinish}
            fromRegisterReset={fromRegisterReset}
            loginIsLoading={props.loginIsLoading}
        />
    )
};

const mapStateToProps = (state: AppStateType) => ({
    loginForm: state.auth.loginForm,
    loginIsLoading: state.auth.loginIsLoading
});

export default connect(mapStateToProps, {login, setFromRegister, setLoginFormValues})(AuthContainer);