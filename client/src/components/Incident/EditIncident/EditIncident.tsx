import React, { FC, PropsWithChildren } from 'react';
import moment from 'moment';
import Loader from 'common/Loader/Loader';
import IncidentForm from 'components/Incident/Incident-form/Incident-form';
import {
    EditIncidentOnFinish,
    EditIncidentProps
} from 'components/Incident/EditIncident/interfaces/EditIncident.interface';

const EditIncident: FC<EditIncidentProps> = ({
    ...props
}: PropsWithChildren<EditIncidentProps>) => {
    const onFinish = (values: EditIncidentOnFinish): void => {
        props.editIncident({
            _id: props.incidentInfo._id,
            incidentTitle: values.incidentTitle,
            assignee: values.assignee,
            area: values.area,
            startDate: moment(props.incidentInfo.startDate).utc(true),
            dueDate: values.dueDate.utc(true),
            description: values.description,
            priority: values.priority,
            status: values.status
        });
    };

    if (props.incidentIsLoading) {
        return <Loader />;
    }

    return (
        <IncidentForm
            formName="edit"
            onFinish={onFinish}
            disabledDate={props.disabledDate}
            users={props.users}
            incident={props.incidentInfo}
        />
    );
};

export default EditIncident;
