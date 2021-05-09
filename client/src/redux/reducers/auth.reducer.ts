import {
    ActionsType,
    LOGIN_DATA_LOADING,
    SET_LOGOUT_DATA,
    SET_USER_DATA
} from 'redux/actions/auth.actions';

interface InitState {
    userId: string | null;
    token: string | null;
    userLogin: string | null;
    loginIsLoading: boolean;
}

const initState: InitState = {
    userId: null,
    token: null,
    userLogin: null,
    loginIsLoading: false
};

const authReducer = (state = initState, action: ActionsType): InitState => {
    switch (action.type) {
        case SET_USER_DATA:
        case LOGIN_DATA_LOADING:
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
