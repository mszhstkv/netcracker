import {LoginFormType} from "../types/types";

export const SET_USER_DATA = 'SET_USER_DATA';
export const POST_LOGIN = 'POST_LOGIN';
export const LOGOUT = 'LOGOUT';
export const LOGIN_FORM_VALUES = 'LOGIN_FORM_VALUES';
export const LOGIN_IS_LOADING = 'LOGIN_IS_LOADING';

let initState = {
    userId: null as string | null,
    token: null as string | null,
    userLogin: null as string | null,
    loginIsLoading: false,

    loginForm: {
        login: null,
        password: null
    } as LoginFormType
};

export type InitialStateType = typeof initState;

const authReducer = (state = initState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
                loginForm: {login: null, password: null},
            }
        case LOGIN_FORM_VALUES:
            return {
                ...state,
                loginForm: {
                    ...state.loginForm,
                    ...action.values
                }
            }
        case LOGIN_IS_LOADING:
            return {
                ...state,
                loginIsLoading: action.loginIsLoading
            }
        default:
            return state;
    }
};

type ActionsType = SetLoginDataActionType | SetLoginFormValuesActionType | setLoginIsLoadingActionType;

type SetLoginDataActionPayloadType = {
    userId: string | null,
    token: string | null
    userLogin: string | null
}
type SetLoginDataActionType = {
    type: typeof SET_USER_DATA,
    payload: SetLoginDataActionPayloadType
}
type SetLoginFormValuesActionType = {
    type: typeof LOGIN_FORM_VALUES,
    values: LoginFormType
}
type setLoginIsLoadingActionType = {
    type: typeof LOGIN_IS_LOADING,
    loginIsLoading: boolean
}
type LoginActionType = {
    type: typeof POST_LOGIN,
    login: string,
    password: string
}
type LogoutType = {
    type: typeof LOGOUT
}

export const setLoginIsLoading = (loginIsLoading: boolean): setLoginIsLoadingActionType => ({type: LOGIN_IS_LOADING, loginIsLoading});
export const setLoginFormValues = (values: LoginFormType): SetLoginFormValuesActionType => ({type: LOGIN_FORM_VALUES, values});
export const setLoginData = (userId: string | null, token: string | null, userLogin: string | null): SetLoginDataActionType => ({
    type: SET_USER_DATA,
    payload: {userId, token, userLogin},
});
export const login = (login: string, password: string): LoginActionType => ({type: POST_LOGIN, login, password})
export const logout = (): LogoutType => ({type: LOGOUT})

export default authReducer;