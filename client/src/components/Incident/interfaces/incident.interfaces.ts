import {
    CreateIncident,
    EditIncident,
    Incidents,
    Users
} from 'common/interfaces/interfaces';
import moment from 'moment';

export interface IncidentProps {
    users: Users[];
    incidents: Incidents[];
    deleteIncident: (id: string) => void;
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
    incidentIsLoading: boolean;
}
