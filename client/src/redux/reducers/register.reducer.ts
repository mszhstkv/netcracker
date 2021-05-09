import {
    ActionsType,
    REGISTER_DATA_LOADING,
    SET_FROM_REGISTER
} from 'redux/actions/register.actions';

interface InitState {
    fromRegister: boolean;
    registerIsLoading: boolean;
}

const initState: InitState = {
    fromRegister: false,
    registerIsLoading: false
};

const registerReducer = (state = initState, action: ActionsType): InitState => {
    switch (action.type) {
        case SET_FROM_REGISTER:
        case REGISTER_DATA_LOADING:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
};

export default registerReducer;
