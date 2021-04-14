import { IRegisterForm } from 'common/interfaces/interfaces';
import {
    ActionsType,
    REGISTER_FORM_VALUES,
    REGISTER_IS_LOADING,
    SET_FROM_REGISTER
} from 'redux/actions/register-actions';

const initState = {
    fromRegister: false,
    registerIsLoading: false,

    registerForm: {
        login: null,
        password: null,
        fullName: null,
        position: null,
        dateOfBirth: null
    } as IRegisterForm
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
                fromRegister: action.fromRegister,
                registerForm: {
                    login: null,
                    password: null,
                    fullName: null,
                    position: null,
                    dateOfBirth: null
                }
            };
        case REGISTER_FORM_VALUES:
            return {
                ...state,
                registerForm: {
                    ...state.registerForm,
                    ...action.value
                }
            };
        case REGISTER_IS_LOADING:
            return {
                ...state,
                registerIsLoading: action.registerIsLoading
            };
        default:
            return state;
    }
};

export default registerReducer;
