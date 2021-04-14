import { ILoginForm } from 'common/interfaces/interfaces';

export interface IAuthProps {
    onLoginFormValuesChange: (value: ILoginForm) => void;
    loginForm: ILoginForm;
    onFinish: (values: { login: string; password: string }) => void;
    fromRegisterReset: () => void;
    loginIsLoading: boolean;
}