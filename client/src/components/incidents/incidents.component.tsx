import React, { FC, memo, PropsWithChildren, useMemo } from 'react';
import { Popover, Space, Table } from 'antd';
import CreateIncident from 'components/incidents/create-incident/create-incident.container';
import EditIncident from 'components/incidents/edit-incident/edit-incident.container';
import { ActionButton } from 'components/incidents/incidents.styles';
import Loader from 'common/loader.component';
import { Incidents } from 'common/interfaces';
import { IncidentProps } from 'components/incidents/interfaces/incidents.component.interfaces';
import { incidentBoardIcons } from 'components/incidents/incidents-board-icons.utilities';
import {
    COLUMNS_DATA,
    PAGINATION_SETTINGS,
    rowKeyRender,
    SCROLL_SETTINGS
} from './incidents.constants';

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
                ...COLUMNS_DATA,
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
            [editIncident, deleteIncident]
        );
        const data = useMemo(
            () =>
                incidents.map(
                    (incident: Incidents): Incidents => {
                        const [startDate] = incident.startDate.split('T');
                        const [dueDate] = incident.dueDate.split('T');

                        const reformatIncident = { ...incident };

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
                    pagination={PAGINATION_SETTINGS}
                    columns={columns}
                    dataSource={data}
                    scroll={SCROLL_SETTINGS}
                    rowKey={rowKeyRender}
                />
            </>
        );
    }
);

export default Incident;
