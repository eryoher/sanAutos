import React, { Component } from 'react'
import { Row, Col, Button } from 'antd';
import getConfig from 'next/config';
import Router from 'next/router'
const { publicRuntimeConfig } = getConfig();
const dividerColumn = {
    xs: { span: 12 },
    sm: { span: 12 },
    md: { span: 12 },
    lg: { span: 6 },
    xl: { span: 6 },
}

export default class Body extends Component {
    handleClickButton() {
        const { promotion } = this.props
        Router.push({ pathname: '/promotion', query: { id: 1 } });
    }
    
    render() {
        const car1 = "../../static/img/logan.png";
        const car2 = "../../static/img/sandero.png";
        const copy = '../../static/img/copybt.webp'

        return (
            <Col span={24}>
                <Col span={24} className={"body-buttons"} >
                    <Col span={6} className="boton" >VEHíCULOS</Col>
                    <Col span={6} className="boton" >CAMIONETAS</Col>
                    <Col span={6} className="boton" >PICK UP</Col>
                    <Col span={6} className="boton" >ELECTRICOS</Col>
                </Col>
                <Col span={24} className={"boton-menu"} >
                    <Col span={6} className="car" style={{ backgroundImage: `url(${car1})` }} onClick={() => this.handleClickButton()} >Logan</Col>
                    <Col span={6} className="car" style={{ backgroundImage: `url(${car2})` }} onClick={() => this.handleClickButton()} >Sandero</Col>
                </Col>
                <Col span={24} className={"body-copy"}  style={{ backgroundImage: `url(${copy})` }} />
            </Col>
        )
    }
}