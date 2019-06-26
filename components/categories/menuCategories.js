import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getCategoriesWithProduct, getPromotions } from '../../actions';
import CategoryMenuItem from './categoryMenuItem';
import { Menu } from 'antd';

class MenuCategories extends Component {

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
        });
    }

    renderCategories() {
        let { categories } = this.props;
        let rows = [];

        categories.data.forEach(category => {
            rows.push(
                <CategoryMenuItem key={category.id} data={category} onSelecteCategory={this.handleSelectCategory} />
            )
        });
        return rows;
    }

    render() {
        const { categories } = this.props;
        return (
            <Menu className={"menu-categories"} mode={'vertical'} >
                {categories && this.renderCategories()}
            </Menu>
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

export default connect(mapStateToProps, { getCategoriesWithProduct, getPromotions })(MenuCategories);