import React, { Component } from 'react'
import { Row, Col } from 'antd';
import HeaderAdmin from './headerAdmin';
import { connect } from 'react-redux';
import { ROLES } from '../../constants/AuthConstants';
import redirectByRole from '../common/RedirectByRole';

class Layout extends Component {

    render() {
        const {children} = this.props;
        return (
            <Row>
                <HeaderAdmin />
                <Col span={24} >
                    {children}
                </Col>
            </Row>        
        )
    }
}

export default redirectByRole(Layout, ROLES.ADMIN);