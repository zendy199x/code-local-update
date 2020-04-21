import React, { Component } from 'react';

class HeaderCart extends Component {

    handleDeleteCart = id => {
        this.props.handleDeleteCart(id);
    }

    render() {

        return (
            <div className="cart__items">
                
                {this.props.children}

            </div>
        );
    }
}

export default HeaderCart;