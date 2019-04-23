import React, { Component } from 'react'
import { connect } from 'react-redux';
import { searchCompanies } from '../actions';
import Link  from 'next/link'
import { Row, Col, Icon, Table, Button } from 'antd';
import Layout from '../components/common/layout';

class AdminCompanies extends Component {

    constructor(props){
        super(props);
        this.columns = [            
            {
                title: "Nombre",
                dataIndex: 'name',
                key: 'name',
                width: 200,
            }, 
            {
                title: "Codigo Cliente",
                dataIndex: 'code',
                key: 'code',
                width: 200,
            }, 
            {
                title: "Descripcion",
                dataIndex: 'description',
                key: 'description',
                width: 200,
            }, 
            {
                title: "Fecha de Creacion",
                dataIndex: 'createdAt',
                key: 'createdAt',
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
                            <Link href={{ pathname: '/adminCompany', query: { id: record.id } }}><a><Icon type="edit" /></a></Link>
                        </div>
                    )
                },
            }
        ];
    }

    componentWillMount = () => {
        this.props.searchCompanies({
          page:1,
          pageSize:10
        })      
    }

    handleTableChange = (pagination) => {    
        this.props.searchCompanies({
            'page': pagination.current,
            'pageSize': pagination.pageSize
        });
    }

    render() {
        const { search } = this.props;        
        let pagination = {};        
        if(search){
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
                    <div style={{marginTop:'50px'}} >
                        <Col span={12} offset={6} > <h1>Empresas</h1> </Col>
                        <Col span={6}>
                            <Button type={'primary'} href={'/adminCompany'} >  Crear <Icon type={'plus'} />   </Button>
                        </Col>
                        <Col span={24} >
                        { search && <Table columns={this.columns} dataSource={search.data} pagination={pagination} onChange={this.handleTableChange} rowKey={'id'} />}
                        </Col>
                    </div>      
                </Layout>
            </Row>
        )
    }
}

function mapStateToProps({ companies }){
    const {search} = companies
    return {
        search        
    }
}
  
  
  
export default connect (mapStateToProps,{searchCompanies})(AdminCompanies);
