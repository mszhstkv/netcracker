import { RegisterFormType } from 'common/types/types';

export const SET_FROM_REGISTER = 'SET_FROM_REGISTER';
export const POST_REGISTER = 'POST_REGISTER';
export const REGISTER_FORM_VALUES = 'REGISTER_FORM_VALUES';
export const REGISTER_IS_LOADING = 'REGISTER_IS_LOADING';

export type ActionsType =
    | SetFromRegisterActionType
    | SetRegisterFormValuesActionType
    | SetRegisterIsLoadingActionType;

type SetFromRegisterActionType = {
    type: typeof SET_FROM_REGISTER;
    fromRegister: boolean;
};
type SetRegisterFormValuesActionType = {
    type: typeof REGISTER_FORM_VALUES;
    value: RegisterFormType;
};
type SetRegisterIsLoadingActionType = {
    type: typeof REGISTER_IS_LOADING;
    registerIsLoading: boolean;
};
type RegisterType = {
    type: typeof POST_REGISTER;
    login: string;
    password: string;
    fullName: string;
    dateOfBirth: string;
    position: string;
};

export const setRegisterIsLoading = (
    registerIsLoading: boolean
): SetRegisterIsLoadingActionType => ({
    type: REGISTER_IS_LOADING,
    registerIsLoading
});
export const setRegisterFormValues = (
    value: RegisterFormType
): SetRegisterFormValuesActionType => ({
    type: REGISTER_FORM_VALUES,
    value
});
export const setFromRegister = (
    fromRegister: boolean
): SetFromRegisterActionType => ({
    type: SET_FROM_REGISTER,
    fromRegister
});
export const register = (
    login: string,
    password: string,
    fullName: string,
    dateOfBirth: string,
    position: string
): RegisterType => ({
    type: POST_REGISTER,
    login,
    password,
    fullName,
    dateOfBirth,
    position
});
