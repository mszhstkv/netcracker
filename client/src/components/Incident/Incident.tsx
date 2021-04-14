import React, { FC, PropsWithChildren } from 'react';
import { Popover, Space, Table } from 'antd';
import CreateIncident from 'components/Incident/CreateIncident/CreateIncident';
import {
    BlockerSvg,
    CriticalSvg,
    MajorSvg,
    MinorSvg,
    NormalSvg
} from 'common/icons/prioritiesIcons';
import EditIncident from 'components/Incident/EditIncident/EditIncident';
import { ActionButton } from 'components/Incident/Incident.styles';
import Loader from 'common/Loader/Loader';
import { IIncidents } from 'common/interfaces/interfaces';
import { IIncidentProps } from 'components/Incident/interfaces/incident.interfaces';

const Incident: FC<IIncidentProps> = ({
    ...props
}: PropsWithChildren<IIncidentProps>) => {
    const columns = [
        {
            title: '',
            dataIndex: 'priorityIcon',
            key: 'priorityIcon'
        },
        {
            title: 'Incident title',
            dataIndex: 'incidentTitle',
            key: 'incidentTitle'
        },
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description'
        },
        {
            title: 'Assignee',
            dataIndex: 'assignee',
            key: 'assignee'
        },
        {
            title: 'Area',
            dataIndex: 'area',
            key: 'area'
        },
        {
            title: 'Start date',
            dataIndex: 'startDate',
            key: 'startDate'
        },
        {
            title: 'Due date',
            dataIndex: 'dueDate',
            key: 'dueDate'
        },
        {
            title: 'Priority',
            dataIndex: 'priority',
            key: 'priority'
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status'
        },
        {
            title: 'Action',
            key: 'action',
            render: (record: IIncidents) => (
                <Space size="middle">
                    <Popover
                        content={
                            <EditIncident
                                incidentInfo={record}
                                users={props.users}
                                editIncident={props.editIncident}
                                disabledDate={props.disabledDate}
                                setIncidentFormEditValues={
                                    props.setIncidentFormEditValues
                                }
                                incidentIsLoading={props.incidentIsLoading}
                            />
                        }
                        title="Edit incident"
                        trigger="click"
                        placement="left"
                    >
                        <ActionButton>Edit</ActionButton>
                    </Popover>
                    <ActionButton
                        onClick={(): void => {
                            props.deleteIncident(record._id);
                        }}
                    >
                        Delete
                    </ActionButton>
                </Space>
            )
        }
    ];
    const data = props.incidents.map(
        (incident: IIncidents): IIncidents => {
            const reformatIncident = { ...incident };

            const [startDate] = incident.startDate.split('T');
            const [dueDate] = incident.dueDate.split('T');

            reformatIncident.startDate = startDate;
            reformatIncident.dueDate = dueDate;

            if (incident.priority === 'blocker') {
                reformatIncident.priorityIcon = <BlockerSvg />;
            }
            if (incident.priority === 'critical') {
                reformatIncident.priorityIcon = <CriticalSvg />;
            }
            if (incident.priority === 'major') {
                reformatIncident.priorityIcon = <MajorSvg />;
            }
            if (incident.priority === 'normal') {
                reformatIncident.priorityIcon = <NormalSvg />;
            }
            if (incident.priority === 'minor') {
                reformatIncident.priorityIcon = <MinorSvg />;
            }
            return reformatIncident;
        }
    );

    if (props.incidentIsLoading) {
        return <Loader />;
    }

    return (
        <>
            <CreateIncident
                users={props.users}
                create={props.create}
                disabledDate={props.disabledDate}
                setIncidentFormCreateValues={props.setIncidentFormCreateValues}
                incidentFormCreate={props.incidentFormCreate}
                incidentIsLoading={props.incidentIsLoading}
            />
            <Table
                pagination={{ position: ['bottomCenter'], defaultPageSize: 8 }}
                columns={columns}
                dataSource={data}
                scroll={{ x: 1300 }}
                rowKey={(record: { _id: string }) => record._id}
            />
        </>
    );
};

export default Incident;
