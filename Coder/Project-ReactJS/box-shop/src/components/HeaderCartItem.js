import React, { Component } from 'react';

class HeaderCartItem extends Component {

    handleDeleteCart = id => {
        this.props.handleDeleteCart(id);
    }

    render() {

        let { item } = this.props;

        return (
            <div className="cart__item d-flex align-items-center">
                <img src={item.product.src1} alt={item.product.name} />
                <div className="cart__info">
                    <h6>Vitae porta lectus default</h6>
                    <div>{item.quantity} x <span className="amount">{`$ ${item.product.newPrice}.00`}</span></div>
                    <a onClick={() => this.handleDeleteCart(item.product.id)} className="remove">×</a>
                </div>
            </div>
        );
    }
}

export default HeaderCartItem;