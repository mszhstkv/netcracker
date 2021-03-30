import React, {FC, PropsWithChildren, useEffect} from 'react';
import Incident from './Incident';
import {connect} from "react-redux";
import {
    getUsers, create, getIncidents,
    deleteIncident, editIncident, setIncidentFormCreateValues, setIncidentFormEditValues
} from "../../redux/incident-reducer";
import moment from "moment";
import {IncidentFormType, IncidentsType, UsersType} from "../../types/types";
import {AppStateType} from "../../redux/store";

type MapStatePropsType = {
    users: Array<UsersType>
    incidents: Array<IncidentsType>
    incidentFormCreate: IncidentFormType
    incidentFormEdit: IncidentFormType
    incidentIsLoading: boolean
}

type MapDispatchPropsType = {
    getUsers: () => void
    getIncidents: () => void
    create: (incidentTitle: string, assignee: string, area: string,
             startDate: moment.Moment, dueDate: moment.Moment, description: string,
             priority: string, status: string) => void
    deleteIncident: (id: string) => void
    editIncident: (_id: string, incidentTitle: string, assignee: string, area: string,
                   startDate: moment.Moment, dueDate: moment.Moment, description: string,
                   priority: string, status: string) => void
    setIncidentFormCreateValues: (value: IncidentsType) => void
    setIncidentFormEditValues: (value: IncidentsType) => void
}

type PropsType = MapStatePropsType & MapDispatchPropsType

const IncidentContainer: FC<PropsType> = (props: PropsWithChildren<PropsType>) => {

    useEffect((): void => {
        props.getUsers();
        props.getIncidents();
    }, []);

    const disabledDate = (current: moment.Moment): boolean => {
        return current && current < moment().startOf('day');
    }

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
            incidentFormEdit={props.incidentFormEdit}
            incidentIsLoading={props.incidentIsLoading}

        />
    )
}

const mapStateToProps = (state: AppStateType) => ({
    users: state.incident.users,
    incidents: state.incident.incidents,
    incidentFormCreate: state.incident.incidentFormCreate,
    incidentFormEdit: state.incident.incidentFormEdit,
    incidentIsLoading: state.incident.incidentIsLoading
});

export default connect(mapStateToProps,
    {
        getUsers,
        getIncidents,
        create,
        deleteIncident,
        editIncident,
        setIncidentFormCreateValues,
        setIncidentFormEditValues
    })(IncidentContainer);