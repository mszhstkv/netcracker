import React, { FC, memo, PropsWithChildren, useCallback } from 'react';
import moment from 'moment';
import Loader from 'common/loader.component';
import IncidentForm from 'components/incidents/incident-form/incident-form.component';
import {
    EditIncidentOnFinish,
    EditIncidentProps
} from 'components/incidents/edit-incident/edit-incident.interfaces';
import { connect } from 'react-redux';
import { editIncident } from '../../../redux/actions/incident.actions';
import { AppStateType } from '../../../redux/store';

const EditIncident: FC<EditIncidentProps> = memo(
    ({
        editIncidentAction,
        users,
        incidentIsLoading,
        disabledDate,
        incidentInfo
    }: PropsWithChildren<EditIncidentProps>) => {
        const onFinish = useCallback(
            (values: EditIncidentOnFinish): void => {
                editIncidentAction({
                    ...values,
                    _id: incidentInfo._id,
                    startDate: moment(incidentInfo.startDate).utc(true),
                    dueDate: values.dueDate.utc(true)
                });
            },
            // eslint-disable-next-line react-hooks/exhaustive-deps
            [editIncidentAction]
        );

        if (incidentIsLoading) {
            return <Loader />;
        }

        return (
            <IncidentForm
                onFinish={onFinish}
                disabledDate={disabledDate}
                users={users}
                incident={incidentInfo}
            />
        );
    }
);

const mapStateToProps = (state: AppStateType) => ({
    users: state.incident.users,
    incidentIsLoading: state.incident.incidentIsLoading
});

export default connect(mapStateToProps, { editIncidentAction: editIncident })(
    EditIncident
);
