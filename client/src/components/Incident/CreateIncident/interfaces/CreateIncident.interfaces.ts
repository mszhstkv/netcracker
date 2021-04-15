import { CreateIncident, Users } from 'common/interfaces/interfaces';
import moment from 'moment';

export interface CreateIncidentOnFinish {
    incidentTitle: string;
    assignee: string;
    area: string;
    dueDate: moment.Moment;
    description: string;
    priority: string;
    status: string;
}

export interface CreateIncidentProps {
    users: Users[];
    createIncident: ({
        incidentTitle,
        assignee,
        area,
        startDate,
        dueDate,
        description,
        priority,
        status
    }: CreateIncident) => void;
    disabledDate: (current: moment.Moment) => boolean;
    incidentIsLoading: boolean;
}
