import axios from "axios";
import moment from "moment";
import {IncidentsType, UsersType} from "../types/types";

const instance = axios.create({
    withCredentials: true,
    baseURL: "/api/",
    headers: {
        'Access-Control-Allow-Origin': '*',
        'contentType': 'application/json',
    }
})

type LoginDataType = {
        userId: string,
        userLogin: string,
        token: string
}
type RegisterDataType = {
    message: string
}

export const authAPI = {
    register(login: string, password: string, fullName: string, dateOfBirth: string, position: string) {
        return instance.post<RegisterDataType>('auth/register', {login, password, fullName, dateOfBirth, position});
    },

    login(login: string, password: string) {
        return instance.post<LoginDataType>('auth/login', {login, password})
    }
};

type GetUsersDataType = Array <UsersType>;

export const usersAPI = {
    getUsers() {
        return instance.get<GetUsersDataType>('users/allUsers')
    }
};

type CreateDataType = {
    message: string
}
type GetIncidentsDataType = Array <IncidentsType>
type DeleteIncidentDataType = {
    message: string
}
type EditIncidentDataType = {
    message: string
}

export const incidentAPI = {
    create(
        incidentTitle: string, assignee: string, area: string,
        startDate: string, dueDate: string, description: string,
        priority: string, status: string) {
        return instance.post<CreateDataType>('incident/create', {
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
        return instance.get<GetIncidentsDataType>('incident/allIncidents')
    },

    deleteIncident(id: string) {
        return instance.delete<DeleteIncidentDataType>('incident/allIncidents/' + id)
    },

    editIncident(_id: string, incidentTitle: string, assignee: string, area: string,
                 startDate: moment.Moment, dueDate: moment.Moment, description: string,
                 priority: string, status: string) {
        return instance.put<EditIncidentDataType>('incident/allIncidents/', {
            _id,
            incidentTitle,
            assignee,
            area,
            startDate,
            dueDate,
            description,
            priority,
            status
        })
    }

};