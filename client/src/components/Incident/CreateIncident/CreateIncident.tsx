import React, { FC, PropsWithChildren } from 'react';
import { Popover } from 'antd';
import { PlusOutlined } from '@ant-design/icons/lib';
import { CreateIncidentButton } from 'components/Incident/CreateIncident/CreateIncident.styles';
import Loader from 'common/Loader/Loader';
import IncidentForm from 'components/Incident/Incident-form/Incident-form';
import {
    CreateIncidentOnFinish,
    CreateIncidentProps
} from 'components/Incident/CreateIncident/features/interfaces/CreateIncident.interfaces';
import moment, { Moment } from 'moment';
import { connect } from 'react-redux';
import { createIncident } from 'redux/actions/incident.actions';
import { AppStateType } from 'redux/store';

const CreateIncident: FC<CreateIncidentProps> = ({
    createIncidentAction,
    disabledDate,
    incidentIsLoading,
    users
}: PropsWithChildren<CreateIncidentProps>) => {
    const onFinish = (values: CreateIncidentOnFinish): void => {
        const startDate: Moment = moment().utc(true);
        createIncidentAction({
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

    if (incidentIsLoading) {
        return <Loader />;
    }

    return (
        <Popover
            content={
                <IncidentForm
                    onFinish={onFinish}
                    disabledDate={disabledDate}
                    users={users}
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

const mapStateToProps = (state: AppStateType) => ({
    users: state.incident.users,
    incidentIsLoading: state.incident.incidentIsLoading
});

export default connect(mapStateToProps, {
    createIncidentAction: createIncident
})(CreateIncident);
