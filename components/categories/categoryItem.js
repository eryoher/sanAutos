import React, { Component } from 'react'
import { Row, Col, Button } from 'antd';

export default class CategoryItem extends Component {  
    render(){
        const { data, onSelecteCategory } = this.props
        const imgUrl = `../../static/img/categories/${data.icon}.png`

        return(            
            <Col span={24}  className={'category-item'} >
                <img className={'icon'} src ={imgUrl} onClick={ () => onSelecteCategory( data.id )} />
                { data.cant > 0 && <span className={'title'}> { `${data.name} (${data.cant})` } </span>}
                { !data.cant && <span className={'title'}> { `${data.name}` } </span>}
            </Col>                                
            
        )
    }
}
