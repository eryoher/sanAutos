import React, { Component } from 'react'
import { Col } from 'antd';
import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();


export default class Footer extends Component {
    render() {
        const urlFileTerm =`${publicRuntimeConfig.appUrl}/static/files/terminos_&_condiciones.pdf`;
        const urlFilePrivate =`${publicRuntimeConfig.appUrl}/static/files/Politica_de_tratamiento_de_datos_personales.pdf`;
        const urlFile =`${publicRuntimeConfig.appUrl}/static/files/aviso_privacidad.pdf`;
        
        return (
            <Col span={24} className={"footer-container"} >
                <Col span={8} className={"footer-seccion logo-left"} >
                    <img src={"../../static/img/footer-logo-1.png"} className={"logo"} />
                </Col>
                <Col span={8} className={"footer-seccion protect-data"} >
                    <div className={'title'} > Proteccion de datos </div>
                    <div className={"description-data"} style={{marginTop:'15px'}} >
                        <div>
                            <a href={urlFileTerm} target={"_blank"} > Terminos y condiciones </a>
                        </div>
                        <div>
                            <a href={urlFilePrivate} target={"_blank"} > Politica de tratamiento de datos personales </a>
                        </div>
                        <div>
                            <a href={urlFile} target={"_blank"} > Aviso privacidad </a>
                        </div>
                    </div>
                </Col>                
                <Col span={8} className={"footer-seccion"} >
                    <img src={"../../static/img/footer-logo-2.png"} style={{marginTop:'15%', marginLeft:'10%'}} />                
                </Col>
            </Col>
        )
    }
}
