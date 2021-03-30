import React, {FC, PropsWithChildren, ReactElement, useEffect, useState} from 'react';
import {DatePicker, Form, Input, Popover, Select, Space} from "antd";
import {
    CreateIncidentButton,
    CreateIncidentPopoverButton,
    layout,
    tailFormItemLayout
} from "../CreateIncident/CreateIncident.styles";
import {PlusOutlined} from "@ant-design/icons/lib";
import moment from 'moment';
import {BlockerSvg, CriticalSvg, MajorSvg, MinorSvg, NormalSvg} from "../icons/prioritiesIcons";
import {areas, statuses} from "../common/common";
import Loader from "../../common/Loader/Loader";
import {IncidentFormType, IncidentsType, UsersType} from "../../../types/types";

const {Option} = Select;
const {TextArea} = Input;

type PropsType = {
    users: Array<UsersType>
    create: (incidentTitle: string, assignee: string, area: string,
             startDate: moment.Moment, dueDate: moment.Moment, description: string,
             priority: string, status: string) => void
    disabledDate: (current: moment.Moment) => boolean
    setIncidentFormCreateValues: (value: IncidentsType) => void
    incidentFormCreate: IncidentFormType
    incidentIsLoading: boolean

}

const CreateIncident: FC<PropsType> = (props: PropsWithChildren<PropsType>) => {
    const [form] = Form.useForm();

    const [hide, setHide] = useState(false);

    useEffect((): void => {
        form.setFieldsValue({...props.incidentFormCreate});
    }, [props.incidentFormCreate])

    const onValuesChange = (value: IncidentsType) => {
        props.setIncidentFormCreateValues(value);
    }

    const onFinish = (values: {
        incidentTitle: string, assignee: string, area: string, dueDate: moment.Moment,
        description: string, priority: string, status: string
    }): void => {
        const startDate: moment.Moment = moment().utc(true);
        props.create(values.incidentTitle, values.assignee, values.area,
            startDate, values.dueDate, values.description, values.priority, values.status);
    }

    const createIncidentForm = (
        <Form
            form={form}
            {...layout}
            name="createIncidentForm"
            onFinish={onFinish}
            scrollToFirstError
            initialValues={{remember: true}}
            onValuesChange={onValuesChange}
        >
            <Form.Item
                name="incidentTitle"
                label="Incident title"
                rules={[{required: true, message: 'Please input incident title', whitespace: false}]}
            >
                <TextArea allowClear showCount maxLength={50}/>
            </Form.Item>
            <Form.Item name="assignee" label="Assignee">
                <Select
                    placeholder="Select assigner"
                    allowClear
                >
                    {
                        props.users.map((user: UsersType): ReactElement => {
                            let userValue = user.fullName + ' | ' + user.login
                            return <Option key={user._id} value={userValue}>{userValue}</Option>
                        })
                    }
                </Select>
            </Form.Item>
            <Form.Item name="area" label="Area" rules={[{required: true, message: 'Please select area'}]}>
                <Select>
                    {
                        areas.map((area: string) => <Option key={area} value={area}>{area}</Option>)
                    }
                </Select>
            </Form.Item>
            <Form.Item name="startDate" label="Start date">
                <DatePicker defaultValue={moment().utc(true)} disabled={true}/>
            </Form.Item>
            <Form.Item name="dueDate" label="Due date" rules={[{required: true, message: 'Please select due date'}]}>
                <DatePicker disabledDate={props.disabledDate}/>
            </Form.Item>
            <Form.Item
                name="description"
                label="Description"
                rules={[{required: true, message: 'Please input description', whitespace: true}]}
            >
                <TextArea allowClear/>
            </Form.Item>
            <Form.Item
                name="priority"
                label="Priority"
                rules={[{required: true, message: 'Please select priority'}]}
            >
                <Select>
                    <Option value='blocker'>Blocker <BlockerSvg/></Option>
                    <Option value='critical'>Critical <CriticalSvg/></Option>
                    <Option value='major'>Major <MajorSvg/></Option>
                    <Option value='normal'>Normal <NormalSvg/></Option>
                    <Option value='minor'>Minor <MinorSvg/></Option>
                </Select>
            </Form.Item>
            <Form.Item
                name="status"
                label="Status"
                rules={[{required: true, message: 'Please select status'}]}
            >
                <Select>
                    {
                        statuses.map((status: string) => <Option key={status} value={status}>{status}</Option>)
                    }
                </Select>
            </Form.Item>
            <Form.Item {...tailFormItemLayout}>
                <Space size={"large"}>
                <CreateIncidentPopoverButton type="primary" htmlType="submit">
                    Create
                </CreateIncidentPopoverButton>
                <CreateIncidentPopoverButton onClick={() => setHide(false)}>
                    Close
                </CreateIncidentPopoverButton>
                </Space>
            </Form.Item>
        </Form>
    );

    if (props.incidentIsLoading) {
        return <Loader/>
    }

    return (
        <Popover content={createIncidentForm} title="Create new incident" trigger="click" placement={'left'} visible={hide}>
            <CreateIncidentButton onClick={() => setHide(true)}><PlusOutlined/>Create incident</CreateIncidentButton>
        </Popover>
    )
}

export default CreateIncident;