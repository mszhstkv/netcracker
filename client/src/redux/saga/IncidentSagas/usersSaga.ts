import {put, call, takeEvery, SagaReturnType} from 'redux-saga/effects';
import {usersAPI} from "../../../api/api";
import {GET_USERS, setUsers} from "../../incident-reducer";
import {errorNotification} from "../../../components/ServerResponseNotification/Notification";

type GetUsersResponseType = SagaReturnType<typeof usersAPI.getUsers>

function* usersWatcher() {
    yield takeEvery(GET_USERS, getUsersWorker);
}

function* getUsersWorker() {
    try {
            const response: GetUsersResponseType = yield call(usersAPI.getUsers);
        if (response.status >= 200 && response.status < 300) {
            yield put(setUsers(response.data));
        }
    } catch (e) {
        errorNotification('Error', e.response.data.message);
    }
}

export default usersWatcher;