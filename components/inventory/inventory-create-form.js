import React, { Component } from 'react'
import { Row, Col, Form, Layout, Button, Input, Select } from 'antd';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { formLayout, largeItemLayout } from '../../constants/TypeForm';
const FormItem = Form.Item;

const { Content } = Layout;
const Option = Select.Option;

export default class InventoryCreateForm extends Component {

    constructor(props) {
        super(props);
        this.options=[
            {
                value :1 ,
                label:'Entrada'
            },
            {
                value :2 ,
                label:'Salida'
            }
        ]

    }

    render() {
        const { promotion } = this.props
        
        const initial = {
            promotionsId : promotion.id,
            quantity:1
        }
        return (
            <Content className="form-content">
                <Row style={{ paddingTop: 15 }}>
                    <Col span={20} offset={2}>               
                    { initial && <Formik
                        initialValues = {{...initial}}
                        onSubmit={(values, actions) => {                                                                
                            this.props.onSubmitInventory( values );
                            this.props.onCloseModal();
                            actions.setSubmitting(false);
                        }}
                        validationSchema={Yup.object().shape({                            
                            quantity: Yup.string().required('La cantidad es requerida.'),
                        })}
                        render={({ values, handleBlur, handleChange, errors, touched, isSubmitting, isValid, handleSubmit, setFieldValue, setFieldTouched }) => (
                            <Form onSubmit={handleSubmit}>
                                <Col {...formLayout}>
                                    <FormItem
                                        {...largeItemLayout}
                                        className={errors.quantity && touched.quantity ? 'has-error' : ''}
                                        label={'Cantidad'}
                                    >
                                        <Input
                                            id="quantity"
                                            type="number"
                                            min={1}
                                            name="quantity"
                                            placeholder={'Ingrese la cantidad'}
                                            className={'input-form-login'}
                                            value={values.quantity}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                        {errors.quantity && touched.quantity && <div className="ant-form-explain">{errors.quantity}</div>}
                                    </FormItem>                                    
                                </Col>
                                <Col {...formLayout}>
                                    <FormItem  {...largeItemLayout}                                        
                                        className={errors.type && touched.type ? 'has-error' : ''}
                                        label={'Tipo'}
                                    >
                                        <Select showSearch  
                                            placeholder={'Seleccione un tipo'}  
                                            onChange={ (value) => setFieldValue( 'type', value ) } 
                                            allowClear={true} 
                                            value={ values.type } 
                                        >
                                            {this.options.map((type) => (
                                                <Option value={type.value} key={ type.value } >  {type.label} </Option>
                                            ))}
                                        </Select>
                                    </FormItem>
                                </Col>
                                <Col span={5} offset={8} >
                                    <Button className="ant-btn" type={'primary'} htmlType="submit" >
                                        {'Aceptar'}
                                    </Button>
                                </Col>
                                <Col span={2}  >
                                    <Button  className="ant-btn" onClick={ this.props.onCloseModal } type={'primary'} >
                                        {'Cancelar'}
                                    </Button>
                                </Col>
                            </Form>
                        )}
                    />}
                    </Col>                    
                </Row>                                
            </Content>
        )
    }
}
