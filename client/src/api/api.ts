import axios from 'axios';
import { Incidents, Users } from 'common/interfaces';
import {
    CreateData,
    DeleteIncidentData,
    EditIncidentData,
    LoginData,
    RegisterData
} from 'api/api.interfaces';
import { LoginActionPayload } from '../redux/actions/auth.actions';
import {
    CreateIncidentActionPayload,
    DeleteIncidentActionPayload,
    EditIncidentActionPayload
} from '../redux/actions/incident.actions';
import { RegisterActionPayload } from '../redux/actions/register.actions';

type GetIncidentsDataType = Incidents[];
type GetUsersDataType = Users[];

const instance = axios.create({
    withCredentials: true,
    baseURL: '/api',
    headers: {
        'Access-Control-Allow-Origin': '*',
        contentType: 'application/json'
    }
});

export const authAPI = {
    register(payload: RegisterActionPayload) {
        return instance.post<RegisterData>('/auth/register', {
            ...payload
        });
    },

    login(payload: LoginActionPayload) {
        return instance.post<LoginData>('/auth/login', { ...payload });
    }
};

export const usersAPI = {
    getUsers() {
        return instance.get<GetUsersDataType>('/users');
    }
};

export const incidentAPI = {
    createIncident(payload: CreateIncidentActionPayload) {
        return instance.post<CreateData>('/incidents', {
            ...payload
        });
    },

    getIncident() {
        return instance.get<GetIncidentsDataType>('/incidents');
    },

    deleteIncident(payload: DeleteIncidentActionPayload) {
        return instance.delete<DeleteIncidentData>(`/incidents/${payload.id}`);
    },

    editIncident(payload: EditIncidentActionPayload) {
        return instance.put<EditIncidentData>(`/incidents/${payload._id}`, {
            ...payload
        });
    }
};
