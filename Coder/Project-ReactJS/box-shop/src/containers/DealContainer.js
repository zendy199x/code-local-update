import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import Deal from '../components/Deal';
import DealItemCarousel from '../components/DealItemCarousel';
import DealItem from '../components/DealItem';

import { actAddToCart } from '../actions/index';

class DealContainer extends Component {
    render() {

        let { products } = this.props;

        return (
            <Fragment>

                <Deal>

                    <div className="col-md-4 px-0">
                        <div className="owl-carousel deal-carousel owl-theme">

                            {this.showDealItemCarousel(products)}

                        </div>
                    </div>

                    <div className="col-md-8 pr-0">
                        <div className="row deal__items pl-3">

                            {this.showDealItem(products)}

                        </div>
                    </div>
                </Deal>

            </Fragment>
        );
    }

    filterProducts = (products) => {
        return products.filter((product) => {
            return product.status === 'sale';
        });
    }

    showDealItemCarousel = (products) => {
        let result = [];

        if (products.length > 0) {
            let filterProducts = this.filterProducts(products);

            for (let i = filterProducts.length - 5; i < filterProducts.length; i++) {
                result.push(<DealItemCarousel key={i} product={filterProducts[i]} 
                    handlAddToCart={this.props.handlAddToCart}
                />)
            }
        }
        return result;
    }

    showDealItem = (products) => {
        let result = [];

        if (products.length > 0) {
            let filterProducts = this.filterProducts(products);

            for (let i = filterProducts.length - 6; i > filterProducts.length - 12; i--) {
                result.push(<DealItem key={i} product={filterProducts[i]} />)
            }
        }
        return result;
    }
}

const mapStateToProps = state => {
    return {
        products: state.products
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        handlAddToCart: product => {
            dispatch(actAddToCart(product, 1));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DealContainer);