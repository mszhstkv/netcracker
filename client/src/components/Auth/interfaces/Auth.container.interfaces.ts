interface AuthContainerMapStateProps {
    loginIsLoading: boolean;
}

interface AuthContainerMapDispatchProps {
    postLogin: (login: string, password: string) => void;
    setFromRegister: (fromRegister: boolean) => void;
}

export interface AuthContainerProps
    extends AuthContainerMapStateProps,
        AuthContainerMapDispatchProps {}