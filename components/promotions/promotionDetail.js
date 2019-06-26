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


    renderer = ({ days, hours, minutes, seconds, completed }) => {
        if (completed) {
            // Render a completed state
            return false;
        } else {
            // Render a countdown
            seconds = (seconds < 10) ? `0${seconds}` : seconds;
            minutes = (minutes < 10) ? `0${minutes}` : minutes;
            hours = (hours < 10) ? `0${hours}` : hours;
            days = (days < 10) ? `0${days}` : days;

            return <span className={"time"}> <span className={"interval"}>{days}</span>:<span className={"interval"}>{hours}</span>:<span className={"interval"}>{minutes}</span>:<span className={"interval"}>{seconds}</span> </span>;
        }
    }

    handleCallPaid = () => {
        const token = localStorage.getItem('token')
        if (!token) {
            this.setState({ showLogin: true })
        } else {
            this.setState({ showPay: true })

        }
    }

    handleCancelLogin = () => {
        this.setState({ showLogin: false });
    }

    handleCancelPay = () => {
        this.setState({ showPay: false });
    }

    handleShowLogin = () => {
        this.setState({ showLogin: true });
    }

    handleCreatePreference = (preference) => {
        this.props.createPreference(preference)
    }

    render() {
        const { promotion, preference } = this.props
        const { urlMainImg } = this.state;
        let urlImage = (promotion.assets.length) ? `${publicRuntimeConfig.promotionImagesBasePath}${promotion.assets[0].name}` : "../../static/img/no-imagen.png";
        let imgUnderline = '../../static/img/bg-underline.svg'
        let imgClock = '../../static/img/clock.png'
        let imgMap = '../../static/img/map.png'
        let endDate = new Date();
        let companyName = (promotion.company) ? promotion.company.name : "Marca";

        if (urlMainImg) {
            urlImage = urlMainImg;
        }
        if (promotion.end_date && promotion.end_time) {
            let newEnd = promotion.end_date.split('T')[0] + " " + promotion.end_time
            endDate = new Date(newEnd);
        }
        else {
            endDate = new Date(promotion.end_date);
        }

        const urlButton = (preference) ? preference.init_point : "#";
        const nameButton = (preference) ? "DONAR YA" : "DONA AQUI";
        const target = (preference) ? '_blank' : '_self';

        let donation = promotion.donation.toLocaleString('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 0 })
        let price = promotion.price.toLocaleString('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 0 })
        let discount = (promotion.price - (promotion.price * (promotion.discount / 100))).toLocaleString('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 0 })
        return (
            <Row>
                <Col span={24} className={'promotion-images'} >
                    <Col {...dividerImg} className={'left-images'} >
                        <Col span={24} className={'marca-images'} >{companyName}</Col>
                        <Col span={24} className={'shortd-images'} >{promotion.shortdescription}</Col>
                        <Col span={24} className={'main-image'} >
                            <img src={urlImage} />
                        </Col>
                        <Col className={'list-images'} >
                            {this.renderListImg()}
                        </Col>
                    </Col>
                    <Col {...dividerDesc} className={'description-image'}>
                        <Col span={24} className={'detail-deal'} >
                            <Col span={12} className={'donation'} >Donación: {donation}</Col>
                            <Col span={18} className={'discount'} >Bono de descuento: {promotion.discount}%</Col>
                            <Col span={24} className={'valor'} >Valor Comercial:</Col>
                            <Col span={24} className={'underline'} style={{ backgroundImage: `url(${imgUnderline})` }} >{price}</Col>
                            <Col span={24} className={'withdiscount'} >{discount}</Col>
                            <Col span={24} className={'countdown'} >
                                <Col span={24} className={'time-promotion'} >
                                    <img className={'img-countdown'} src={imgClock} />Tiempo <br></br>  Restante
                                        <Countdown className={'interval'} date={endDate.getTime()} renderer={this.renderer} />
                                </Col>

                            </Col>
                            <Col span={24} className={'quantity'} >Donaciones disponibles: {promotion.quantity}</Col>
                            <Col span={24} className={"div-botton-donate"} >
                                <Button href={urlButton}
                                    target={target}
                                    className={"botton-donate"}
                                    onClick={() => this.handleCallPaid()} >
                                    {nameButton}
                                </Button>
                                <Login
                                    showLogin={this.state.showLogin}
                                    onCancelLogin={this.handleCancelLogin}
                                    onShowLogin={this.handleShowLogin}
                                />
                                {this.state.showPay &&
                                    <Modal
                                        visible={this.state.showPay}
                                        onCancel={() => this.handleCancelPay()}
                                        footer={[]}
                                    >
                                        <BuyPromotion
                                            {...this.props}
                                            onCreatePreference={this.handleCreatePreference}
                                            onCancelPay={this.handleCancelPay}
                                        />
                                    </Modal>
                                }
                            </Col>
                        </Col>
                    </Col>
                </Col>
                <Col span={24} className={'promotion-description'} >
                    <Col span={24} className={"title-description"} >
                        <span>Descripción de la </span> <span className={"interest-blue"} >Promoción</span>
                    </Col>
                    <Col span={24} className={"title-body"} >
                        <div>
                            <pre>{promotion.description}</pre>
                        </div>
                    </Col>
                </Col>
                <Col span={24} className={'promotion-description'} >
                    <Col span={24} className={"title-description"} >
                        <span>Condiciones </span> <span className={"interest-blue"} >de uso</span>
                    </Col>
                    <Col span={24} className={"title-body"} >
                        <div>
                            <pre>{promotion.condition}</pre>
                        </div>
                    </Col>
                </Col>
                <Col span={24} className={'promotion-map'} >
                    <Col span={10} className={'title-map'} >Localización</Col>
                    <Col span={24} className="img-map">
                        <iframe
                            height="100%"
                            width="100%"
                            className="embed-responsive-item"
                            src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyD-VoxbjICMaLVt7ME3VEjCEThsVQf2DHM&q=${promotion.address}`}>
                        </iframe>
                    </Col>
                </Col>
            </Row >
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
