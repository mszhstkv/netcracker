import {
    ActionsType,
    REGISTER_DATA_LOADING,
    SET_FROM_REGISTER
} from 'redux/actions/register-actions';

const initState = {
    fromRegister: false,
    registerIsLoading: false
};

export type InitialStateType = typeof initState;

const registerReducer = (
    state = initState,
    action: ActionsType
): InitialStateType => {
    switch (action.type) {
        case SET_FROM_REGISTER:
            return {
                ...state,
                fromRegister: action.fromRegister
            };
        case REGISTER_DATA_LOADING:
            return {
                ...state,
                registerIsLoading: action.registerIsLoading
            };
        default:
            return state;
    }
};

export default registerReducer;
