import {Button, Typography} from 'antd';
import styled from "styled-components";

export const layout = {
    labelCol: { span: 5, offset: 1},
    wrapperCol: {
        xs: {span: 15, offset: 0},
        sm: {span: 15, offset: 1},
    }
};

export const loginLayout = {
    xs: {span: 24, offset: 0},
    sm: {span: 20, offset: 2},
    md: {span: 18, offset: 3},
    lg: {span: 12, offset: 6},
    xl: {span: 10, offset: 7}
}

export const titleLayout = {
    xs: {span: 0},
    lg: {span: 8}
}

export const formLayout = {
    xs: {span: 24},
    lg: {span: 16}
}

export const tailLayout = {
    wrapperCol: {
        xs: {span: 22, offset: 0},
        sm: {span: 22, offset: 1}
    }
};

export const Title = styled(Typography.Title)`
    &.ant-typography {
        color: #fff;
        background-color: #2b2d42;
        text-align: center;
        margin: 0;
        height: 100%;
        padding: 20px 0 20px 0;
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
        
        @media (max-width: 1250px) {
            font-size: 30px;
        }
        @media (max-width: 1050px) {
            font-size: 30px;
        }
        @media (max-width: 992px) {
            display: none;
        }
    }
`;

export const LoginButton = styled(Button)`
    background: #2b2d42;
    width: 100%;
    border: none;
    border-radius: 10px;
   
    &:hover {
    background: #b07fb9;
    box-shadow: 0px 0px 10px 4px rgba(34, 60, 80, 0.2);
    }
    
    &:focus {
    background: #b07fb9;
    }
`;

export const RegisterButton = styled(Button)`
    border: none;
    box-shadow: none;
    width: 100%;
    margin: 0 0 0 4px;
    
    &:hover {
    background: rgba(34, 60, 80, 0.2);
    box-shadow: 0px 0px 10px 4px rgba(34, 60, 80, 0.2);
    }
`;