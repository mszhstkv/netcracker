import React, { FC, memo, PropsWithChildren, useMemo } from 'react';
import { Popover, Space, Table } from 'antd';
import CreateIncident from 'components/Incident/CreateIncident/CreateIncident';
import EditIncident from 'components/Incident/EditIncident/EditIncident';
import { ActionButton } from 'components/Incident/Incident.styles';
import Loader from 'common/Loader/Loader';
import { Incidents } from 'common/interfaces/interfaces';
import { IncidentProps } from 'components/Incident/features/interfaces/incident.interfaces';
import { incidentBoardIcons } from 'components/Incident/features/utils/incidentBoardIcons';
import { paginationSettings } from './features/constants/Incident.constants';

const Incident: FC<IncidentProps> = memo(
    ({
        editIncident,
        deleteIncident,
        incidents,
        incidentIsLoading,
        disabledDate
    }: PropsWithChildren<IncidentProps>) => {
        const columns = useMemo(
            () => [
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
                    render: (record: Incidents) => (
                        <Space size="middle">
                            <Popover
                                content={
                                    <EditIncident
                                        incidentInfo={record}
                                        disabledDate={disabledDate}
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
                                    deleteIncident(record._id);
                                }}
                            >
                                Delete
                            </ActionButton>
                        </Space>
                    )
                }
            ],
            // eslint-disable-next-line react-hooks/exhaustive-deps
            [editIncident]
        );
        const data = useMemo(
            () =>
                incidents.map(
                    (incident: Incidents): Incidents => {
                        const reformatIncident = { ...incident };

                        const [startDate] = incident.startDate.split('T');
                        const [dueDate] = incident.dueDate.split('T');

                        reformatIncident.startDate = startDate;
                        reformatIncident.dueDate = dueDate;
                        reformatIncident.priorityIcon = incidentBoardIcons(
                            incident
                        );

                        return reformatIncident;
                    }
                ),
            // eslint-disable-next-line react-hooks/exhaustive-deps
            [incidents]
        );

        if (incidentIsLoading) {
            return <Loader />;
        }

        return (
            <>
                <CreateIncident disabledDate={disabledDate} />
                <Table
                    pagination={paginationSettings}
                    columns={columns}
                    dataSource={data}
                    scroll={{ x: 1300 }}
                    rowKey={(record: { _id: string }) => record._id}
                />
            </>
        );
    }
);

export default Incident;
