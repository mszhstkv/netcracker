import React, { FC, PropsWithChildren, useEffect } from 'react';
import { Form } from 'antd';
import moment from 'moment';
import Loader from 'common/Loader/Loader';
import { IIncidents } from 'common/interfaces/interfaces';
import IncidentForm from 'components/Incident/Incident-form/Incident-form';
import { IEditIncidentProps } from 'components/Incident/EditIncident/interfaces/EditIncident.interface';

const EditIncident: FC<IEditIncidentProps> = ({
    ...props
}: PropsWithChildren<IEditIncidentProps>) => {
    const [form] = Form.useForm();

    const incident: IIncidents = {
        _id: props.incidentInfo._id,
        incidentTitle: props.incidentInfo.incidentTitle,
        assignee: props.incidentInfo.assignee,
        area: props.incidentInfo.area,
        startDate: props.incidentInfo.startDate,
        dueDate: props.incidentInfo.dueDate,
        description: props.incidentInfo.description,
        priority: props.incidentInfo.priority,
        status: props.incidentInfo.status,
        priorityIcon: props.incidentInfo.priorityIcon
    };

    useEffect((): void => {
        props.setIncidentFormEditValues({ ...incident });
        form.setFieldsValue({
            incidentTitle: incident.incidentTitle,
            assignee: incident.assignee,
            area: incident.area,
            startDate: moment(incident.startDate),
            dueDate: moment(incident.dueDate),
            description: incident.description,
            priority: incident.priority,
            status: incident.status
        });
    }, [
        incident.incidentTitle,
        incident.assignee,
        incident.area,
        incident.startDate,
        incident.dueDate,
        incident.description,
        incident.priority,
        incident.status
    ]);

    const onValuesChange = (value: IIncidents): void => {
        props.setIncidentFormEditValues(value);
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
        props.editIncident(
            incident._id,
            values.incidentTitle,
            values.assignee,
            values.area,
            moment(incident.startDate).utc(true),
            values.dueDate.utc(true),
            values.description,
            values.priority,
            values.status
        );
    };

    if (props.incidentIsLoading) {
        return <Loader />;
    }

    return (
        <IncidentForm
            formName="edit"
            onFinish={onFinish}
            onValuesChange={onValuesChange}
            disabledDate={props.disabledDate}
            users={props.users}
            incident={incident}
        />
    );
};

export default EditIncident;
