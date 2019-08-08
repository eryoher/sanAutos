import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Row, Col, Button, Layout, Form, message } from 'antd';
import { Formik } from 'formik';
import * as Yup from 'yup';
import * as qs from 'qs';
import { formLayout } from '../../constants/TypeForm';
import { sendQuoteInformation } from '../../actions';

import QuoteForm from './quoteForm';


const { Content } = Layout;

class SendInformation extends Component {

    constructor(props) {
        super(props);
        this.state = {
            productId: null
        }
    }

    componentDidMount() {
        const { location } = window;
        if (location && location.search) {
            const parsedString = qs.parse(location.search.slice(1));
            const productId = parsedString.id;
            this.setState({ productId });
        }
    }

    componentDidUpdate = (prevProps) => {
        if (prevProps.responseForm !== this.props.responseForm && this.props.responseForm) {
            const msn = 'Se envio la informacion al concesionario';
            message.success(msn);
        }
    }

    onSubmitCompany = (values) => {
        this.props.createCompany(values);
    }


    render() {

        const initialValues = {
            name: '',
            phone: '',
            cedula: '',
            email: '',
            acceptTerms: true
        }


        return (
            <Content className="form-content">
                <Row style={{ paddingTop: '50px' }}>
                    <Col span={20} offset={2}>
                        <Formik
                            initialValues={{ ...initialValues }}
                            onSubmit={(values, actions) => {
                                const formValues = { ...values, productId: this.state.productId }
                                this.props.sendQuoteInformation(formValues);
                                actions.setSubmitting(false);
                                actions.resetForm();
                            }}
                            validationSchema={Yup.object().shape({
                                name: Yup.string().required('El nombre es requerido'),
                                cedula: Yup.string().required('La cedula es requerida'),
                                phone: Yup.string().required('El telefono es requerido'),
                                email: Yup.string().required('El email es requerido'),
                                acceptTerms: Yup.boolean().oneOf([true], 'Acepto política de protección de datos personales es requerido'),

                            })}
                            render={({ values, handleBlur, handleChange, errors, touched, isSubmitting, isValid, handleSubmit, setFieldValue, setFieldTouched }) => (
                                <Form onSubmit={handleSubmit}>
                                    <Col {...formLayout}>
                                        <QuoteForm
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
                                    <Col span={11} style={{ textAlign: 'center' }} >
                                        <Button className="ant-btn" type={'primary'} htmlType="submit">
                                            {'Aceptar'}
                                        </Button>
                                    </Col>
                                </Form>
                            )}
                        />
                    </Col>
                </Row>
            </Content>
        )
    }
}

function mapStateToProps({ quote }) {
    const { responseForm } = quote

    return {
        responseForm
    }
}

export default connect(mapStateToProps, { sendQuoteInformation })(SendInformation);
