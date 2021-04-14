import axios from 'axios';
import moment from 'moment';
import { IIncidents, IUsers } from 'common/interfaces/interfaces';
import {
    ICreateData,
    IDeleteIncidentData,
    IEditIncidentData,
    ILoginData,
    IRegisterData
} from 'api/api.interfaces';

type GetIncidentsDataType = Array<IIncidents>;
type GetUsersDataType = Array<IUsers>;

const instance = axios.create({
    withCredentials: true,
    baseURL: '/api/',
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
        return instance.post<IRegisterData>('auth/register', {
            login,
            password,
            fullName,
            dateOfBirth,
            position
        });
    },

    login(login: string, password: string) {
        return instance.post<ILoginData>('auth/login', { login, password });
    }
};

export const usersAPI = {
    getUsers() {
        return instance.get<GetUsersDataType>('users/allUsers');
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
        return instance.post<ICreateData>('incident/create', {
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
        return instance.get<GetIncidentsDataType>('incident/allIncidents');
    },

    deleteIncident(id: string) {
        return instance.delete<IDeleteIncidentData>(
            `incident/allIncidents/${id}`
        );
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
        return instance.put<IEditIncidentData>('incident/allIncidents/', {
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
