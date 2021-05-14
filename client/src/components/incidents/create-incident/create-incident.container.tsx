import React, { FC, memo, PropsWithChildren, useCallback } from 'react';
import { Popover } from 'antd';
import { PlusOutlined } from '@ant-design/icons/lib';
import { CreateIncidentButton } from 'components/incidents/create-incident/create-incident.styles';
import Loader from 'common/loader.component';
import IncidentForm from 'components/incidents/incident-form/incident-form.component';
import {
    CreateIncidentOnFinish,
    CreateIncidentProps
} from 'components/incidents/create-incident/create-incident.interfaces';
import moment, { Moment } from 'moment';
import { connect } from 'react-redux';
import { createIncident } from 'redux/actions/incident.actions';
import { AppStateType } from 'redux/store';

const CreateIncident: FC<CreateIncidentProps> = memo(
    ({
        createIncidentAction,
        disabledDate,
        incidentIsLoading,
        users
    }: PropsWithChildren<CreateIncidentProps>) => {
        const onFinish = useCallback(
            (values: CreateIncidentOnFinish): void => {
                const startDate: Moment = moment().utc(true);
                createIncidentAction({
                    ...values,
                    startDate
                });
            },
            [createIncidentAction]
        );

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
    }
);

const mapStateToProps = (state: AppStateType) => ({
    users: state.incident.users,
    incidentIsLoading: state.incident.incidentIsLoading
});

export default connect(mapStateToProps, {
    createIncidentAction: createIncident
})(CreateIncident);
