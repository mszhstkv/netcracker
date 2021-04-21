import { DataObject } from '../../app/app.interfaces';

export const SET_USER_DATA = 'SET_USER_DATA';
export const LOGIN_DATA_SEND = 'LOGIN_DATA_SEND';
export const LOGOUT = 'LOGOUT';
export const LOGIN_DATA_LOADING = 'LOGIN_DATA_LOADING';
export const SET_LOGOUT_DATA = 'SET_LOGOUT_DATA';

export type ActionsType =
    | SetLoginDataAction
    | SetLoginIsLoadingAction
    | SetLogoutDataAction;

interface SetLoginDataActionPayload {
    userId: string | null;
    token: string | null;
    userLogin: string | null;
}

interface SetLoginDataAction {
    type: typeof SET_USER_DATA;
    payload: SetLoginDataActionPayload;
}

interface SetLoginIsLoadingActionPayload {
    loginIsLoading: boolean;
}

interface SetLoginIsLoadingAction {
    type: typeof LOGIN_DATA_LOADING;
    payload: SetLoginIsLoadingActionPayload;
}

interface SetLogoutDataActionPayload {
    userId: null;
    token: null;
    userLogin: null;
}

interface LoginAction {
    type: typeof LOGIN_DATA_SEND;
    login: string;
    password: string;
}

interface Logout {
    type: typeof LOGOUT;
}

interface SetLogoutDataAction {
    type: typeof SET_LOGOUT_DATA;
    payload: SetLogoutDataActionPayload;
}

export const setLoginIsLoading = (
    loginIsLoading: boolean
): SetLoginIsLoadingAction => ({
    type: LOGIN_DATA_LOADING,
    payload: { loginIsLoading }
});

export const setLoginData = ({
    userId,
    token,
    userLogin
}: DataObject): SetLoginDataAction => ({
    type: SET_USER_DATA,
    payload: { userId, token, userLogin }
});

export const setLogoutData = (): SetLogoutDataAction => ({
    type: SET_LOGOUT_DATA,
    payload: { userId: null, token: null, userLogin: null }
});

export const postLogin = (login: string, password: string): LoginAction => ({
    type: LOGIN_DATA_SEND,
    login,
    password
});

export const logout = (): Logout => ({ type: LOGOUT });
