import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class HeaderCartTotal extends Component {

    handleDeleteCart = id => {
        this.props.handleDeleteCart(id);
    }

    render() {

        let{cart} = this.props;

        return (
            <div className="cart__checkout">
                <div className="cart__subtotal">
                    <span>Subtotal: </span>
                    <span className="amount">${this.showTotalAmount(cart)}</span> </div>
                <div className="cart__button">
                    <button className="blog__button__green"><Link to='/cart'>VIEW CART</Link></button>
                    <button className="blog__button__inverse"><Link to="/">CHECKOUT</Link></button>
                </div>
            </div>
        );
    }

    showTotalAmount = cart => {
        let total = 0;
        for (let item of cart) {
            total += (item.product.newPrice * item.quantity);
        }
        return total;
    }
}

export default HeaderCartTotal;