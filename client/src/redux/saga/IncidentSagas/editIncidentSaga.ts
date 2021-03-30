import {put, call, takeEvery, SagaReturnType} from 'redux-saga/effects';
import {incidentAPI} from "../../../api/api";
import {PUT_EDIT_INCIDENT, getIncidents, setIncidentIsLoading} from "../../incident-reducer";
import {errorNotification, successNotification} from "../../../components/ServerResponseNotification/Notification";
import moment from "moment";

type EditIncidentResponseType = SagaReturnType<typeof incidentAPI.editIncident>

function* editIncidentWatcher() {
    yield takeEvery(PUT_EDIT_INCIDENT, editIncidentWorker);
}

function* editIncidentWorker(params: {
    type: string, _id: string, incidentTitle: string, assignee: string, area: string,
    startDate: moment.Moment, dueDate: moment.Moment, description: string,
    priority: string, status: string
}) {
    try {
        yield put(setIncidentIsLoading(true));
        const response: EditIncidentResponseType = yield call(incidentAPI.editIncident, params._id, params.incidentTitle, params.assignee, params.area,
            params.startDate, params.dueDate, params.description, params.priority, params.status);
        if (response.status >= 200 && response.status < 300) {
            successNotification('Success', response.data.message);
            yield put(getIncidents());
        }
    } catch (e) {
        yield put(setIncidentIsLoading(false));
        errorNotification('Error', e.response.data.message);
    }
}

export default editIncidentWatcher;