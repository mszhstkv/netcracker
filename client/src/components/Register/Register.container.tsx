import React, { FC, PropsWithChildren } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { register } from 'redux/actions/register-actions';
import Register from 'components/Register/Register';
import { AppStateType } from 'redux/store';
import {
    RegisterContainerProps,
    RegisterOnFinish
} from 'components/Register/interfaces/Register.container.interfaces';

const RegisterContainer: FC<RegisterContainerProps> = ({
    ...props
}: PropsWithChildren<RegisterContainerProps>) => {
    const disabledDate = (current: moment.Moment): boolean =>
        current && current > moment().startOf('day');

    const onFinish = (values: RegisterOnFinish): void => {
        props.register(
            values.login,
            values.password,
            values.fullName,
            values.dateOfBirth,
            values.position
        );
    };

    return (
        <Register
            fromRegister={props.fromRegister}
            onFinish={onFinish}
            disabledDate={disabledDate}
            registerIsLoading={props.registerIsLoading}
        />
    );
};

const mapStateToProps = (state: AppStateType) => ({
    fromRegister: state.register.fromRegister,
    registerIsLoading: state.register.registerIsLoading
});

export default connect(mapStateToProps, { register })(RegisterContainer);
