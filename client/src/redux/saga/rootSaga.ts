import { all } from 'redux-saga/effects';
import loginWatcher from 'redux/saga/AuthSagas/loginSaga';
import registerWatcher from 'redux/saga/RegisterSagas/registerSaga';
import logoutWatcher from 'redux/saga/AuthSagas/logoutSaga';
import usersWatcher from 'redux/saga/IncidentSagas/usersSaga';
import incidentsWatcher from 'redux/saga/IncidentSagas/incidentsSaga';
import createWatcher from 'redux/saga/IncidentSagas/createSaga';
import deleteIncidentWatcher from 'redux/saga/IncidentSagas/deleteIncidentSaga';
import editIncidentWatcher from 'redux/saga/IncidentSagas/editIncidentSaga';

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
