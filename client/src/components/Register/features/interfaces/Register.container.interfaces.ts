import { RegisterActionData } from 'common/interfaces/interfaces';

export interface RegisterOnFinish {
    login: string;
    password: string;
    fullName: string;
    dateOfBirth: string;
    position: string;
}

interface RegisterContainerMapStateProps {
    fromRegister: boolean;
    registerIsLoading: boolean;
}

interface RegisterContainerMapDispatchProps {
    registerAction: ({
        login,
        password,
        fullName,
        dateOfBirth,
        position
    }: RegisterActionData) => void;
}

export interface RegisterContainerProps
    extends RegisterContainerMapStateProps,
        RegisterContainerMapDispatchProps {}
