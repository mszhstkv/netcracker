export interface AuthProps {
    onFinish: (values: { login: string; password: string }) => void;
    fromRegisterReset: () => void;
    loginIsLoading: boolean;
}