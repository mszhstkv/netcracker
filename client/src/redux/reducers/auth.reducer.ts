import {
    ActionsType,
    LOGIN_DATA_LOADING,
    SET_LOGOUT_DATA,
    SET_USER_DATA
} from 'redux/actions/auth.actions';

const initState = {
    userId: null as string | null,
    token: null as string | null,
    userLogin: null as string | null,
    loginIsLoading: false
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
                ...action.payload
            };
        case LOGIN_DATA_LOADING:
            return {
                ...state,
                ...action.payload
            };
        case SET_LOGOUT_DATA:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
};

export default authReducer;
