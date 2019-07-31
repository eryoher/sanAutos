import React, { Component } from 'react'
import { Modal, Carousel } from 'antd';
import { connect } from 'react-redux';
import getConfig from 'next/config';

import { getImagesByContainer } from '../../actions';
const { publicRuntimeConfig } = getConfig();


class IndexPopup extends Component {

    constructor(props) {
        super(props)
        this.state = { visible: true };
    }

    componentDidMount = () => {
        this.props.getImagesByContainer('advertising');
    }

    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleOk = e => {
        this.setState({
            visible: false,
        });
    };

    handleCancel = e => {

        this.setState({
            visible: false,
        });
    };

    renderImages = () => {
        const { listImages } = this.props;
        const result = [];

        listImages.forEach(img => {
            const urlImage = `${publicRuntimeConfig.apiUrl}/Images/advertising/download/${img.name}`

            result.push(
                <div key={img.name} >
                    <img src={urlImage} style={{ width: '100%'}} />
                </div>
            )
        });

        return (
            <div className={'indexpopup'} style={{height:'100%', paddingTop:'3%' }}>
                <Carousel
                    autoplay
                    dots={false}
                    effect="scrollx"
                >
                    {result}
                </Carousel>
            </div>
        )

    }

    render() {
        const { listImages } = this.props;

        return (
            <div>
                <Modal
                    title=""
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    footer={null}
                    width={'90%'}                    
                >
                    {listImages && this.renderImages()}
                </Modal>
            </div>
        );
    }
}


function mapStateToProps({ images }) {
    const { listImages } = images
    return {
        listImages
    }
}



export default connect(mapStateToProps, { getImagesByContainer })(IndexPopup);
