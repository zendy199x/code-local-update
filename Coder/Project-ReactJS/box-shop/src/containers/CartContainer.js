import React, { Component } from 'react';
import { connect } from 'react-redux';

import Cart from '../components/Cart';
import CartTable from '../components/CartTable';
import CartItem from '../components/CartItem';
import CartTotal from '../components/CartTotal';

import {actDeleteCart, actUpdateCart} from '../actions/index';


class CartContainer extends Component {
    render() {

        let { cart } = this.props;

        return (

            <Cart>
                <CartTable>

                    {this.showCartItem(cart)}

                </CartTable>

                {this.showCartTotal(cart)}

            </Cart>

        );
    }

    showCartItem = cart => {
        let result = null;
        if (cart.length > 0) {
            result = cart.map((item, index) => {
                return <CartItem key={index} item={item} 
                handleDeleteCart={this.props.handleDeleteCart} 
                handleUpdateCart={this.props.handleUpdateCart} 
                />
            });
        }
        return result;
    }

    showCartTotal = cart => {
        let result = null;
        result = <CartTotal cart={cart} />
        return result;
    }
}

const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        handleDeleteCart: id => {
            dispatch(actDeleteCart(id));
        },
        handleUpdateCart: (id, quantity) => {
            dispatch(actUpdateCart(id, quantity));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);