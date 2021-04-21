import { Moment } from 'moment';
import { Incidents, Users } from 'common/interfaces/interfaces';

export interface IncidentFormProps {
    onFinish: (values: {
        incidentTitle: string;
        assignee: string;
        area: string;
        dueDate: Moment;
        description: string;
        priority: string;
        status: string;
    }) => void;
    incident?: Incidents | undefined;
    disabledDate: (current: Moment) => boolean;
    users: Users[];
}
