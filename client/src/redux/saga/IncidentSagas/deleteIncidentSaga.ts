import {put, call, takeEvery, SagaReturnType} from 'redux-saga/effects';
import {incidentAPI} from "../../../api/api";
import {DELETE_INCIDENT, getIncidents, setIncidentIsLoading} from "../../incident-reducer";
import {errorNotification, successNotification} from "../../../components/ServerResponseNotification/Notification";

type DeleteIncidentResponseType = SagaReturnType<typeof incidentAPI.deleteIncident>

function* deleteIncidentWatcher() {
    yield takeEvery(DELETE_INCIDENT, deleteIncidentWorker);
}

function* deleteIncidentWorker(params: {type: string, id: string }) {
    try {
        yield put(setIncidentIsLoading(true));
        const response: DeleteIncidentResponseType = yield call(incidentAPI.deleteIncident, params.id);
        if (response.status >= 200 && response.status < 300) {
            successNotification('Success', response.data.message);
            yield put(getIncidents());
        }
    } catch (e) {
        yield put(setIncidentIsLoading(false));
        errorNotification('Error', e.response.data.message);
    }
}

export default deleteIncidentWatcher;