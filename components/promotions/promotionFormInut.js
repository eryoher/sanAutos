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


export default class PromotionFormInput extends Component {   
    
    constructor(props){
        super(props)
        this.state = {};
    }

    handleSave = (imagesToUpdate) => {
        const {setFieldValue} = this.props;
        setFieldValue( 'allImages', imagesToUpdate );        
    }

    dateChange = (field, dates, values) => {
        const { setFieldValue } = this.props;    
        
        if (dates && dates.length > 0) {
          const start = dates[0];
          const end = dates[1];
          
          if (start) {
            setFieldValue('start_date', start.startOf('day').format(apiDateFormatOutHour));
          } else {
            setFieldValue('start_date', null);
          }
    
          if (end) {
            setFieldValue('end_date', end.startOf('day').format(apiDateFormatOutHour));
          } else {
            setFieldValue('end_date', null);
          }
        } else {
          setFieldValue('start_date', null);
          setFieldValue('end_date', null);
        }       
        
    }

    render() {
        const { t, errors, touched, values, handleChange, handleBlur, setFieldValue, setFieldTouched, search, uploadedFiles, listCategories, listCompanies } = this.props;

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
                                className={errors.companyId && touched.companyId ? 'has-error' : ''}
                                label={'Empresa'}
                            >
                                <Select
                                    value={values.companyId}
                                    name="companyId"
                                    style={{ width: 200 }}
                                    onChange={(value) => {                                        
                                        setFieldValue('companyId', value);                                        
                                    }}
                                >
                                    {listCompanies.map(company => (
                                        <SelectOption value={company.id} key={company.id} >{company.name}</SelectOption>
                                    ))}
                                </Select>
                                {errors.companyId && touched.companyId && <div className="ant-form-explain">{errors.companyId}</div>}
                            </FormItem>
                        </Col>
                        <Col {...formLayout}>
                            <FormItem
                                {...largeItemLayout}
                                className={errors.donation && touched.donation ? 'has-error' : ''}
                                label={'Donacion'}
                            >
                                <Input
                                    id="donation"
                                    type="text"
                                    name="donation"
                                    placeholder={'Ingrese la donacion'}
                                    className={'input-form-login'}
                                    value={values.donation}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {errors.donation && touched.donation && <div className="ant-form-explain">{errors.donation}</div>}
                            </FormItem>
                        </Col>
                        <Col {...formLayout}>
                            <FormItem
                                {...largeItemLayout}
                                className={errors.discount && touched.discount ? 'has-error' : ''}
                                label={'Descuento'}
                            >
                                <Input
                                    id="discount"
                                    type="text"
                                    name="discount"
                                    placeholder={'Ingrese el descuento'}
                                    className={'input-form-login'}
                                    value={values.discount}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {errors.discount && touched.discount && <div className="ant-form-explain">{errors.discount}</div>}
                            </FormItem>
                        </Col>
                        <Col {...formLayout}>
                            <FormItem
                                {...largeItemLayout}
                                className={errors.price && touched.price ? 'has-error' : ''}
                                label={'Precio'}
                            >
                                <Input
                                    id="price"
                                    type="text"
                                    name="price"
                                    placeholder={'Ingrese el precio'}
                                    className={'input-form-login'}
                                    value={values.price}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {errors.price && touched.price && <div className="ant-form-explain">{errors.price}</div>}
                            </FormItem>
                        </Col>
                        <Col {...formLayout}>
                            <FormItem
                                {...largeItemLayout}
                                className={errors.quantity && touched.quantity ? 'has-error' : ''}
                                label={'Cantidad'}
                            >
                                { !values.id && <Input
                                    id="quantity"
                                    type="text"
                                    name="quantity"
                                    placeholder={'Ingrese la cantidad'}
                                    className={'input-form-login'}
                                    value={values.quantity}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />}

                                {values.id && <span> {values.quantity} </span>}

                                {errors.quantity && touched.quantity && <div className="ant-form-explain">{errors.quantity}</div>}
                            </FormItem>
                        </Col>
                        <Col {...formLayout}>
                            <FormItem
                                {...largeItemLayout}
                                className={errors.categoriesId && touched.categoriesId ? 'has-error' : ''}
                                label={'Categoria'}
                            >
                                <Select
                                    value={values.categoriesId}
                                    name="categoriesId"
                                    style={{ width: 200 }}
                                    onChange={(value) => {                                        
                                        setFieldValue('categoriesId', value);                                        
                                    }}
                                >
                                    {listCategories.map(category => (
                                        <SelectOption value={category.id} key={category.id} >{category.name}</SelectOption>
                                    ))}
                                </Select>
                                {errors.categoriesId && touched.categoriesId && <div className="ant-form-explain">{errors.categoriesId}</div>}
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
                                        console.log(event.target.value);
                                        
                                        setFieldValue('description', event.target.value)
                                    }}
                                    onBlur={handleBlur}
                                />
                                {errors.description && touched.description && <div className="ant-form-explain">{errors.description}</div>}
                            </FormItem>
                        </Col>                        
                        <Col {...formLayout}>
                            <FormItem
                                {...largeItemLayout}
                                className={errors.address && touched.address ? 'has-error' : ''}
                                label={'Direccion'}
                            >
                                <Input
                                    id="address"
                                    type="text"
                                    name="address"
                                    placeholder={'Ingrese la direccion'}
                                    className={'input-form-login'}
                                    value={values.address}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {errors.address && touched.address && <div className="ant-form-explain">{errors.address}</div>}
                            </FormItem>
                        </Col>
                        <Col {...formLayout}>
                            <FormItem
                                {...largeItemLayout}
                                label={'Fechas de la promocion'}
                            >
                                <RangePicker
                                    format={dateFormat}
                                    name='vigencia'
                                    onBlur={setFieldTouched}
                                    defaultValue={values.vigencia}
                                    onChange={(dates) => {
                                        this.dateChange('vigencia', dates, values);
                                    }}
                                />
                            </FormItem>                        
                        </Col>
                        <Col {...formLayout}>
                            <FormItem
                                {...largeItemLayout}
                                label={'Hora de inicio'}
                            >
                                <TimePicker                                      
                                    use12Hours format="hh:mm:ss A"  
                                    defaultValue={values.start_time}
                                    onChange = { (value) => {                                        
                                        setFieldValue( 'start_time', value );                                        
                                    }}
                                />
                            </FormItem>                        
                        </Col>
                        <Col {...formLayout}>
                            <FormItem
                                {...largeItemLayout}
                                label={'Hora de Final'}
                            >
                                <TimePicker                                      
                                    use12Hours format="hh:mm:ss A"  
                                    defaultValue={values.end_time} 
                                    onChange = { (value) => {                                        
                                        setFieldValue( 'end_time', value );                                        
                                    }}
                                />
                            </FormItem>                        
                        </Col>
                        <Col {...formLayout}>
                            <FormItem
                                {...largeItemLayout}
                                label={'Imagenes'}
                            >
                                <UploadFiles
                                    uploadedFiles={uploadedFiles}
                                    onChange={this.handleSave}
                                    limit={4}
                                />
                            </FormItem>                        
                        </Col>                        
                    </Row>
                </Col>
            </Row>
        )
    }
}