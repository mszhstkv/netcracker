import { ILoginForm } from 'common/interfaces/interfaces';

export const SET_USER_DATA = 'SET_USER_DATA';
export const POST_LOGIN = 'POST_LOGIN';
export const LOGOUT = 'LOGOUT';
export const LOGIN_FORM_VALUES = 'LOGIN_FORM_VALUES';
export const LOGIN_IS_LOADING = 'LOGIN_IS_LOADING';

export type ActionsType =
    | ISetLoginDataAction
    | ISetLoginFormValuesAction
    | ISetLoginIsLoadingAction;

interface ISetLoginDataActionPayload {
    userId: string | null;
    token: string | null;
    userLogin: string | null;
}

interface ISetLoginDataAction {
    type: typeof SET_USER_DATA;
    payload: ISetLoginDataActionPayload;
}

interface ISetLoginFormValuesAction {
    type: typeof LOGIN_FORM_VALUES;
    values: ILoginForm;
}

interface ISetLoginIsLoadingAction {
    type: typeof LOGIN_IS_LOADING;
    loginIsLoading: boolean;
}
interface ILoginAction {
    type: typeof POST_LOGIN;
    login: string;
    password: string;
}

interface ILogout {
    type: typeof LOGOUT;
}

export const setLoginIsLoading = (
    loginIsLoading: boolean
): ISetLoginIsLoadingAction => ({ type: LOGIN_IS_LOADING, loginIsLoading });

export const setLoginFormValues = (
    values: ILoginForm
): ISetLoginFormValuesAction => ({ type: LOGIN_FORM_VALUES, values });

export const setLoginData = (
    userId: string | null,
    token: string | null,
    userLogin: string | null
): ISetLoginDataAction => ({
    type: SET_USER_DATA,
    payload: { userId, token, userLogin }
});

export const postLogin = (login: string, password: string): ILoginAction => ({
    type: POST_LOGIN,
    login,
    password
});

export const logout = (): ILogout => ({ type: LOGOUT });
