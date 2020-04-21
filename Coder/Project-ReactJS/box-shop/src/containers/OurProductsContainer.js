import React, { Component } from 'react';
import { connect } from 'react-redux';

import OurProducts from '../components/OurProducts';
import OurProductsItem from '../components/OurproductsItem';

import { actFetchProductsRequest, actAddToCart } from '../actions/index';

class OurProductsContainer extends Component {

    componentDidMount() {
        this.props.handleFetchProductsRequest();
    }

    render() {

        let { products } = this.props;

        return (

            <OurProducts>

                {this.showOurProducts(products)}

            </OurProducts>

        );
    }

    showOurProducts = (products) => {
        let result = [];

        if (products.length > 0) {
            let rand = Math.floor(Math.random() * ((products.length - 6) - 8)) + 8;

            for (let i = rand; i > rand - 8; i--) {
                result.push(<OurProductsItem key={i} product={products[i]}
                    handlAddToCart={this.props.handlAddToCart}
                />)
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
        handleFetchProductsRequest: () => {
            dispatch(actFetchProductsRequest());
        },
        handlAddToCart: product => {
            dispatch(actAddToCart(product, 1));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(OurProductsContainer);