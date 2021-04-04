import {
    IIncidentForm,
    IIncidents,
    IUsers
} from 'common/interfaces/interfaces';
import moment from 'moment';

interface IIncidentContainerMapStateProps {
    users: Array<IUsers>;
    incidents: Array<IIncidents>;
    incidentFormCreate: IIncidentForm;
    incidentIsLoading: boolean;
}

interface IIncidentContainerMapDispatchProps {
    getUsers: () => void;
    getIncidents: () => void;
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
    setIncidentFormCreateValues: (value: IIncidents) => void;
    setIncidentFormEditValues: (value: IIncidents) => void;
}

export interface IIncidentContainerProps
    extends IIncidentContainerMapStateProps,
        IIncidentContainerMapDispatchProps {}
