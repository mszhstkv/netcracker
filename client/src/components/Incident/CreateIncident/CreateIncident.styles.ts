import { Button } from 'antd';
import styled from 'styled-components';

export const CreateIncidentButton = styled(Button)`
    background: #b07fb9;
    color: #fff;
    border: none;
    margin-bottom: 20px;
    margin-top: 0px;
    float: right;

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
