import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPromotions } from '../../actions';
import { Col, Carousel } from 'antd';
import PromotionItem from './promotionItem';

class ListPromotions extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.getPromotions({
            page: 1,
            pageSize: 3
        })
    }

    renderPromotions() {
        const { search } = this.props
        let rows = []

        search.data.forEach(promotion => {
            rows.push(
                <Col span={24} key={promotion.id} >
                    <PromotionItem promotion={promotion} />
                </Col>
            )
        });

        return (
            <Carousel autoplay autoplaySpeed={'30'} className="presentation-mode" >
                {rows}
            </Carousel>
        )
    }

    render() {
        const { search } = this.props;
        // const initData = {
        //     "defaultCurrent": 1,
        //     "current": (search) ? search.page : 1,
        //     "pageSize": (search) ? search.limit : 10,
        //     "total": (search && search.totalCount) ? search.totalCount : 0,
        // };

        return (
            <Col span={24} className={'promotions-container'} >
                <Col span={24} className={"list-promotions"} >
                    <Col span={24} className={"promotions-items-pagination"} >
                        {search && this.renderPromotions()}
                        {/* <Pagination
                            defaultCurrent={initData.defaultCurrent} 
                            current={initData.current} 
                            total={initData.total} 
                            pageSize={initData.pageSize} 
                             /> */}
                    </Col>
                </Col>
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

export default connect(mapStateToProps, { getPromotions })(ListPromotions);