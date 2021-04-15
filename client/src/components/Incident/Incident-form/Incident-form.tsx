import React, { FC, PropsWithChildren, ReactElement } from 'react';
import { DatePicker, Form, Input, Select, Space } from 'antd';
import moment from 'moment';
import { Users } from 'common/interfaces/interfaces';
import {
    BlockerSvg,
    CriticalSvg,
    MajorSvg,
    MinorSvg,
    NormalSvg
} from 'common/icons/prioritiesIcons';
import {
    areas,
    statuses
} from 'components/Incident/Incident-form/area-and-status';
import {
    IncidentFormButton,
    tailFormItemLayout,
    layout
} from 'components/Incident/Incident-form/Incident-form.styles';
import { IncidentFormProps } from 'components/Incident/Incident-form/interfaces/Incident-form.interface';

const { Option } = Select;
const { TextArea } = Input;

let buttonText: string = '';

const IncidentForm: FC<IncidentFormProps> = ({
    ...props
}: PropsWithChildren<IncidentFormProps>) => {
    const [form] = Form.useForm();

    if (props.formName === 'create') {
        buttonText = 'Create';
    } else if (props.formName === 'edit') {
        buttonText = 'Edit';
    }

    let initialValuesForm = {
        incidentTitle: '',
        area: '',
        assignee: '',
        startDate: '' as string | moment.Moment,
        dueDate: '' as string | moment.Moment,
        description: '',
        status: '',
        priority: ''
    };

    if (props.incident !== undefined) {
        initialValuesForm = { ...props.incident };
        initialValuesForm.dueDate = moment(initialValuesForm.dueDate);
        initialValuesForm.startDate = moment(initialValuesForm.startDate);
    } else {
        initialValuesForm.startDate = moment().utc(true);
    }

    return (
        <Form
            form={form}
            {...layout}
            name={props.formName}
            onFinish={props.onFinish}
            scrollToFirstError
            initialValues={{ remember: true }}
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
                initialValue={initialValuesForm.incidentTitle}
            >
                <TextArea allowClear showCount maxLength={50} />
            </Form.Item>
            <Form.Item
                name="assignee"
                label="Assignee"
                initialValue={initialValuesForm.assignee}
            >
                <Select placeholder="Select assigner" allowClear>
                    {props.users.map(
                        (user: Users): ReactElement => {
                            const userValue = `${user.fullName} | ${user.login}`;
                            return (
                                <Option key={user._id} value={userValue}>
                                    {userValue}
                                </Option>
                            );
                        }
                    )}
                </Select>
            </Form.Item>
            <Form.Item
                name="area"
                label="Area"
                rules={[{ required: true, message: 'Please select area' }]}
                initialValue={initialValuesForm.area}
            >
                <Select>
                    {areas.map((area: string) => (
                        <Option key={area} value={area}>
                            {area}
                        </Option>
                    ))}
                </Select>
            </Form.Item>
            <Form.Item
                name="startDate"
                label="Start date"
                initialValue={initialValuesForm.startDate}
            >
                <DatePicker disabled />
            </Form.Item>
            <Form.Item
                name="dueDate"
                label="Due date"
                rules={[{ required: true, message: 'Please select due date' }]}
                initialValue={initialValuesForm.dueDate}
            >
                <DatePicker disabledDate={props.disabledDate} />
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
                initialValue={initialValuesForm.description}
            >
                <TextArea allowClear />
            </Form.Item>
            <Form.Item
                name="priority"
                label="Priority"
                rules={[{ required: true, message: 'Please select priority' }]}
                initialValue={initialValuesForm.priority}
            >
                <Select>
                    <Option value="blocker">
                        Blocker <BlockerSvg />
                    </Option>
                    <Option value="critical">
                        Critical <CriticalSvg />
                    </Option>
                    <Option value="major">
                        Major <MajorSvg />
                    </Option>
                    <Option value="normal">
                        Normal <NormalSvg />
                    </Option>
                    <Option value="minor">
                        Minor <MinorSvg />
                    </Option>
                </Select>
            </Form.Item>
            <Form.Item
                name="status"
                label="Status"
                rules={[{ required: true, message: 'Please select status' }]}
                initialValue={initialValuesForm.status}
            >
                <Select>
                    {statuses.map((status: string) => (
                        <Option key={status} value={status}>
                            {status}
                        </Option>
                    ))}
                </Select>
            </Form.Item>
            <Form.Item {...tailFormItemLayout}>
                <Space size="large">
                    <IncidentFormButton type="primary" htmlType="submit">
                        {buttonText}
                    </IncidentFormButton>
                </Space>
            </Form.Item>
        </Form>
    );
};

export default IncidentForm;
