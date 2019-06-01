import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getPromotionsInterest } from '../../actions';
import InterestsItem from './promotionItems';
import { Col, Row } from 'antd';

class GridInterests extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.getPromotionsInterest({
            pageSize: 4
        })
    }

    renderInterests() {
        let { gridpromotions } = this.props;
        let rows = [];
        let count = 0;

        gridpromotions.data.forEach(promotion => {
            count++
            if (count <= 4) {
                console.log('contador: ', count)
                rows.push(
                    <InterestsItem key={promotion.id} promotion={promotion} />
                )
            }
        });
        return rows;
    }

    render() {
        const { gridpromotions } = this.props;

        return (
            <Row type="flex" justify="space-around" align="middle" className={"grid-promotions"} >
                {gridpromotions && this.renderInterests()}
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

export default connect(mapStateToProps, { getPromotionsInterest })(GridInterests);