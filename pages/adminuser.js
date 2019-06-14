import React, { Component } from 'react'
import UserFormInput from '../components/users/userFormInput';
import { connect } from 'react-redux'
import { Formik } from 'formik';
import * as Yup from 'yup';
import * as qs from 'qs';

import { Form, Button, Row, Col, message, Select, Checkbox } from 'antd';
import { addUser, getRoles, getUser } from '../actions';
import { formLayout, smItemLayout } from '../constants/TypeForm';
import Layout from '../components/common/layout';
import Router from 'next/router'

const FormItem = Form.Item;
const SelectOption = Select.Option;


class AdminUser extends Component {

    constructor(props){
        super(props);

        this.state = {
            userId:null
        }
    }

    componentWillMount = () => {
        this.props.getRoles();
    }

    componentDidMount() {
        const { location } = window;
        if (location && location.search) {
            const parsedString = qs.parse(location.search.slice(1));
            const userId = parsedString.id;
            this.setState({ userId });
            this.props.getUser(userId);
        }
    }

    componentDidUpdate = (prevProps) => {
        const {response} = this.props;
    
        if( prevProps.response != response && response ){
          if( response.status == '200' ){
            Router.push({ pathname: '/adminusers' });            
            message.success( response.message );
          }else {
            message.error( response.message );
          }
        }
    }

    render() {        
        const inputLabel = true
        const {roles, user} = this.props;       
        const initValues = (this.state.userId) ? user : {
            name:'',
            lastname:'',
            username:'',
            roleId:'',
            consentWeb:false,
            active:false,
            email:'',
            password:'',
            repeatPassword:''
        };        

        let validations = {
            name: Yup.string().required('El nombre es requerido'),
            lastname: Yup.string().required('El apellido es requerido'),
            username: Yup.string().required('El usuario es requerido'),
            roleId:Yup.string().required('El Role es requerido'),                      
            consentWeb: Yup.boolean().oneOf([true], 'El consentimiento web es requerido'),
            email:Yup.string().required('El E-mail es requerido'),           
        }

        if( !this.state.userId ){
            validations.password = Yup.string().required('El password es requerido')
            validations.repeatPassword= Yup.string().oneOf([Yup.ref('password')], 'La contraseñas no coinciden').required('El password es requerido')
        }
        
        return (                    
            <Layout>
                <Row style={{ paddingTop: 15, marginTop:50 }}>
                    <Col span={20} offset={3}>               
                    { initValues && <Formik
                        initialValues={{ ...initValues }}
                        onSubmit={(values, actions) => {                                                    
                            this.props.addUser(values);
                            actions.setSubmitting(false);                        
                        }}
                        validationSchema={Yup.object().shape(validations)}
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
                                            setFieldTouched,                                        
                                            inputLabel
                                        }}
                                    />
                                </Col>
                                <Col {...formLayout}>
                                    <FormItem
                                        {...smItemLayout}
                                        className={errors.roleId && touched.roleId ? 'has-error' : ''}
                                        label={'Role'}
                                    >
                                        <Select
                                            value={values.roleId}
                                            name="roleId"              
                                            placeholder={'Role'}
                                            allowClear={true}
                                            onChange={handleChange}
                                            onBlur={() => {
                                                touched.roleId = true;
                                            }}
                                            onChange={(value) => {                                        
                                                setFieldValue('roleId', value);                                        
                                            }}
                                        >
                                            
                                            {roles.map(role => (
                                                <SelectOption value={role.id} key={role.id} >{role.name}</SelectOption>
                                            ))}
                                        </Select>
                                        {errors.roleId && touched.roleId && <div className="ant-form-explain">{errors.roleId}</div>}
                                    </FormItem>
                                </Col>
                                <Col {...formLayout}>
                                    <FormItem
                                        {...smItemLayout}                                        
                                        label={'Activo'}
                                    >
                                        <Checkbox
                                            id="active"
                                            name="active"                                                   
                                            onChange={(value) => {                                                 
                                                setFieldValue("active", value.target.checked); 
                                                touched.active = true 
                                            }}
                                            checked={ values.active }
                                            onBlur={handleBlur}
                                        />                                                                                    
                                    </FormItem>
                                </Col>            
                                <Col span={11} style={{textAlign:'right', marginTop:15}} >
                                    <Button className="ant-btn" type={'primary'} htmlType="submit">
                                        {'Aceptar'}
                                    </Button>
                                </Col>
                                <Col span={11} offset={1} style={{textAlign:'left', marginBottom:50, marginTop:15}} >
                                    <Button  href={'/adminusers'}  className="ant-btn" type={'primary'} >
                                        {'Cancelar'}
                                    </Button>
                                </Col>
                            </Form>
                        )}
                    />}
                    </Col>
                </Row>            
            </Layout>
        )
    }
}

const mapStateToProps = ({users}) => {
    const {response, roles, user} = users;    
    return { response, roles, user }  
};

export default connect(mapStateToProps, { addUser, getRoles, getUser })(AdminUser);