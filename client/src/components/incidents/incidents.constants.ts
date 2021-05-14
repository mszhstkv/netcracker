import { TablePaginationConfig } from 'antd';
import moment, { Moment } from 'moment';

export const PAGINATION_SETTINGS = {
    position: ['bottomCenter'],
    defaultPageSize: 8
} as TablePaginationConfig;

export const SCROLL_SETTINGS = {
    x: 1300
};

export const rowKeyRender = (record: { _id: string }) => record._id;

export const disabledDate = (current: Moment): boolean =>
    current && current < moment().startOf('day');

export const COLUMNS_DATA = [
    {
        title: '',
        dataIndex: 'priorityIcon',
        key: 'priorityIcon'
    },
    {
        title: 'incidents title',
        dataIndex: 'incidentTitle',
        key: 'incidentTitle'
    },
    {
        title: 'Description',
        dataIndex: 'description',
        key: 'description'
    },
    {
        title: 'Assignee',
        dataIndex: 'assignee',
        key: 'assignee'
    },
    {
        title: 'Area',
        dataIndex: 'area',
        key: 'area'
    },
    {
        title: 'Start date',
        dataIndex: 'startDate',
        key: 'startDate'
    },
    {
        title: 'Due date',
        dataIndex: 'dueDate',
        key: 'dueDate'
    },
    {
        title: 'Priority',
        dataIndex: 'priority',
        key: 'priority'
    },
    {
        title: 'Status',
        dataIndex: 'status',
        key: 'status'
    }
];
