import { put, call, takeEvery, SagaReturnType } from 'redux-saga/effects';
import { authAPI } from 'api/api';
import {
    LOGIN_DATA_SEND,
    setLoginData,
    setLoginIsLoading
} from 'redux/actions/auth.actions';
import {
    errorNotification,
    successNotification
} from 'common/ServerResponseNotification/Notification';

type LoginResponseType = SagaReturnType<typeof authAPI.login>;

function* postLoginWorker(params: {
    type: string;
    login: string;
    password: string;
}) {
    try {
        yield put(setLoginIsLoading(true));
        const response: LoginResponseType = yield call(
            authAPI.login,
            params.login,
            params.password
        );

        if (response.status >= 200 && response.status < 300) {
            const { userId, token, userLogin } = response.data;
            successNotification('Successful login', `Welcome, ${userLogin}`);
            yield put(
                setLoginData({
                    userId,
                    token,
                    userLogin
                })
            );
            localStorage.setItem(
                'userData',
                JSON.stringify({
                    userId,
                    token,
                    userLogin
                })
            );
            yield put(setLoginIsLoading(false));
        }
    } catch (e) {
        errorNotification('Error', e.response.data.message);
        yield put(setLoginIsLoading(false));
    }
}

function* loginWatcher() {
    yield takeEvery(LOGIN_DATA_SEND, postLoginWorker);
}

export default loginWatcher;