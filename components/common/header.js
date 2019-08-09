import React, { Component } from 'react'
import { Col, Row } from 'antd';
import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();
const dividerColumn = {
    xs: { span: 22 },
    sm: { span: 22 },
    md: { span: 22 },
    lg: { span: 10 },
    xl: { span: 10 },
}

export default class Header extends Component {
    render() {
        const renaultLogo = "../../static/img/logo-renault.webp";
        const banner = "../../static/img/logo.webp";

        return (
            <Col span={24} className={"header-cont"} >
                <Col span={24} className={"header-top"} style={{ backgroundImage: `url(${renaultLogo})` }} >
                </Col>
                <Col span={24} className={"header-logo"} style={{ backgroundImage: `url(${banner})` }} >
                </Col>
            </Col>
        )
    }
}