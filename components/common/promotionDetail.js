import React, { Component } from 'react'
import Countdown from 'react-countdown-now';
import { Col, Tabs, Button, Modal, Row } from 'antd';
import Login from '../common/login';
import BuyPromotion from '../payments/buyPromotion';
import { connect } from 'react-redux';
import { createPreference } from '../../actions';
import getConfig from 'next/config';
import ListCategories from '../categories/listCategories';
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
        const { promotion, preference } = this.props
        const imageUrl = '../../static/img/1.png'
        const saleTag = '../../static/img/sale-tag.svg'
        const boton = '../../static/img/button_det.png'

        return (
            <Row>
                <Col span={24} className={'promotion-cont'}>
                    <Col {...dividerImg} className={'left-promo'} >
                        <Col span={24} className={'title'} >RENAULT LOGAN LIFE</Col>
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
                        <Col span={24} className={'description'}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </Col>
                    </Col>
                    <Col span={24} className={'button'}>
                        <Col span={6} className="boton" style={{ backgroundImage: `url(${boton})` }} >Logan Life</Col>
                        <Col span={6} className="boton" style={{ backgroundImage: `url(${boton})` }} >Logan Life</Col>
                        <Col span={6} className="boton" style={{ backgroundImage: `url(${boton})` }} >Logan Life</Col>
                        <Col span={6} className="boton" style={{ backgroundImage: `url(${boton})` }} >Logan Life</Col>
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