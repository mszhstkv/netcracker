import { put, call, takeEvery, SagaReturnType } from 'redux-saga/effects';
import { authAPI } from 'api/api';
import {
    POST_REGISTER,
    setFromRegister,
    setRegisterIsLoading
} from 'redux/actions/register-actions';
import {
    errorNotification,
    successNotification
} from 'common/ServerResponseNotification/Notification';

type RegisterResponseType = SagaReturnType<typeof authAPI.register>;

function* postRegisterWorker(params: {
    type: string;
    login: string;
    password: string;
    fullName: string;
    dateOfBirth: string;
    position: string;
}) {
    try {
        yield put(setRegisterIsLoading(true));
        const response: RegisterResponseType = yield call(
            authAPI.register,
            params.login,
            params.password,
            params.fullName,
            params.dateOfBirth,
            params.position
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
    yield takeEvery(POST_REGISTER, postRegisterWorker);
}

export default registerWatcher;
