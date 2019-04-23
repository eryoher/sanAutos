import React, { Component } from 'react'
import { Col, Table, Button, Icon, Modal } from 'antd';
import InventoryCreateForm from './inventory-create-form';
import { simpleDateTimeFormat } from '../../lib/DateFormat';
import moment from 'moment-business-days';

export default class InventoryForm extends Component {

    constructor (props) {
        super(props)
        this.columns=[
            {
                title: "Cantidad",
                dataIndex: 'quantity',
                key: 'quantity',
                width: 200,
            },
            {
                title: "Tipo",
                dataIndex: 'type',
                key: 'type',
                width: 200,
                render: (text, record) => {
                  return  (record.type == 1) ? "Entrada" : "Salida";
                }                
            },
            {
                title: "Fecha de Creacion",
                dataIndex: 'createdAt',
                key: 'createdAt',
                width: 300,
                render: (text, record) => {
                    return ( record.createdAt ) ? moment(record.createdAt).format(simpleDateTimeFormat) : null;
                }
            }
        ]

        this.state ={ 
            showCreate : false
        }
    }

    handleCancelCreate = () => {
        this.setState({ showCreate:false })
    }

    render() {
        const {promotion} = this.props
        const { showCreate } = this.state;
        const dataTable = promotion.inventory;
        return (
            <Col span = {24}>
                <Col span={12}>
                    <h2>Inventario</h2>
                    <Table columns={this.columns} dataSource={dataTable} pagination={true} rowKey={'id'} />
                    
                </Col>
                <Col span={6} offset={6} style={{paddingTop:'25px'}} >
                    <Button type={'primary'} onClick= { () => this.setState({showCreate:true}) }  >  Crear <Icon type={'plus'} />   </Button>
                </Col>
                {showCreate && <Modal
                    visible={ showCreate }                
                    onCancel= { () => this.handleCancelCreate() }
                    footer={[]}                                    
                >  
                    <InventoryCreateForm {...this.props} onCloseModal={this.handleCancelCreate} />
                </Modal>}

            </Col>
        )
    }
}
