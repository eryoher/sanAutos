import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Row,  Col, Button, Layout, Form, message } from 'antd';
import LayoutAdmin from '../common/layout';
import { Formik } from 'formik';
import * as Yup from 'yup';
import * as qs from 'qs';
import { formLayout } from '../../constants/TypeForm';
import { setCategory }  from '../../actions';
import CategoryForm from './categoryForm';


const { Content } = Layout;

class AdminCategory extends Component {

    constructor(props){
        super(props);    
    }
    
    onSubmitForm = (values) => {                                                        
        this.props.setCategory(values);
        this.props.onCancel();
    }
   

    render() {
        const {category, listIcons} = this.props;        
        
        const initialValues = {
            name:'',
            icon:''
        }

        const initial = (category) ? category : initialValues;            
        
        return (            
            <Content className="form-content">
                <Row style={{ paddingTop: '50px' }}>
                    <Col span={20} offset={2}>               
                    { initial && <Formik
                        initialValues = {{...initial}}
                        onSubmit={(values, actions) => {                                                                
                            this.onSubmitForm( values );
                            actions.setSubmitting(false);
                        }}
                        validationSchema={Yup.object().shape({
                            name: Yup.string().required('El nombre es requerido.'),
                            icon: Yup.string().required('El Icono es requerido.'),                                
                        })}
                        render={({ values, handleBlur, handleChange, errors, touched, isSubmitting, isValid, handleSubmit, setFieldValue, setFieldTouched }) => (
                            <Form onSubmit={handleSubmit}>
                                <Col {...formLayout}>
                                    <CategoryForm                                        
                                        {...{
                                            listIcons,
                                            values,
                                            handleBlur,
                                            handleChange,
                                            errors,
                                            touched,
                                            isSubmitting,
                                            handleSubmit,
                                            setFieldValue,
                                            setFieldTouched,                                                
                                        }}
                                    />
                                </Col>
                                <Col span={5} offset={8} >
                                    <Button className="ant-btn" type={'primary'} htmlType="submit">
                                        {'Aceptar'}
                                    </Button>
                                </Col>
                                <Col span={2}  >
                                    <Button onClick={()=>this.props.onCancel()} className="ant-btn" type={'primary'} >
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

function mapStateToProps({ categories }){
    const {success} = categories
    
    return {
        success 
    }
}

export default connect (mapStateToProps,{setCategory})(AdminCategory);

