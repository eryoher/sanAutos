import React, { Component } from 'react'
import { connect } from 'react-redux';
import { searchCategories, removeCategory } from '../actions';
import { Row, Col, Icon, Table, Button, Modal, message, Divider } from 'antd';
import Layout from '../components/common/layout';
import AdminCategory from '../components/categories/adminCategory';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import faTrashAlt from '@fortawesome/fontawesome-free-solid/faTrashAlt'


const listIcons = [
    {
        label: 'Caja',
        value: 'box'
    },
    {
        label: 'Tenedor Cuchara',
        value: 'fork'
    },
    {
        label: 'Paracaida',
        value: 'parachute'
    },
    {
        label: 'Avion',
        value: 'plane'
    },
    {
        label: 'Tijeras',
        value: 'scissors'
    },
    {
        label: 'Destornillador',
        value: 'screwdriver'
    },
    {
        label: 'Piedras',
        value: 'stones'
    }

];

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
                                <AdminCategory
                                    onCancel={() => this.handleCloseModal()}
                                    category={record}
                                    listIcons={listIcons}
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
            let msn = (category) ? 'Se actualizo la categoria correctamente.' : 'Se creo la categoria correctamente';
            msn = (this.props.success.count) ? 'La categoria se elimino correctamente.' : msn;
            if (this.props.success) {
                message.success(msn);
                this.props.searchCategories({
                    page: 1,
                    pageSize: 10
                })
            }
        }
    }

    returnIcon = (icon) => {
        let response = ''
        listIcons.forEach(iconItem => {
            if (iconItem.value == icon) {
                response = iconItem.label;
                return true;
            }
        });

        return response;
    }

    componentWillMount = () => {
        this.props.searchCategories({
            page: 1,
            pageSize: 10
        })
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
        this.props.removeCategory(category.id);

    }

    handleTableChange = (pagination) => {
        this.props.searchCategories({
            'page': pagination.current,
            'pageSize': pagination.pageSize
        });
    }

    render() {
        const { search } = this.props;
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
                        <Col span={12} offset={6} > <h1>Categorias</h1> </Col>
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
                                <AdminCategory
                                    onCancel={() => this.handleCloseModalCreate()}
                                    listIcons={listIcons}
                                />
                            </Modal>}
                        </Col>
                    </div>
                </Layout>
            </Row>
        )
    }
}

function mapStateToProps({ categories }) {
    const { search, success } = categories
    return {
        search,
        success
    }
}

export default connect(mapStateToProps, { searchCategories, removeCategory })(AdminCategories);