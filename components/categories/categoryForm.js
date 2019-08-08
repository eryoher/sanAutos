import React, { Component } from 'react';
import { Row, Col, Form, Input, Select, AutoComplete, Button, Modal, DatePicker, TimePicker, Upload, Icon } from 'antd';
import { formLayout, largeItemLayout } from '../../constants/TypeForm';


const SelectOption = Select.Option;
const FormItem = Form.Item;

export default class CategoryForm extends Component {   
    
    constructor(props){
        super(props)
        this.state = {};
    }    

    render() {
        const { t, errors, touched, values, handleChange, handleBlur, setFieldValue, setFieldTouched, search, uploadedFiles, listCategories, listIcons } = this.props;

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
                    </Row>
                </Col>
            </Row>
        )
    }
}