import React, { Component } from 'react'
import { Row, Col } from 'antd';

export default class CategoryItem extends Component {
    render() {
        const { data, onSelecteCategory } = this.props
        const imgUrl = `../../static/img/categories/${data.icon}.svg`

        return (
            <Col span={3} className={"menu-categories"} onClick={() => onSelecteCategory(data.id)} >
                <Col span={24} className={'category-item'}>
                    <img className={'icon'} src={imgUrl} />{data.name}
                </Col>
            </Col>
        )
    }
}
