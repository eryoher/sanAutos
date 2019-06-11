import React, { Component } from 'react'
import { Row, Col } from 'antd';
import Banner from '../components/common/banner';
import Promotions from '../components/promotions/promotions';
import Allies from '../components/allies/allies';
import Information from '../components/common/information';
import ListCategories from '../components/categories/listCategories';
import Interests from '../components/promotions/Interests';
import Head from 'next/head';

export default class Index extends Component {
    render() {
        return (
            <div>
                <Head>
                    <title>Una Marca te Premia</title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                    <link href="../static/favicon.ico" rel="icon" type="image/x-icon" />
                </Head>
                
                <Row className={"main-content"} >
                    <Col span={24} ><Banner /></Col>
                    <Col span={24} ><Information /></Col>
                    <Col span={24} ><ListCategories /></Col>
                    <Col span={24} ><Promotions /></Col>
                    <Col span={24} ><Interests /></Col>
                    <Col span={24} ><Allies /></Col>
                </Row>
            </div>
        )
    }
}
