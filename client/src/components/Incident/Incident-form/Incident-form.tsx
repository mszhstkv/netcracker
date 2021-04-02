import React, { FC, PropsWithChildren, ReactElement } from 'react';
import { DatePicker, Form, Input, Select, Space } from 'antd';
import moment from 'moment';
import { IncidentsType, UsersType } from 'common/types/types';
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

const { Option } = Select;
const { TextArea } = Input;

type PropsType = {
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
    onValuesChange: (value: IncidentsType) => void;
    incident?: IncidentsType | undefined;
    disabledDate: (current: moment.Moment) => boolean;
    users: Array<UsersType>;
};

let buttonText: string = '';

const IncidentForm: FC<PropsType> = ({
    formName,
    onFinish,
    onValuesChange,
    incident,
    disabledDate,
    users
}: PropsWithChildren<PropsType>) => {
    const [form] = Form.useForm();

    if (formName === 'create') {
        buttonText = 'Create';
    } else if (formName === 'edit') {
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

    if (incident !== undefined) {
        initialValuesForm = { ...incident };
        initialValuesForm.dueDate = moment(initialValuesForm.dueDate);
        initialValuesForm.startDate = moment(initialValuesForm.startDate);
    } else {
        initialValuesForm.startDate = moment().utc(true);
    }

    return (
        <Form
            form={form}
            {...layout}
            name={formName}
            onFinish={onFinish}
            scrollToFirstError
            initialValues={{ remember: true }}
            onValuesChange={onValuesChange}
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
                    {users.map(
                        (user: UsersType): ReactElement => {
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
