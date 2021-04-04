import { ILoginForm } from 'common/interfaces/interfaces';

interface IAuthContainerMapStateProps {
    loginForm: ILoginForm;
    loginIsLoading: boolean;
}

interface IAuthContainerMapDispatchProps {
    setLoginFormValues: (value: ILoginForm) => void;
    postLogin: (login: string, password: string) => void;
    setFromRegister: (fromRegister: boolean) => void;
}

export interface IAuthContainerProps
    extends IAuthContainerMapStateProps,
        IAuthContainerMapDispatchProps {}