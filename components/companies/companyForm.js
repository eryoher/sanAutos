import React, { Component } from 'react';
import { Row, Col, Form, Input, Select, AutoComplete, Button, Modal, DatePicker, TimePicker, Upload, Icon } from 'antd';
import { formLayout, largeItemLayout } from '../../constants/TypeForm';
import TextArea from 'antd/lib/input/TextArea';
import { dateFormat, apiDateFormatOutHour } from '../../lib/DateFormat';
import moment from 'moment-business-days';
import UploadFiles from '../common/uploadFiles';


const SelectOption = Select.Option;
const FormItem = Form.Item;
const { RangePicker } = DatePicker;


export default class CompanyForm extends Component {   
    
    constructor(props){
        super(props)
        this.state = {};
    }

    handleSave = (imagesToUpdate) => {
        const {setFieldValue} = this.props;
        setFieldValue( 'allImages', imagesToUpdate );        
    }    

    render() {
        const { t, errors, touched, values, handleChange, handleBlur, setFieldValue, setFieldTouched, search, uploadedFiles, listCategories } = this.props;

        return (
            <Row>
                <Col span={24}>
                    <Row>                    
                        <Col {...formLayout}>
                            <FormItem
                                {...largeItemLayout}
                                className={errors.name && touched.name ? 'has-error' : ''}
                                label={'Nombre'}
                            >
                                <Input
                                    id="name"
                                    type="text"
                                    name="name"
                                    placeholder={'Ingrese el nombre'}
                                    className={'input-form-login'}
                                    value={values.name}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {errors.name && touched.name && <div className="ant-form-explain">{errors.name}</div>}
                            </FormItem>
                        </Col>
                        <Col {...formLayout}>
                            <FormItem
                                {...largeItemLayout}
                                className={errors.code && touched.code ? 'has-error' : ''}
                                label={'Codigo Cliente'}
                            >
                                <Input
                                    id="code"
                                    type="text"
                                    name="code"
                                    placeholder={'Ingrese el codigo'}
                                    className={'input-form-login'}
                                    value={values.code}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {errors.code && touched.code && <div className="ant-form-explain">{errors.code}</div>}
                            </FormItem>
                        </Col>
                        
                        <Col {...formLayout}>
                            <FormItem
                                {...largeItemLayout}
                                className={errors.description && touched.description ? 'has-error' : ''}
                                label={'Descripcion'}
                            >
                                <TextArea
                                    name={'description'}
                                    placeholder={'Ingrese la descripcion'}
                                    rows={4}
                                    value={values.description}
                                    onChange={(event) => {
                                        setFieldValue('description', event.target.value)
                                    }}
                                    onBlur={handleBlur}
                                />
                                {errors.description && touched.description && <div className="ant-form-explain">{errors.description}</div>}
                            </FormItem>
                        </Col>                                                                 
                    </Row>
                </Col>
            </Row>
        )
    }
}