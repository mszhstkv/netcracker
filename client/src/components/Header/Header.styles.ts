import styled from "styled-components";
import {Button, Layout, Typography} from "antd";

export const StyledHeader = styled(Layout.Header)`
    &.ant-layout-header {
    background: rgb(43,45,66);
    background: linear-gradient(36deg, rgba(43,45,66,1) 50%, rgba(253,175,254,1) 100%);

    }
`;

export const headerLayoutTitle = {
        xs: {span: 15},
        sm: {span: 13},
        md: {span: 15},
        lg: {span: 17},
        xl: {span: 18}
}

export const headerLayoutLoginAndButton = {
    xs: {span: 8, offset: 1},
    sm: {span: 10, offset: 1},
    md: {span: 8, offset: 1},
    lg: {span: 6, offset: 1},
    xl: {span: 5, offset: 1}
}

export const Title = styled(Typography.Title)`
    &.ant-typography {
        color: #fff;
        margin-top: 9px;
        letter-spacing: 1px;
        font-family: 'Montserrat', sans-serif;
        
        @media (max-width: 768px) {
            font-size: 30px;
            margin-top: 12px;
        }
        @media (max-width: 620px) {
            font-size: 25px;
            margin-top: 15px;
        }
        @media (max-width: 520px) {
            font-size: 18px;
            margin-top: 20px;
        }
        @media (max-width: 370px) {
            font-size: 18px;
            margin-top: 10px;
        }            
    }
`;

export const Text = styled(Typography.Text)`
    font-size: 1.1rem;
    color: #fff;
    letter-spacing: 1.5px;
    
     @media (max-width: 768px) {
        font-size: 1rem;
     }
     @media (max-width: 620px) {
        font-size: 0.8rem;
     }
     @media (max-width: 576px) {
        display: none;
     }
`;

export const ButtonLogout = styled(Button)`
    
     // @media (max-width: 550px) {
     //    font-size: 0.7rem;
            margin: 0 0 25px 0;
     // }
    
    &:hover {
    background: #b07fb9;
    border-color: #2b2d42;
    color: #2b2d42;
    }
    
    &:focus {
    background: #b07fb9;
    border-color: #2b2d42;
    color: #2b2d42;
    }
`;