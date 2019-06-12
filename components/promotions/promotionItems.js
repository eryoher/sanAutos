import React, { Component } from 'react'
import { Col } from 'antd';
import getConfig from 'next/config';
import Router from 'next/router'

const { publicRuntimeConfig } = getConfig();

export default class PromotionItems extends Component {

    handleClickButton() {
        const { promotion } = this.props
        Router.push({ pathname: '/promotion', query: { id: promotion.id } });
    }

    render() {
        const { promotion } = this.props

        let imgUrl = '../../static/img/no-imagen.png'
        let imgUnderline = '../../static/img/bg-underline.svg'
        if (promotion.assets.length) {
            imgUrl = `${publicRuntimeConfig.promotionImagesBasePath}${promotion.assets[0].name}`;
        }
        let donation = promotion.donation.toLocaleString('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 0 })
        let price = promotion.price.toLocaleString('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 0 })
        let discount = (promotion.price - (promotion.price * (promotion.discount / 100))).toLocaleString('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 0 })
        return (
            <Col span={6} className={'card-Promotion'} onClick={() => this.handleClickButton()} type={'primary'} >
                <Col span={24} className={'card-photo'} style={{ backgroundImage: `url(${imgUrl})` }} />
                <Col span={24} className={'card-text'} >
                    <Col span={20} className={'card-title'} >{promotion.company.name}</Col>
                    <Col span={4} className={'card-discount'} >{promotion.discount}%</Col>
                    <Col span={24} className={'card-description'}>{promotion.shortdescription}</Col>
                    <Col span={24} className={'card-deal'}>
                        <Col span={24} className={'valor'}> Donación:</Col>
                        <Col span={24}>{donation}</Col>
                        <Col span={24} className={'valor'}>  Valor Comercial:</Col>
                        <Col span={10} offset={2} className={'underline'} style={{ backgroundImage: `url(${imgUnderline})` }} >
                            {price}
                        </Col>
                        <Col span={10} className={'withdiscount'} >{discount}</Col>
                    </Col>
                </Col>
            </Col>
        )
    }
}