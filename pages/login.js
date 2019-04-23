import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Row, Col, message } from 'antd';
import HeaderAdmin from '../components/common/headerAdmin';
import LoginForm from '../components/users/loginForm';
import Router from 'next/router'

class LoginAdmin extends Component {

    componentDidUpdate = (prevProps) => {
        const {auth} = this.props;
        if( auth && ( prevProps.auth != auth ) ){            
            message.success('EL usuario se logeo correctamente.');
            Router.push('/');      
        }
    }

    render() {
        return (
            <Row>                
                <Col offset={6} span={12} className={'ant-modal-body'} >
                    <LoginForm />
                </Col>
            </Row>
        )
    }
}

function mapStateToProps({ auth }){  
    return {
      auth
    }
}
  
export default connect (mapStateToProps)(LoginAdmin);