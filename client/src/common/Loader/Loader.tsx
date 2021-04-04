import { Col, Row, Spin } from 'antd';
import React, { FC } from 'react';
import { LoadingOutlined } from '@ant-design/icons/lib';
import { LoaderStyle } from 'common/Loader/Loader.styles';

const loaderIcon = <LoadingOutlined className="loader-icon" spin />;

const Loader: FC = () => (
    <>
        <LoaderStyle />
        <Row justify="space-around" align="middle" className="loader-style">
            <Col>
                <Spin
                    className="loader-spin-style"
                    size="large"
                    indicator={loaderIcon}
                />
            </Col>
        </Row>
    </>
);
export default Loader;
