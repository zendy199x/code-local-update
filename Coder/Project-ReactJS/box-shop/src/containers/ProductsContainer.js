import React, { Component } from 'react';
import { connect } from 'react-redux';

import Products from '../components/Products';
import Product from '../components/Product';

import { actAddToCart } from '../actions/index';

class ProductsContainer extends Component {
    render() {

        let { products } = this.props;

        return (
            <Products>
                {this.showProducts(products)}
            </Products>
        );
    }

    showProducts = (products) => {
        let result = [];
        if (products.length > 0) {
            for (let i = products.length - 5; i < products.length; i++) {
                result.push(<Product key={i} product={products[i]} handlAddToCart={this.props.handlAddToCart} />)
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

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);