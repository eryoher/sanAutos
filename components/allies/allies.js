import React, { Component } from 'react';
import { Col } from 'antd';
import Footer from '../common/footer';

export default class Allies extends Component {
    render() {
        return (
            <Col span={24} className={"allies-container"} >
                <Col span={24} className={"title"}>
                   <b> Nuestros </b> <span className={"color-blue"}> Aliados </span>
                </Col>
                <Col span={21} offset={1} className={"description"}>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean
                    massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
                    felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo,
                    fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
                </Col>
                <Col span={24} >
                    <Footer />
                </Col>
            </Col>
        )
    }
}
