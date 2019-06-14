import React, { Component } from 'react'
import { connect } from 'react-redux';
import { searchUsers }  from '../actions';
import Link  from 'next/link'
import { Row, Col, Icon, Table, Button } from 'antd';
import Layout from '../components/common/layout';

class AdminUsers extends Component {

  constructor(props) {
    super(props);
    this.columns = [
        {
          title: "Usuario",
          dataIndex: 'username',
          key: 'username',
          width: 200,
      }, 
      {
          title: "Nombre",
          dataIndex: 'name',
          key: 'name',
          width: 200,
      }, {
          title: "Apellido",
          dataIndex: 'lastname',
          key: 'lastname',
          width: 200,
      
      }, {
          title: "Ciudad",
          dataIndex: 'city',
          key: 'city',
          width: 200,
          
      }, 
      {
        title: "Correo",
        dataIndex: 'email',
        key: 'email',
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
                      <Link href={{ pathname: '/adminuser', query: { id: record.id } }}><a><Icon type="edit" /></a></Link>
                  </div>
              )
          },
      }
    ];
  }

  componentWillMount = () => {
    this.props.searchUsers({
      page:1,
      pageSize:10
    })      
  }

  handleTableChange = (pagination, filters, sorter) => {    
    this.props.searchUsers({
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
            <Col span={12} offset={6} > <h1>Usuarios</h1> </Col>
            <Col span={6}>
              <Button type={'primary'} href={'/adminuser'} >  Crear <Icon type={'plus'} />   </Button>
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


function mapStateToProps({ users, categories }){
  const {search} = users
  return {
      search,
      categories : categories.categoriesCount
  }
}



export default connect (mapStateToProps,{searchUsers})(AdminUsers);