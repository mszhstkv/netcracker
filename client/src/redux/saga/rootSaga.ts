import {all} from "redux-saga/effects";
import loginWatcher from "./AuthSagas/loginSaga";
import registerWatcher from "./RegisterSagas/registerSaga";
import logoutWatcher from "./AuthSagas/logoutSaga";
import usersWatcher from "./IncidentSagas/usersSaga";
import incidentsWatcher from "./IncidentSagas/incidentsSaga";
import createWatcher from "./IncidentSagas/createSaga";
import deleteIncidentWatcher from "./IncidentSagas/deleteIncidentSaga";
import editIncidentWatcher from "./IncidentSagas/editIncidentSaga";

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