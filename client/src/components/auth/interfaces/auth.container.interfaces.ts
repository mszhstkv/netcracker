interface AuthContainerMapStateProps {
    loginIsLoading: boolean;
}

interface AuthContainerMapDispatchProps {
    postLoginAction: (login: string, password: string) => void;
    setFromRegisterAction: (fromRegister: boolean) => void;
}

export interface AuthContainerProps
    extends AuthContainerMapStateProps,
        AuthContainerMapDispatchProps {}

export interface OnFinish {
    login: string;
    password: string;
}
