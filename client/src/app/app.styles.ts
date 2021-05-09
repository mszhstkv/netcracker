import styled from 'styled-components';
import { Layout } from 'antd';

export const Content = styled(Layout.Content)`
    height: 100%;
    background: #f7f7f7;
    padding: 50px 50px 0 50px;
    @media (max-width: 576px) {
        padding: 50px 20px 0 20px;
    }
`;
