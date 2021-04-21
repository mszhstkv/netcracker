import { EditIncident, Incidents } from 'common/interfaces/interfaces';

interface IncidentContainerMapStateProps {
    incidents: Incidents[];
    incidentIsLoading: boolean;
}

interface IncidentContainerMapDispatchProps {
    getUsersAction: () => void;
    getIncidentsAction: () => void;
    deleteIncidentAction: (id: string) => void;
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
}

export interface IncidentContainerProps
    extends IncidentContainerMapStateProps,
        IncidentContainerMapDispatchProps {}
