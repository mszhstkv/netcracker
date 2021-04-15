import React, { FC, PropsWithChildren } from 'react';
import { connect } from 'react-redux';
import Auth from 'components/Auth/Auth';
import { postLogin } from 'redux/actions/auth-actions';
import { setFromRegister } from 'redux/actions/register-actions';
import { AppStateType } from 'redux/store';
import { AuthContainerProps } from 'components/Auth/interfaces/Auth.container.interfaces';

const AuthContainer: FC<AuthContainerProps> = ({
    ...props
}: PropsWithChildren<AuthContainerProps>) => {
    const onFinish = (values: { login: string; password: string }): void => {
        props.postLogin(values.login, values.password);
    };

    const fromRegisterReset = (): void => {
        props.setFromRegister(false);
    };

    return (
        <Auth
            onFinish={onFinish}
            fromRegisterReset={fromRegisterReset}
            loginIsLoading={props.loginIsLoading}
        />
    );
};

const mapStateToProps = (state: AppStateType) => ({
    loginIsLoading: state.auth.loginIsLoading
});

export default connect(mapStateToProps, {
    postLogin,
    setFromRegister
})(AuthContainer);
