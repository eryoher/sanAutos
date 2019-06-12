import React, { Component } from 'react'
import { Col, Row } from 'antd';
import GridInterests from './gridInterests';

export default class Interests extends Component {

    render() {
        return (
            <Row>
                <Col span={24}>
                    <div className={"border-bottom-information"} />
                    <Col span={24} className={"title-Interests"} >
                        <span className={"interest-bold"} >Quizá te pueda </span> <span className={"interest-blue"} >interesar</span>
                    </Col>
                    <Col span={24}>
                        <GridInterests />
                    </Col>
                </Col>
            </Row>
        )
    }
}