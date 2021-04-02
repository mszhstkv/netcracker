import moment from 'moment';
import { ReactElement } from 'react';

export type IncidentsType = {
    _id: string;
    area: string;
    assignee: string;
    description: string;
    dueDate: string;
    incidentTitle: string;
    priority: string;
    startDate: string;
    status: string;
    priorityIcon: ReactElement;
};

export type UsersType = {
    _id: string;
    dateOfBirth: string;
    fullName: string;
    login: string;
    password: string;
    position: string;
};

export type IncidentFormType = {
    _id?: string | null | undefined;
    incidentTitle: string | null;
    assignee: string | null;
    area: string | null;
    startDate: moment.Moment | null | string;
    dueDate: moment.Moment | null | string;
    description: string | null;
    priority: string | null;
    status: string | null;
};

export type LoginFormType = {
    login: string | null;
    password: string | null;
};

export type RegisterFormType = {
    login: string | null;
    password: string | null;
    fullName: string | null;
    position: string | null;
    dateOfBirth: string | null;
};
