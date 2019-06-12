import React, {Component} from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'next/router'
import { Formik } from 'formik';
import * as Yup from 'yup';

import { Alert, Layout, Form, Icon, Input, Button, Row, Col } from 'antd';

import { userSignIn, clearError } from '../../actions';
import {showError} from '../../actions/Common';

const { Content } = Layout;
const FormItem = Form.Item;

class LoginForm extends Component {

  render() {
    const { error, register } = this.props    
    
    const UrlBgLogo = '../../static/img/bg_login_form.png'
    const UrlLogo = '../../static/img/logo_login_form.png'
    return (      
        <Content className="addUser-container">
          <div className={'logo-login'} style={{backgroundImage: `url(${UrlBgLogo})`}} >
            <img className={'logo-img'} src={UrlLogo} />
            <div className={'title'} > INICIO DE SESION </div>
          </div>
          <Content className="form-content">            
            <Row style={{ paddingTop: 15 }}>
              <Col span={20} offset={2}>
                {error &&
                  <Alert
                    message={error}
                    type="error"
                  />
                }

                <Formik
                    onSubmit={(values, actions) => {
                        this.props.clearError();
                        this.props.userSignIn(values);
                        actions.setSubmitting(false);
                        //this.props.onCloseLogin();
                    }}
                    validationSchema={Yup.object().shape({
                      username: Yup.string().required('El usuario es requerido'),
                      password: Yup.string().required('El password es requerido'),
                    })}
                    render={({ values, handleBlur, handleChange, errors, touched, isSubmitting, isValid, handleSubmit }) => (
                        <Form onSubmit={handleSubmit}>
                            <FormItem className={errors.username && touched.username ? 'has-error' : ''}>
                                <Input
                                    id="username"
                                    type="text"
                                    name="username"
                                    className={'input-form-login'}
                                    value={values.username}
                                    onChange={handleChange}
                                    onBlur={handleBlur}                                    
                                    placeholder={'Usuario *'}
                                />
                                {errors.username &&
                                    touched.username && <div className="ant-form-explain">{errors.username}</div>}
                            </FormItem>
                            <FormItem className={errors.password && touched.password ? 'has-error' : ''}>
                                <Input
                                    id="password"
                                    type="password"
                                    name="password"
                                    className={'input-form-login'}
                                    value={values.password}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    placeholder={'Password *'}
                                />
                                {errors.password &&
                                    touched.password && <div className="ant-form-explain">{errors.password}</div>}
                            </FormItem>
                            <Col span={24} style={{textAlign:'center', paddingTop:'5px'}} >
                              <Button className="ant-btn login-form-button" htmlType="submit" disabled={!isValid || isSubmitting}>
                                {'Iniciar'}
                              </Button>
                            </Col>                            
                            { register && <Col span={12} style={{ paddingTop: 5, paddingBottom: 15 }} >
                                <a className="login-form-action" onClick={this.props.onChangeModal} href="#"> {'Registrarse'} </a>
                            </Col>}
                            { register && <Col span={12} style={{ paddingTop: 5, paddingBottom: 15, textAlign:'right' }} >
                                <a className="login-form-action" href="/resetPassword"> {'Recordar contraseña'} </a>
                            </Col>}                            
                        </Form>
                    )}
                />
              </Col>
            </Row>            
          </Content>
        </Content>      
    )
  }
}

const mapStateToProps = ({common}) => {
    return { error:common.error }  
};

export default connect(mapStateToProps, { userSignIn, clearError })(LoginForm);