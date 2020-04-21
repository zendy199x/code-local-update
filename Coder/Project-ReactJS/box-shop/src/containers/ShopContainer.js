import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import Shop from '../components/Shop';
import ShopProduct from '../components/ShopProduct';
import { actAddToCart, actFetchProductsRequest } from '../actions/index';

class ShopContainer extends Component {

    componentDidMount() {
        this.props.handleFetchProductsRequest();
    }

    render() {

        let { products } = this.props;

        return (
            <Fragment>

                <Shop>
                    {this.showShopProduct(products)}
                </Shop>

            </Fragment>
        );
    }

    filterProducts = (products) => {
        return products.filter((product) => {
            return product.status === 'sale';
        });
    }

    showShopProduct = products => {
        let result = null;
        if (products.length > 0) {
            result = products.map((product, index) => {
                return <ShopProduct key={index} product={product}
                    handlAddToCart={this.props.handlAddToCart}
                />
            });
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
        handleFetchProductsRequest: () => {
            dispatch(actFetchProductsRequest());
        },
        handlAddToCart: product => {
            dispatch(actAddToCart(product, 1));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShopContainer);