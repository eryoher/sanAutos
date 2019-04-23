import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Carousel } from 'antd';
import { topPromotions } from '../../actions';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

class TopPromotions extends Component {

    constructor(props){
        super(props);

    }

    componentDidMount(){
        this.props.topPromotions();
    }

    renderCarousel(){
        const {toppromotions} = this.props
              
        if (toppromotions.length){
            return (
                <Carousel
                    autoplay
                    autoplaySpeed ={'30'}
                    className="presentation-mode"
                >
                    {this.divgallerie(toppromotions)}
                </Carousel>
            );
        }
    }
    
    divgallerie(promotions){
        var rows = [];
        promotions.forEach(promotion => {
            
            const imgUrl = (promotion.assets.length ) ? `${publicRuntimeConfig.promotionImagesBasePath}${promotion.assets[0].name}` : "../../static/img/no-imagen.jpg";
            const bgQuantity = '../../static/img/bg-quantity-promotion.png';
            const bgdiscount = '../../static/img/bg-discount-promotion.png';

            let discount = promotion.price * ( promotion.discount / 100 ) 
            rows.push(
                <div key={promotion.id} className="conten-slide">
                    <div className="my-slide-content" style={{backgroundImage: `url(${imgUrl})`}} >
                        <div className={'margen-slogan'} />
                        <div className="slogan-content">
                                <div className="slogan">
                                    <div className={'purchased'} style={{backgroundImage: `url(${bgQuantity})`}}  >
                                        { `Cantidad: ${promotion.quantity}` }
                                    </div>
                                    <div className="valor">
                                        { `Donacion: ${ parseInt(promotion.price - discount).toLocaleString() }` }
                                    </div>           
                                    <div className={'deal'} style={{backgroundImage: `url(${bgdiscount})`}} >
                                        { `Ahorra: ${ discount.toLocaleString() }  (${promotion.discount}%)` }                                        
                                    </div>                             
                                </div>
                        </div>
                    </div>
                </div>
            );
        });
        
        return rows;
    }


    render() {    
        const {toppromotions} = this.props;
        return (
            <div className={'donaciones-content'} >
                { toppromotions && this.renderCarousel()}
            </div>
        )
    }
}


function mapStateToProps({deals, promotions}){
    const {toppromotions} = promotions
    return {
        toppromotions
    }
}
  
export default connect (mapStateToProps, {topPromotions})(TopPromotions);
