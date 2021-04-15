import axios from 'axios';
import moment from 'moment';
import { Incidents, Users } from 'common/interfaces/interfaces';
import {
    CreateData,
    DeleteIncidentData,
    EditIncidentData,
    LoginData,
    RegisterData
} from 'api/api.interfaces';

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
    register(
        login: string,
        password: string,
        fullName: string,
        dateOfBirth: string,
        position: string
    ) {
        return instance.post<RegisterData>('/auth/register', {
            login,
            password,
            fullName,
            dateOfBirth,
            position
        });
    },

    login(login: string, password: string) {
        return instance.post<LoginData>('/auth/login', { login, password });
    }
};

export const usersAPI = {
    getUsers() {
        return instance.get<GetUsersDataType>('/users');
    }
};

export const incidentAPI = {
    createIncident(
        incidentTitle: string,
        assignee: string,
        area: string,
        startDate: string,
        dueDate: string,
        description: string,
        priority: string,
        status: string
    ) {
        return instance.post<CreateData>('/incidents', {
            incidentTitle,
            assignee,
            area,
            startDate,
            dueDate,
            description,
            priority,
            status
        });
    },

    getIncident() {
        return instance.get<GetIncidentsDataType>('/incidents');
    },

    deleteIncident(id: string) {
        return instance.delete<DeleteIncidentData>(`/incidents/${id}`);
    },

    editIncident(
        _id: string,
        incidentTitle: string,
        assignee: string,
        area: string,
        startDate: moment.Moment,
        dueDate: moment.Moment,
        description: string,
        priority: string,
        status: string
    ) {
        return instance.put<EditIncidentData>(`/incidents/${_id}`, {
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
    }
};
