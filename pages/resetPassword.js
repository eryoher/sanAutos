import React, { Component } from 'react'
import { Row, message, Button, Col } from 'antd';
import Layaout from '../components/common/layout';
import { connect } from 'react-redux';
import * as qs from 'qs';
import {activationCode} from '../actions'
import { dateFormat } from '../lib/DateFormat';
import moment from 'moment-business-days';
import HeaderAdmin from '../components/common/headerAdmin';
import Banner from '../components/common/banner';
import FormSendEmailPassword from '../components/users/formSendEmailPassword';
import FormSetPassword from '../components/users/formSetPassword';

class ResetPassword extends Component {

  constructor(props){
    super(props);
    this.state={
        recoverCode:null
    }
  }
  
  componentWillMount(){
    
  }

  componentDidMount() {
    const { location } = window;
    if (location && location.search) {
        const parsedString = qs.parse(location.search.slice(1));        
        this.setState({recoverCode:parsedString.code})        
        
    }
  }

  render() {
    const {recoverCode} = this.state;   

    
    return (
      <Row className= 'confirmation-user'>           
        <Banner notext/>
        {
          !recoverCode &&
          <FormSendEmailPassword />
        } 
        {
          recoverCode &&
          <FormSetPassword recoverCode= {recoverCode}  />
        }         
      </Row>
    )
  }
}

function mapStateToProps({ users }){
  const {activateCode} = users;
  
  return {
      activateCode
  }
}

export default connect (mapStateToProps,{ activationCode })(ResetPassword);
