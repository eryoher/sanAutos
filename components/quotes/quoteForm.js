import React, { Component } from 'react';
import { Row, Col, Form, Input, Select, AutoComplete, Button, Modal, DatePicker, TimePicker, Upload, Icon, Checkbox } from 'antd';
import { formLayout  } from '../../constants/TypeForm';
const FormItem = Form.Item;

export default class QuoteForm extends Component {

    constructor(props) {
        super(props)
        this.state = {};
    }

    render() {
        const { t, errors, touched, values, handleChange, handleBlur, setFieldValue, setFieldTouched, search, uploadedFiles, listCategories } = this.props;

        return (
            <Row>
                <Col span={24}>
                    <Row>
                        <Col {...formLayout}>
                            <FormItem
                                {...formLayout}
                                className={errors.name && touched.name ? 'has-error' : ''}
                                label={false}
                            >
                                <Input
                                    id="name"
                                    type="text"
                                    name="name"
                                    placeholder={'Nombre y Apellido *'}
                                    className={'input-form-login'}
                                    value={values.name}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {errors.name && touched.name && <div className="ant-form-explain">{errors.name}</div>}
                            </FormItem>
                        </Col>
                        <Col {...formLayout}>
                            <FormItem
                                {...formLayout}
                                className={errors.cedula && touched.cedula ? 'has-error' : ''}
                                label={false}
                            >
                                <Input
                                    id="cedula"
                                    type="text"
                                    name="cedula"
                                    placeholder={'Número de Cedula *'}
                                    className={'input-form-login'}
                                    value={values.cedula}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {errors.cedula && touched.cedula && <div className="ant-form-explain">{errors.cedula}</div>}
                            </FormItem>
                        </Col>
                        <Col {...formLayout}>
                            <FormItem
                                {...formLayout}
                                className={errors.phone && touched.phone ? 'has-error' : ''}
                                label={false}
                            >
                                <Input
                                    id="phone"
                                    type="text"
                                    name="phone"
                                    placeholder={'Número de Celular *'}
                                    className={'input-form-login'}
                                    value={values.phone}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {errors.phone && touched.phone && <div className="ant-form-explain">{errors.phone}</div>}
                            </FormItem>
                        </Col>
                        <Col {...formLayout}>
                            <FormItem
                                {...formLayout}
                                className={errors.email && touched.email ? 'has-error' : ''}
                                label={false}
                            >
                                <Input
                                    id="email"
                                    type="text"
                                    name="email"
                                    placeholder={'Email *'}
                                    className={'input-form-login'}
                                    value={values.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {errors.email && touched.email && <div className="ant-form-explain">{errors.email}</div>}
                            </FormItem>
                        </Col>
                        <Col {...formLayout}>
                            <FormItem
                                className={errors.acceptTerms && touched.acceptTerms ? 'has-error' : ''}
                                label={false}
                            >
                                <Checkbox
                                    id="acceptTerms"
                                    name="acceptTerms"
                                    onChange={(value) => { setFieldValue("acceptTerms", value.target.checked); touched.acceptTerms = true }}
                                    checked={values.acceptTerms}
                                    onBlur={handleBlur}

                                />
                                <label style={{ paddingLeft: '10px' }} >
                                    <span>Acepto política de </span>
                                    <a target={"_blank"} href={'https://www.renault.com.co/content/dam/Renault/CO/informes/politicas_de_tratamientos_de_datos_personales.pdf'}  >
                                        {'protección de datos personales'}
                                    </a>
                                </label>
                                {errors.acceptTerms && touched.acceptTerms && <div className="ant-form-explain">{errors.acceptTerms}</div>}
                            </FormItem>
                        </Col>
                    </Row>
                </Col>
            </Row>
        )
    }
}