import moment from 'moment';
import {
    CreateIncident,
    EditIncident,
    Incidents,
    Users
} from 'common/interfaces/interfaces';

export const SET_USERS_DATA = 'SET_USERS_DATA';
export const SET_INCIDENTS_DATA = 'SET_INCIDENTS_DATA';
export const GET_USERS_DATA = 'GET_USERS_DATA';
export const GET_INCIDENTS_DATA = 'GET_INCIDENTS_DATA';
export const CREATE_INCIDENT_SEND = 'CREATE_INCIDENT_SEND';
export const DELETE_INCIDENT_SEND = 'DELETE_INCIDENT_SEND';
export const EDIT_INCIDENT_SEND = 'PUT_EDIT_INCIDENT_SEND';
export const INCIDENT_DATA_LOADING = 'INCIDENT_DATA_LOADING';

export type ActionsType =
    | SetUsersAction
    | SetIncidentsAction
    | SetIncidentIsLoadingAction;

interface SetUsersAction {
    type: typeof SET_USERS_DATA;
    users: Users[];
}

interface SetIncidentsAction {
    type: typeof SET_INCIDENTS_DATA;
    incidents: Incidents[];
}

interface SetIncidentIsLoadingAction {
    type: typeof INCIDENT_DATA_LOADING;
    incidentIsLoading: boolean;
}

interface CreateIncidentAction {
    type: typeof CREATE_INCIDENT_SEND;
    incidentTitle: string;
    assignee: string;
    area: string;
    startDate: moment.Moment | string;
    dueDate: moment.Moment | string;
    description: string;
    priority: string;
    status: string;
}
interface DeleteIncident {
    type: typeof DELETE_INCIDENT_SEND;
    id: string;
}
interface EditIncidentAction {
    type: typeof EDIT_INCIDENT_SEND;
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

export const setUsers = (users: Users[]): SetUsersAction => ({
    type: SET_USERS_DATA,
    users
});
export const setIncidents = (incidents: Incidents[]): SetIncidentsAction => ({
    type: SET_INCIDENTS_DATA,
    incidents
});
export const setIncidentIsLoading = (
    incidentIsLoading: boolean
): SetIncidentIsLoadingAction => ({
    type: INCIDENT_DATA_LOADING,
    incidentIsLoading
});

export const getUsers = () => ({ type: GET_USERS_DATA });
export const getIncidents = () => ({ type: GET_INCIDENTS_DATA });
export const createIncident = ({
    incidentTitle,
    assignee,
    area,
    startDate,
    dueDate,
    description,
    priority,
    status
}: CreateIncident): CreateIncidentAction => ({
    type: CREATE_INCIDENT_SEND,
    incidentTitle,
    assignee,
    area,
    startDate,
    dueDate,
    description,
    priority,
    status
});
export const deleteIncident = (id: string): DeleteIncident => ({
    type: DELETE_INCIDENT_SEND,
    id
});
export const editIncident = ({
    _id,
    incidentTitle,
    assignee,
    area,
    startDate,
    dueDate,
    description,
    priority,
    status
}: EditIncident): EditIncidentAction => ({
    type: EDIT_INCIDENT_SEND,
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
