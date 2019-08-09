import React, { Component } from 'react'
import { Row, Col, Button } from 'antd';
import Router from 'next/router'
import { connect } from 'react-redux';
import { getCategoriesWithProduct } from '../../actions';

const productsToShow = [];

class Menu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectCategorie: null,
            productsToShow: {}
        }
    }

    componentWillMount = () => {
        this.props.getCategoriesWithProduct()
    }

    handleClickButton(prdId) {
        const { promotion } = this.props
        Router.push({ pathname: '/promotion', query: { id: prdId } });
    }

    handleSelectCategorie = (id) => {
        this.setState({ selectCategorie: id })
    }

    renderCategories = () => {
        const { listCategories } = this.props;
        const rows = [];

        listCategories.data.forEach(categorie => {
            const products = []
            let ban = true;

            rows.push(
                <Col key={categorie.id} span={6} className="boton" onClick={() => this.handleSelectCategorie(categorie.id)} >
                    {categorie.name}
                </Col>
            )

            categorie.products.forEach(prd => {
                const carLogo = `../../static/img/product_logos/${prd.logo}`;
                products.push(
                    <Col span={6} key={prd.id} className="car" style={{ backgroundImage: `url(${carLogo})` }} onClick={() => this.handleClickButton(prd.id)} >
                        {prd.name}
                    </Col>
                )
            });


            productsToShow.forEach(prd => {
                if (prd.code === categorie.id) {
                    ban = false
                    return ban;
                }
            });

            if (ban) {
                productsToShow.push({
                    code: categorie.id,
                    data: products
                })
            }

        });


        return rows;
    }


    renderProducts = () => {
        let result = null
        productsToShow.forEach(product => {
            if (product.code === this.state.selectCategorie) {
                return (
                    result = product.data
                )
            }
        });

        return result;
    }

    render() {
        const { listCategories } = this.props;
        return (
            <Col span={24}>
                <Col span={24} className={"body-buttons"} >
                    {listCategories && this.renderCategories()}

                </Col>
                <Col span={24} className={"boton-menu"} >
                    {this.renderProducts()}
                </Col>
                <Col span={24} className={"body-copy"} ></Col>
            </Col>
        )
    }
}


function mapStateToProps({ categories }) {
    const listCategories = categories.categoriesCount
    return {
        listCategories
    }
}

export default connect(mapStateToProps, { getCategoriesWithProduct })(Menu);