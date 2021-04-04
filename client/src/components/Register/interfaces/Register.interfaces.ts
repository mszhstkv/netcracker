import { IRegisterForm } from 'common/interfaces/interfaces';
import moment from 'moment';

export interface IRegisterProps {
    fromRegister: boolean;
    onRegisterFormValuesChange: (value: IRegisterForm) => void;
    onFinish: (values: {
        login: string;
        password: string;
        fullName: string;
        dateOfBirth: string;
        position: string;
    }) => void;
    registerForm: IRegisterForm;
    registerIsLoading: boolean;
    disabledDate: (current: moment.Moment) => boolean;
}