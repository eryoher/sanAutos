import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getCategoriesWithProduct, getPromotions } from '../../actions';
import CategoryItem from './categoryItem';
import { Col, Row, Menu } from 'antd';
const dividerColumn = {
    xs: { span: 0 },
    sm: { span: 0 },
    md: { span: 0 },
    lg: { span: 24 },
    xl: { span: 24 },
}

class ListCategories extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.getCategoriesWithProduct()
    }

    handleSelectCategory = (categoryId) => {
        const { searchparamaters } = this.props;

        this.props.getPromotions({
            ...searchparamaters,
            categoryId: categoryId
        })
    }

    renderCategories() {
        let { categories } = this.props;
        let rows = [];

        categories.data.forEach(category => {
            rows.push(
                <CategoryItem key={category.id} data={category} onSelecteCategory={this.handleSelectCategory} />
            )
        });
        return rows;
    }

    render() {
        const { categories } = this.props;
        return (
            <Col {...dividerColumn} >
                {categories && this.renderCategories()}
            </Col>
        )
    }
}

function mapStateToProps({ categories, promotions }) {
    const { searchparamaters } = promotions
    return {
        categories: categories.categoriesCount,
        searchparamaters
    }
}

export default connect(mapStateToProps, { getCategoriesWithProduct, getPromotions })(ListCategories);