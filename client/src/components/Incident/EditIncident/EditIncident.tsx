import React, {FC, PropsWithChildren, ReactElement, useEffect} from 'react';
import {DatePicker, Form, Input, Select} from "antd";
import {EditIncidentPopoverButton, layout, tailFormItemLayout} from "./EditIncident.styles";
import moment from 'moment';
import {BlockerSvg, CriticalSvg, MajorSvg, MinorSvg, NormalSvg} from "../icons/prioritiesIcons";
import {areas, statuses} from "../common/common";
import Loader from "../../common/Loader/Loader";
import {IncidentFormType, IncidentsType, UsersType} from "../../../types/types";

const {Option} = Select;
const {TextArea} = Input;

type PropsType = {
    incidentInfo: IncidentsType
    users: Array<UsersType>
    incidentIsLoading: boolean
    editIncident: (_id: string, incidentTitle: string, assignee: string, area: string,
                   startDate: moment.Moment, dueDate: moment.Moment, description: string,
                   priority: string, status: string) => void
    disabledDate: (current: moment.Moment) => boolean
    setIncidentFormEditValues: (value: IncidentsType) => void
    incidentFormEdit: IncidentFormType
}


const EditIncident: FC<PropsType> = (props: PropsWithChildren<PropsType>) => {
    const [form] = Form.useForm();

    let incident: IncidentsType = {
        _id: props.incidentInfo._id,
        incidentTitle: props.incidentInfo.incidentTitle,
        assignee: props.incidentInfo.assignee,
        area: props.incidentInfo.area,
        startDate: props.incidentInfo.startDate,
        dueDate: props.incidentInfo.dueDate,
        description: props.incidentInfo.description,
        priority: props.incidentInfo.priority,
        status: props.incidentInfo.status,
        priorityIcon: props.incidentInfo.priorityIcon
    }

    useEffect((): void => {
        props.setIncidentFormEditValues({...incident});
        form.setFieldsValue({
            'incidentTitle': incident.incidentTitle,
            'assignee': incident.assignee,
            'area': incident.area,
            'startDate': moment(incident.startDate),
            'dueDate': moment(incident.dueDate),
            'description': incident.description,
            'priority': incident.priority,
            'status': incident.status
        });
    }, [incident.incidentTitle, incident.assignee, incident.area, incident.startDate,
        incident.dueDate, incident.description, incident.priority, incident.status])

    const onValuesChange = (value: IncidentsType) => {
        props.setIncidentFormEditValues(value);
    }

    const onFinish = (values: {
        incidentTitle: string, assignee: string, area: string, dueDate: moment.Moment,
        description: string, priority: string, status: string
    }): void => {
        props.editIncident(incident._id, values.incidentTitle, values.assignee, values.area,
            moment(incident.startDate).utc(true), values.dueDate.utc(true), values.description, values.priority, values.status);
    }

    if (props.incidentIsLoading) {
        return <Loader/>
    }

    return (
        <Form
            form={form}
            {...layout}
            name="createIncidentForm"
            onFinish={onFinish}
            scrollToFirstError
            onValuesChange={onValuesChange}
        >
            <Form.Item
                name="incidentTitle"
                label="Incident title"
                rules={[{required: true, message: 'Please input incident title', whitespace: false}]}
                initialValue={incident.incidentTitle}
            >
                <TextArea allowClear showCount maxLength={50}/>
            </Form.Item>
            <Form.Item name="assignee" label="Assignee"
                       initialValue={incident.assignee}
            >
                <Select
                    placeholder="Select assigner"
                    allowClear
                >
                    {
                        props.users.map((user: UsersType): ReactElement => {
                            let userValue = user.fullName + ' | ' + user.login;
                            return <Option key={user._id} value={userValue}>{userValue}</Option>})
                    }
                </Select>
            </Form.Item>
            <Form.Item name="area" label="Area" rules={[{required: true, message: 'Please select area'}]}
                       initialValue={incident.area}
            >
                <Select>
                    {
                        areas.map((area: string) => <Option key={area} value={area}>{area}</Option>)
                    }
                </Select>
            </Form.Item>
            <Form.Item name="startDate" label="Start date"
                       initialValue={moment(incident.startDate)}
            >
                <DatePicker disabled={true}/>
            </Form.Item>
            <Form.Item name="dueDate" label="Due date"
                       initialValue={moment(incident.dueDate)}
                       rules={[{required: true, message: 'Please select due date'}]}>
                <DatePicker disabledDate={props.disabledDate}/>
            </Form.Item>
            <Form.Item
                name="description"
                label="Description"
                rules={[{required: true, message: 'Please input description', whitespace: true}]}
                initialValue={incident.description}
            >
                <TextArea allowClear/>
            </Form.Item>
            <Form.Item
                name="priority"
                label="Priority"
                rules={[{required: true, message: 'Please select priority'}]}
                initialValue={incident.priority}
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
                initialValue={incident.status}
            >
                <Select>
                    {
                        statuses.map((status: string) => <Option key={status} value={status}>{status}</Option>)
                    }
                </Select>
            </Form.Item>
            <Form.Item {...tailFormItemLayout}>
                <EditIncidentPopoverButton type="primary" htmlType="submit">
                    Save
                </EditIncidentPopoverButton>
            </Form.Item>
        </Form>
    )
}

export default EditIncident;