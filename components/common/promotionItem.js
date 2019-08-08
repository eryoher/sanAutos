import React, { Component } from 'react'
import { Row, Col, Button } from 'antd';
import Router from 'next/router'
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

export default class PromotionItem extends Component {

    handleClickButton() {
        const { promotion } = this.props
        Router.push({ pathname: '/promotion', query: { id: promotion.id } });
    }

    render() {
        const { promotion } = this.props        
        let imgUrl = '../../static/img/no-imagen.jpg'
        
        if (promotion.assets.length) {
            imgUrl = `${publicRuntimeConfig.productImagesBasePath}${promotion.assets[0].name}`;
        }

        return (
            <Col span={24} className={'carrusel-item'}
                style={{ backgroundImage: `url(${imgUrl})`}}
                onClick={() => this.handleClickButton()}
                type={'primary'} >
            </Col>
        )
    }
}