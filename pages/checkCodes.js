import React, { Component } from 'react'
import LayoutCompany from '../components/common/layoutCompany';
import { Row, Col, Button, Icon, Input, Layout, Form, message } from 'antd';
import { Formik } from 'formik';
import { formLayout, formMidleLayout } from '../constants/TypeForm';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import { checkCodes, redeemCode } from '../actions';
import PromotionCheck from '../components/authorizationCode/promotionCheck';

const FormItem = Form.Item;
const { Content } = Layout;

class CheckCodes extends Component {

    constructor(props){
        super(props);
        this.state={            
        }
    }

    componentDidUpdate = (prevProps) => {
        const {codeValidate} = this.props;
        if(prevProps.codeValidate != codeValidate && codeValidate ){
            if( !codeValidate.code ){
                message.error(codeValidate);
            }
        }
    }

    handleValidateCode = (code) => {
        this.props.redeemCode( code );
    }

    render() {
        const {codeValidate} = this.props;    

        return (
            <LayoutCompany>
                <Content className="form-content form-checkCode">
                    <Row style={{ paddingTop: 35 }}>
                        <Col className={"title"} span={20} offset={2} style={{textAlign:'center'}} >
                                Validar Codigo
                        </Col>
                        <Col span={20} offset={2} style={{ paddingTop: 20 }}>               
                            <Formik                                
                                onSubmit={(values, actions) => {
                                    this.props.checkCodes(values);
                                    actions.setSubmitting(false);
                                }}
                                validationSchema={Yup.object().shape({})}
                                render={({ values, handleBlur, handleChange, errors, touched, isSubmitting, isValid, handleSubmit, setFieldValue, setFieldTouched }) => (
                                    <Form onSubmit={handleSubmit}>
                                        <Col {...formMidleLayout}>
                                            <FormItem
                                                {...formLayout}
                                                className={errors.code && touched.code ? 'has-error' : ''}
                                                label={false}
                                            >
                                                <Input
                                                    id="code"
                                                    type="text"
                                                    name="code"
                                                    placeholder={'Codigo *'}
                                                    className={'input-form-login'}
                                                    value={values.code}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                />
                                                {errors.code && touched.code && <div className="ant-form-explain">{errors.code}</div>}
                                            </FormItem>
                                        </Col>
                                        <Col span={4} style={{textAlign:'center'}} >
                                            <Button className="ant-btn login-form-button" htmlType="submit" disabled={!values.code}>
                                                {'Buscar'}
                                            </Button>
                                        </Col>
                                        { codeValidate  && codeValidate.code && 
                                            <Col span={4} style={{textAlign:'center'}} >
                                                <Button onClick = { () => this.handleValidateCode(values.code)} className="ant-btn login-form-button" htmlType="button" disabled={ codeValidate.status != 'open' } >
                                                    {'Redimir Codigo'}
                                                </Button>
                                            </Col>
                                        }
                                    </Form>
                                )}
                            />
                        </Col>
                    </Row> 
                    {
                        codeValidate  && codeValidate.code && 
                            <Row>
                                <Col span={24} className={"promotion-container"}>     
                                    <Col span={20} offset={2} className={"checkValidate"} >
                                        {`Estado: ${codeValidate.status}`}
                                    </Col>                                                   
                                    <Col span={24} className={"content"} >                                        
                                        <PromotionCheck promotion={codeValidate.promotions}/>
                                    </Col>         
                                </Col>
                            </Row>
                    }           
                </Content>
            </LayoutCompany>
        )
    }
}


function mapStateToProps({ authorizationCode }){
    const {codeValidate} = authorizationCode
    
    return {
        codeValidate
    }
}

export default connect (mapStateToProps,{checkCodes, redeemCode})(CheckCodes);