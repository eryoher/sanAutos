import React, { Component } from 'react'
import { connect } from 'react-redux'
import { userSignOut } from '../../actions';
import { Col, Icon, message, Divider } from 'antd';
import Login from './login';
import MenuAdmin from './menuAdmin';

class Banner extends Component {

    constructor(props){
        super(props)
        this.state={
            showLogin:false
        }
    }

    onShowLogin = () =>{
        this.setState({showLogin:true})
    }

    handleCancelLogin = () => {
        this.setState({showLogin:false})
    }
    
    onLogout = () => {
        this.props.userSignOut();
    }

    componentDidUpdate = (prevProps) => {
        if( prevProps.auth.user !== this.props.auth.user && !this.props.auth.user){
            message.success('El usuario se deslogeo correctamente.');
        }
    }

    handleShowLogin = () => {
        
    }

    render() {
        const {auth, title, menuAdmin} = this.props;        
        const bgBanner ="../../static/img/bg-banner.png";
        const bannerLogo = "../../static/img/banner-logo.png";
        const isLogin = (auth.user) ? true: false
        return (
            <Col span={24} className={"banner-content"}  style={{backgroundImage: `url(${bgBanner})`}}>
                <Col span={9} style={{backgroundImage: `url(${bannerLogo})`}} className={"banner-logo"} />
                <Col span={15}>
                    { !isLogin && <Col span={12} offset={12} className={"banner-row banner-login"} >
                        <a onClick={() => this.onShowLogin() }>                                  
                            <Icon type="shopping-cart" />        
                            <Divider type="verical" />
                            Login
                        </a>
                    </Col>}
                    { isLogin && <Col span={12} offset={12} className={"banner-row banner-login"} >
                        <a onClick={() => this.onLogout() }>
                            <Icon type="logout" />      
                            <Divider type="verical" />
                            Logout
                        </a>
                    </Col>}

                    <Col span={12} style={{textAlign:'right'}} >
                        <img src={"../../static/img/logo-white.png"} style={{height:'114px'}} className={"logo"} />
                    </Col>
                    <Col span={12} className={"banner-row"} ></Col>
                    <Col span={24} className={"banner-row banner-message"} >Dotamos a hospitales infantiles <span className={"color-orange"}> con material didactico </span></Col>
                    <Login
                        showLogin = { this.state.showLogin }
                        onCancelLogin = { this.handleCancelLogin }
                        onShowLogin = { this.handleShowLogin }
                    />
                </Col>
                {!title && !menuAdmin && <Col span={24} className={"title-top-promotions"} >
                    Ofertas de donación <span className={"color-blue"} > Destacadas </span>
                </Col>}
                {title && !menuAdmin && <Col span={24} className={"title-top-promotions"} >
                    Ofertas de donación 
                </Col>}
                {
                    menuAdmin && <MenuAdmin showMenu />
                }
            </Col>
        )
    }
}

const mapStateToProps = ({auth}) => {
    return { auth }  
};

export default connect(mapStateToProps, {userSignOut})(Banner);
