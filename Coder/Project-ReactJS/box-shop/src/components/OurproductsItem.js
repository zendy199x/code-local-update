import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

class OurProductsItem extends Component {

    handlAddToCart = product => {
        this.props.handlAddToCart(product);
    };

    render() {

        let { product } = this.props;

        return (
            <Fragment>
                <div className="col-md-3 pt-5">
                    <div className="item">
                        <div className="products__thumbnail">
                            <img src={product.src1} alt={product.name} />
                            <img src={product.src2} className="product_image_back" alt={product.name} />
                            <div className="products__sale">
                                {product.status === 'sale' ? <span className="onsale">SALE</span> : ''}
                                {product.status === 'soldout' ? <span className="onsoldout">SOLD OUT</span> : ''}
                                {product.status === 'sale' ? <span className="onsale">HOT</span> : ''}
                            </div>
                            <div className="products_group_button">
                                <div className="add__cart products_group_item">
                                    <a href="#1" onClick={() => this.handlAddToCart(product)}><i className="fas fa-shopping-cart" /></a>
                                    <span>Add to cart</span>
                                </div>
                                <div className="quick__view products_group_item">
                                    <a href="#1"><i className="fas fa-search" /></a>
                                    <span>Quick View</span>
                                </div>
                                <div className="compare products_group_item">
                                    <a href="#1"><i className="fas fa-sync-alt" /></a>
                                    <span>Compare</span>
                                </div>
                                <div className="wishlist products_group_item">
                                    <a href="#1"><i className="fas fa-heart" /></a>
                                    <span>Wishlist</span>
                                </div>
                            </div>
                        </div>
                        <div className="products__info">
                            <Link to={`/shop/${product.name}/${product.id}`}>{product.name}</Link>
                            <div className="rating">

                                {this.showRating(product.rating)}

                            </div>
                            <span className="old__price">{product.oldPrice > product.newPrice ? `$ ${product.oldPrice}.00` : ""}</span>
                            <span className="price">{`$ ${product.newPrice}.00`}</span>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }

    showRating = rating => {

        let result = [];
        if (rating >= 0) {
            for (let i = 1; i <= rating; i++) {
                result.push(<i className="fas fa-star" key={'i' + i} />);
            }
            if (rating !== parseInt(rating)) {
                result.push(<i className="fas fa-star-half-alt" key={'rating' + rating} />);
            }
            for (let j = 1; j <= 5 - rating; j++) {
                result.push(<i className="far fa-star" key={'j' + j} />);
            }
        }
        return result
    }
}

export default OurProductsItem;