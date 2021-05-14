import { EditIncident, Incidents, Users } from 'common/interfaces';
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
    editIncidentAction: (EditIncident: EditIncident) => void;
    disabledDate: (current: Moment) => boolean;
}
