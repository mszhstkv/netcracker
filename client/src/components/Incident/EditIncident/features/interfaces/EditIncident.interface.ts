import { EditIncident, Incidents, Users } from 'common/interfaces/interfaces';
import { Moment } from 'moment';

export interface EditIncidentOnFinish {
    incidentTitle: string;
    assignee: string;
    area: string;
    dueDate: Moment;
    description: string;
    priority: string;
    status: string;
}

export interface EditIncidentProps {
    incidentInfo: Incidents;
    users: Users[];
    incidentIsLoading: boolean;
    editIncidentAction: ({
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
    disabledDate: (current: Moment) => boolean;
}
