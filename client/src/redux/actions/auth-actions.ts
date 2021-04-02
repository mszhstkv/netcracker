import { LoginFormType } from 'common/types/types';

export const SET_USER_DATA = 'SET_USER_DATA';
export const POST_LOGIN = 'POST_LOGIN';
export const LOGOUT = 'LOGOUT';
export const LOGIN_FORM_VALUES = 'LOGIN_FORM_VALUES';
export const LOGIN_IS_LOADING = 'LOGIN_IS_LOADING';

export type ActionsType =
    | SetLoginDataActionType
    | SetLoginFormValuesActionType
    | SetLoginIsLoadingActionType;

type SetLoginDataActionPayloadType = {
    userId: string | null;
    token: string | null;
    userLogin: string | null;
};

type SetLoginDataActionType = {
    type: typeof SET_USER_DATA;
    payload: SetLoginDataActionPayloadType;
};

type SetLoginFormValuesActionType = {
    type: typeof LOGIN_FORM_VALUES;
    values: LoginFormType;
};

type SetLoginIsLoadingActionType = {
    type: typeof LOGIN_IS_LOADING;
    loginIsLoading: boolean;
};

type LoginActionType = {
    type: typeof POST_LOGIN;
    login: string;
    password: string;
};

type LogoutType = {
    type: typeof LOGOUT;
};

export const setLoginIsLoading = (
    loginIsLoading: boolean
): SetLoginIsLoadingActionType => ({ type: LOGIN_IS_LOADING, loginIsLoading });

export const setLoginFormValues = (
    values: LoginFormType
): SetLoginFormValuesActionType => ({ type: LOGIN_FORM_VALUES, values });

export const setLoginData = (
    userId: string | null,
    token: string | null,
    userLogin: string | null
): SetLoginDataActionType => ({
    type: SET_USER_DATA,
    payload: { userId, token, userLogin }
});

export const postLogin = (
    login: string,
    password: string
): LoginActionType => ({
    type: POST_LOGIN,
    login,
    password
});

export const logout = (): LogoutType => ({ type: LOGOUT });
