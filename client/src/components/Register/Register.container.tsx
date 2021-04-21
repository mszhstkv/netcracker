import React, { FC, PropsWithChildren } from 'react';
import { connect } from 'react-redux';
import moment, { Moment } from 'moment';
import { register } from 'redux/actions/register.actions';
import Register from 'components/Register/Register';
import { AppStateType } from 'redux/store';
import {
    RegisterContainerProps,
    RegisterOnFinish
} from 'components/Register/features/interfaces/Register.container.interfaces';

const RegisterContainer: FC<RegisterContainerProps> = ({
    registerIsLoading,
    registerAction,
    fromRegister
}: PropsWithChildren<RegisterContainerProps>) => {
    const disabledDate = (current: Moment): boolean =>
        current && current > moment().startOf('day');

    const onFinish = (values: RegisterOnFinish): void => {
        registerAction({
            login: values.login,
            password: values.password,
            fullName: values.fullName,
            dateOfBirth: values.dateOfBirth,
            position: values.position
        });
    };

    return (
        <Register
            fromRegister={fromRegister}
            onFinish={onFinish}
            disabledDate={disabledDate}
            registerIsLoading={registerIsLoading}
        />
    );
};

const mapStateToProps = (state: AppStateType) => ({
    fromRegister: state.register.fromRegister,
    registerIsLoading: state.register.registerIsLoading
});

export default connect(mapStateToProps, { registerAction: register })(
    RegisterContainer
);
