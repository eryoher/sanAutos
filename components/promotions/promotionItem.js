import React, { Component } from 'react'
import { Row, Col, Button } from 'antd';
import Router from 'next/router'
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

export default class PromotionItem extends Component {  

    handleClickButton() {
        const { promotion } = this.props
        Router.push({ pathname: '/promotion', query: { id: promotion.id } });        
    }

    render(){
        const { promotion } = this.props
        let imgUrl = '../../static/img/no-imagen.jpg'
        if( promotion.assets.length ){
            imgUrl = `${publicRuntimeConfig.promotionImagesBasePath}${promotion.assets[0].name}`;
        }
        let discount = promotion.price * ( promotion.discount / 100 ) 

        return(
            <Row>
                <Col span={22} className={'promotion-item'} style={{backgroundImage: `url(${imgUrl})`}} >
                    <div className={'vertical-space'} />
                    <div className="subcontent">
                            <div className="slogan">
                                <div className={'purchased'} >
                                    { `Cantidad: ${promotion.quantity} ` }
                                </div>
                                <div className="valor">
                                    { `Valor: ${promotion.price.toLocaleString()} ` }
                                </div>           
                                <div className={'deal'}>
                                    { `Bono: ${discount.toLocaleString() } ` }                                        
                                </div>                             
                            </div>
                    </div>
                    <Col className={'sell-button'} > <Button onClick={ () => this.handleClickButton() } type={'primary'}>Ver mas</Button> </Col>
                </Col>
                <Col span={22} className={'description-item'}>
                    {promotion.description.substr(0,100)}
                </Col>                
            </Row>
        )
    }
}
