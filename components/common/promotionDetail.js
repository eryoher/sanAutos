import React, { Component } from 'react'
import Countdown from 'react-countdown-now';
import { Col, Tabs, Button, Modal, Row } from 'antd';
import Login from '../common/login';
import BuyPromotion from '../payments/buyPromotion';
import { connect } from 'react-redux';
import { createPreference } from '../../actions';
import getConfig from 'next/config';
import ListCategories from '../categories/listCategories';

import SendInformation from '../quotes/sendInformation';

import Router from 'next/router'

const dividerColumn = {
    xs: { span: 12 },
    sm: { span: 12 },
    md: { span: 12 },
    lg: { span: 12 },
    xl: { span: 12 },
}

const dividerImg = {
    xs: { span: 24 },
    sm: { span: 24 },
    md: { span: 14 },
    lg: { span: 14 },
    xl: { span: 14 },
}
const dividerDesc = {
    xs: { span: 24 },
    sm: { span: 24 },
    md: { span: 10 },
    lg: { span: 10 },
    xl: { span: 10 },
}

const { publicRuntimeConfig } = getConfig();
const TabPane = Tabs.TabPane;

class PromotionDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showLogin: false,
            showPay: false,
            urlMainImg: null,
            assetSelected: null
        }
    }

    handleClickButton() {
        Router.push({ pathname: '/' });
    }

    onChangeMain = (file) => {
        const url = `${publicRuntimeConfig.promotionImagesBasePath}${file.name}`;
        this.setState({ urlMainImg: url, assetSelected: file.id });
    }

    renderListImg = () => {
        const { assets } = this.props.promotion;
        const { assetSelected } = this.state;
        let rows = [];
        let permited = true;

        assets.forEach((asset, index) => {
            permited = (!index && !assetSelected) ? false : (assetSelected && assetSelected == asset.id) ? false : true;
            if (permited) {
                rows.push(
                    <div key={asset.id} onClick={() => this.onChangeMain(asset)} className={"list"} style={{ backgroundImage: `url(${publicRuntimeConfig.promotionImagesBasePath}${asset.name})` }} />
                )
            }
        });

        return rows;
    }

    render() {
        const { product, preference } = this.props
        const imageUrl = '../../static/img/1.png'
        const boton = '../../static/img/button_det.png'
        const nameProduct = (product) ? product.name : '';
        const saleTag = '../../static/img/sale-tag.png'        
        const renaultLogo = "../../static/img/logo-renault.png";

        return (
            <Row>
                <Col span={24} className={"header-cont"}>
                    <Col span={24} className={"header-top"} style={{ backgroundImage: `url(${renaultLogo})` }} onClick={() => this.handleClickButton()} ></Col>
                </Col>
                <Col span={24} className={'promotion-cont'}>
                    <Col {...dividerImg} className={'left-promo'} >
                        <Col span={24} className={'title'} >{nameProduct}</Col>
                        <Col span={24} className={'main-image'} >
                            <img src={imageUrl} />
                            {/* <img src={urlImage} /> */}
                        </Col>
                        <Col className={'list-images'} >
                            {/* {this.renderListImg()} */}
                            <div key={1} className={"list"} style={{ backgroundImage: `url(${imageUrl})` }} />
                            <div key={2} className={"list"} style={{ backgroundImage: `url(${imageUrl})` }} />
                            <div key={3} className={"list"} style={{ backgroundImage: `url(${imageUrl})` }} />
                            <div key={4} className={"list"} style={{ backgroundImage: `url(${imageUrl})` }} />
                        </Col>
                        <Col span={24} className={'tag-sale'} style={{ backgroundImage: `url(${saleTag})` }}>

                        </Col>
                    </Col>
                    <Col {...dividerDesc} className={'description-promo'}>
                        <Col span={24} className={'title'}>Descripción</Col>

                        {product && <Col span={24} className={'description'}>
                            {product.description}
                        </Col>}
                        <SendInformation />
                    </Col>
                </Col>
            </Row>
        )
    }
}

function mapStateToProps({ auth, payments }) {
    const { preference } = payments;
    return {
        auth,
        preference
    }
}

export default connect(mapStateToProps, { createPreference })(PromotionDetail);