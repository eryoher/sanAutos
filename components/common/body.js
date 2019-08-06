import React, { Component } from 'react'
import { Row, Col, Button } from 'antd';
import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();
const dividerColumn = {
    xs: { span: 12 },
    sm: { span: 12 },
    md: { span: 12 },
    lg: { span: 6 },
    xl: { span: 6 },
}

export default class Body extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hover: false,
            hover1: false,
            hover2: false,
            hover3: false
        };
    }

    getInitialState = () => {
        this.setState({
            hover: false,
            hover1: false,
            hover2: false,
            hover3: false
        });
    };

    toggleHover = () => {
        this.setState({
            hover: !this.state.hover
        });
    };
    toggleHover1 = () => {
        this.setState({
            hover1: !this.state.hover1
        });
    };
    toggleHover2 = () => {
        this.setState({
            hover2: !this.state.hover2
        });
    };
    toggleHover3 = () => {
        this.setState({
            hover3: !this.state.hover3
        });
    };

    render() {
        const boton = "../../static/img/button.png";
        const botonH = "../../static/img/button_hover.png";

        var linkStyle; var linkStyle1; var linkStyle2; var linkStyle3;

        if (this.state.hover) {
            linkStyle = {
                backgroundImage: `url(${botonH})`
            }
        } else {
            linkStyle = {
                backgroundImage: `url(${boton})`
            }
        }
        if (this.state.hover1) {
            linkStyle1 = {
                backgroundImage: `url(${botonH})`
            }
        } else {
            linkStyle1 = {
                backgroundImage: `url(${boton})`
            }
        }
        if (this.state.hover2) {
            linkStyle2 = {
                backgroundImage: `url(${botonH})`
            }
        } else {
            linkStyle2 = {
                backgroundImage: `url(${boton})`
            }
        }
        if (this.state.hover3) {
            linkStyle3 = {
                backgroundImage: `url(${botonH})`
            }
        } else {
            linkStyle3 = {
                backgroundImage: `url(${boton})`
            }
        }

        return (
            <Col span={24} className={"body-cont"}>
                <Col span={24} className={"body-buttons"} >
                    <Col span={6} className="boton" onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover} style={linkStyle}  >VEHICULOS</Col>
                    <Col span={6} className="boton" onMouseEnter={this.toggleHover1} onMouseLeave={this.toggleHover1} style={linkStyle1} >CAMIONETAS</Col>
                    <Col span={6} className="boton" onMouseEnter={this.toggleHover2} onMouseLeave={this.toggleHover2} style={linkStyle2} >PICK UP</Col>
                    <Col span={6} className="boton" onMouseEnter={this.toggleHover3} onMouseLeave={this.toggleHover3} style={linkStyle3} >ELECTRICOS</Col>
                </Col>
            </Col>
        )
    }
}