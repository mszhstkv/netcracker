import { IIncidentForm, IIncidents, IUsers } from 'common/interfaces/interfaces';
import moment from 'moment';

export interface ICreateIncidentProps {
    users: Array<IUsers>;
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
    disabledDate: (current: moment.Moment) => boolean;
    setIncidentFormCreateValues: (value: IIncidents) => void;
    incidentFormCreate: IIncidentForm;
    incidentIsLoading: boolean;
}