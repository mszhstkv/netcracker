import React, { FC, PropsWithChildren } from 'react';
import { connect } from 'react-redux';
import Auth from 'components/Auth/Auth';
import { postLogin, setLoginFormValues } from 'redux/actions/auth-actions';
import { setFromRegister } from 'redux/actions/register-actions';
import { AppStateType } from 'redux/store';
import { LoginFormType } from 'common/types/types';

type MapStatePropsType = {
    loginForm: LoginFormType;
    loginIsLoading: boolean;
};

type MapDispatchPropsType = {
    setLoginFormValues: (value: LoginFormType) => void;
    postLogin: (login: string, password: string) => void;
    setFromRegister: (fromRegister: boolean) => void;
};

type PropsType = MapStatePropsType & MapDispatchPropsType;

const AuthContainer: FC<PropsType> = ({
    ...props
}: PropsWithChildren<PropsType>) => {
    const onLoginFormValuesChange = (value: LoginFormType): void => {
        props.setLoginFormValues(value);
    };

    const onFinish = (values: { login: string; password: string }): void => {
        props.postLogin(values.login, values.password);
    };

    const fromRegisterReset = (): void => {
        props.setFromRegister(false);
    };

    return (
        <Auth
            loginForm={props.loginForm}
            onLoginFormValuesChange={onLoginFormValuesChange}
            onFinish={onFinish}
            fromRegisterReset={fromRegisterReset}
            loginIsLoading={props.loginIsLoading}
        />
    );
};

const mapStateToProps = (state: AppStateType) => ({
    loginForm: state.auth.loginForm,
    loginIsLoading: state.auth.loginIsLoading
});

export default connect(mapStateToProps, {
    postLogin,
    setFromRegister,
    setLoginFormValues
})(AuthContainer);
