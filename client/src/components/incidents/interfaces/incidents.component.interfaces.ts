import { EditIncident, Incidents } from 'common/interfaces';
import { Moment } from 'moment';

export interface IncidentProps {
    incidents: Incidents[];
    deleteIncident: (id: string) => void;
    editIncident: (EditIncident: EditIncident) => void;
    disabledDate: (current: Moment) => boolean;
    incidentIsLoading: boolean;
}
