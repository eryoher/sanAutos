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
        this.props.getPromotions({
            page: 1,
            pageSize: 9
        })
    }

    handleClickButton() {
        const { promotion } = this.props
        Router.push({ pathname: '/promotion', query: { id: 1 } });
    }

    renderPromotions() {
        const { search } = this.props
        let rows = []
        let items = []

        search.data.forEach((promotion, index) => {
            const cont = index % 3;
            items.push(
                <Col span={8} className={'carrusel-cont'} key={promotion.id} >
                    <PromotionItem promotion={promotion} />
                </Col>
            )

            if (cont === 2) {
                rows.push(
                    <Col key={index} span={8}>
                        {items}
                    </Col>
                )
                items = [];
            }

        });
        if (items.length) {
            rows.push(
                <Col key={items.length * 5} span={8}>
                    {items}
                </Col>
            )
        }

        return (
            <Carousel autoplay autoplaySpeed={'30'} className={"body-carrusel"} >
                {rows}
            </Carousel>
        )
    }

    render() {
        const { search } = this.props;       
        const copy = '../../static/img/copy.png'

        return (
            <Col span={24}>
                {search && this.renderPromotions()}
                <Col className={'carrusel-copy'} span={24} style={{ backgroundImage: `url(${copy})` }} />
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