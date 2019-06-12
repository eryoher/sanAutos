import React, { Component } from 'react'
import { Col, Row } from 'antd';
import GridPromotions from '../promotions/gridPromotions';

export default class Promotions extends Component {

    render() {
        return (
            <Row>
                <Col span={24} >
                    <Col span={24} className={"title-promotions"}>
                        <b className={"cond"} >OFERTAS</b>{/*  <span className={"color-white"}>de donación</span> */}
                    </Col>
                    <GridPromotions />
                </Col>
                <Col span={24}>
                    <div className={"border-bottom-information"} />
                </Col>
            </Row>
        )
    }
}