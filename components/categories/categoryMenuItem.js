import React, { Component } from 'react'
import { Col, Menu } from 'antd';

export default class CategoryMenuItem extends Component {
    render() {
        const { data, onSelecteCategory } = this.props
        const imgUrl = `../../static/img/categories/${data.icon}.svg`

        return (
            <Menu.Item span={3} className={"menu-categories"} onClick={() => onSelecteCategory(data.id)} >
                <Col span={24} className={'category-item'} >
                    <img className={'icon'} src={imgUrl} />{data.name}
                </Col>
            </Menu.Item>
        )
    }
}
