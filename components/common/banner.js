import React, { Component } from 'react'
import { connect } from 'react-redux'
import { userSignOut } from '../../actions';
import { Row, Col, Icon, message, Divider, Input, Select, Button, Drawer } from 'antd';
import Login from './login';
import MenuAdmin from './menuAdmin';
import Router from 'next/router'
import MenuCategories from '../categories/menuCategories';

const dividerColumn = {
    xs: { span: 24 },
    sm: { span: 24 },
    md: { span: 24 },
    lg: { span: 12 },
    xl: { span: 12 },
}

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
            <Select key='no' defaultValue='Bogotá' size='large'>
                <Option key='Bogotá' value='Bogotá'>Bogotá</Option>
                <Option key="Cartagena" value="Cartagena">Cartagena</Option>
                <Option key="Cali" value="Cali">Cali</Option>
                <Option key="Medellin" value="Medellin">Medellín</Option>
            </Select>
        )
        //});

        return rows
    }

    handleClickButton() {
        Router.push({ pathname: '/' });
    }

    state = {
        visible: false
    }
    showDrawer = () => {
        this.setState({
            visible: true,
        });
    };
    onClose = () => {
        this.setState({
            visible: false,
        });
    };

    render() {
        const { auth, title, menuAdmin } = this.props;
        const bannerLogo = "../../static/img/banner-logo.svg";
        const isLogin = (auth.user) ? true : false
        const Search = Input.Search;
        return (
            <Row className={"banner-content"} >
                <Row className={"banner-top"} >
                    <Col span={4} >
                        <Button className="barsMenu" type="primary" onClick={this.showDrawer}>
                            {/* <span className="barsBtn"></span> */}
                            <Icon type={this.state.visible ? 'close' : 'menu'} />
                        </Button>
                        <Drawer
                            title="Categorias"
                            placement="left"
                            closable={false}
                            onClose={this.onClose}
                            visible={this.state.visible}
                            onClick={this.onClose}
                        >
                            <MenuCategories />
                        </Drawer>
                    </Col>
                    <Col span={20} >
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
                </Row>
                <Col span={24} className={'banner-include'}>
                    <Col {...dividerColumn} className={"banner-logo"}
                        onClick={() => this.handleClickButton()}
                        style={{ backgroundImage: `url(${bannerLogo})` }} >
                    </Col>
                    <Col {...dividerColumn} className={"banner-params"}>
                        <Row>
                            <Col span={14} className={'search'} >
                                <Search size="large" placeholder="SEARCH" />
                            </Col>
                            <Col span={10} className={'cities'}>
                                {this.renderCities()}
                            </Col>
                        </Row>
                    </Col>
                </Col>
                {
                    menuAdmin && <MenuAdmin showMenu />
                }
            </Row>
        )
    }
}

const mapStateToProps = ({ auth }) => {
    return { auth }
};

export default connect(mapStateToProps, { userSignOut })(Banner);