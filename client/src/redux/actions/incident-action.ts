import moment from 'moment';
import { IncidentsType, UsersType } from 'common/types/types';

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
    | SetUsersActionType
    | SetIncidentsActionType
    | SetIncidentFormCreateValuesActionType
    | SetIncidentFormEditValuesActionType
    | SetIncidentIsLoadingActionType;

type SetUsersActionType = {
    type: typeof SET_USERS;
    users: Array<UsersType>;
};
type SetIncidentsActionType = {
    type: typeof SET_INCIDENTS;
    incidents: Array<IncidentsType>;
};
type SetIncidentFormCreateValuesActionType = {
    type: typeof INCIDENT_FORM_CREATE_VALUES;
    value: IncidentsType;
};
type SetIncidentFormEditValuesActionType = {
    type: typeof INCIDENT_FORM_EDIT_VALUES;
    value: IncidentsType;
};
type SetIncidentIsLoadingActionType = {
    type: typeof INCIDENT_IS_LOADING;
    incidentIsLoading: boolean;
};

type CreateType = {
    type: typeof POST_CREATE;
    incidentTitle: string;
    assignee: string;
    area: string;
    startDate: moment.Moment;
    dueDate: moment.Moment;
    description: string;
    priority: string;
    status: string;
};
type DeleteIncidentType = {
    type: typeof DELETE_INCIDENT;
    id: string;
};
type EditIncidentType = {
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
};

export const setIncidentFormCreateValues = (
    value: IncidentsType
): SetIncidentFormCreateValuesActionType => ({
    type: INCIDENT_FORM_CREATE_VALUES,
    value
});
export const setIncidentFormEditValues = (
    value: IncidentsType
): SetIncidentFormEditValuesActionType => ({
    type: INCIDENT_FORM_EDIT_VALUES,
    value
});
export const setUsers = (users: Array<UsersType>): SetUsersActionType => ({
    type: SET_USERS,
    users
});
export const setIncidents = (
    incidents: Array<IncidentsType>
): SetIncidentsActionType => ({
    type: SET_INCIDENTS,
    incidents
});
export const setIncidentIsLoading = (
    incidentIsLoading: boolean
): SetIncidentIsLoadingActionType => ({
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
): CreateType => ({
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
export const deleteIncident = (id: string): DeleteIncidentType => ({
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
): EditIncidentType => ({
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
