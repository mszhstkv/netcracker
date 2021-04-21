import { Moment } from 'moment';

export interface RegisterProps {
    fromRegister: boolean;
    onFinish: (values: {
        login: string;
        password: string;
        fullName: string;
        dateOfBirth: string;
        position: string;
    }) => void;
    registerIsLoading: boolean;
    disabledDate: (current: Moment) => boolean;
}
