import React, { FC, PropsWithChildren, useEffect } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import Incident from 'components/Incident/Incident';
import {
    getUsers,
    createIncident,
    getIncidents,
    deleteIncident,
    editIncident,
    setIncidentFormCreateValues,
    setIncidentFormEditValues
} from 'redux/actions/incident-action';
import { AppStateType } from 'redux/store';
import { IIncidentContainerProps } from 'components/Incident/interfaces/Incident.container.interfaces';

const IncidentContainer: FC<IIncidentContainerProps> = ({
    ...props
}: PropsWithChildren<IIncidentContainerProps>) => {
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
            create={props.create}
            editIncident={props.editIncident}
            disabledDate={disabledDate}
            setIncidentFormCreateValues={props.setIncidentFormCreateValues}
            setIncidentFormEditValues={props.setIncidentFormEditValues}
            incidentFormCreate={props.incidentFormCreate}
            incidentIsLoading={props.incidentIsLoading}
        />
    );
};

const mapStateToProps = (state: AppStateType) => ({
    users: state.incident.users,
    incidents: state.incident.incidents,
    incidentFormCreate: state.incident.incidentFormCreate,
    incidentIsLoading: state.incident.incidentIsLoading
});

export default connect(mapStateToProps, {
    getUsers,
    getIncidents,
    create: createIncident,
    deleteIncident,
    editIncident,
    setIncidentFormCreateValues,
    setIncidentFormEditValues
})(IncidentContainer);
