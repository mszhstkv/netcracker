import React, { FC, memo, PropsWithChildren, useEffect } from 'react';
import { connect } from 'react-redux';
import Incident from 'components/incidents/incidents.component';
import {
    getUsers,
    getIncidents,
    deleteIncident,
    editIncident
} from 'redux/actions/incident.actions';
import { AppStateType } from 'redux/store';
import { IncidentContainerProps } from 'components/incidents/interfaces/incidents.container.interfaces';
import { disabledDate } from './incidents.constants';

const IncidentContainer: FC<IncidentContainerProps> = memo(
    ({
        getIncidentsAction,
        incidents,
        incidentIsLoading,
        deleteIncidentAction,
        editIncidentAction,
        getUsersAction
    }: PropsWithChildren<IncidentContainerProps>) => {
        useEffect((): void => {
            getUsersAction();
            getIncidentsAction();
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, []);

        return (
            <Incident
                deleteIncident={deleteIncidentAction}
                incidents={incidents}
                editIncident={editIncidentAction}
                disabledDate={disabledDate}
                incidentIsLoading={incidentIsLoading}
            />
        );
    }
);

const mapStateToProps = (state: AppStateType) => ({
    incidents: state.incident.incidents,
    incidentIsLoading: state.incident.incidentIsLoading
});

export default connect(mapStateToProps, {
    getUsersAction: getUsers,
    getIncidentsAction: getIncidents,
    deleteIncidentAction: deleteIncident,
    editIncidentAction: editIncident
})(IncidentContainer);
