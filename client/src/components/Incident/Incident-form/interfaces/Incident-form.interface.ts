import moment from 'moment';
import { Incidents, Users } from 'common/interfaces/interfaces';

export interface IncidentFormProps {
    formName: string;
    onFinish: (values: {
        incidentTitle: string;
        assignee: string;
        area: string;
        dueDate: moment.Moment;
        description: string;
        priority: string;
        status: string;
    }) => void;
    incident?: Incidents | undefined;
    disabledDate: (current: moment.Moment) => boolean;
    users: Users[];
}