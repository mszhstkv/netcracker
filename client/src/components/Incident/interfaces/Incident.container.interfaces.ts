import {
    CreateIncident,
    EditIncident,
    Incidents,
    Users
} from 'common/interfaces/interfaces';

interface IncidentContainerMapStateProps {
    users: Users[];
    incidents: Incidents[];
    incidentIsLoading: boolean;
}

interface IncidentContainerMapDispatchProps {
    getUsers: () => void;
    getIncidents: () => void;
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
}

export interface IncidentContainerProps
    extends IncidentContainerMapStateProps,
        IncidentContainerMapDispatchProps {}
