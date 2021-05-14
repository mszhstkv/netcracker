import { Moment } from 'moment';

interface OnFinishRegisterValues {
    login: string;
    password: string;
    fullName: string;
    dateOfBirth: string;
    position: string;
}

export interface RegisterProps {
    fromRegister: boolean;
    onFinish: (values: OnFinishRegisterValues) => void;
    registerIsLoading: boolean;
    disabledDate: (current: Moment) => boolean;
}
