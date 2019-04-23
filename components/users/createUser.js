import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Layout, Form, Button, Row, Col } from 'antd';
import { addUser } from '../../actions';
import { formLayout } from '../../constants/TypeForm';
import UserFormInput from './userFormInput';

const { Content } = Layout;


class CreateUser extends Component {

  render() {

    const UrlBgLogo = '../../static/img/bg_login_form.png';
    const UrlLogo = '../../static/img/logo_login_form.png';

    const initValues = {
      consentWeb : false
    }

    return (      
      <Content className="addUser-container">
        <div className={'logo-login'} style={{backgroundImage: `url(${UrlBgLogo})`}} >
          <img className={'logo-img'} src={UrlLogo} />
          <div className={'title'} > CREAR PERFIL </div>
        </div>
        <Content className="form-content">
          <Row style={{ paddingTop: 15 }}>
            <Col span={20} offset={2}>               
              <Formik
                  initialValues={{ ...initValues }}
                  onSubmit={(values, actions) => {
                      values.roleId = 2;
                      this.props.addUser(values);
                      actions.setSubmitting(false);
                      this.props.handleChangeModal()
                  }}
                  validationSchema={Yup.object().shape({
                      name: Yup.string().required('El nombre es requerido'),
                      lastname: Yup.string().required('El apellido es requerido'),
                      username: Yup.string().required('El usuario es requerido'),
                      password: Yup.string().required('El password es requerido'),                      
                      consentWeb: Yup.boolean().oneOf([true], 'El consentimiento web es requerido'),
                      email:Yup.string().required('El E-mail es requerido'),
                      repeatPassword: Yup.string().oneOf([Yup.ref('password')], 'La contraseñas no coinciden').required('El password es requerido'),
                  })}
                  render={({ values, handleBlur, handleChange, errors, touched, isSubmitting, isValid, handleSubmit, setFieldValue, setFieldTouched }) => (
                    <Form onSubmit={handleSubmit}>
                        <Col {...formLayout}>
                            <UserFormInput                          
                                {...{
                                    values,
                                    handleBlur,
                                    handleChange,
                                    errors,
                                    touched,
                                    isSubmitting,
                                    handleSubmit,
                                    setFieldValue,
                                    setFieldTouched
                                }}
                            />
                        </Col>
                        <Col span={24} style={{textAlign:'center'}} >
                          <Button className="ant-btn login-form-button" htmlType="submit" disabled={!isValid || isSubmitting}>
                              {'Registrarse'}
                          </Button>
                        </Col>
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

const mapStateToProps = ({auth}) => {
    return { auth }  
};

export default connect(mapStateToProps, { addUser })(CreateUser);