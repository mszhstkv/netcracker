import { EditIncident, Incidents } from 'common/interfaces';

interface IncidentContainerMapStateProps {
    incidents: Incidents[];
    incidentIsLoading: boolean;
}

interface IncidentContainerMapDispatchProps {
    getUsersAction: () => void;
    getIncidentsAction: () => void;
    deleteIncidentAction: (id: string) => void;
    editIncidentAction: (EditIncident: EditIncident) => void;
}

export interface IncidentContainerProps
    extends IncidentContainerMapStateProps,
        IncidentContainerMapDispatchProps {}
