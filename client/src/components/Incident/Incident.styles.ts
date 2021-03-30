import {Button} from "antd";
import styled from "styled-components";

export const ActionButton = styled(Button)`
    color: #b07fb9;
    
    &:hover {
    background: #b07fb9;
    box-shadow: 0px 0px 10px 4px rgba(34, 60, 80, 0.2);
    border-color: #fff;
    border: 1px solid;
    color: #fff;
    }
    
    &:focus {
    background: #b07fb9;
    border-color: #2b2d42;
    color: #fff;
    }
    
    &.ant-table-thead > tr >th{
    color: #black;
    background: #black !important;
}
`;

