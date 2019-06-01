import React, { Component } from 'react';
import { Col, Carousel, Alert } from 'antd';
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

    constructor(props) {
        super(props);
    }

    componentWillMount = () => {
        this.props.getImagesByContainer('allies');
    }

    renderAllies = () => {
        const { listImages } = this.props;
        let rows = [];
        let imgAllies = [];
        let key = [];
        var count;

        count = 0
        listImages.forEach(images => {
            const urlImage = `${publicRuntimeConfig.apiUrl}/Images/allies/download/${images.name}`
            imgAllies.push(urlImage)
            key.push(images.name)
            count++
            if (count == 4){
                rows.push(
                    <Col key={key[0] + key[1] + key[2] + key[3] } span={24} className={'allies-carrousel'} >
                        <Col key={key[0]} span={6} >
                            <img src={imgAllies[0]} style={{ width: '250px', height: '150px', margin: '0px auto', borderRadius: '30px' }} />
                        </Col>
                        <Col key={key[1]} span={6} >
                            <img src={imgAllies[1]} style={{ width: '250px', height: '150px', margin: '0px auto', borderRadius: '30px' }} />
                        </Col>
                        <Col key={key[2]} span={6}  >
                            <img src={imgAllies[2]} style={{ width: '250px', height: '150px', margin: '0px auto', borderRadius: '30px' }} />
                        </Col>
                        <Col key={key[3]} span={6} >
                            <img src={imgAllies[3]} style={{ width: '250px', height: '150px', margin: '0px auto', borderRadius: '30px' }} />
                        </Col>
                    </Col>
                )
                imgAllies = []
                key = []
                count=0
            }
        });

        return (
            <Carousel autoplay autoplaySpeed={'30'} className="presentation-mode" dots={false} >
                {rows}
            </Carousel>
        )
    }

    render() {
        const { listImages } = this.props;
        return (
            <Col span={24} className={"allies-container"} >
                <Col span={24} className={"title"}>
                    Han apoyado a <span className={'color-blue'}>Fundación Portal Mágico</span>
                </Col>
                <Col span={21} offset={1} className={"description"}>
                    {listImages && this.renderAllies()}
                </Col>
                <Col span={24} >
                    <Footer />
                </Col>
            </Col>
        )
    }
}

function mapStateToProps({ images }) {
    const { listImages } = images
    return {
        listImages
    }
}

export default connect(mapStateToProps, { getImagesByContainer })(Allies);