import React, { FC, PropsWithChildren, useEffect } from 'react';
import moment, { Moment } from 'moment';
import { connect } from 'react-redux';
import Incident from 'components/Incident/Incident';
import {
    getUsers,
    getIncidents,
    deleteIncident,
    editIncident
} from 'redux/actions/incident.actions';
import { AppStateType } from 'redux/store';
import { IncidentContainerProps } from 'components/Incident/features/interfaces/Incident.container.interfaces';

const IncidentContainer: FC<IncidentContainerProps> = ({
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
    const disabledDate = (current: Moment): boolean =>
        current && current < moment().startOf('day');

    return (
        <Incident
            deleteIncident={deleteIncidentAction}
            incidents={incidents}
            editIncident={editIncidentAction}
            disabledDate={disabledDate}
            incidentIsLoading={incidentIsLoading}
        />
    );
};

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
