import React, { Component } from 'react'
import { Row, Col } from 'antd';

export default class CategoryItem extends Component {
    render() {
        const { data, onSelecteCategory } = this.props
        const imgUrl = `../../static/img/categories/${data.icon}.png`

        return (
            <Col span={3} className={'category-item'} onClick={() => onSelecteCategory(data.id)} >
                <Row>
                    <Col span={24} className={'cont-icon'}>
                        <img className={'icon'}
                            src={imgUrl} />
                        {data.name}
                    </Col>
                </Row>
            </Col>
        )
    }
}
