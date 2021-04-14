import moment from 'moment';
import { IIncidents, IUsers } from 'common/interfaces/interfaces';

export const SET_USERS = 'SET_USERS';
export const SET_INCIDENTS = 'SET_INCIDENTS';
export const GET_USERS = 'GET_USERS';
export const GET_INCIDENTS = 'GET_INCIDENTS';
export const POST_CREATE = 'POST_CREATE';
export const DELETE_INCIDENT = 'DELETE_INCIDENT';
export const PUT_EDIT_INCIDENT = 'PUT_EDIT_INCIDENT';
export const INCIDENT_FORM_CREATE_VALUES = 'INCIDENT_FORM_CREATE_VALUES';
export const INCIDENT_FORM_EDIT_VALUES = 'INCIDENT_FORM_EDIT_VALUES';
export const INCIDENT_IS_LOADING = 'INCIDENT_IS_LOADING';

export type ActionsType =
    | ISetUsersAction
    | ISetIncidentsAction
    | ISetIncidentFormCreateValuesAction
    | ISetIncidentFormEditValuesAction
    | ISetIncidentIsLoadingAction;

interface ISetUsersAction {
    type: typeof SET_USERS;
    users: Array<IUsers>;
}
interface ISetIncidentsAction {
    type: typeof SET_INCIDENTS;
    incidents: Array<IIncidents>;
}
interface ISetIncidentFormCreateValuesAction {
    type: typeof INCIDENT_FORM_CREATE_VALUES;
    value: IIncidents;
}
interface ISetIncidentFormEditValuesAction {
    type: typeof INCIDENT_FORM_EDIT_VALUES;
    value: IIncidents;
}
interface ISetIncidentIsLoadingAction {
    type: typeof INCIDENT_IS_LOADING;
    incidentIsLoading: boolean;
}

interface ICreateIncident {
    type: typeof POST_CREATE;
    incidentTitle: string;
    assignee: string;
    area: string;
    startDate: moment.Moment;
    dueDate: moment.Moment;
    description: string;
    priority: string;
    status: string;
}
interface IDeleteIncident {
    type: typeof DELETE_INCIDENT;
    id: string;
}
interface IEditIncident {
    type: typeof PUT_EDIT_INCIDENT;
    _id: string;
    incidentTitle: string;
    assignee: string;
    area: string;
    startDate: moment.Moment;
    dueDate: moment.Moment;
    description: string;
    priority: string;
    status: string;
}

export const setIncidentFormCreateValues = (
    value: IIncidents
): ISetIncidentFormCreateValuesAction => ({
    type: INCIDENT_FORM_CREATE_VALUES,
    value
});
export const setIncidentFormEditValues = (
    value: IIncidents
): ISetIncidentFormEditValuesAction => ({
    type: INCIDENT_FORM_EDIT_VALUES,
    value
});
export const setUsers = (users: Array<IUsers>): ISetUsersAction => ({
    type: SET_USERS,
    users
});
export const setIncidents = (
    incidents: Array<IIncidents>
): ISetIncidentsAction => ({
    type: SET_INCIDENTS,
    incidents
});
export const setIncidentIsLoading = (
    incidentIsLoading: boolean
): ISetIncidentIsLoadingAction => ({
    type: INCIDENT_IS_LOADING,
    incidentIsLoading
});

export const getUsers = () => ({ type: GET_USERS });
export const getIncidents = () => ({ type: GET_INCIDENTS });
export const createIncident = (
    incidentTitle: string,
    assignee: string,
    area: string,
    startDate: moment.Moment,
    dueDate: moment.Moment,
    description: string,
    priority: string,
    status: string
): ICreateIncident => ({
    type: POST_CREATE,
    incidentTitle,
    assignee,
    area,
    startDate,
    dueDate,
    description,
    priority,
    status
});
export const deleteIncident = (id: string): IDeleteIncident => ({
    type: DELETE_INCIDENT,
    id
});
export const editIncident = (
    _id: string,
    incidentTitle: string,
    assignee: string,
    area: string,
    startDate: moment.Moment,
    dueDate: moment.Moment,
    description: string,
    priority: string,
    status: string
): IEditIncident => ({
    type: PUT_EDIT_INCIDENT,
    _id,
    incidentTitle,
    assignee,
    area,
    startDate,
    dueDate,
    description,
    priority,
    status
});
