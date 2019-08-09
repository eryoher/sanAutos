import React, { Component } from 'react'
import { Row, Col } from 'antd';
import Head from 'next/head';
import Footer from '../components/common/footer';
import Header from '../components/common/header';
import Buttons from '../components/common/body';
import Gallery from '../components/common/gallery';

export default class Index extends Component {
    render() {
        return (
            <div>
                <Head>
                    <title>Cyber days Renault</title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                    <link href="../static/favicon.ico" rel="icon" type="image/x-icon" />
                </Head>

                <Row className={"main-content"} >
                    <Col span={24} className={"body-cont"} style={{ backgroundImage: `url(../../static/img/fondo.webp)` }} >
                        <Header />
                        <Gallery />
                        <Buttons />
                    </Col>
                    <Col span={24} ><Footer /></Col>
                </Row>
            </div>
        )
    }
}