import React, { Component } from 'react'
import { connect } from 'react-redux'
import { userSignOut } from '../../actions';
import { Col, Icon, message, Divider, Input, Select } from 'antd';
import Login from './login';
import MenuAdmin from './menuAdmin';

class Banner extends Component {

    constructor(props) {
        super(props)
        this.state = {
            showLogin: false
        }
    }

    onShowLogin = () => {
        this.setState({ showLogin: true })
    }

    handleCancelLogin = () => {
        this.setState({ showLogin: false })
    }

    onLogout = () => {
        this.props.userSignOut();
    }
    componentDidUpdate = (prevProps) => {
        if (prevProps.auth.user !== this.props.auth.user && !this.props.auth.user) {
            message.success('El usuario se deslogeo correctamente.');
        }
    }

    handleShowLogin = () => {
    }

    renderCities = () => {
        //const { listCities } = this.props;
        const rows = [];
        const Option = Select.Option;

        //listCities.forEach(city => {
        rows.push(
            <Select key='no' defaultValue='Bogotá' style={{ width: 200 }}  size='large'>
                <Option key='Bogotá' value='Bogotá'>Bogotá</Option>
                <Option key="Cartagena"value="Cartagena">Cartagena</Option>
                <Option key="Cali" value="Cali">Cali</Option>
                <Option key="Medellin" value="Medellin">Medellín</Option>
            </Select>
        )
        //});

        return rows
    }

    render() {
        const { auth, title, menuAdmin } = this.props;
        const bgBanner = "../../static/img/bg-banner.svg";
        const bannerLogo = "../../static/img/banner-logo.svg";
        const isLogin = (auth.user) ? true : false
        const Search = Input.Search;
        return (
            <Col span={24} className={"banner-content"} style={{ backgroundImage: `url(${bgBanner})` }} >
                <a href={'/'} >
                    <Col span={10} className={"banner-logo"} style={{ backgroundImage: `url(${bannerLogo})` }} />
                </a>
                <Col span={4} className={'search'} >
                    <Search  size="large" placeholder="SEARCH" />
                </Col>
                <Col span={4} className={'cities'}>
                    {this.renderCities()}   
                </Col>
                <Col span={6}>
                    {!isLogin &&
                        <Col span={12} offset={12} className={"banner-row banner-login"} >
                            <a onClick={() => this.onShowLogin()}>
                                <Icon type="shopping-cart" />
                                <Divider type="verical" />
                                Login
                            </a>
                        </Col>}
                    {isLogin &&
                        <Col span={12} offset={12} className={"banner-row banner-login"} >
                            <a onClick={() => this.onLogout()}>
                                <Icon type="logout" />
                                <Divider type="verical" />
                                Logout
                            </a>
                        </Col>}
                    <Login
                        showLogin={this.state.showLogin}
                        onCancelLogin={this.handleCancelLogin}
                        onShowLogin={this.handleShowLogin}
                    />
                </Col>
                {
                    menuAdmin && <MenuAdmin showMenu />
                }
            </Col>
        )
    }
}

const mapStateToProps = ({ auth }) => {
    return { auth }
};

export default connect(mapStateToProps, { userSignOut })(Banner);