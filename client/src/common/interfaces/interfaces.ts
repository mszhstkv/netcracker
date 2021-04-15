import { ReactElement } from 'react';
import moment from 'moment';

export interface Incidents {
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
}

export interface CreateIncident {
    incidentTitle: string;
    assignee: string;
    area: string;
    startDate: moment.Moment;
    dueDate: moment.Moment;
    description: string;
    priority: string;
    status: string;
}

export interface EditIncident {
    _id: string,
    incidentTitle: string,
    assignee: string,
    area: string,
    startDate: moment.Moment,
    dueDate: moment.Moment,
    description: string,
    priority: string,
    status: string
}

export interface Users {
    _id: string;
    dateOfBirth: string;
    fullName: string;
    login: string;
    password: string;
    position: string;
}
