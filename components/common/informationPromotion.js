import React, { Component } from 'react'
import { Col, Divider } from 'antd';
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
        const urlFilePrivate =`${publicRuntimeConfig.appUrl}/static/files/Politica_de_tratamiento_de_datos_personales.pdf`;

        return (
            <Col span={24} className={"information-container"} >
                <Col { ...infoColumn } >
                    <Col span={12} style={{backgroundImage: `url(${logoPencil})`}} className={"information-icon"} />
                    <Col span={12} className={"information-title"}>
                        <div>Cómo</div>
                        <div className={"color-blue"} >Registrarse</div>
                    </Col>
                    <Col span={24} className={"information-description"} >
                        Lorem ipsum dolor sit amet,
                        consectetuer adipiscing elit
                    </Col>
                </Col>
                <Col {...dividerColumn} >
                    <Divider type={"vertical"} className={"divider-information"} />
                </Col>
                <Col {...infoColumn} >
                    <Col span={12} style={{backgroundImage: `url(${logoCard})`}} className={"information-icon"} />
                    <Col span={12} className={"information-title"}>
                        <div>Cómo</div>
                        <div className={"color-blue"} >Donar</div>
                    </Col>
                    <Col span={24} className={"information-description"} >
                        Lorem ipsum dolor sit amet,
                        consectetuer adipiscing elit
                    </Col>
                </Col>
                <Col {...dividerColumn} >
                    <Divider type={"vertical"} className={"divider-information"} />
                </Col>
                <Col {...infoColumn} >
                    <Col span={12} style={{backgroundImage: `url(${logoLetter})`}} className={"information-icon"} />
                    <Col span={12} className={"information-title"}>
                        <div>Protección</div>
                        <div className={"color-blue"} >De datos</div>
                    </Col>
                    <Col span={24} className={"information-description"} >
                        Deseas conocer nuestra politica 
                        en proteccion de datos dar click <a href={urlFilePrivate} target={"_blank"} > aqui. </a>
                    </Col>
                </Col>

                <Col span={24} className={"border-bottom-information"} />
                
            </Col>
        )
    }
}
