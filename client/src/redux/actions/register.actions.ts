import { RegisterActionData } from 'common/interfaces/interfaces';

export const SET_FROM_REGISTER = 'SET_FROM_REGISTER';
export const REGISTER_DATA_SEND = 'REGISTER_DATA_SEND';
export const REGISTER_DATA_LOADING = 'REGISTER_DATA_LOADING';

export type ActionsType = SetFromRegisterAction | SetRegisterIsLoadingAction;

interface SetFromRegisterActionPayload {
    fromRegister: boolean;
}

interface SetFromRegisterAction {
    type: typeof SET_FROM_REGISTER;
    payload: SetFromRegisterActionPayload;
}

interface SetRegisterIsLoadingActionPayload {
    registerIsLoading: boolean;
}

interface SetRegisterIsLoadingAction {
    type: typeof REGISTER_DATA_LOADING;
    payload: SetRegisterIsLoadingActionPayload;
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
    payload: { registerIsLoading }
});

export const setFromRegister = (
    fromRegister: boolean
): SetFromRegisterAction => ({
    type: SET_FROM_REGISTER,
    payload: { fromRegister }
});
export const register = ({
    login,
    password,
    fullName,
    dateOfBirth,
    position
}: RegisterActionData): RegisterAction => ({
    type: REGISTER_DATA_SEND,
    login,
    password,
    fullName,
    dateOfBirth,
    position
});
