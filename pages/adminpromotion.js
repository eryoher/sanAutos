import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Row,  Col, Button, Layout, Form, message } from 'antd';
import LayoutAdmin from '../components/common/layout';
import { Formik } from 'formik';
import * as Yup from 'yup';
import * as qs from 'qs';
import PromotionFormInput from '../components/promotions/promotionFormInut';
import { formLayout } from '../constants/TypeForm';
import { getPromotion, getCategories, updatePromotion, createPromotion, createInventory, getCompanies }  from '../actions';
import moment from 'moment-business-days';
import Router from 'next/router'
import getConfig from 'next/config';
import InventoryForm from '../components/inventory/inventory-form';

const { publicRuntimeConfig } = getConfig();

const { Content } = Layout;

class AdminPromotion extends Component {

    constructor(props){
        super(props);
        this.state = {
            promotionId : null
        }
    }

    componentDidMount() {
        const { location } = window;
        if (location && location.search) {
            const parsedString = qs.parse(location.search.slice(1));
            const promotionId = parsedString.id;
            this.setState({ promotionId });
            this.props.getPromotion(promotionId);
        }
    }

    componentDidUpdate = (prevProps) => {
        if( prevProps.success !== this.props.success ){
            if( this.props.success ){
                message.success(this.props.success.data);
                Router.push('/adminpromotions');
            }
        }

        if( this.props.inventory && prevProps.inventory != this.props.inventory ){
            message.success('Se adiciono una nueva cantidad al inventario');
            this.props.getPromotion( this.state.promotionId );
        }
    }

    componentWillMount = () => {
        this.props.getCategories();
        this.props.getCompanies();
    }

    onSubmitPromotion = (values) => {
        const formData = new FormData();
        if(values.allImages){
            const { toSave, toRemove } = values.allImages;
            toSave.forEach((file) => {
                formData.append("imageToSave", file);
            });
            toRemove.forEach((file) => {
                formData.append('imagesToRemove', file);
            });
            delete values.allImages;
        }
        values.start_time = (values.start_time) ? moment( values.start_time).format('HH:mm:ss') : null;
        values.end_time = (values.end_time) ? moment( values.end_time ).format('HH:mm:ss') : null;
        delete values.vigencia;        
        formData.append("all", JSON.stringify(values));  
                                
        if(this.state.promotionId){
            this.props.updatePromotion( values.id, formData);
        }else{
            this.props.createPromotion(formData);
        }                               
    }

    buildUploadedFiles = (imagesFiles) => {
        const files = imagesFiles || []
        return files.map(filename => {
            const url = `${publicRuntimeConfig.promotionImagesBasePath}${filename.name}`
            return {
                uid: filename.name,
                name: filename.name,
                status: 'done',
                origin: 'remote',
                url: url
            }
        });
    };
    
    handleSubmitInventory = (data) => {
        const {auth, createInventory} = this.props;
        data.usersId = auth.userId        
        createInventory(data);
    }

    render() {
        const {promotion, listCategories, listCompanies} = this.props;        
        
        const initialValues = {
            donation:null,
            vigencia:[],
            start_time:null,
            end_time:null
        }

        const initial = (this.state.promotionId !== null) ? promotion : initialValues;    
        
        if (initial && initial.start_date  && initial.end_date ) {
            const vigencia = [moment(initial.start_date), moment(initial.end_date)];
            initial.vigencia = vigencia;
        }
        
        if(promotion){            
            initial.start_time = ( initial.start_time ) ? moment(initial.start_time,'HH:mm:ss') : null;
            initial.end_time = (  initial.end_time ) ? moment(initial.end_time, 'HH:mm:ss') : null;
        }
        const uploadedFiles = (promotion && promotion.assets) ? this.buildUploadedFiles(promotion.assets) : [];

        
        return (
            <LayoutAdmin>
                <Content className="form-content">
                    <Row style={{ paddingTop: '50px' }}>
                        <Col span={20} offset={2}>               
                        { initial && <Formik
                            initialValues = {{...initial}}
                            onSubmit={(values, actions) => {                                                                
                                this.onSubmitPromotion( values );
                                actions.setSubmitting(false);
                            }}
                            validationSchema={Yup.object().shape({
                                /*name: Yup.string().required('El nombre es requerido'),
                                lastname: Yup.string().required('El apellido es requerido'),
                                username: Yup.string().required('El usuario es requerido'),
                                password: Yup.string().required('El password es requerido'),
                                email:Yup.string().required('El E-mail es requerido'),
                                repeatPassword: Yup.string().oneOf([Yup.ref('password')], 'La contraseñas no coinciden').required('El password es requerido'),*/
                            })}
                            render={({ values, handleBlur, handleChange, errors, touched, isSubmitting, isValid, handleSubmit, setFieldValue, setFieldTouched }) => (
                                <Form onSubmit={handleSubmit}>
                                    <Col {...formLayout}>
                                        <PromotionFormInput   
                                            uploadedFiles ={uploadedFiles}
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
                                                listCategories,
                                                listCompanies
                                            }}
                                        />
                                    </Col>
                                    <Col span={2} offset={10} >
                                        <Button className="ant-btn" type={'primary'} htmlType="submit">
                                            {'Aceptar'}
                                        </Button>
                                    </Col>
                                    <Col span={2}  >
                                        <Button  href={'/adminpromotions'}  className="ant-btn" type={'primary'} >
                                            {'Cancelar'}
                                        </Button>
                                    </Col>
                                </Form>
                            )}
                        />}
                        </Col>
                        <Col span={24} style={{paddingTop:'25px'}} >
                           { promotion &&  
                            <InventoryForm 
                                promotion={promotion}  
                                onSubmitInventory = { this.handleSubmitInventory }
                            />}
                        </Col>
                    </Row>                                
                </Content>
            </LayoutAdmin>
        )
    }
}

function mapStateToProps({ promotions, categories, auth, inventories, companies }){
    const {search, promotion, success} = promotions
    const {inventory} = inventories;
    const listCompanies = (companies.companies) ? companies.companies:[]
    return {
        search,
        promotion,
        listCategories : (categories.categories) ? categories.categories : [],
        success,
        auth,
        inventory,
        listCompanies
    }
}

export default connect (mapStateToProps,{getPromotion, getCategories, updatePromotion, createPromotion, createInventory, getCompanies})(AdminPromotion);

