import React, { Component } from 'react'
import { Row, Col } from 'antd';
import Information from './informationPromotion';
import ListPromotions from '../promotions/listPromotions';

export default class Promotions extends Component {

    render() {
        return (
            <Row className={"promotions-container"} >
                <Col span={7} >
                    <Information />
                </Col>
                <Col span={17} className={'promotions-container'} >
                    <ListPromotions />
                </Col>
                <Col span={24}>
                    <div className={"border-bottom-information"} />
                </Col>
            </Row>
        )
    }
}