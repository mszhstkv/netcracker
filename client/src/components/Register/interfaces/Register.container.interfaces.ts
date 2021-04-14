import { IRegisterForm } from 'common/interfaces/interfaces';

interface IRegisterContainerMapStateProps {
    fromRegister: boolean;
    registerForm: IRegisterForm;
    registerIsLoading: boolean;
}

interface IRegisterContainerMapDispatchProps {
    register: (
        login: string,
        password: string,
        fullName: string,
        dateOfBirth: string,
        position: string
    ) => void;
    setRegisterFormValues: (value: IRegisterForm) => void;
}

export interface IRegisterContainerProps
    extends IRegisterContainerMapStateProps,
        IRegisterContainerMapDispatchProps {}