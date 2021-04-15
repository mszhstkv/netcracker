import React, { FC, PropsWithChildren, useEffect } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import Incident from 'components/Incident/Incident';
import {
    getUsers,
    createIncident,
    getIncidents,
    deleteIncident,
    editIncident
} from 'redux/actions/incident-action';
import { AppStateType } from 'redux/store';
import { IncidentContainerProps } from 'components/Incident/interfaces/Incident.container.interfaces';

const IncidentContainer: FC<IncidentContainerProps> = ({
    ...props
}: PropsWithChildren<IncidentContainerProps>) => {
    useEffect((): void => {
        props.getUsers();
        props.getIncidents();
    }, []);

    const disabledDate = (current: moment.Moment): boolean =>
        current && current < moment().startOf('day');

    return (
        <Incident
            users={props.users}
            deleteIncident={props.deleteIncident}
            incidents={props.incidents}
            createIncident={props.createIncident}
            editIncident={props.editIncident}
            disabledDate={disabledDate}
            incidentIsLoading={props.incidentIsLoading}
        />
    );
};

const mapStateToProps = (state: AppStateType) => ({
    users: state.incident.users,
    incidents: state.incident.incidents,
    incidentIsLoading: state.incident.incidentIsLoading
});

export default connect(mapStateToProps, {
    getUsers,
    getIncidents,
    createIncident,
    deleteIncident,
    editIncident
})(IncidentContainer);
