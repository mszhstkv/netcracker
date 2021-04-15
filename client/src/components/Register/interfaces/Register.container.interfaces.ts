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
    register: (
        login: string,
        password: string,
        fullName: string,
        dateOfBirth: string,
        position: string
    ) => void;
}

export interface RegisterContainerProps
    extends RegisterContainerMapStateProps,
        RegisterContainerMapDispatchProps {}
