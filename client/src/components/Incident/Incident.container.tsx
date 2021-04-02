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
import { IncidentFormType, IncidentsType, UsersType } from 'common/types/types';
import { AppStateType } from 'redux/store';

type MapStatePropsType = {
    users: Array<UsersType>;
    incidents: Array<IncidentsType>;
    incidentFormCreate: IncidentFormType;
    incidentIsLoading: boolean;
};

type MapDispatchPropsType = {
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
    setIncidentFormCreateValues: (value: IncidentsType) => void;
    setIncidentFormEditValues: (value: IncidentsType) => void;
};

type PropsType = MapStatePropsType & MapDispatchPropsType;

const IncidentContainer: FC<PropsType> = ({
    ...props
}: PropsWithChildren<PropsType>) => {
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
