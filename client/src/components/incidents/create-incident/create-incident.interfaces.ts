import { CreateIncident, Users } from 'common/interfaces';
import { Moment } from 'moment';

export interface CreateIncidentOnFinish {
    incidentTitle: string;
    assignee: string;
    area: string;
    dueDate: Moment;
    description: string;
    priority: string;
    status: string;
}

export interface CreateIncidentProps {
    users: Users[];
    createIncidentAction: (CreateIncident: CreateIncident) => void;
    disabledDate: (current: Moment) => boolean;
    incidentIsLoading: boolean;
}
