import React, { Component } from 'react'
import Countdown from 'react-countdown-now';
import { Col, Tabs , Button, Modal} from 'antd';
import Login from '../common/login';
import BuyPromotion from '../payments/buyPromotion';
import { connect } from 'react-redux';
import { createPreference } from '../../actions';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();
const TabPane = Tabs.TabPane;

class PromotionDetail extends Component {    

    constructor(props){
        super(props);
        this.state = {
            showLogin : false,
            showPay:false,
            urlMainImg:null, 
            assetSelected: null
        }
    }

    onChangeMain = (file) => {
        const url  = `${publicRuntimeConfig.promotionImagesBasePath}${file.name}`;
        this.setState({urlMainImg:url, assetSelected:file.id});
    }

    renderListImg = () => {
        const {assets} = this.props.promotion;
        const {assetSelected} = this.state;
        let rows = [];           
        let permited = true;

        assets.forEach( (asset, index) => {            
            permited = ( !index && !assetSelected ) ? false : ( assetSelected && assetSelected == asset.id ) ? false:true;            
            if(permited){
                rows.push(
                    <div key={asset.id} onClick={ () => this.onChangeMain(asset) }  className={"list"} style={{backgroundImage: `url(${publicRuntimeConfig.promotionImagesBasePath}${asset.name})`}} />
                )
            }
        });

        return rows;
    }


    renderer = ({ days, hours, minutes, seconds, completed }) => {
        if (completed) {
          // Render a completed state
          return false;
        } else {
          // Render a countdown
          seconds = (seconds<10) ? `0${seconds}` : seconds;
          minutes = (minutes<10) ? `0${minutes}` : minutes;
          hours = (hours<10) ? `0${hours}` : hours;
          days = (days<10) ? `0${days}` : days;

          return <span className={"time"}> <span className={"interval"}>{days}</span>:<span className={"interval"}>{hours}</span>:<span className={"interval"}>{minutes}</span>:<span className={"interval"}>{seconds}</span> </span>;
        }
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
        let endDate = new Date();
        if( urlMainImg ){
            urlImage = urlMainImg ;
        }
        if( promotion.end_date && promotion.end_time ){
            let newEnd = promotion.end_date.split('T')[0] +" "+ promotion.end_time
            endDate = new Date(newEnd);    
        }else{
            endDate = new Date(promotion.end_date);
        }
        
        const urlButton = (preference) ? preference.init_point:"#";
        const nameButton = (preference) ? "Donar Ya":"Dona Aqui";
        const target = (preference) ? '_blank': '_self';        
        return (
            <Col>
                <Tabs defaultActiveKey="1"  type="card" tabPosition="top" >
                    <TabPane key={1} tab={'La oferta'} >
                        <Col span={20} offset={2} className={"promotion-images"} >
                            <Col className={"main-image"} >
                                <img src={urlImage} />
                            </Col>
                            <Col className={"list-images"} >
                                {this.renderListImg()}
                            </Col>
                            <Col className={"description"} >
                                {promotion.description}
                            </Col>
                            <Col span={24} className={"time-promotion"} >
                                <img className={"img-clock"} src={"../../static/img/clock.png"} />
                                <span className={"message"}>Tiempo Restante </span>
                                <Countdown date={endDate.getTime()} renderer={this.renderer} />
                            </Col>
                            <Col span={5} offset={7} className={"div-botton-donate"} >
                                <Button href={urlButton} target={target} className={"botton-donate"} onClick={ () => this.handleCallPaid() } > {nameButton} </Button>                                 
                            </Col>
                            <Col span={5} offset={1} className={"div-botton-donate"} >
                                <Button href={'/'} className={"botton-donate"}> Volver </Button>                                 
                            </Col>
                            <Login 
                                showLogin = { this.state.showLogin }
                                onCancelLogin = { this.handleCancelLogin }
                                onShowLogin = { this.handleShowLogin }
                            />
                            { this.state.showPay &&
                                <Modal
                                    visible={ this.state.showPay }                
                                    onCancel= { () => this.handleCancelPay() }
                                    footer={[]}                                    
                                >  
                                    <BuyPromotion 
                                        {...this.props}
                                        onCreatePreference = { this.handleCreatePreference }                                       
                                        onCancelPay = { this.handleCancelPay }
                                    />
                                </Modal>
                            }
                        </Col>
                    </TabPane>
                    <TabPane key={2} tab={'Condiciones'}>

                    </TabPane>
                    <TabPane key={3} tab={'Localizacion'}>

                    </TabPane>
                </Tabs>      
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



export default connect (mapStateToProps,{createPreference})(PromotionDetail);
