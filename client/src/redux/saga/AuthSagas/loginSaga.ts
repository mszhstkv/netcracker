import {put, call, takeEvery, SagaReturnType} from 'redux-saga/effects';
import {authAPI} from "../../../api/api";
import {POST_LOGIN, setLoginData, setLoginIsLoading} from "../../auth-reducer";
import {errorNotification, successNotification} from "../../../components/ServerResponseNotification/Notification";

type LoginResponseType = SagaReturnType<typeof authAPI.login>

function* loginWatcher() {
    yield takeEvery(POST_LOGIN, postLoginWorker);
}

function* postLoginWorker(params: { type: string, login: string, password: string }) {
    try {
        yield put(setLoginIsLoading(true));
        const response: LoginResponseType = yield call(authAPI.login, params.login, params.password);
        if (response.status >= 200 && response.status < 300) {
            successNotification('Successful login', `Welcome, ${response.data.userLogin}`);
            yield put(setLoginData(response.data.userId, response.data.token, response.data.userLogin));
            localStorage.setItem('userData', JSON.stringify({
                userId: response.data.userId,
                token: response.data.token,
                userLogin: response.data.userLogin
            }));
            yield put(setLoginIsLoading(false));
        }
    } catch (e) {
        errorNotification('Error', e.response.data.message);
        yield put(setLoginIsLoading(false));

    }
}

export default loginWatcher;