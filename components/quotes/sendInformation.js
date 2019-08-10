import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Row, Col, Button, Layout, Form, message, Modal } from 'antd';
import { Formik } from 'formik';
import * as Yup from 'yup';
import * as qs from 'qs';
import { formLayout } from '../../constants/TypeForm';
import { sendQuoteInformation } from '../../actions';

import QuoteForm from './quoteForm';
import PersonalDataProtection from '../common/personalDataProtection';


const { Content } = Layout;

class SendInformation extends Component {

    constructor(props) {
        super(props);
        this.state = {
            productId: null,
            showModal: false
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
            const msn = 'Gracias por dejarnos tus datos, muy pronto recibirás en tu correo el bono para ser redimido. ';
            const msn2 = 'Si el bono no te llegó ala bandeja principal de correo por favor verifica en spam'
            message.success(msn, 5);
            message.success(msn2, 5);
        }
    }

    onSubmitCompany = (values) => {
        this.props.createCompany(values);
    }

    handleShowModal = () => {
        this.setState({ showModal: true })
    }

    handleCloseModal = () => {
        this.setState({ showModal: false })

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
            <Content>
                <Row className="form-content">
                    <Col span={24} className="form-title" >
                        Déjanos tus datos
                    </Col>
                    <Col span={24} className="form-copy" >
                        Recibe tu oferta y estrena un Renault
                    </Col>
                    <Col span={4}></Col>
                    <Col span={16}>
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
                                            showModal={this.handleShowModal}
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
                                    <Modal
                                        visible={this.state.showModal}
                                        onCancel={() => this.handleCloseModal()}
                                        footer={false}

                                    >
                                        <PersonalDataProtection />
                                    </Modal>
                                    <Col span={24} className={"btn-content"} >
                                        <Col span={24} style={{ textAlign: 'center' }} >
                                            <Button className="ant-btn" type={'primary'} htmlType="submit">
                                                {'ENVIAR'}
                                            </Button>
                                        </Col>
                                    </Col>
                                </Form>
                            )}
                        />
                    </Col>
                    <Col span={4}></Col>
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

