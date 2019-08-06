import React, { Component } from 'react'
import { Col, Row } from 'antd';

const dividerColumnCero = {
    xs: { span: 1 },
    sm: { span: 1 },
    md: { span: 2 },
    lg: { span: 2 },
    xl: { span: 2 },
}

export default class Footer extends Component {
    render() {
        const vigiladoLogo = "../../static/img/vigilado.png";
        const footerLogo = "../../static/img/logos-footer.png";

        return (
            <Col span={24}  className={"footer-cont"} >
                <Row className={"footer-top"} >
                    <Col {...dividerColumnCero}> </Col>
                    <Col span={1} className={"footer-v"} style={{ backgroundImage: `url(${vigiladoLogo})` }} > </Col>
                    <Col span={20} className={"footer-term"} >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </Col>
                    <Col {...dividerColumnCero}> </Col>
                    <Col span={24} className={"footer-logos"} style={{ backgroundImage: `url(${footerLogo})` }} ></Col>
                </Row>
            </Col>
        )
    }
}