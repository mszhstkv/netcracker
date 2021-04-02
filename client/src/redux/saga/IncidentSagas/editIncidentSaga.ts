import { put, call, takeEvery, SagaReturnType } from 'redux-saga/effects';
import moment from 'moment';
import { incidentAPI } from 'api/api';
import {
    PUT_EDIT_INCIDENT,
    getIncidents,
    setIncidentIsLoading
} from 'redux/actions/incident-action';
import {
    errorNotification,
    successNotification
} from 'common/ServerResponseNotification/Notification';

type EditIncidentResponseType = SagaReturnType<typeof incidentAPI.editIncident>;

function* editIncidentWorker(params: {
    type: string;
    _id: string;
    incidentTitle: string;
    assignee: string;
    area: string;
    startDate: moment.Moment;
    dueDate: moment.Moment;
    description: string;
    priority: string;
    status: string;
}) {
    try {
        yield put(setIncidentIsLoading(true));
        const response: EditIncidentResponseType = yield call(
            incidentAPI.editIncident,
            params._id,
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

function* editIncidentWatcher() {
    yield takeEvery(PUT_EDIT_INCIDENT, editIncidentWorker);
}

export default editIncidentWatcher;
