import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getPromotionsCategory } from '../../actions';
import PromotionItems from './promotionItems';
import { Col, Row } from 'antd';

class GridPromotions extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount(){
        this.props.getPromotionsCategory({
            pageSize: 12
        })   
    }
    
    renderPromotions() {
        let { gridpromotions } = this.props;
        let rows = [];

        gridpromotions.data.forEach(promotion => {
            rows.push(
                <PromotionItems key={promotion.id} promotion={promotion} />
            )
        });
        return rows;
    }

    render() {
        const { gridpromotions } = this.props;

        return (
            <Row type="flex" justify="space-around" align="middle" className={"grid-promotions"} >
                { gridpromotions && this.renderPromotions() }
            </Row>
        )
    }
}

function mapStateToProps({ promotions }) {
    const { gridpromotions, searchparamaters } = promotions
    return {
        gridpromotions,
        searchparamaters
    }
}

export default connect(mapStateToProps, { getPromotionsCategory })(GridPromotions);