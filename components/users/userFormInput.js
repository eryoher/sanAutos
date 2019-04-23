import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col, Form, Input, Checkbox } from 'antd';
import { formLayout, fullItemLayout } from '../../constants/TypeForm';
import getConfig from 'next/config';
const FormItem = Form.Item;
const { publicRuntimeConfig } = getConfig();

class UserFormInput extends Component {
    
    constructor(props){
        super(props)
    }

    render() {
        const { t, errors, touched, values, handleChange, handleBlur, setFieldValue, setFieldTouched, search, isSubmitting, disabled } = this.props;
        const urlFile =`${publicRuntimeConfig.appUrl}/static/files/clausula_consentimiento_web.pdf`;
        
        return (
            <Row>
                <Col span={24}>
                    <Row>                    
                        <Col {...formLayout}>
                            <FormItem
                                {...fullItemLayout}
                                className={errors.name && touched.name ? 'has-error' : ''}
                                label={false}
                            >
                                <Input
                                    id="name"
                                    type="text"
                                    name="name"
                                    placeholder={'Nombre *'}
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
                                {...fullItemLayout}
                                className={errors.lastname && touched.lastname ? 'has-error' : ''}
                                label={false}
                            >
                                <Input
                                    id="lastname"
                                    type="text"
                                    name="lastname"
                                    placeholder={'Apellido *'}
                                    className={'input-form-login'}
                                    value={values.lastname}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {errors.lastname && touched.lastname && <div className="ant-form-explain">{errors.lastname}</div>}
                            </FormItem>
                        </Col>
                        <Col {...formLayout}>
                            <FormItem
                                {...fullItemLayout}
                                className={errors.username && touched.username ? 'has-error' : ''}
                                label={false}
                            >
                                <Input
                                    id="username"
                                    type="text"
                                    name="username"
                                    placeholder={'Usuario *'}
                                    className={'input-form-login'}
                                    value={values.username}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {errors.username && touched.username && <div className="ant-form-explain">{errors.username}</div>}
                            </FormItem>
                        </Col>
                        <Col {...formLayout}>
                            <FormItem
                                {...fullItemLayout}
                                className={errors.city && touched.city ? 'has-error' : ''}
                                label={false}
                            >
                                <Input
                                    id="city"
                                    type="text"
                                    name="city"
                                    placeholder={'Ciudad'}
                                    className={'input-form-login'}
                                    value={values.city}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {errors.city && touched.city && <div className="ant-form-explain">{errors.city}</div>}
                            </FormItem>
                        </Col>
                        <Col {...formLayout}>
                            <FormItem
                                {...fullItemLayout}
                                className={errors.phone && touched.phone ? 'has-error' : ''}
                                label={false}
                            >
                                <Input
                                    id="phone"
                                    type="text"
                                    name="phone"
                                    placeholder={'Telefono'}
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
                                {...fullItemLayout}
                                className={errors.email && touched.email ? 'has-error' : ''}
                                label={false}
                            >
                                <Input
                                    id="email"
                                    type="email"
                                    name="email"
                                    placeholder={'E-mail *'}
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
                                {...fullItemLayout}
                                className={errors.password && touched.password ? 'has-error' : ''}
                                label={false}
                            >
                                <Input
                                    id="password"
                                    type="password"
                                    name="password"
                                    placeholder={'Contraseña *'}
                                    className={'input-form-login'}
                                    value={values.password}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {errors.password && touched.password && <div className="ant-form-explain">{errors.password}</div>}
                            </FormItem>
                        </Col>
                        <Col {...formLayout}>
                            <FormItem
                                {...fullItemLayout}
                                className={errors.repeatPassword && touched.repeatPassword ? 'has-error' : ''}
                                label={false}
                            >
                                <Input
                                    id="repeatPassword"
                                    type="password"
                                    name="repeatPassword"
                                    placeholder={'Repita la contraseña *'}
                                    className={'input-form-login'}
                                    value={values.repeatPassword}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {errors.repeatPassword && touched.repeatPassword && <div className="ant-form-explain">{errors.repeatPassword}</div>}
                            </FormItem>
                        </Col>
                        <Col {...formLayout}>
                            <FormItem
                                {...fullItemLayout}
                                className={errors.consentWeb && touched.consentWeb ? 'has-error' : ''}
                                label={false}
                            >
                                <Checkbox
                                    id="consentWeb"
                                    name="consentWeb"        
                                    onChange={(value) => { setFieldValue("consentWeb", value.target.checked); touched.consentWeb = true }}
                                    checked={ values.consentWeb }
                                    onBlur={handleBlur}

                                />
                                    <label style={{paddingLeft:'10px'}} > 
                                        <span>Acepto clausula de </span>
                                        <a target={"_blank"} href={urlFile} >
                                            {'consentimiento web.' } 
                                        </a>
                                    </label>
                                {errors.consentWeb && touched.consentWeb && <div className="ant-form-explain">{errors.consentWeb}</div>}
                            </FormItem>
                        </Col>
                        
                    </Row>
                </Col>
            </Row>
        )
    }
}

const mapStateToProps = ({ auth }) => {
  
    return { auth };

};



export default connect(mapStateToProps, {})(UserFormInput);

