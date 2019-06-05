import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getPromotionsInterest } from '../../actions';
import InterestsItem from './InterestsItem';
import { Col, Row } from 'antd';

class GridInterests extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.getPromotionsInterest({
            pageSize: 4
        });
    }

    renderInterests() {
        let { gridInterests } = this.props;
        let rows = [];

        gridInterests.data.forEach(interest => {
                rows.push(
                    <InterestsItem key={interest.id} interest={interest} />
                )
        });
        return rows;
    }

    render() {
        const { gridInterests } = this.props;

        return (
            <Row type="flex" justify="space-around" align="middle" className={"grid-promotions"} >
                {gridInterests && this.renderInterests()}
            </Row>
        )
    }
}

function mapStateToProps({ promotions }) {
    const { gridInterests, searchparamaters } = promotions
    return {
        gridInterests,
        searchparamaters
    }
}

export default connect(mapStateToProps, { getPromotionsInterest })(GridInterests);