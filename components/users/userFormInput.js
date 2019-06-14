import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col, Form, Input, Checkbox } from 'antd';
import { formLayout, fullItemLayout, smItemLayout } from '../../constants/TypeForm';
import getConfig from 'next/config';
const FormItem = Form.Item;
const { publicRuntimeConfig } = getConfig();

class UserFormInput extends Component {
    
    constructor(props){
        super(props)
    }

    render() {
        const { t, errors, touched, values, handleChange, handleBlur, setFieldValue, setFieldTouched, search, isSubmitting, disabled, inputLabel } = this.props;

        const urlFile =`${publicRuntimeConfig.appUrl}/static/files/clausula_consentimiento_web.pdf`;
        const customLayout = ( inputLabel ) ? smItemLayout : fullItemLayout;
        
        return (
            <Row>
                <Col span={24}>
                    <Row>                    
                        <Col {...formLayout}>
                            <FormItem
                                {...customLayout}
                                className={errors.name && touched.name ? 'has-error' : ''}                                
                                label={ (inputLabel) ? 'Nombre' : false}
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
                                {...customLayout}
                                className={errors.lastname && touched.lastname ? 'has-error' : ''}
                                label={ (inputLabel) ? 'Apellido' : false}
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
                                {...customLayout}
                                className={errors.username && touched.username ? 'has-error' : ''}
                                label={ (inputLabel) ? 'Usuario' : false}
                            >
                                <Input
                                    id="username"
                                    type="text"
                                    name="username"
                                    disabled={(values.id)?true:false}
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
                                {...customLayout}
                                className={errors.city && touched.city ? 'has-error' : ''}
                                label={ (inputLabel) ? 'Ciudad' : false}
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
                                {...customLayout}
                                className={errors.phone && touched.phone ? 'has-error' : ''}
                                label={ (inputLabel) ? 'Teléfono' : false}
                            >
                                <Input
                                    id="phone"
                                    type="text"
                                    name="phone"
                                    placeholder={'Teléfono'}
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
                                {...customLayout}
                                className={errors.email && touched.email ? 'has-error' : ''}
                                label={ (inputLabel) ? 'E-mail' : false}

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
                        { !values.id && 
                            <Col {...formLayout}>
                                <FormItem
                                    {...customLayout}
                                    className={errors.password && touched.password ? 'has-error' : ''}
                                    label={ (inputLabel) ? 'Contraseña' : false}
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
                        }
                        { !values.id &&
                            <Col {...formLayout}>
                                <FormItem
                                    {...customLayout}
                                    className={errors.repeatPassword && touched.repeatPassword ? 'has-error' : ''}
                                    label={ (inputLabel) ? 'Repetir contraseña' : false}
                                    
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
                        }
                        <Col {...formLayout}>
                            <FormItem
                                {...customLayout}
                                className={errors.consentWeb && touched.consentWeb ? 'has-error' : ''}
                                label={':'}
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

