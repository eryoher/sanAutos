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

class ConfirmationUser extends Component {

  constructor(props){
    super(props);
    this.state={
      responseParams:{}
    }
  }
  
  componentWillMount(){
    
  }

  componentDidMount() {
    const { location } = window;
    if (location && location.search) {
        const parsedString = qs.parse(location.search.slice(1));
        console.log(parsedString)
        this.setState({activationCode:parsedString.code})        
        this.props.activationCode(parsedString.code);
    }
  }

  render() {
    const {activateCode} = this.props;    
    
    return (
      <Row>          
        <Banner notext/>
        {
          activateCode &&
          <Col span={24} className= 'confirmation-user' >
            <Col className={"title"} span={14} offset={5}>
              { activateCode.data }
            </Col>
            <Col span={12} offset={6} style={{textAlign:'center'}} >                  
                  <Button href={'/'} style={{marginTop:'25px'}} className={"botton-home"}> Inicio </Button>
            </Col>
          </Col>          
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

export default connect (mapStateToProps,{ activationCode })(ConfirmationUser);
