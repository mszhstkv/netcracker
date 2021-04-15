export const SET_USER_DATA = 'SET_USER_DATA';
export const LOGIN_DATA_SEND = 'LOGIN_DATA_SEND';
export const LOGOUT = 'LOGOUT';
export const LOGIN_DATA_LOADING = 'LOGIN_DATA_LOADING';

export type ActionsType = SetLoginDataAction | SetLoginIsLoadingAction;

interface SetLoginDataActionPayload {
    userId: string | null;
    token: string | null;
    userLogin: string | null;
}

interface SetLoginDataAction {
    type: typeof SET_USER_DATA;
    payload: SetLoginDataActionPayload;
}

interface SetLoginIsLoadingAction {
    type: typeof LOGIN_DATA_LOADING;
    loginIsLoading: boolean;
}
interface LoginAction {
    type: typeof LOGIN_DATA_SEND;
    login: string;
    password: string;
}

interface Logout {
    type: typeof LOGOUT;
}

export const setLoginIsLoading = (
    loginIsLoading: boolean
): SetLoginIsLoadingAction => ({ type: LOGIN_DATA_LOADING, loginIsLoading });

export const setLoginData = (
    userId: string | null,
    token: string | null,
    userLogin: string | null
): SetLoginDataAction => ({
    type: SET_USER_DATA,
    payload: { userId, token, userLogin }
});

export const postLogin = (login: string, password: string): LoginAction => ({
    type: LOGIN_DATA_SEND,
    login,
    password
});

export const logout = (): Logout => ({ type: LOGOUT });
