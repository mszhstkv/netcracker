import React, { FC, PropsWithChildren } from 'react';
import moment from 'moment';
import Loader from 'common/Loader/Loader';
import IncidentForm from 'components/Incident/Incident-form/Incident-form';
import {
    EditIncidentOnFinish,
    EditIncidentProps
} from 'components/Incident/EditIncident/features/interfaces/EditIncident.interface';
import { connect } from 'react-redux';
import { editIncident } from '../../../redux/actions/incident.actions';
import { AppStateType } from '../../../redux/store';

const EditIncident: FC<EditIncidentProps> = ({
    editIncidentAction,
    users,
    incidentIsLoading,
    disabledDate,
    incidentInfo
}: PropsWithChildren<EditIncidentProps>) => {
    const onFinish = (values: EditIncidentOnFinish): void => {
        editIncidentAction({
            _id: incidentInfo._id,
            incidentTitle: values.incidentTitle,
            assignee: values.assignee,
            area: values.area,
            startDate: moment(incidentInfo.startDate).utc(true),
            dueDate: values.dueDate.utc(true),
            description: values.description,
            priority: values.priority,
            status: values.status
        });
    };

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
};

const mapStateToProps = (state: AppStateType) => ({
    users: state.incident.users,
    incidentIsLoading: state.incident.incidentIsLoading
});

export default connect(mapStateToProps, { editIncidentAction: editIncident })(
    EditIncident
);
