import { CreateIncident, Users } from 'common/interfaces/interfaces';
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
    createIncidentAction: ({
        incidentTitle,
        assignee,
        area,
        startDate,
        dueDate,
        description,
        priority,
        status
    }: CreateIncident) => void;
    disabledDate: (current: Moment) => boolean;
    incidentIsLoading: boolean;
}
