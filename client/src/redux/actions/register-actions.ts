export const SET_FROM_REGISTER = 'SET_FROM_REGISTER';
export const REGISTER_DATA_SEND = 'REGISTER_DATA_SEND';
export const REGISTER_DATA_LOADING = 'REGISTER_DATA_LOADING';

export type ActionsType = SetFromRegisterAction | SetRegisterIsLoadingAction;

interface SetFromRegisterAction {
    type: typeof SET_FROM_REGISTER;
    fromRegister: boolean;
}
interface SetRegisterIsLoadingAction {
    type: typeof REGISTER_DATA_LOADING;
    registerIsLoading: boolean;
}
interface RegisterAction {
    type: typeof REGISTER_DATA_SEND;
    login: string;
    password: string;
    fullName: string;
    dateOfBirth: string;
    position: string;
}

export const setRegisterIsLoading = (
    registerIsLoading: boolean
): SetRegisterIsLoadingAction => ({
    type: REGISTER_DATA_LOADING,
    registerIsLoading
});

export const setFromRegister = (
    fromRegister: boolean
): SetFromRegisterAction => ({
    type: SET_FROM_REGISTER,
    fromRegister
});
export const register = (
    login: string,
    password: string,
    fullName: string,
    dateOfBirth: string,
    position: string
): RegisterAction => ({
    type: REGISTER_DATA_SEND,
    login,
    password,
    fullName,
    dateOfBirth,
    position
});
