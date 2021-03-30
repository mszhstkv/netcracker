import {Col, Row, Spin} from "antd";
import React, {FC} from "react";
import {LoadingOutlined} from "@ant-design/icons/lib";

const loaderIcon = <LoadingOutlined style={{ fontSize: 50, color: '#b07fb9' }} spin />

const Loader: FC = () => {
    return (
        <>
            <Row justify="space-around" align="middle" style={{marginTop: 'calc(50vh - 129px)'}}>
                <Col>
                    <Spin style={{color: 'black'}} size='large' indicator={loaderIcon}/>
                </Col>
            </Row>
        </>
    )
}

export default Loader;