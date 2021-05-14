import { put, call, takeEvery, SagaReturnType } from 'redux-saga/effects';
import { incidentAPI } from 'api/api';
import {
    CREATE_INCIDENT_SEND,
    CreateIncidentActionPayload,
    getIncidents,
    setIncidentIsLoading
} from 'redux/actions/incident.actions';
import { errorNotification, successNotification } from 'common/notifications';

type CreateIncidentResponseType = SagaReturnType<
    typeof incidentAPI.createIncident
>;

interface CreateWorker {
    type: string;
    payload: CreateIncidentActionPayload;
}

function* createWorker({ payload }: CreateWorker) {
    try {
        yield put(setIncidentIsLoading(true));
        const response: CreateIncidentResponseType = yield call(
            incidentAPI.createIncident,
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

function* createWatcher() {
    yield takeEvery(CREATE_INCIDENT_SEND, createWorker);
}

export default createWatcher;
