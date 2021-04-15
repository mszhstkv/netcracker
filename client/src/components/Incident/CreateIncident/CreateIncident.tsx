import React, { FC, PropsWithChildren } from 'react';
import { Popover } from 'antd';
import { PlusOutlined } from '@ant-design/icons/lib';
import moment from 'moment';
import { CreateIncidentButton } from 'components/Incident/CreateIncident/CreateIncident.styles';
import Loader from 'common/Loader/Loader';
import IncidentForm from 'components/Incident/Incident-form/Incident-form';
import {
    CreateIncidentOnFinish,
    CreateIncidentProps
} from 'components/Incident/CreateIncident/interfaces/CreateIncident.interfaces';

const CreateIncident: FC<CreateIncidentProps> = ({
    ...props
}: PropsWithChildren<CreateIncidentProps>) => {
    const onFinish = (values: CreateIncidentOnFinish): void => {
        const startDate: moment.Moment = moment().utc(true);
        props.createIncident({
            incidentTitle: values.incidentTitle,
            assignee: values.assignee,
            area: values.area,
            startDate,
            dueDate: values.dueDate,
            description: values.description,
            priority: values.priority,
            status: values.status
        });
    };

    if (props.incidentIsLoading) {
        return <Loader />;
    }

    return (
        <Popover
            content={
                <IncidentForm
                    formName="create"
                    onFinish={onFinish}
                    disabledDate={props.disabledDate}
                    users={props.users}
                />
            }
            title="Create new incident"
            trigger="click"
            placement="left"
        >
            <CreateIncidentButton>
                <PlusOutlined />
                Create incident
            </CreateIncidentButton>
        </Popover>
    );
};

export default CreateIncident;
