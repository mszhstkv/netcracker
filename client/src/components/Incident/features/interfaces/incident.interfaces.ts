import { EditIncident, Incidents } from 'common/interfaces/interfaces';
import { Moment } from 'moment';

export interface IncidentProps {
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
    disabledDate: (current: Moment) => boolean;
    incidentIsLoading: boolean;
}
