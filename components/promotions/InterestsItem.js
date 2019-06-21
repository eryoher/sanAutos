import React, { Component } from 'react'
import { Col } from 'antd';
import getConfig from 'next/config';
import Router from 'next/router'
const dividerColumn = {
    xs: { span: 24 },
    sm: { span: 24 },
    md: { span: 8 },
    lg: { span: 6 },
    xl: { span: 6 },
}
const dividerPhoto = {
    xs: { span: 10 },
    sm: { span: 10 },
    md: { span: 24 },
    lg: { span: 24 },
    xl: { span: 24 },
}
const dividerPromo = {
    xs: { span: 14 },
    sm: { span: 14 },
    md: { span: 24 },
    lg: { span: 24 },
    xl: { span: 24 },
}
const dividerDeal = {
    xs: { span: 12 },
    sm: { span: 12 },
    md: { span: 24 },
    lg: { span: 24 },
    xl: { span: 24 },
}
const { publicRuntimeConfig } = getConfig();

export default class PromotionItems extends Component {

    handleClickButton() {
        const { interest } = this.props
        Router.push({ pathname: '/promotion', query: { id: interest.id } });
    }

    render() {
        const { interest } = this.props

        let imgUrl = '../../static/img/no-imagen.png'
        let imgUnderline = '../../static/img/bg-underline.svg'
        if (interest.assets.length) {
            imgUrl = `${publicRuntimeConfig.promotionImagesBasePath}${interest.assets[0].name}`;
        }
        let donation = interest.donation.toLocaleString('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 0 })
        let price = interest.price.toLocaleString('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 0 })
        let discount = (interest.price - (interest.price * (interest.discount / 100))).toLocaleString('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 0 })
        return (
            <Col {...dividerColumn}  className={'card-Promotion'} onClick={() => this.handleClickButton()} type={'primary'} >
                <Col {...dividerPhoto} className={'card-photo'} style={{ backgroundImage: `url(${imgUrl})` }} />
                <Col {...dividerPromo} className={'card-text'} >
                    <Col span={20} className={'card-title'} >{interest.company.name}</Col>
                    <Col span={4} className={'card-discount'} >{interest.discount}%</Col>
                    <Col span={24} className={'card-description'}>{interest.shortdescription}</Col>
                    <Col span={24} className={'card-deal'}>
                        <Col {...dividerDeal} className={'valor'}> Donación:</Col>
                        <Col {...dividerDeal}>{donation}</Col>
                        <Col span={24} className={'valor'}>  Valor Comercial:</Col>
                        <Col span={10} offset={2} className={'underline'} style={{ backgroundImage: `url(${imgUnderline})` }} >{price}</Col>
                        <Col span={10} className={'withdiscount'} >{discount}</Col>
                    </Col>
                </Col>
            </Col>
        )
    }
}