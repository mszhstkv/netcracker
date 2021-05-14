import React, { FC, memo, PropsWithChildren, useCallback } from 'react';
import { connect } from 'react-redux';
import { register } from 'redux/actions/register.actions';
import Register from 'components/register/register.component';
import { AppStateType } from 'redux/store';
import {
    RegisterContainerProps,
    RegisterOnFinish
} from 'components/register/interfaces/register.container.interfaces';
import { disabledDate } from './register.constants';

const RegisterContainer: FC<RegisterContainerProps> = memo(
    ({
        registerIsLoading,
        registerAction,
        fromRegister
    }: PropsWithChildren<RegisterContainerProps>) => {
        const onFinish = useCallback(
            (values: RegisterOnFinish): void => {
                registerAction({
                    ...values
                });
            },
            [registerAction]
        );

        return (
            <Register
                fromRegister={fromRegister}
                onFinish={onFinish}
                disabledDate={disabledDate}
                registerIsLoading={registerIsLoading}
            />
        );
    }
);

const mapStateToProps = (state: AppStateType) => ({
    fromRegister: state.register.fromRegister,
    registerIsLoading: state.register.registerIsLoading
});

export default connect(mapStateToProps, { registerAction: register })(
    RegisterContainer
);
