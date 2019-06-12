import React, {Component} from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'next/router'
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Alert, Layout, Form, Icon, Input, Button, Row, Col } from 'antd';
import { changePasswordUser } from '../../actions';

const { Content } = Layout;
const FormItem = Form.Item;

class FormSetPassword extends Component {

  render() {
    const { changeSuccess } = this.props    
    const initValues = {
        password : '',
        repeatPassword:'',
        recoverCode:this.props.recoverCode
    }
    const type = (changeSuccess && changeSuccess.success) ? 'success': 'error';

    return (                   
          <Content className="form-content">                        
              <Col span={8} offset={8}>
                {changeSuccess &&
                  <Alert
                    message={changeSuccess.message}
                    type={type}
                  />
                }
                <Formik
                    initialValues={{ ...initValues }}
                    onSubmit={(values, actions) => {                        
                        actions.setSubmitting(false);                       
                        this.props.changePasswordUser( values );
                        console.log(values);
                        
                    }}
                    validationSchema={Yup.object().shape({                      
                      password: Yup.string().required('El password es requerido'),    
                      repeatPassword: Yup.string().oneOf([Yup.ref('password')], 'La contraseñas no coinciden').required('El password es requerido'),
                    })}
                    render={({ values, handleBlur, handleChange, errors, touched, isSubmitting, isValid, handleSubmit }) => (
                        <Form onSubmit={handleSubmit}>
                            <Col span={24}>
                                <FormItem className={errors.password && touched.password ? 'has-error' : ''}>
                                    <Input
                                        id="password"
                                        type="password"
                                        name="password"
                                        className={'input-form-login'}
                                        value={values.password}
                                        onChange={handleChange}
                                        onBlur={handleBlur}                                    
                                        placeholder={'Ingrese la nueva contraseña'}
                                    />
                                    {errors.password &&
                                        touched.password && <div className="ant-form-explain">{errors.password}</div>}
                                </FormItem>                            
                            </Col>
                            <Col span={24}>
                                <FormItem
                                    className={errors.repeatPassword && touched.repeatPassword ? 'has-error' : ''}
                                    label={false}
                                >
                                    <Input
                                        id="repeatPassword"
                                        type="password"
                                        name="repeatPassword"
                                        placeholder={'Repita la contraseña'}
                                        className={'input-form-login'}
                                        value={values.repeatPassword}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    {errors.repeatPassword && touched.repeatPassword && <div className="ant-form-explain">{errors.repeatPassword}</div>}
                                </FormItem>
                            </Col>
                            <Col offset={9} span={6} style={{textAlign:'center', paddingTop:'5px'}} >
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
    const { changeSuccess } = users;
    return { changeSuccess }  
};

export default connect(mapStateToProps, { changePasswordUser })(FormSetPassword);