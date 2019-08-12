import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getPromotion } from '../actions';
import { Row, Col, Modal } from 'antd';
import * as qs from 'qs';
import PromotionDetail from '../components/common/promotionDetail';
import Footer from '../components/common/footer';
import Head from 'next/head';



class Promotions extends Component {

    constructor(props) {
        super(props)
        this.state = {
            productId: null
        }
    }

    componentDidMount() {
        const { location } = window;
        if (location && location.search) {
            const parsedString = qs.parse(location.search.slice(1));
            const productId = parsedString.id;
            this.setState({ productId });
            this.props.getPromotion(productId);
        }
    }

    render() {
        const { promotion, auth } = this.props
        return (
            <div>
                <Head>
                    <title>Cyber days Renault</title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                    <link href="../static/favicon.ico" rel="icon" type="image/x-icon" />
                </Head>
                <Row>
                    <Col span={24} className={"body-cont"} style={{ backgroundImage: `url(../../static/img/fondo.jpg)` }} >
                        <PromotionDetail product = {promotion} />
                    </Col>
                    <Col span={24} >
                        <Footer />
                    </Col>
                </Row>
            </div>
        )
    }
}

function mapStateToProps({ promotions, auth }) {
    const { search, promotion } = promotions
    return {
        search,
        promotion,
        auth
    }
}



export default connect(mapStateToProps, { getPromotion })(Promotions);
