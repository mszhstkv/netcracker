import { IIncidents, IUsers } from 'common/interfaces/interfaces';
import moment from 'moment';

export interface IEditIncidentProps {
    incidentInfo: IIncidents;
    users: Array<IUsers>;
    incidentIsLoading: boolean;
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
    setIncidentFormEditValues: (value: IIncidents) => void;
}