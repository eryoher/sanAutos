import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Row, Col, Button, Layout, Form, message, Input, Select } from 'antd';
import LayoutAdmin from '../common/layout';
import { Formik } from 'formik';
import * as Yup from 'yup';
import * as qs from 'qs';
import { formLayout, largeItemLayout } from '../../constants/TypeForm';
import { setSubCategory } from '../../actions';

const FormItem = Form.Item;
const SelectOption = Select.Option;

const { Content } = Layout;

class AdminSubCategory extends Component {

    constructor(props) {
        super(props);
    }

    onSubmitForm = (values) => {
        this.props.setSubCategory(values);
        this.props.onCancel();
    }

    render() {
        const { subCategory, categories } = this.props;

        const initialValues = {
            name: '',
            icon: ''
        }

        const initial = (subCategory) ? subCategory : initialValues;

        return (
            <Content className="form-content">
                <Row style={{ paddingTop: '50px' }}>
                    <Col span={20} offset={2}>
                        {initial && <Formik
                            initialValues={{ ...initial }}
                            onSubmit={(values, actions) => {
                                this.onSubmitForm(values);
                                actions.setSubmitting(false);
                            }}
                            validationSchema={Yup.object().shape({
                                name: Yup.string().required('El nombre es requerido.'),
                            })}
                            render={({ values, handleBlur, handleChange, errors, touched, isSubmitting, isValid, handleSubmit, setFieldValue, setFieldTouched }) => (
                                <Form onSubmit={handleSubmit}>
                                    <Col {...formLayout}>
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
                                                className={errors.categoriesId && touched.categoriesId ? 'has-error' : ''}
                                                label={'Tipo'}
                                            >
                                                <Select
                                                    value={values.categoriesId}
                                                    name="categoriesId"
                                                    style={{ width: 200 }}
                                                    onChange={(value) => {
                                                        setFieldValue('categoriesId', value);
                                                    }}
                                                >
                                                    {categories.map(category => (
                                                        <SelectOption value={category.id} key={category.id} >{category.name}</SelectOption>
                                                    ))}
                                                </Select>
                                                {errors.categoriesId && touched.categoriesId && <div className="ant-form-explain">{errors.categoriesId}</div>}
                                            </FormItem>
                                        </Col>
                                    </Col>
                                    <Col span={5} offset={8} >
                                        <Button className="ant-btn" type={'primary'} htmlType="submit">
                                            {'Aceptar'}
                                        </Button>
                                    </Col>
                                    <Col span={2}  >
                                        <Button onClick={() => this.props.onCancel()} className="ant-btn" type={'primary'} >
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

function mapStateToProps({ categories }) {
    const { success } = categories

    return {
        success
    }
}

export default connect(mapStateToProps, { setSubCategory })(AdminSubCategory);