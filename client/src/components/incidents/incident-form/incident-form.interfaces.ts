import { Moment } from 'moment';
import { Incidents, Users } from 'common/interfaces';

interface OnFinishValues {
    incidentTitle: string;
    assignee: string;
    area: string;
    dueDate: Moment;
    description: string;
    priority: string;
    status: string;
}

export interface IncidentFormProps {
    onFinish: (values: OnFinishValues) => void;
    incident?: Incidents | undefined;
    disabledDate: (current: Moment) => boolean;
    users: Users[];
}
