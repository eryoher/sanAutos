import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPromotions } from '../../actions';
import { Row, Col, Carousel } from 'antd';
import PromotionItem from './promotionItem';
import Router from 'next/router'

class Gallery extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        /*this.props.getPromotions({
            page: 1,
            pageSize: 3
        })*/
    }

    handleClickButton() {
        const { promotion } = this.props
        Router.push({ pathname: '/promotion', query: { id: 1 } });
    }

    renderPromotions() {
        const { search } = this.props
        let rows = []

        search.data.forEach(promotion => {
            rows.push(
                <Col span={24} className={'carrusel-cont'} key={promotion.id} >
                    <PromotionItem promotion={promotion} />
                </Col>
            )
        });

        return (
            <Carousel autoplay autoplaySpeed={'30'} className={"body-carrusel"} >
                {rows}
            </Carousel>
        )
    }

    render() {
        const { search } = this.props;
        let imgUrl1 = '../../static/img/carrusel_1.jpg'
        let imgUrl2 = '../../static/img/carrusel_2.jpg'
        let imgUrl3 = '../../static/img/carrusel_3.jpg'
        const copy = '../../static/img/copy.png'

        return (
            <Col span={24}>
                {/* {search && this.renderPromotions()} */}
                {/* Esto se borra por que va en el render */}
                <Carousel autoplay autoplaySpeed={'30'} className={"body-carrusel"} >
                    <Col span={24} key={1} className={'carrusel-cont'} >
                        <Col span={8} className={'carrusel-item'}
                            style={{ backgroundImage: `url(${imgUrl1})` }}
                            onClick={() => this.handleClickButton()}
                            type={'primary'} key={1} >
                        </Col>
                        <Col span={8} className={'carrusel-item'}
                            style={{ backgroundImage: `url(${imgUrl2})` }}
                            onClick={() => this.handleClickButton()}
                            type={'primary'} key={2} >
                        </Col>
                        <Col span={8} className={'carrusel-item'}
                            style={{ backgroundImage: `url(${imgUrl3})` }}
                            onClick={() => this.handleClickButton()}
                            type={'primary'} key={3} >
                        </Col>
                    </Col>

                    
                    <Col span={24} key={2} className={'carrusel-cont'} >
                        <Col span={8} className={'carrusel-item'}
                            style={{ backgroundImage: `url(${imgUrl2})` }}
                            onClick={() => this.handleClickButton()}
                            type={'primary'} key={2} >
                        </Col>
                        <Col span={8} className={'carrusel-item'}
                            style={{ backgroundImage: `url(${imgUrl3})` }}
                            onClick={() => this.handleClickButton()}
                            type={'primary'} key={3} >
                        </Col>
                        <Col span={8} className={'carrusel-item'}
                            style={{ backgroundImage: `url(${imgUrl1})` }}
                            onClick={() => this.handleClickButton()}
                            type={'primary'} key={1} >
                        </Col>
                    </Col>
                </Carousel>

                <Col className={'carrusel-copy'} span={24} style={{ backgroundImage: `url(${copy})` }}></Col>
            </Col>
        )
    }
}

function mapStateToProps({ promotions }) {
    const { search, searchparamaters } = promotions
    return {
        search,
        searchparamaters
    }
}

export default connect(mapStateToProps, { getPromotions })(Gallery);