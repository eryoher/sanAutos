import React, { Component } from 'react'
import { Row, message, Button, Col } from 'antd';
import Layaout from '../components/common/layout';
import { connect } from 'react-redux';
import * as qs from 'qs';
import {createGiftCard, createTokenCard, getPayment, getPromotion} from '../actions'
import { dateFormat } from '../lib/DateFormat';
import moment from 'moment-business-days';

class ConfirmationPay extends Component {

  constructor(props){
    super(props);
    this.state={
      responseParams:{}
    }
  }
  
  componentWillMount(){
    
  }

  componentDidMount() {
    const { location } = window;
    if (location && location.search) {
        const parsedString = qs.parse(location.search.slice(1));
        this.setState({responseParams:parsedString})
        this.props.getPayment(parsedString.collection_id);
        this.props.getPromotion(parsedString.external_reference);
    }
  }

  render() {
    const {paymentConfirm, promotion} = this.props;
    return (
        <Row>          
            {
              paymentConfirm && 
              <Row className={"confirmation-content"} >
                <Col span={24} >  
                  <Col className={"title"} > Confirmación Pago </Col>
                  <Col span={12} className={"confirm-label"} > Nombre </Col>
                  <Col span={12} className={"confirm-value"} > { paymentConfirm.description } </Col>
                  <Col span={12} className={"confirm-label"} > Estado </Col>
                  <Col span={12} className={"confirm-value"} > { paymentConfirm.status } </Col>
                  <Col span={12} className={"confirm-label"} > Monto </Col>
                  <Col span={12} className={"confirm-value"} > { paymentConfirm.transaction_amount.toLocaleString()  } </Col>
                  <Col span={12} className={"confirm-label"} > Moneda </Col>
                  <Col span={12} className={"confirm-value"} > { paymentConfirm.currency_id } </Col>
                  <Col span={12} className={"confirm-label"} > Fecha de Aprobación </Col>
                  <Col span={12} className={"confirm-value"} > {  moment(paymentConfirm.date_approved).format(dateFormat) } </Col>
                </Col>
                { promotion && <Col span={24}>                  
                  <Col className={"title"} > Promoción </Col>
                  <Col span={12} className={"confirm-label"} > Donación </Col>
                  <Col span={12} className={"confirm-value"} > { promotion.donation.toLocaleString() } </Col>
                  <Col span={12} className={"confirm-label"} > Descuento </Col>
                  <Col span={12} className={"confirm-value"} > { `${promotion.discount}%` } </Col>
                  <Col span={12} className={"confirm-label"} > Fecha de Inicio </Col>
                  <Col span={12} className={"confirm-value"} > { moment(promotion.start_date).format(dateFormat)  } </Col>
                  <Col span={12} className={"confirm-label"} > Fecha Final </Col>
                  <Col span={12} className={"confirm-value"} > { moment(promotion.end_date).format(dateFormat) } </Col>                  
                </Col>}
                <Col span={24} style={{textAlign:'center'}} >                  
                  <Button href={'/'} style={{marginTop:'25px'}} className={"botton-donate"}> Inicio </Button>
                </Col>
              </Row>
            }          
        </Row>
    )
  }
}

function mapStateToProps({ payments, promotions }){
  const {tokenCard, giftCard, paymentConfirm} = payments;
  const {promotion} = promotions
  return {
      tokenCard,
      giftCard,
      paymentConfirm,
      promotion
  }
}

export default connect (mapStateToProps,{ createGiftCard, createTokenCard, getPayment, getPromotion })(ConfirmationPay);
