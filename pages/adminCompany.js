import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Row,  Col, Button, Layout, Form, message } from 'antd';
import LayoutAdmin from '../components/common/layout';
import { Formik } from 'formik';
import * as Yup from 'yup';
import * as qs from 'qs';
import { formLayout } from '../constants/TypeForm';
import { getCompany, updateCompany, createCompany, getCompanies }  from '../actions';
import Router from 'next/router'
import CompanyForm from '../components/companies/companyForm';

const { Content } = Layout;

class AdminCompany extends Component {

    constructor(props){
        super(props);
        this.state = {
            companyId : null
        }
    }

    componentDidMount() {
        const { location } = window;
        if (location && location.search) {
            const parsedString = qs.parse(location.search.slice(1));
            const companyId = parsedString.id;
            this.setState({ companyId });
            this.props.getCompany(companyId);
        }
    }

    componentDidUpdate = (prevProps) => {
        if( prevProps.success !== this.props.success && this.props.success ){
            const {companyId} = this.state;
            const msn = (companyId) ? 'Se actualizo la empresa correctamente.' : 'Se creo la empresa correctamente';

            if( this.props.success ){
                message.success(msn);
                Router.push('/adminCompanies');
            }
        }       
    }   

    onSubmitCompany = (values) => {                                        
        this.props.createCompany(values);
    }
   

    render() {
        const {company} = this.props;        
        
        const initialValues = {
            name:'',
            description:'',
            code:''
        }

        const initial = (this.state.companyId !== null) ? company : initialValues;    
        
        
        return (
            <LayoutAdmin>
                <Content className="form-content">
                    <Row style={{ paddingTop: '50px' }}>
                        <Col span={20} offset={2}>               
                        { initial && <Formik
                            initialValues = {{...initial}}
                            onSubmit={(values, actions) => {                                                                
                                this.onSubmitCompany( values );
                                actions.setSubmitting(false);
                            }}
                            validationSchema={Yup.object().shape({
                                name: Yup.string().required('El nombre es requerido'),
                                code: Yup.string().required('El codigo del cliente es requerido'),                                
                            })}
                            render={({ values, handleBlur, handleChange, errors, touched, isSubmitting, isValid, handleSubmit, setFieldValue, setFieldTouched }) => (
                                <Form onSubmit={handleSubmit}>
                                    <Col {...formLayout}>
                                        <CompanyForm
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
                                            }}
                                        />
                                    </Col>
                                    <Col span={11} style={{textAlign:'right'}} >
                                        <Button className="ant-btn" type={'primary'} htmlType="submit">
                                            {'Aceptar'}
                                        </Button>
                                    </Col>
                                    <Col span={11} offset={1} style={{textAlign:'left'}} >
                                        <Button  href={'/adminCompanies'}  className="ant-btn" type={'primary'} >
                                            {'Cancelar'}
                                        </Button>
                                    </Col>
                                </Form>
                            )}
                        />}
                        </Col>                       
                    </Row>                                
                </Content>
            </LayoutAdmin>
        )
    }
}

function mapStateToProps({ companies }){
    const {success, company} = companies
    
    return {
        success, company 
    }
}

export default connect (mapStateToProps,{getCompany, updateCompany, createCompany, getCompanies})(AdminCompany);

