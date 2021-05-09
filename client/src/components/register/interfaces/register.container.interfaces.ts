import { RegisterActionData } from 'common/interfaces';

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
    registerAction: (RegisterActionData: RegisterActionData) => void;
}

export interface RegisterContainerProps
    extends RegisterContainerMapStateProps,
        RegisterContainerMapDispatchProps {}
