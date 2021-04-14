import { put, takeEvery } from 'redux-saga/effects';
import { LOGOUT, setLoginData } from 'redux/actions/auth-actions';
import { setFromRegister } from 'redux/actions/register-actions';
import {
    errorNotification,
    successNotification
} from 'common/ServerResponseNotification/Notification';

function* logoutWorker() {
    try {
        yield put(setLoginData(null, null, null));
        yield put(setFromRegister(false));
        localStorage.removeItem('userData');
        successNotification('You are logged out', 'Goodbye!');
    } catch (e) {
        errorNotification('Error', e.response.data.message);
    }
}

function* logoutWatcher() {
    yield takeEvery(LOGOUT, logoutWorker);
}

export default logoutWatcher;
