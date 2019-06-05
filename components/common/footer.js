import React, { Component } from 'react'
import { Col } from 'antd';
import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();
const dividerColumn = {
    xs: { span: 24 },
    sm: { span: 24 },
    md: { span: 24 },
    lg: { span: 12 },
    xl: { span: 12 },
}

export default class Footer extends Component {
    render() {
        const urlFileTerm = `${publicRuntimeConfig.appUrl}/static/files/terminos_&_condiciones.pdf`;
        const urlFilePrivate = `${publicRuntimeConfig.appUrl}/static/files/Politica_de_tratamiento_de_datos_personales.pdf`;
        const urlFile = `${publicRuntimeConfig.appUrl}/static/files/aviso_privacidad.pdf`;

        return (
            <Col span={24} className={"footer-container"} >
                <Col {...dividerColumn} className={"footer-seccion"} >
                    <Col span={24} className={"footer-list-title"} >
                        <div className={'title'} > Protección de datos </div>
                        <div className={"description-data"} >
                            <div>
                                <a href={urlFileTerm} target={"_blank"} > Términos y condiciones </a>
                            </div>
                            <div>
                                <a href={urlFilePrivate} target={"_blank"} > Política de tratamiento de datos personales </a>
                            </div>
                            <div>
                                <a href={urlFile} target={"_blank"} > Aviso de privacidad </a>
                            </div>
                        </div>
                    </Col>
                </Col>
                <Col {...dividerColumn} className={"footer-seccion"} >
                    <Col className={'footer-img'}>
                    <img src={"../../static/img/footer-logo-2.png"} />
                    </Col>
                </Col>
            </Col>
        )
    }
}
