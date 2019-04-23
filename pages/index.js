import React, { Component } from 'react'
import { Row, Col } from 'antd';
import Banner from '../components/common/banner';
import TopPromotions from '../components/promotions/topPromotions';
import InformationPromotion from '../components/common/informationPromotion';
import Promotions from '../components/promotions/promotions';
import Allies from '../components/allies/allies';

export default class Index extends Component {
    render() {
        return (
            <Row className={"main-content"} >
                <Col span={24}>     
                    <Banner />           
                </Col> 
                <Col span={24} >
                    <TopPromotions />
                </Col>
                <Col span={24}>
                    <InformationPromotion />
                </Col>
                <Col span={24} >
                    <Promotions />
                </Col>
                <Col span={24} >
                    <Allies />
                </Col>
            </Row>
        )
    }
}
