import { Col, Row, Space } from 'antd';
import React, { FC, PropsWithChildren } from 'react';
import { DatabaseFilled } from '@ant-design/icons/lib';
import {
    StyledHeader,
    Title,
    Text,
    ButtonLogout,
    headerLayoutTitle,
    headerLayoutLoginAndButton
} from 'components/header/header.styles';
import { HeaderProps } from 'components/header/interfaces/header.component.interfaces';

const Header: FC<HeaderProps> = ({
    userLogin,
    logout
}: PropsWithChildren<HeaderProps>) => (
    <StyledHeader>
        <Row>
            <Col {...headerLayoutTitle}>
                <Title>
                    <DatabaseFilled />
                    Incident store
                </Title>
            </Col>
            <Col {...headerLayoutLoginAndButton}>
                {userLogin && (
                    <Space size="large">
                        <Text>{userLogin}</Text>
                        <ButtonLogout
                            ghost
                            onClick={() => {
                                logout();
                            }}
                        >
                            Logout
                        </ButtonLogout>
                    </Space>
                )}
            </Col>
        </Row>
    </StyledHeader>
);

export default Header;
