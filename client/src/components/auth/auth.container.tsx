import React, { FC, memo, PropsWithChildren, useCallback } from 'react';
import { connect } from 'react-redux';
import Auth from 'components/auth/auth.component';
import { postLogin } from 'redux/actions/auth.actions';
import { setFromRegister } from 'redux/actions/register.actions';
import { AppStateType } from 'redux/store';
import {
    AuthContainerProps,
    OnFinish
} from 'components/auth/interfaces/auth.container.interfaces';

const AuthContainer: FC<AuthContainerProps> = memo(
    ({
        postLoginAction,
        loginIsLoading,
        setFromRegisterAction
    }: PropsWithChildren<AuthContainerProps>) => {
        const onFinish = useCallback(
            () => (values: OnFinish): void => {
                postLoginAction(values.login, values.password);
            },
            [postLoginAction]
        );

        const fromRegisterReset = useCallback(
            () => (): void => {
                setFromRegisterAction(false);
            },
            [setFromRegisterAction]
        );

        return (
            <Auth
                onFinish={onFinish}
                fromRegisterReset={fromRegisterReset}
                loginIsLoading={loginIsLoading}
            />
        );
    }
);

const mapStateToProps = (state: AppStateType) => ({
    loginIsLoading: state.auth.loginIsLoading
});

export default connect(mapStateToProps, {
    postLoginAction: postLogin,
    setFromRegisterAction: setFromRegister
})(AuthContainer);
