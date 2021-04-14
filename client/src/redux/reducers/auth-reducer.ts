import { ILoginForm } from 'common/interfaces/interfaces';
import {
    ActionsType,
    LOGIN_FORM_VALUES,
    LOGIN_IS_LOADING,
    SET_USER_DATA
} from 'redux/actions/auth-actions';

const initState = {
    userId: null as string | null,
    token: null as string | null,
    userLogin: null as string | null,
    loginIsLoading: false,

    loginForm: {
        login: null,
        password: null
    } as ILoginForm
};

export type InitialStateType = typeof initState;

const authReducer = (
    state = initState,
    action: ActionsType
): InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
                loginForm: { login: null, password: null }
            };
        case LOGIN_FORM_VALUES:
            return {
                ...state,
                loginForm: {
                    ...state.loginForm,
                    ...action.values
                }
            };
        case LOGIN_IS_LOADING:
            return {
                ...state,
                loginIsLoading: action.loginIsLoading
            };
        default:
            return state;
    }
};

export default authReducer;
