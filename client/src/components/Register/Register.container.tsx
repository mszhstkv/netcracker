import React, { FC, PropsWithChildren } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import {
    register,
    setRegisterFormValues
} from 'redux/actions/register-actions';
import Register from 'components/Register/Register';
import { AppStateType } from 'redux/store';
import { IRegisterForm } from 'common/interfaces/interfaces';
import { IRegisterContainerProps } from 'components/Register/interfaces/Register.container.interfaces';

const RegisterContainer: FC<IRegisterContainerProps> = ({
    ...props
}: PropsWithChildren<IRegisterContainerProps>) => {
    const disabledDate = (current: moment.Moment): boolean =>
        current && current > moment().startOf('day');

    const onRegisterFormValuesChange = (value: IRegisterForm): void => {
        props.setRegisterFormValues(value);
    };

    const onFinish = (values: {
        login: string;
        password: string;
        fullName: string;
        dateOfBirth: string;
        position: string;
    }): void => {
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
            onRegisterFormValuesChange={onRegisterFormValuesChange}
            onFinish={onFinish}
            disabledDate={disabledDate}
            registerForm={props.registerForm}
            registerIsLoading={props.registerIsLoading}
        />
    );
};

const mapStateToProps = (state: AppStateType) => ({
    fromRegister: state.register.fromRegister,
    registerForm: state.register.registerForm,
    registerIsLoading: state.register.registerIsLoading
});

export default connect(mapStateToProps, { register, setRegisterFormValues })(
    RegisterContainer
);
