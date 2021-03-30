import {put, call, takeEvery, SagaReturnType} from 'redux-saga/effects';
import {incidentAPI} from "../../../api/api";
import {GET_INCIDENTS, setIncidents, setIncidentIsLoading} from "../../incident-reducer";
import {errorNotification} from "../../../components/ServerResponseNotification/Notification";

type GetIncidentResponseType = SagaReturnType<typeof incidentAPI.getIncident>

function* incidentsWatcher() {
    yield takeEvery(GET_INCIDENTS, getIncidentsWorker);
}

function* getIncidentsWorker() {
    try {
        yield put(setIncidentIsLoading(true));
        const response: GetIncidentResponseType = yield call(incidentAPI.getIncident);
        if (response.status >= 200 && response.status < 300) {
            yield put(setIncidents(response.data));
            yield put(setIncidentIsLoading(false));
        }
    } catch (e) {
        yield put(setIncidentIsLoading(false));
        errorNotification('Error', e.response.data.message);
    }
}

export default incidentsWatcher;