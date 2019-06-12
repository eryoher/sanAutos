import React, { Component } from 'react'
import { Col, Tabs , Button, Modal} from 'antd';
import { connect } from 'react-redux';
import { createPreference } from '../../actions';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();
const TabPane = Tabs.TabPane;

class PromotionCheck extends Component {    

    constructor(props){
        super(props);
        this.state = {
            showLogin : false,
            showPay:false,
            urlMainImg:null, 
            assetSelected: null
        }
    }    

    renderListImg = () => {
        const {assets} = this.props.promotion;        
        let rows = [];                   

        assets.forEach( (asset, index) => {
            rows.push(
                <div key={asset.id} className={"list"} style={{backgroundImage: `url(${publicRuntimeConfig.promotionImagesBasePath}${asset.name})`}} />
            )
        });

        return rows;
    }


    handleCallPaid = () => {        
        const token = localStorage.getItem('token')
        if(!token){            
            this.setState({showLogin:true})         
        }else{
           this.setState({showPay:true})

        }
    }

    handleCancelLogin = () => {
        this.setState({showLogin:false});
    }

    handleCancelPay = () => {
        this.setState({showPay:false});
    }

    handleShowLogin = () => {
        this.setState({showLogin:true});
    }

    handleCreatePreference = (preference) =>{
        this.props.createPreference(preference)
    }

    render() {
        const {promotion, preference } = this.props
        const { urlMainImg } = this.state;        
        let urlImage = (promotion.assets.length) ? `${publicRuntimeConfig.promotionImagesBasePath}${promotion.assets[0].name}` : "../../static/img/no-imagen.jpg";        
        
        if( urlMainImg ){
            urlImage = urlMainImg ;
        }        
        
        const urlButton = (preference) ? preference.init_point:"#";
        const nameButton = (preference) ? "Donar Ya":"Dona Aqui";
        const target = (preference) ? '_blank': '_self';        

        return (
            <Col>
                <Col span={20} offset={2} className={"promotion-images"} >                    
                    <Col className={"list-images"} >
                        {this.renderListImg()}
                    </Col>
                    <Col className={"description"} >
                        {promotion.description}
                    </Col>                    
                </Col>               
            </Col>
        )
    }
}

function mapStateToProps({ auth, payments }){
    const {preference} = payments;
    return {
        auth,
        preference
    }
}



export default connect (mapStateToProps,{createPreference})(PromotionCheck);
