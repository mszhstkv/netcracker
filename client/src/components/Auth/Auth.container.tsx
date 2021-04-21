import React, { FC, PropsWithChildren } from 'react';
import { connect } from 'react-redux';
import Auth from 'components/Auth/Auth';
import { postLogin } from 'redux/actions/auth.actions';
import { setFromRegister } from 'redux/actions/register.actions';
import { AppStateType } from 'redux/store';
import {
    AuthContainerProps,
    OnFinish
} from 'components/Auth/features/interfaces/Auth.container.interfaces';

const AuthContainer: FC<AuthContainerProps> = ({
    postLoginAction,
    loginIsLoading,
    setFromRegisterAction
}: PropsWithChildren<AuthContainerProps>) => {
    const onFinish = (values: OnFinish): void => {
        postLoginAction(values.login, values.password);
    };

    const fromRegisterReset = (): void => {
        setFromRegisterAction(false);
    };

    return (
        <Auth
            onFinish={onFinish}
            fromRegisterReset={fromRegisterReset}
            loginIsLoading={loginIsLoading}
        />
    );
};

const mapStateToProps = (state: AppStateType) => ({
    loginIsLoading: state.auth.loginIsLoading
});

export default connect(mapStateToProps, {
    postLoginAction: postLogin,
    setFromRegisterAction: setFromRegister
})(AuthContainer);
