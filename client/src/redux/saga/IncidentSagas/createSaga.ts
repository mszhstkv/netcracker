import { put, call, takeEvery, SagaReturnType } from 'redux-saga/effects';
import { incidentAPI } from 'api/api';
import {
    CREATE_INCIDENT_SEND,
    getIncidents,
    setIncidentIsLoading
} from 'redux/actions/incident-action';
import {
    errorNotification,
    successNotification
} from 'common/ServerResponseNotification/Notification';

type CreateIncidentResponseType = SagaReturnType<
    typeof incidentAPI.createIncident
>;

interface CreateWorker {
    type: string;
    incidentTitle: string;
    assignee: string;
    area: string;
    startDate: string;
    dueDate: string;
    description: string;
    priority: string;
    status: string;
}

function* createWorker(params: CreateWorker) {
    try {
        yield put(setIncidentIsLoading(true));
        const response: CreateIncidentResponseType = yield call(
            incidentAPI.createIncident,
            params.incidentTitle,
            params.assignee,
            params.area,
            params.startDate,
            params.dueDate,
            params.description,
            params.priority,
            params.status
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
