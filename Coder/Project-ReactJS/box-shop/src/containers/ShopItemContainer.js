import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import ShopItem from '../components/ShopItem';

import { actAddToCart, actMessage } from '../actions/index';

class ShopItemContainer extends Component {
    render() {

        let { products } = this.props;

        let { match } = this.props
        let id = match.params.id;
        console.log(products)

        return (
            <Fragment>

                {this.showItem(products, +id)}

            </Fragment>
        );
    }
    showItem = (products, id) => {
        let result = null;
        let thisProduct = null;

        if (products.length > 0) {
            thisProduct = products.filter(product => {
                return product.id === id;
            });
        }
        result = <ShopItem thisProduct={thisProduct[0]}
                handlAddToCart={this.props.handlAddToCart}
                handleMessage={this.props.handleMessage}
        />
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
        handlAddToCart: (product, quantity) => {
            dispatch(actAddToCart(product, quantity));
        },
        handleMessage: message => {
            dispatch(actMessage(message));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShopItemContainer);