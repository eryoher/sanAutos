import React, { Component } from 'react'
import { Col } from 'antd';
import ListCategories from '../categories/listCategories';
import ListPromotions from './listPromotions';

export default class Promotions extends Component {   

    render() {
        return (
            <Col span={24} className={"promotions-container"} >
                <Col span={7} className={"menu-categories"} >
                    <ListCategories />
                </Col>
                <Col span={17} >
                    <ListPromotions />
                    
                </Col>
                <Col span={24} className={"border-bottom-promotions"} />

            </Col>
        )
    }
}