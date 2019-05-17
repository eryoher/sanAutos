import React, { Component } from 'react';
import { Col, Carousel } from 'antd';
import Footer from '../common/footer';
import { connect } from 'react-redux';
import getConfig from 'next/config';
import { getImagesByContainer } from '../../actions';
const { publicRuntimeConfig } = getConfig();


const infoColumn = {
    xs: { span: 24 },
    sm: { span: 24 },
    md: { span: 24 },
    lg: { span: 12 },
    xl: { span: 12 },
}

class Allies extends Component {

    constructor(props){
        super(props);
    }

    componentWillMount = () => {
        this.props.getImagesByContainer('allies');
    }

    renderAllies = () => {
        const { listImages } = this.props;
        const rows = [];
        listImages.forEach(images => {
            const urlImage = `${publicRuntimeConfig.apiUrl}/Images/allies/download/${images.name}`
            rows.push(
                <Col key={images.name} style={{width:'100%', textAlign:'center'}} >
                    <img src = {urlImage} style={{width:'250px', margin:'0px auto'}} />                    
                </Col>
            )
        });

        return (
            <Carousel
                autoplay
                autoplaySpeed ={'30'}
                className="presentation-mode"
                dots = {false}
            >
                {rows}
            </Carousel>
        )
    }

    render() {
        const { listImages } = this.props;
        return (
            <Col span={24} className={"allies-container"} >
                <Col span={24} className={"title"}>
                   Han apoyado a la fundacion <span className={'color-blue'} > <b> Portal Magico </b> </span> 
                </Col>
                <Col span={21} offset={1} className={"description"}>
                    { listImages && this.renderAllies() }
                </Col>
                <Col span={24} >
                    <Footer />
                </Col>
            </Col>
        )
    }
}

function mapStateToProps({ images }){
    const { listImages } = images
    return {
        listImages
    }
}

export default connect (mapStateToProps,{getImagesByContainer})(Allies);