import React, { Component } from 'react'
import { Col, Tabs, Button, Modal, Row } from 'antd';
import { connect } from 'react-redux';
import { createPreference } from '../../actions';
import getConfig from 'next/config';
import ListCategories from '../categories/listCategories';
import SendInformation from '../quotes/sendInformation';
import Router from 'next/router'

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
            assetSelected: 0
        }
    }

    handleClickButton() {
        Router.push({ pathname: '/' });
    }

    onChangeMain = (file) => {
        const url = `${publicRuntimeConfig.productImagesBasePath}${file.name}`;
        this.setState({ urlMainImg: url, assetSelected: file.id });
    }

    renderListImg = () => {

        const { assets } = this.props.product;
        const { assetSelected } = this.state;
        let imgMain, permited
        const rows = [];

        assets.forEach((asset, index) => {
            permited = (!index && !assetSelected) ? false : (assetSelected && assetSelected == asset.id) ? false : true;
            if (permited) {
                rows.push(
                    <div
                        key={asset.id}
                        onClick={() => this.onChangeMain(asset)}
                        className={"list"} style={{ backgroundImage: `url(${publicRuntimeConfig.productImagesBasePath}${asset.name})` }}
                    />
                )
            } else {
                imgMain = (
                    <img src={(this.state.urlMainImg) ? this.state.urlMainImg : `${publicRuntimeConfig.productImagesBasePath}${asset.name}`} />
                )
            }

        });

        return (
            <>
                <Col span={24} className={'main-image'} >
                    {imgMain}
                </Col>
                <Col className={'list-images'} >
                    {rows}
                </Col>
            </>
        );
    }

    render() {
        const { product } = this.props
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
                        {product && this.renderListImg()}
                        <Col span={24} className={'tag-sale'} style={{ backgroundImage: `url(${saleTag})` }} />
                    </Col>
                    <Col {...dividerDesc} className={'description-promo'}>
                        <Col span={24} className={'title'}>Descripción</Col>

                        {product && <Col span={24} className={'description'}>
                            {product.description}
                        </Col>}
                        <Col span={24}>
                            <SendInformation />
                        </Col>
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