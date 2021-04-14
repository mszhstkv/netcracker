import React, { FC, PropsWithChildren } from 'react';
import { connect } from 'react-redux';
import Auth from 'components/Auth/Auth';
import { postLogin, setLoginFormValues } from 'redux/actions/auth-actions';
import { setFromRegister } from 'redux/actions/register-actions';
import { AppStateType } from 'redux/store';
import { ILoginForm } from 'common/interfaces/interfaces';
import { IAuthContainerProps } from 'components/Auth/interfaces/Auth.container.interfaces';

const AuthContainer: FC<IAuthContainerProps> = ({
    ...props
}: PropsWithChildren<IAuthContainerProps>) => {
    const onLoginFormValuesChange = (value: ILoginForm): void => {
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
