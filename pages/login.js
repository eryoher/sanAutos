import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Row, Col, message } from 'antd';
import HeaderAdmin from '../components/common/headerAdmin';
import LoginForm from '../components/users/loginForm';
import Router from 'next/router'

const dividerColumn = {
    xs: { span: 1 },
    sm: { span: 2 },
    md: { span: 4 },
    lg: { span: 6 },
    xl: { span: 8 },
}

const infoColumn = {
    xs: { span: 24 },
    sm: { span: 24 },
    md: { span: 12 },
    lg: { span: 12 },
    xl: { span: 7 },
}

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
            <Row {...infoColumn}>                
                <Col offset={6} span={24} className={'ant-modal-body'} >
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