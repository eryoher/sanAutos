import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col, Carousel } from 'antd';
import { topPromotions } from '../../actions';
import getConfig from 'next/config';
import Router from 'next/router'
import TopPromotionItem from './topPromotionItem';

const { publicRuntimeConfig } = getConfig();

class TopPromotions extends Component {

    constructor(props) {
        super(props);

    }

    componentDidMount() {
        this.props.topPromotions();
    }

    handleClickButton() {
        const { promotion } = this.props
        Router.push({ pathname: '/promotion', query: { id: promotion.id } });
    }

    renderCarousel() {
        const { toppromotions } = this.props

        if (toppromotions.length) {
            return (
                <Carousel autoplay autoplaySpeed={'30'} className="presentation-mode" >
                    {this.divgallerie(toppromotions)}
                </Carousel>
            );
        }
    }

    divgallerie(promotions) {
        var rows = [];
        promotions.forEach(promotion => {
            rows.push(
                <Col span={24} key={promotion.id} >
                    <TopPromotionItem promotion={promotion} />
                </Col>
            );
        });
        return rows;
    }


    render() {
        const { toppromotions } = this.props;
        return (
            <Col span={24} className={'promotions-container'} >
                <Col span={24} className={"list-promotions"} >
                    <Col span={24} className={"promotions-items-pagination"} >
                        {toppromotions && this.renderCarousel()}
                    </Col>
                </Col>
            </Col>
        )
    }
}

function mapStateToProps({ deals, promotions }) {
    const { toppromotions } = promotions
    return {
        toppromotions
    }
}

export default connect(mapStateToProps, { topPromotions })(TopPromotions);
