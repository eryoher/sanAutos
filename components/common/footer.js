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
            <Col span={24} className={"footer-cont"} >
                <Col span={24} className={"footer-term"} >
                    Aplica desde el 10 de Agosto hasta el 25 de Agosto de 2019 y únicamente para la compra de vehículos nuevos particulares de la marca Renault Nuevo Logan, Nuevo Sandero, Nuevo Stepway, Duster, Oroch, Captur, Koleos y Alaskan modelo 2019 y 2020, vendidos a través de la red de concesionarios Renault en la ciudad de Bogotá, financiados a través de RCI Colombia S.A Compañía de Financiamiento. El cliente tendrá un período de gracia para el abono de capital, pago de intereses y pago de cargos adicionales (seguros contratados por el cliente, más el valor del registro de garantía mobiliaria que se cobra en la primera cuota del crédito y los gastos generados por la pre-inscripción de la garantía ante el RUNT) durante las cinco (5) primeras cuotas del crédito. La tasa de interés durante el período de gracia es del 0% E.A. Terminado el periodo de gracia, el cliente paga cuotas mensuales compuestas de abono a capital, pago de intereses y pago de cargos adicionales (seguros contratados por el cliente más el valor de la cancelación de la garantía mobiliaria y del levantamiento de prenda, las cuales se cobran en la última cuota del crédito, y los gastos generados por la cancelación de la garantía ante el RUNT, los cuales se cobran durante la vigencia del crédito por una sola vez, entre otros). El plazo del crédito es único de 72 meses incluido el periodo de gracia. La tasa de interés del período posterior al periodo de gracia será según la política de tasas vigente de la entidad que financia (Tasa variable indexada a la DTF). El plazo es estimado y puede extenderse debido a la variación de la tasa y la modalidad de cuota fija. El valor financiado para vehículos Logan y Sandero será hasta el 70% del valor de la factura de venta del vehículo, para vehículo Stepway  será hasta el 60% del valor de la factura de venta  y  para el resto de la gama de vehículos será hasta el 50% del valor de la factura de venta del vehículo. La aprobación está sujeta a estudio de crédito y cumplimiento de la política de riesgo de la entidad que financia. “5 meses 0 Pesos” hace referencia al no pago de la cuota del crédito durante el periodo de gracia en virtud de la oferta comercial establecida. Los accesorios en caso de que sean financiados, son financiados dentro del crédito bajo un plan de amortización igual al del capital principal del crédito y con una tasa de interés variable indexada a la DTF igual a la del capital principal del crédito. La garantía extendida, matrícula y contrato de mantenimiento en caso de que sean financiados, son financiados dentro del crédito bajo un plan de amortización tradicional con pagos mensuales a partir del mes siguiente al desembolso y con una tasa de interés fija independiente a la del capital principal del crédito. Entidad que financia RCI COLOMBIA S.A. COMPAÑÍA DE FINANCIAMIENTO, entidad vigilada por la Superintendencia Financiera de Colombia.
                        <br></br>
                    Esta promoción NO aplica para otras versiones de vehículos, Sandero RS, servicio especial, flotas de proximidad, ventas corporativas y persona jurídica. Las restricciones mencionadas podrán ser consultadas en los concesionarios de la Red Autorizada Renault a nivel nacional. No es acumulable con descuentos ni otros beneficios por tarjeta MY Renault.
                </Col>
            </Col>
        )
    }
}