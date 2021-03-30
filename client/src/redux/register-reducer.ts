import {RegisterFormType} from "../types/types";

export const SET_FROM_REGISTER = 'SET_FROM_REGISTER';
export const POST_REGISTER = 'POST_REGISTER';
export const REGISTER_FORM_VALUES = 'REGISTER_FORM_VALUES';
export const REGISTER_IS_LOADING = 'REGISTER_IS_LOADING';

let initState = {
    fromRegister: false,
    registerIsLoading: false,

    registerForm: {
        login: null,
        password: null,
        fullName: null,
        position: null,
        dateOfBirth: null
    } as RegisterFormType
};

export type InitialStateType = typeof initState;

const registerReducer = (state = initState, action: ActionsType): InitialStateType => {
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
            }
        case REGISTER_FORM_VALUES:
            return {
                ...state,
                registerForm: {
                    ...state.registerForm,
                    ...action.value
                }
            }
        case REGISTER_IS_LOADING:
            return {
                ...state,
                registerIsLoading: action.registerIsLoading
            }
        default:
            return state;
    }
};

type ActionsType = SetFromRegisterActionType | SetRegisterFormValuesActionType | SetRegisterIsLoadingActionType;

type SetFromRegisterActionType = {
    type: typeof SET_FROM_REGISTER,
    fromRegister: boolean
}
type SetRegisterFormValuesActionType = {
    type: typeof REGISTER_FORM_VALUES,
    value: RegisterFormType
}
type SetRegisterIsLoadingActionType = {
    type: typeof REGISTER_IS_LOADING,
    registerIsLoading: boolean
}
type RegisterType = {
    type: typeof POST_REGISTER
    login: string
    password: string
    fullName: string
    dateOfBirth: string
    position: string
}

export const setRegisterIsLoading = (registerIsLoading: boolean): SetRegisterIsLoadingActionType => ({
    type: REGISTER_IS_LOADING,
    registerIsLoading
});
export const setRegisterFormValues = (value: RegisterFormType): SetRegisterFormValuesActionType => ({
    type: REGISTER_FORM_VALUES,
    value
});
export const setFromRegister = (fromRegister: boolean): SetFromRegisterActionType => ({
    type: SET_FROM_REGISTER,
    fromRegister
});
export const register = (login: string, password: string, fullName: string, dateOfBirth: string, position: string): RegisterType => ({
    type: POST_REGISTER, login, password, fullName, dateOfBirth, position
})

export default registerReducer;