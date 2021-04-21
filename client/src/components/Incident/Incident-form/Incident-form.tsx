import React, { FC, PropsWithChildren, useMemo } from 'react';
import { DatePicker, Form, Input, Select, Space } from 'antd';
import moment, { Moment } from 'moment';
import { Users } from 'common/interfaces/interfaces';
import {
    incidentAreasOptions,
    incidentPriorityOptions,
    incidentStatusesOptions,
    maxTitleLength
} from 'components/Incident/Incident-form/features/constants/incident.form.constants';
import {
    IncidentFormButton,
    tailFormItemLayout,
    layout
} from 'components/Incident/Incident-form/Incident-form.styles';
import { IncidentFormProps } from 'components/Incident/Incident-form/features/interfaces/Incident-form.interface';

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
                <TextArea allowClear showCount maxLength={maxTitleLength} />
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
                <Select options={incidentAreasOptions} />
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
                <Select options={incidentPriorityOptions} />
            </Form.Item>
            <Form.Item
                name="status"
                label="Status"
                rules={[{ required: true, message: 'Please select status' }]}
            >
                <Select options={incidentStatusesOptions} />
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
