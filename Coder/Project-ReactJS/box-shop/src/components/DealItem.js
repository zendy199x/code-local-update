import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

class DealItem extends Component {
    render() {

        let { product } = this.props;

        return (
            <Fragment>
                <div className=" col-md-6 px-0">
                    <div className="row deal__item">
                        <div className="col-md-5">
                            <div className="products__thumbnail">
                                <img src={product.src1} alt={product.name} />
                            </div>
                        </div>
                        <div className="col-md-7 px-0">
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

export default DealItem;