import {put, takeEvery} from 'redux-saga/effects';
import {LOGOUT, setLoginData} from "../../auth-reducer";
import {setFromRegister} from "../../register-reducer";
import {errorNotification, successNotification} from "../../../components/ServerResponseNotification/Notification";

function* logoutWatcher() {
    yield takeEvery(LOGOUT, logoutWorker);
}

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

export default logoutWatcher;