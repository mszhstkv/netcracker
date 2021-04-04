import moment from 'moment';
import { IIncidents, IUsers } from 'common/interfaces/interfaces';

export interface IIncidentFormProps {
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
    onValuesChange: (value: IIncidents) => void;
    incident?: IIncidents | undefined;
    disabledDate: (current: moment.Moment) => boolean;
    users: Array<IUsers>;
}