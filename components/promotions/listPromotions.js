import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPromotions }  from '../../actions';
import { Col, Pagination } from 'antd';
import PromotionItem from './promotionItem';

class ListPromotions extends Component {
    
    constructor(props){
        super(props);
    }

    componentWillMount(){        
        this.searchPromotionsinit();
    }

    searchPromotionsinit = () => {
        this.props.getPromotions({
            page:1,
            pageSize:10
        })
    }

    renderPromotions(){
        const { search } = this.props
        let rows = []
        search.data.forEach(promotion => {
            rows.push(
                <Col span={12} key={promotion.id} >
                    <PromotionItem
                        promotion = {promotion}
                    />
                </Col>
            )
        });

        return rows;
    }

    handlePromotionPageChange = (current, size) => {
        const {searchparamaters} = this.props;

        this.props.getPromotions({
            ...searchparamaters,
            page:current,
            pageSize:size            
        })
        
    }

    render() {
        const {search} = this.props;
        const bgTitle="../../static/img/bg-title-promotions.png";        
        const initData =   {
            "defaultCurrent": 1,
            "current": (search) ? search.page : 1,
            "pageSize": (search) ? search.limit : 10,
            "total": ( search && search.totalCount ) ? search.totalCount : 0,        
        };

        return (
            <Col span={24} className={"list-promotions"} >
                <Col span={24} className={"title-promotions-list"} style={{backgroundImage: `url(${bgTitle})`, cursor:'pointer'}} onClick={ () => this.searchPromotionsinit() } >
                    <b>Ofertas </b> <span className={"color-white"}> de donación </span>
                </Col>
                { search && this.renderPromotions() }    
                {search &&  <Col className="promotions-items-pagination" style={{textAlign:'center'}}  span={24} >
                    <Pagination defaultCurrent={initData.defaultCurrent} current={initData.current} total={initData.total} pageSize={initData.pageSize} onChange={this.handlePromotionPageChange} />
                </Col> }     
            </Col>
        )
    }
}

function mapStateToProps({ promotions }){
    const {search, searchparamaters } = promotions
    return {
        search,
        searchparamaters
    }
}

export default connect (mapStateToProps,{getPromotions})(ListPromotions);
