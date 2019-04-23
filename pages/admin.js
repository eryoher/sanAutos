import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Row  } from 'antd';
import HeaderAdmin from '../components/common/headerAdmin';
import { ROLES } from '../constants/AuthConstants';
import redirectByRole from '../components/common/RedirectByRole';


class Admin extends Component { 

  render() {
    return (
        <Row>
            <HeaderAdmin showMenu />            
        </Row>
    )
  }
}

function mapStateToProps({ auth }){  
  return {
    auth
  }
}

export default connect (mapStateToProps,{})(redirectByRole(Admin, ROLES.ADMIN));