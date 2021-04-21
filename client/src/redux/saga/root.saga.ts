import { all } from 'redux-saga/effects';
import loginWatcher from 'redux/saga/AuthSagas/login.saga';
import registerWatcher from 'redux/saga/RegisterSagas/registerSaga';
import logoutWatcher from 'redux/saga/AuthSagas/logout.saga';
import usersWatcher from 'redux/saga/IncidentSagas/users.saga';
import incidentsWatcher from 'redux/saga/IncidentSagas/incidents.saga';
import createWatcher from 'redux/saga/IncidentSagas/create.saga';
import deleteIncidentWatcher from 'redux/saga/IncidentSagas/delete-incident.saga';
import editIncidentWatcher from 'redux/saga/IncidentSagas/edit-incident.saga';

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
