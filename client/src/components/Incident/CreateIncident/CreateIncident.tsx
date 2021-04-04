import React, { FC, PropsWithChildren, useEffect } from 'react';
import { Form, Popover } from 'antd';
import { PlusOutlined } from '@ant-design/icons/lib';
import moment from 'moment';
import { CreateIncidentButton } from 'components/Incident/CreateIncident/CreateIncident.styles';
import Loader from 'common/Loader/Loader';
import { IIncidents } from 'common/interfaces/interfaces';
import IncidentForm from 'components/Incident/Incident-form/Incident-form';
import { ICreateIncidentProps } from 'components/Incident/CreateIncident/interfaces/CreateIncident.interfaces';

const CreateIncident: FC<ICreateIncidentProps> = ({
    ...props
}: PropsWithChildren<ICreateIncidentProps>) => {
    const [form] = Form.useForm();

    useEffect((): void => {
        form.setFieldsValue({ ...props.incidentFormCreate });
    }, [props.incidentFormCreate]);

    const onValuesChange = (value: IIncidents) => {
        props.setIncidentFormCreateValues(value);
    };

    const onFinish = (values: {
        incidentTitle: string;
        assignee: string;
        area: string;
        dueDate: moment.Moment;
        description: string;
        priority: string;
        status: string;
    }): void => {
        const startDate: moment.Moment = moment().utc(true);
        props.create(
            values.incidentTitle,
            values.assignee,
            values.area,
            startDate,
            values.dueDate,
            values.description,
            values.priority,
            values.status
        );
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
                    onValuesChange={onValuesChange}
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
