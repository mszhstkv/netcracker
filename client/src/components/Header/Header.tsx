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
} from 'components/Header/Header.styles';
import { HeaderProps } from 'components/Header/interfaces/Header.interfaces';

const Header: FC<HeaderProps> = ({
    ...props
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
                {props.userLogin && (
                    <Space size="large">
                        <Text>{props.userLogin}</Text>
                        <ButtonLogout
                            ghost
                            onClick={() => {
                                props.logout();
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
