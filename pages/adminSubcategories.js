import React, { Component } from 'react'
import { connect } from 'react-redux';
import { searchSubCategories, getCategories } from '../actions';
import Link from 'next/link'
import { Row, Col, Icon, Table, Button, Modal, message, Divider } from 'antd';
import Layout from '../components/common/layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import faTrashAlt from '@fortawesome/fontawesome-free-solid/faTrashAlt'
import AdminSubCategory from '../components/subCategories/adminSubCategory';

class AdminCategories extends Component {

    constructor(props) {
        super(props);

        this.state = {
            showModal: false,
            showModalCreate: false,
            recordSelected: null,
            showDeleteModal: false,
            removeRecord: null
        }

        this.columns = [
            {
                title: "Nombre",
                dataIndex: 'name',
                key: 'name',
                width: 200,
            },
            {
                title: "Tipo",
                dataIndex: 'category',
                key: 'category',
                width: 200,
                render: (text, record) => {
                    return(
                        record.categories.name
                    )
                }
            },

            {
                title: "Acciones",
                key: 'action',
                width: 150,
                align: 'center',
                render: (text, record) => {
                    return (
                        <div>
                            <a onClick={() => { this.setState({ recordSelected: record, showModal: true }) }} >
                                <Icon type="edit" />
                            </a>
                            <Divider type="vertical" />

                            <a ref={this.saveRef}
                                onClick={() => {
                                    this.setState({ removeRecord: record, showDeleteModal: true });
                                }}
                            >
                                <FontAwesomeIcon icon={faTrashAlt} />
                            </a>

                            <Modal
                                visible={this.state.showModal && this.state.recordSelected.id == record.id}
                                onCancel={() => this.handleCloseModal()}
                                footer={[]}
                            >
                                <AdminSubCategory
                                    onCancel={() => this.handleCloseModal()}
                                    subCategory={record}
                                    categories={this.props.listCategories}
                                />
                            </Modal>
                            <Modal
                                visible={this.state.showDeleteModal && record.id == this.state.removeRecord.id}
                                onCancel={() => {
                                    this.setState({ showDeleteModal: false });
                                }}
                                onOk={() => this.handleRemove(record)}
                                onCancel={() => this.setState({ showDeleteModal: false })}
                            >

                                {
                                    this.state.showDeleteModal &&
                                    <div style={{ margin: '5%', paddingTop: '25px' }} >
                                        <p> {'Esta seguro de Eliminar la categoria ?'}</p>
                                        <p> {record.name} </p>
                                    </div>
                                }

                            </Modal>


                        </div>
                    )
                },
            }
        ];
    }

    componentDidUpdate = (prevProps) => {
        if (prevProps.success !== this.props.success && this.props.success) {
            const category = this.state.recordSelected;
            let msn = (category) ? 'Se actualizo la sub categoria correctamente.' : 'Se creo la sub categoria correctamente';
            msn = (this.props.success.count) ? 'La categoria se elimino correctamente.' : msn;
            if (this.props.success) {
                message.success(msn);
                this.props.searchSubCategories({
                    page: 1,
                    pageSize: 10
                })
            }
        }
    }

    componentWillMount = () => {
        this.props.searchSubCategories({
            page: 1,
            pageSize: 10
        })

        this.props.getCategories();
    }

    handleCloseModal = () => {
        this.setState({
            showModal: false
        })
    }

    handleCloseModalCreate = () => {
        this.setState({
            showModalCreate: false
        })
    }

    handleRemove = (category) => {
        this.props.getCategories(category.id);

    }

    handleTableChange = (pagination) => {
        this.props.searchSubCategories({
            'page': pagination.current,
            'pageSize': pagination.pageSize
        });
    }

    render() {
        const { search, listCategories } = this.props;
        let pagination = {};
        if (search) {
            pagination = {
                defaultCurrent: 1,
                current: search.page,
                pageSize: search.limit,
                total: search.totalCount,
            }
        }

        return (
            <Row >
                <Layout>
                    <div style={{ marginTop: '50px' }} >
                        <Col span={12} offset={6} > <h1>Sub Categorias</h1> </Col>
                        <Col span={6}>
                            <Button type={'primary'} onClick={() => { this.setState({ showModalCreate: true }) }} > Crear <Icon type={'plus'} />   </Button>
                        </Col>
                        <Col span={12} offset={6} >
                            {search && <Table columns={this.columns} dataSource={search.data} pagination={pagination} onChange={this.handleTableChange} rowKey={'id'} />}
                        </Col>
                        <Col>
                            {this.state.showModalCreate && <Modal
                                visible={this.state.showModalCreate}
                                onCancel={() => this.handleCloseModalCreate()}
                                footer={[]}
                            >
                                <AdminSubCategory
                                    onCancel={() => this.handleCloseModalCreate()}                                    
                                    categories={listCategories}
                                />
                            </Modal>}
                        </Col>
                    </div>
                </Layout>
            </Row>
        )
    }
}

function mapStateToProps({ subCategories, categories }) {
    const { search, success } = subCategories
    const listCategories = categories.categories;
    return {
        search,
        success,
        listCategories
    }
}

export default connect(mapStateToProps, { searchSubCategories, getCategories })(AdminCategories);