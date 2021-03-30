import {Button, Typography} from "antd";
import styled from "styled-components";

export const tailFormItemLayout = {
    wrapperCol: {
        xs: {span: 24},
        sm: {span: 22, offset: 1},
        md: {span: 12, offset: 6},
        lg: {span: 10, offset: 7},
        xl: {span: 10, offset: 7}
    }
};

export const formLayout = {
    xs: {span: 22, offset: 1},
    sm: {span: 14, offset: 5},
    md: {span: 12, offset: 6},
    lg: {span: 10, offset: 7},
    xl: {span: 10, offset: 7}
}

export const formItemLayout = {
    labelCol: {
        xs: {span: 23, offset: 1},
        sm: {span: 8, offset: 1},
        md: {span: 7, offset: 1},
        lg: {span: 6, offset: 1},
        xl: {span: 5, offset: 1}
    },
    wrapperCol: {
        xs: {span: 24},
        sm: {span: 13, offset: 1},
        md: {span: 14, offset: 1},
        lg: {span: 15, offset: 1},
        xl: {span: 16, offset: 1}
    },
};

export const Title = styled(Typography.Title)`
    background: #2b2d42;
    padding: 20px 0 20px 0;
    text-align: center;
    &.ant-typography {
        color: #fff;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
    
        @media (max-width: 500px) {
            font-size: 30px;
        }
        @media (max-width: 400px) {
            font-size: 26px;
        }        
    }
`;

export const RegisterButton = styled(Button)`
    background: #2b2d42;
    width: 100%;
    border: none;
    border-radius: 10px;
    margin-bottom: 10px;
   
    &:hover {
    background: #b07fb9;
    box-shadow: 0px 0px 10px 4px rgba(34, 60, 80, 0.2);
    }
    
    &:focus {
    background: #b07fb9;
    }
`;

export const LoginButton = styled(Button)`
    border: none;
    margin: 10px 0 10px 0;
    box-shadow: none;
    width: 100%;
    
    &:hover {
    background: rgba(34, 60, 80, 0.2);
    box-shadow: 0px 0px 10px 4px rgba(34, 60, 80, 0.2);
    }
`;