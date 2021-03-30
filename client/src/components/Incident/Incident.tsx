import React, {FC, PropsWithChildren, useState} from 'react';
import {Popover, Space, Table} from 'antd';
import CreateIncident from "./CreateIncident/CreateIncident";
import {BlockerSvg, CriticalSvg, MajorSvg, MinorSvg, NormalSvg} from "./icons/prioritiesIcons";
import EditIncident from "./EditIncident/EditIncident";
import {ActionButton} from './Incident.styles';
import moment from "moment";
import Loader from "../common/Loader/Loader";
import {IncidentFormType, IncidentsType, UsersType} from "../../types/types";

type PropsType = {
    users: Array<UsersType>
    incidents: Array<IncidentsType>
    deleteIncident: (id: string) => void
    editIncident: (_id: string, incidentTitle: string, assignee: string, area: string,
                   startDate: moment.Moment, dueDate: moment.Moment, description: string,
                   priority: string, status: string) => void
    disabledDate: (current: moment.Moment) => boolean
    setIncidentFormCreateValues: (value: IncidentsType) => void
    setIncidentFormEditValues: (value: IncidentsType) => void
    create: (incidentTitle: string, assignee: string, area: string,
             startDate: moment.Moment, dueDate: moment.Moment, description: string,
             priority: string, status: string) => void
    incidentFormCreate: IncidentFormType
    incidentFormEdit: IncidentFormType
    incidentIsLoading: boolean
}

const Incident: FC<PropsType> = (props:PropsWithChildren<PropsType>) => {

    const columns = [
        {
            title: '',
            dataIndex: 'priorityIcon',
            key: 'priorityIcon',
        },
        {
            title: 'Incident title',
            dataIndex: 'incidentTitle',
            key: 'incidentTitle',
        },
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description',
        },
        {
            title: 'Assignee',
            dataIndex: 'assignee',
            key: 'assignee',
        },
        {
            title: 'Area',
            dataIndex: 'area',
            key: 'area',
        },
        {
            title: 'Start date',
            dataIndex: 'startDate',
            key: 'startDate',
        },
        {
            title: 'Due date',
            dataIndex: 'dueDate',
            key: 'dueDate',
        },
        {
            title: 'Priority',
            dataIndex: 'priority',
            key: 'priority',
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
        },
        {
            title: 'Action',
            key: 'action',
            render: (record: IncidentsType) => (
                <Space size="middle">
                    <Popover content={
                        <EditIncident
                            incidentInfo={record}
                            users={props.users}
                            editIncident={props.editIncident}
                            disabledDate={props.disabledDate}
                            setIncidentFormEditValues={props.setIncidentFormEditValues}
                            incidentFormEdit={props.incidentFormEdit}
                            incidentIsLoading={props.incidentIsLoading}
                        />
                    } title="Edit incident" trigger="click" placement="left">
                        <ActionButton>
                            Edit
                        </ActionButton>
                    </Popover>
                    <ActionButton onClick={(): void => {
                        props.deleteIncident(record._id);
                    }}>
                        Delete
                    </ActionButton>
                </Space>
            ),
        }
    ];
    const data = props.incidents.map((incident: IncidentsType ): IncidentsType => {

        incident.startDate = incident.startDate.split('T')[0];
        incident.dueDate = incident.dueDate.split('T')[0];

        if (incident.priority === 'blocker') {
            incident.priorityIcon = <BlockerSvg/>
        }
        if (incident.priority === 'critical') {
            incident.priorityIcon = <CriticalSvg/>
        }
        if (incident.priority === 'major') {
            incident.priorityIcon = <MajorSvg/>
        }
        if (incident.priority === 'normal') {
            incident.priorityIcon = <NormalSvg/>
        }
        if (incident.priority === 'minor') {
            incident.priorityIcon = <MinorSvg/>
        }
        return incident;
    });

    if (props.incidentIsLoading) {
        return <Loader/>
    }

    return (
        <>
            <CreateIncident users={props.users}
                            create={props.create}
                            disabledDate={props.disabledDate}
                            setIncidentFormCreateValues={props.setIncidentFormCreateValues}
                            incidentFormCreate={props.incidentFormCreate}
                            incidentIsLoading={props.incidentIsLoading}
            />
            <Table
                pagination={{position: ['bottomCenter'], defaultPageSize: 8}}
                columns={columns}
                dataSource={data}
                scroll={{ x: 1300 }}
                rowKey={(record: {_id: string}) => record._id}
            />
        </>
    )
}

export default Incident;