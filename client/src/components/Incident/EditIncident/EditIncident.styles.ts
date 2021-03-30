import {Button} from "antd";
import styled from "styled-components";

export const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 12,
            offset: 10,
        }
    },
};

export const layout = {

    labelCol: {
        xs: {span: 7, offset: 0},

    },
    wrapperCol: {
        xs: {span: 17, offset: 0},
    },
};

export const EditIncidentPopoverButton = styled(Button)`
    background: #b07fb9;
    color: #fff;
    border: none;
    
    &:hover {
    background: #b07fb9;
    box-shadow: 0px 0px 10px 4px rgba(34, 60, 80, 0.2);
    border-color: #2b2d42;
    border: 1px solid;
    color: #2b2d42;
    }
    
    &:focus {
    background: #b07fb9;
    border-color: #2b2d42;
    color: #2b2d42;
    }
`;