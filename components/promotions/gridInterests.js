import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getPromotions } from '../../actions';
import InterestsItem from './InterestsItem';
import { Row } from 'antd';

class GridInterests extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.getPromotions({
            page: 1,
            pageSize: 4
        })
    }

    renderInterests() {
        let { search } = this.props;
        let rows = [];

        search.data.forEach(interest => {
                rows.push(
                    <InterestsItem key={interest.id} interest={interest} />
                )
        });
        return rows;
    }

    render() {
        const { search } = this.props;

        return (
            <Row type="flex" justify="space-around" align="middle" className={"grid-promotions"} >
                {search && this.renderInterests()}
            </Row>
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

export default connect(mapStateToProps, { getPromotions })(GridInterests);