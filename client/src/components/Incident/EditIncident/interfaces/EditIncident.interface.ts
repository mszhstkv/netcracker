import { EditIncident, Incidents, Users } from 'common/interfaces/interfaces';
import moment from 'moment';

export interface EditIncidentOnFinish {
    incidentTitle: string;
    assignee: string;
    area: string;
    dueDate: moment.Moment;
    description: string;
    priority: string;
    status: string;
}

export interface EditIncidentProps {
    incidentInfo: Incidents;
    users: Users[];
    incidentIsLoading: boolean;
    editIncident: ({
        _id,
        incidentTitle,
        assignee,
        area,
        startDate,
        dueDate,
        description,
        priority,
        status
    }: EditIncident) => void;
    disabledDate: (current: moment.Moment) => boolean;
}
