import moment from 'moment';

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
    disabledDate: (current: moment.Moment) => boolean;
}