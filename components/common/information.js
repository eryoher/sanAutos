import React, { Component } from 'react'
import { Row, Col } from 'antd';
import Information from './informationPromotion';
import ListPromotions from '../promotions/listPromotions';
const dividerColumn = {
    xs: { span: 0 },
    sm: { span: 0 },
    md: { span: 0 },
    lg: { span: 7 },
    xl: { span: 7 },
}
const dividerColumnProd = {
    xs: { span: 24 },
    sm: { span: 24 },
    md: { span: 24 },
    lg: { span: 17 },
    xl: { span: 17 },
}


export default class Promotions extends Component {

    render() {
        return (
            <Row>
                <Col {...dividerColumn} >
                    <Information />
                </Col>
                <Col {...dividerColumnProd} >
                    <ListPromotions />
                </Col>
                <Col span={24}>
                    <div className={"border-bottom-information"} />
                </Col>
            </Row>
        )
    }
}