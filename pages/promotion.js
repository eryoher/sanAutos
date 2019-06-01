import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getPromotion }  from '../actions';
import { Row, Col, Modal } from 'antd';
import * as qs from 'qs';
import PromotionDetail from '../components/promotions/promotionDetail';
import Banner from '../components/common/banner';
import Interests from '../components/promotions/Interests';
import Allies from '../components/allies/allies';

class Promotions extends Component {    

    constructor(props){
        super(props)
        this.state = {
            promotionId:null
        }
    }

    componentDidMount() {
        const { location } = window;
        if (location && location.search) {
            const parsedString = qs.parse(location.search.slice(1));
            const promotionId = parsedString.id;
            this.setState({ promotionId });
            this.props.getPromotion(promotionId);
        }
    }

    render() {
        const {promotion, auth} = this.props
        return (
           <Row>
                <Col span={24} className={"promotion-container"}>                    
                    <Col span={24}><Banner title /></Col> 
                    <Col span={24} className={"content"} >
                        { promotion && <PromotionDetail promotion={promotion} auth = {auth} />}
                    </Col>  
                    <Col span={24} ><Interests /></Col>
                    <Col span={24} ><Allies /></Col>       
                </Col>
           </Row>
        )
    }
}

function mapStateToProps({ promotions, auth }){
    const { search, promotion } = promotions
    return {
        search,
        promotion, 
        auth        
    }
}



export default connect (mapStateToProps,{ getPromotion })(Promotions);
