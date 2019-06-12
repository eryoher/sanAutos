import React, { Component } from 'react'
import { connect } from 'react-redux';
import { searchPromotions }  from '../actions';
import Link  from 'next/link'
import { Row, Col, Icon, Table, Button } from 'antd';
import Layout from '../components/common/layout';

class AdminPromotions extends Component {

  constructor(props) {
    super(props);
    this.columns = [
        {
          title: "Nombre",
          dataIndex: 'name',
          key: 'name',
          width: 200,
      }, 
      {
          title: "Donacion",
          dataIndex: 'donation',
          key: 'donation',
          width: 200,
      }, {
          title: "Descuento",
          dataIndex: 'discount',
          key: 'discount',
          width: 200,
      
      }, {
          title: "Valor",
          dataIndex: 'price',
          key: 'price',
          width: 200,
          
      }, 
      {
        title: "Cantidad",
        dataIndex: 'quantity',
        key: 'quantity',
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
                      <Link href={{ pathname: '/adminpromotion', query: { id: record.id } }}><a><Icon type="edit" /></a></Link>
                  </div>
              )
          },
      }
    ];
  }

  componentWillMount = () => {
    this.props.searchPromotions({
      page:1,
      pageSize:10
    })      
  }

  handleTableChange = (pagination, filters, sorter) => {    
    this.props.searchPromotions({
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
            <Col span={12} offset={6} > <h1>Promociones</h1> </Col>
            <Col span={6}>
              <Button type={'primary'} href={'/adminpromotion'} >  Crear <Icon type={'plus'} />   </Button>
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


function mapStateToProps({ promotions, categories }){
  const {search} = promotions
  return {
      search,
      categories : categories.categoriesCount
  }
}



export default connect (mapStateToProps,{searchPromotions})(AdminPromotions);