import { all } from 'redux-saga/effects';
import loginWatcher from 'redux/saga/auth-sagas/login.saga';
import registerWatcher from 'redux/saga/register-sagas/register.saga';
import logoutWatcher from 'redux/saga/auth-sagas/logout.saga';
import usersWatcher from 'redux/saga/incidents-sagas/users.saga';
import incidentsWatcher from 'redux/saga/incidents-sagas/incidents.saga';
import createWatcher from 'redux/saga/incidents-sagas/create-incident.saga';
import deleteIncidentWatcher from 'redux/saga/incidents-sagas/delete-incident.saga';
import editIncidentWatcher from 'redux/saga/incidents-sagas/edit-incident.saga';

function* rootSaga() {
    yield all([
        loginWatcher(),
        registerWatcher(),
        logoutWatcher(),
        usersWatcher(),
        incidentsWatcher(),
        createWatcher(),
        deleteIncidentWatcher(),
        editIncidentWatcher()
    ]);
}

export default rootSaga;
