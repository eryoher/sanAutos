import React, { Component } from 'react'
import { Col, Divider, Row } from 'antd';
import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();

const infoColumn = {
    xs: { span: 24 },
    sm: { span: 24 },
    md: { span: 12 },
    lg: { span: 12 },
    xl: { span: 7 },
}

const dividerColumn = {
    xs: { span: 0 },
    sm: { span: 0 },
    md: { span: 0 },
    lg: { span: 1 },
    xl: { span: 1 },
}

export default class InformationPromotion extends Component {
    render() {
        const logoPencil = "../../static/img/information-pencil.png";
        const logoCard = "../../static/img/information-card.png";
        const logoLetter = "../../static/img/information-letter.png";
        const urlFilePrivate = `${publicRuntimeConfig.appUrl}/static/files/Politica_de_tratamiento_de_datos_personales.pdf`;
        const urlRegister = `${publicRuntimeConfig.appUrl}/static/files/Pasos_para_registrarse.pdf`;
        const urlDonate = `${publicRuntimeConfig.appUrl}/static/files/pasos_para_donar.pdf`;
        return (
            <Col span={24} className={"information-container"} >
                <Row {...infoColumn} gutter={32}>
                    <Col span={24} >
                        <Col span={24} >
                            <Col span={12} style={{ backgroundImage: `url(${logoPencil})` }} className={"information-icon"} />
                            <Col span={12} className={"information-title"}>
                                <div>Como</div>
                                <div className={"color-blue"} >Registrarse</div>
                            </Col>
                        </Col>
                        <Col span={24} className={"information-description"} >Lorem ipsum dolor sit amet, consectetuer adipiscing elit</Col>
                    </Col>
                    <Col span={24} >
                        <Col span={12} style={{ backgroundImage: `url(${logoCard})` }} className={"information-icon"} />
                        <Col span={12} className={"information-title"}>
                            <div>Como</div>
                            <div className={"color-blue"} >Donar</div>
                        </Col>
                        <Col span={20} className={"information-description"} >Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</Col>
                    </Col>
                    <Col span={24} >
                        <Col span={12} style={{ backgroundImage: `url(${logoLetter})` }} className={"information-icon"} />
                        <Col span={12} className={"information-title"}>
                            <div>Protección</div>
                            <div className={"color-blue"} >De datos</div>
                        </Col>
                        <Col span={20} className={"information-description"} >Deseas conocer nuestra politica en proteccion de datos dar click<a href={urlFilePrivate} target={"_blank"} > aqui. </a>
                        </Col>
                    </Col>
                </Row>
            </Col>
        )
    }
}
