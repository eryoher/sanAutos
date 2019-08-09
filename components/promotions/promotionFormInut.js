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

    constructor(props) {
        super(props)
        this.state = {};
    }

    handleSave = (imagesToUpdate) => {
        const { setFieldValue } = this.props;
        setFieldValue('allImages', imagesToUpdate);
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
        const { t, errors, touched, values, handleChange, handleBlur, setFieldValue, setFieldTouched, search, uploadedFiles, listCategories, logosProducts } = this.props;

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
                                className={errors.price && touched.price ? 'has-error' : ''}
                                label={'Valor'}
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
                                className={errors.promotion && touched.promotion ? 'has-error' : ''}
                                label={'Descuento'}
                            >
                                <Input
                                    id="promotion"
                                    type="text"
                                    name="promotion"
                                    placeholder={'Ingrese el descuento'}
                                    className={'input-form-login'}
                                    value={values.promotion}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {errors.promotion && touched.promotion && <div className="ant-form-explain">{errors.promotion}</div>}
                            </FormItem>
                        </Col>
                        <Col {...formLayout}>
                            <FormItem
                                {...largeItemLayout}
                                className={errors.categoriesId && touched.categoriesId ? 'has-error' : ''}
                                label={'Model'}
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
                                className={errors.logo && touched.logo ? 'has-error' : ''}
                                label={'Logo'}
                            >
                                <Select
                                    value={values.logo}
                                    name="logo"
                                    style={{ width: 200 }}
                                    onChange={(value) => {
                                        setFieldValue('logo', value);
                                    }}
                                >
                                    {logosProducts.map(logo => (
                                        <SelectOption value={logo.key} key={logo.key} >{logo.label}</SelectOption>
                                    ))}
                                </Select>
                                {errors.logo && touched.logo && <div className="ant-form-explain">{errors.logo}</div>}
                            </FormItem>
                        </Col>
                        <Col {...formLayout}>
                            <FormItem
                                {...largeItemLayout}
                                className={errors.description && touched.description ? 'has-error' : ''}
                                label={'Descripción'}
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
                                label={'Imagenes'}
                            >
                                <UploadFiles
                                    uploadedFiles={uploadedFiles}
                                    onChange={this.handleSave}
                                    limit={5}
                                />
                            </FormItem>
                        </Col>
                    </Row>
                </Col>
            </Row>
        )
    }
}