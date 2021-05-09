import { put, call, takeEvery, SagaReturnType } from 'redux-saga/effects';
import { incidentAPI } from 'api/api';
import {
    EDIT_INCIDENT_SEND,
    EditIncidentActionPayload,
    getIncidents,
    setIncidentIsLoading
} from 'redux/actions/incident.actions';
import { errorNotification, successNotification } from 'common/notifications';

type EditIncidentResponseType = SagaReturnType<typeof incidentAPI.editIncident>;

interface EditIncidentWorker {
    type: string;
    payload: EditIncidentActionPayload;
}

function* editIncidentWorker({ payload }: EditIncidentWorker) {
    try {
        yield put(setIncidentIsLoading(true));
        const response: EditIncidentResponseType = yield call(
            incidentAPI.editIncident,
            payload
        );
        if (response.status >= 200 && response.status < 300) {
            successNotification('Success', response.data.message);
            yield put(getIncidents());
        }
    } catch (e) {
        yield put(setIncidentIsLoading(false));
        errorNotification('Error', e.response.data.message);
    }
}

function* editIncidentWatcher() {
    yield takeEvery(EDIT_INCIDENT_SEND, editIncidentWorker);
}

export default editIncidentWatcher;
