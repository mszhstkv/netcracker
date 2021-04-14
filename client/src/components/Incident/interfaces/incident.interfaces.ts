import { IIncidentForm, IIncidents, IUsers } from 'common/interfaces/interfaces';
import moment from 'moment';

export interface IIncidentProps {
    users: Array<IUsers>;
    incidents: Array<IIncidents>;
    deleteIncident: (id: string) => void;
    editIncident: (
        _id: string,
        incidentTitle: string,
        assignee: string,
        area: string,
        startDate: moment.Moment,
        dueDate: moment.Moment,
        description: string,
        priority: string,
        status: string
    ) => void;
    disabledDate: (current: moment.Moment) => boolean;
    setIncidentFormCreateValues: (value: IIncidents) => void;
    setIncidentFormEditValues: (value: IIncidents) => void;
    create: (
        incidentTitle: string,
        assignee: string,
        area: string,
        startDate: moment.Moment,
        dueDate: moment.Moment,
        description: string,
        priority: string,
        status: string
    ) => void;
    incidentFormCreate: IIncidentForm;
    incidentIsLoading: boolean;
}