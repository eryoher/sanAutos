import React, {Component} from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'next/router'
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Alert, Layout, Form, Icon, Input, Button, Row, Col } from 'antd';
import { emailToRecoverUser } from '../../actions';

const { Content } = Layout;
const FormItem = Form.Item;

class FormSendEmailPassword extends Component {

  render() {
    const { recoverSuccess, register } = this.props    
    const type = (recoverSuccess && recoverSuccess.success) ? 'success': 'error';
    return (                   
          <Content className="form-content">            
            
              <Col span={20} offset={2}>
                {recoverSuccess && 
                  <Alert
                    message={recoverSuccess.message}
                    type={type}
                  />
                }
                <Formik
                    onSubmit={(values, actions) => {                        
                        actions.setSubmitting(true);                           
                        this.props.emailToRecoverUser( values );
                        
                    }}
                    validationSchema={Yup.object().shape({
                      email: Yup.string().required('El correo es requerido'),
                    })}
                    render={({ values, handleBlur, handleChange, errors, touched, isSubmitting, isValid, handleSubmit }) => (
                        <Form onSubmit={handleSubmit}>
                            <Col span={12}>
                                <FormItem className={errors.email && touched.email ? 'has-error' : ''}>
                                    <Input
                                        id="email"
                                        type="email"
                                        name="email"
                                        className={'input-form-login'}
                                        value={values.email}
                                        onChange={handleChange}
                                        onBlur={handleBlur}                                    
                                        placeholder={'Por favor ingrese tu correo *'}
                                    />
                                    {errors.email &&
                                        touched.email && <div className="ant-form-explain">{errors.email}</div>}
                                </FormItem>                            
                            </Col>
                            <Col span={6} style={{textAlign:'center', paddingTop:'5px'}} >
                              <Button className="ant-btn login-form-button" htmlType="submit" disabled={!isValid || isSubmitting}>
                                {'Enviar'}
                              </Button>
                            </Col>                                                                                   
                        </Form>
                    )}
                />
              </Col>
          </Content>
    )
  }
}

const mapStateToProps = ({users}) => {
    const {recoverSuccess} = users;
    return { recoverSuccess }  
};

export default connect(mapStateToProps, { emailToRecoverUser })(FormSendEmailPassword);