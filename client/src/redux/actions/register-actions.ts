import { IRegisterForm } from 'common/interfaces/interfaces';

export const SET_FROM_REGISTER = 'SET_FROM_REGISTER';
export const POST_REGISTER = 'POST_REGISTER';
export const REGISTER_FORM_VALUES = 'REGISTER_FORM_VALUES';
export const REGISTER_IS_LOADING = 'REGISTER_IS_LOADING';

export type ActionsType =
    | ISetFromRegisterAction
    | ISetRegisterFormValuesAction
    | ISetRegisterIsLoadingAction;

interface ISetFromRegisterAction {
    type: typeof SET_FROM_REGISTER;
    fromRegister: boolean;
}
interface ISetRegisterFormValuesAction {
    type: typeof REGISTER_FORM_VALUES;
    value: IRegisterForm;
}
interface ISetRegisterIsLoadingAction {
    type: typeof REGISTER_IS_LOADING;
    registerIsLoading: boolean;
}
interface IRegister {
    type: typeof POST_REGISTER;
    login: string;
    password: string;
    fullName: string;
    dateOfBirth: string;
    position: string;
}

export const setRegisterIsLoading = (
    registerIsLoading: boolean
): ISetRegisterIsLoadingAction => ({
    type: REGISTER_IS_LOADING,
    registerIsLoading
});
export const setRegisterFormValues = (
    value: IRegisterForm
): ISetRegisterFormValuesAction => ({
    type: REGISTER_FORM_VALUES,
    value
});
export const setFromRegister = (
    fromRegister: boolean
): ISetFromRegisterAction => ({
    type: SET_FROM_REGISTER,
    fromRegister
});
export const register = (
    login: string,
    password: string,
    fullName: string,
    dateOfBirth: string,
    position: string
): IRegister => ({
    type: POST_REGISTER,
    login,
    password,
    fullName,
    dateOfBirth,
    position
});
