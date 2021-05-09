import { put, takeEvery } from 'redux-saga/effects';
import { LOGOUT, setLogoutData } from 'redux/actions/auth.actions';
import { setFromRegister } from 'redux/actions/register.actions';
import { errorNotification, successNotification } from 'common/notifications';

function* logoutWorker() {
    try {
        yield put(setLogoutData());
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
