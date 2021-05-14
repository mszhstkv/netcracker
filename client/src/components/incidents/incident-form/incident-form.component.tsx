import React, { FC, PropsWithChildren, useMemo } from 'react';
import { DatePicker, Form, Input, Select, Space } from 'antd';
import moment, { Moment } from 'moment';
import { Users } from 'common/interfaces';
import {
    INCIDENT_AREA_OPTIONS,
    INCIDENT_PRIORITY_OPTIONS,
    INCIDENT_STATUSES_OPTIONS,
    MAX_TITLE_LENGTH
} from 'components/incidents/incident-form/incident-form.constants';
import {
    IncidentFormButton,
    tailFormItemLayout,
    layout
} from 'components/incidents/incident-form/incident-form.styles';
import { IncidentFormProps } from 'components/incidents/incident-form/incident-form.interfaces';

const { TextArea } = Input;

const IncidentForm: FC<IncidentFormProps> = ({
    disabledDate,
    users,
    onFinish,
    incident
}: PropsWithChildren<IncidentFormProps>) => {
    let initialValuesForm = {
        incidentTitle: '',
        area: '',
        assignee: '',
        startDate: '' as string | Moment,
        dueDate: '' as string | Moment,
        description: '',
        status: '',
        priority: ''
    };

    const incidentUsersOptions = useMemo(
        () =>
            users.map((user: Users) => {
                const userValue = `${user.fullName} | ${user.login}`;
                return {
                    label: userValue,
                    value: userValue
                };
            }),
        [users]
    );

    if (incident !== undefined) {
        initialValuesForm = { ...incident };
        initialValuesForm.dueDate = moment(initialValuesForm.dueDate);
        initialValuesForm.startDate = moment(initialValuesForm.startDate);
    } else {
        initialValuesForm.startDate = moment().utc(true);
    }

    return (
        <Form
            {...layout}
            name="incidentForm"
            onFinish={onFinish}
            scrollToFirstError
            initialValues={{ ...initialValuesForm }}
        >
            <Form.Item
                name="incidentTitle"
                label="Incident title"
                rules={[
                    {
                        required: true,
                        message: 'Please input incident title',
                        whitespace: false
                    }
                ]}
            >
                <TextArea allowClear showCount maxLength={MAX_TITLE_LENGTH} />
            </Form.Item>
            <Form.Item name="assignee" label="Assignee">
                <Select
                    placeholder="Select assigner"
                    allowClear
                    options={incidentUsersOptions}
                />
            </Form.Item>
            <Form.Item
                name="area"
                label="Area"
                rules={[{ required: true, message: 'Please select area' }]}
            >
                <Select options={INCIDENT_AREA_OPTIONS} />
            </Form.Item>
            <Form.Item name="startDate" label="Start date">
                <DatePicker disabled />
            </Form.Item>
            <Form.Item
                name="dueDate"
                label="Due date"
                rules={[{ required: true, message: 'Please select due date' }]}
            >
                <DatePicker disabledDate={disabledDate} />
            </Form.Item>
            <Form.Item
                name="description"
                label="Description"
                rules={[
                    {
                        required: true,
                        message: 'Please input description',
                        whitespace: true
                    }
                ]}
            >
                <TextArea allowClear />
            </Form.Item>
            <Form.Item
                name="priority"
                label="Priority"
                rules={[{ required: true, message: 'Please select priority' }]}
            >
                <Select options={INCIDENT_PRIORITY_OPTIONS} />
            </Form.Item>
            <Form.Item
                name="status"
                label="Status"
                rules={[{ required: true, message: 'Please select status' }]}
            >
                <Select options={INCIDENT_STATUSES_OPTIONS} />
            </Form.Item>
            <Form.Item {...tailFormItemLayout}>
                <Space size="large">
                    <IncidentFormButton type="primary" htmlType="submit">
                        Confirm
                    </IncidentFormButton>
                </Space>
            </Form.Item>
        </Form>
    );
};

export default IncidentForm;
