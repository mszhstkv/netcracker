import {Col, Row, Space} from 'antd';
import React, {FC, PropsWithChildren} from 'react';
import {StyledHeader, Title, Text, ButtonLogout, headerLayoutTitle, headerLayoutLoginAndButton} from "./Header.styles";
import {DatabaseFilled} from "@ant-design/icons/lib";

type PropsType = {
    userLogin: string | null
    logout: () => void
};

const Header: FC<PropsType> = (props: PropsWithChildren<PropsType>) => {
    return (
        <StyledHeader>
            <Row>
                <Col {...headerLayoutTitle}>
                    <Title>
                        <DatabaseFilled/>
                        Incident store
                    </Title>
                </Col>
                <Col {...headerLayoutLoginAndButton}>
                    {
                        props.userLogin &&
                        <Space size='large'>
                          <Text>{props.userLogin}</Text>
                          <ButtonLogout ghost onClick={() => {
                              props.logout()
                          }}>
                            Logout
                          </ButtonLogout>
                        </Space>
                    }
                </Col>
            </Row>
        </StyledHeader>
    )
}

export default Header;