import { put, call, takeEvery, SagaReturnType } from 'redux-saga/effects';
import { authAPI } from 'api/api';
import {
    REGISTER_DATA_SEND,
    RegisterActionPayload,
    setFromRegister,
    setRegisterIsLoading
} from 'redux/actions/register.actions';
import { errorNotification, successNotification } from 'common/notifications';

type RegisterResponseType = SagaReturnType<typeof authAPI.register>;

interface RegisterWorker {
    type: string;
    payload: RegisterActionPayload;
}

function* postRegisterWorker({ payload }: RegisterWorker) {
    try {
        yield put(setRegisterIsLoading(true));
        const response: RegisterResponseType = yield call(
            authAPI.register,
            payload
        );
        if (response.status >= 200 && response.status < 300) {
            successNotification('Success', response.data.message);
            yield put(setFromRegister(true));
            yield put(setRegisterIsLoading(false));
        }
    } catch (e) {
        errorNotification('Error', e.response.data.message);
        yield put(setRegisterIsLoading(false));
    }
}

function* registerWatcher() {
    yield takeEvery(REGISTER_DATA_SEND, postRegisterWorker);
}

export default registerWatcher;
