import React, { Component } from 'react'
import { smItemLayout, formLayout } from '../../constants/TypeForm';
import { Row, Col, Form, Input, Select, AutoComplete, Button, Divider, DatePicker } from 'antd';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();
const FormItem = Form.Item;

export default class BuyPromotion extends Component {

    constructor(props){
        super(props)
        this.state={
            cantidad:1
        }
    }

    handleSubmitbuy = () => {
        const {promotion, auth} = this.props;
        const { user } = auth;
        const notificationUrl = `${publicRuntimeConfig.apiUrl}/notifications/checkPayment`;
        
        var preference = {
            items: [
              {
                id: promotion.id,
                title: (promotion.name) ? promotion.name: 'Promocion Nombre' ,
                quantity: parseInt( this.state.cantidad ),
                currency_id: 'COP',
                unit_price: promotion.price
              }
            ],
            payer: {
              email: user.email,
              name: user.name,
              lastname:user.lastname,
              surname: user.username,
              phone:{
                  number: parseInt(user.phone)
              }
            },
            back_urls: {
                "success": `${publicRuntimeConfig.appUrl}/confirmationPay`                              
            },
            auto_return: "approved",               
            external_reference: promotion.id ,
            notification_url:notificationUrl,
            binary_mode: true
        };             
               
        this.props.onCreatePreference( preference );

        this.props.onCancelPay();
        
    }

    render() {
        const {promotion, auth} = this.props;
        const {user}  = auth;
        const {cantidad} = this.state;
        return (
            <Row className={'buypromotion-content'} style={{backgroundImage: `url('../../static/img/bg_modal_buy.png')`}} >
                <Divider><h3>Datos del Usuario </h3></Divider>
                    <FormItem
                        {...smItemLayout}                    
                        label={'Nombre'}
                    >
                        { `${user.name} ${user.lastname}` }
                    </FormItem>
                    <FormItem
                        {...smItemLayout}                    
                        label={'Correo'}
                    >
                        { user.email }
                    </FormItem>
                    <FormItem
                        {...smItemLayout}                    
                        label={'Telefono'}
                    >
                        { user.phone }
                    </FormItem>
                    <FormItem
                        {...smItemLayout}                    
                        label={'Ciudad'}
                    >
                        { user.city }
                    </FormItem>
                <Divider><h3>Datos de la Promocion</h3></Divider>
                <Col {...formLayout}>
                    <FormItem
                        {...smItemLayout}                    
                        label={'Precio'}
                    >
                        { promotion.price.toLocaleString() }
                    </FormItem>
                </Col>
                
                <Col {...formLayout}>
                    <FormItem
                        {...smItemLayout}                    
                        label={'Cantidad'}
                    >
                        <Input
                            id="name"
                            type="number"
                            name="name"
                            placeholder={'Ingrese la Cantidad'}
                            className={'input-form-login'}
                            value={cantidad}
                            onChange={(event) => {                                
                                this.setState({cantidad:event.target.value})
                            }}
                            
                        />
                        
                    </FormItem>
                </Col>
                <Col {...formLayout}>
                    <FormItem
                        {...smItemLayout}                    
                        label={'Total'}
                    >
                        { (promotion.price * cantidad).toLocaleString() }
                    </FormItem>
                </Col>
                <Col span={24} style={{textAlign:'center'}} >
                    <Button onClick={this.handleSubmitbuy}  htmlType="button" className={"button-buypromotion"}  disabled={ !(cantidad > 0) }>
                        {'Confirmar'}
                    </Button>
                </Col>
            </Row>
        )
    }


}
