import React, { Component } from 'react';

class CartPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            quantity: 0
        }
    }

    handleQuantity = e => {
        let target = e.target;
        let value = target.value;
        this.setState({
            quantity: value
        })
    };

    handleDeleteCart = id => {
        this.props.handleDeleteCart(id);
    }

    handleUpdateCart = (id, quantity) => {
        this.props.handleUpdateCart(id, +quantity);
    }

    render() {

        let { item } = this.props;

        return (
            <tr className="cart__item">
                <td className="cart__thumbnail">
                    <a href="#1"><img src={item.product.src1} alt={item.product.name} /></a>
                </td>
                <td className="cart__name">
                    <a href="#1">{item.product.name}</a>
                </td>
                <td className="cart__price">
                    <span className="amount">{`$ ${item.product.newPrice}.00`}</span>
                </td>
                <td className="cart__quantity">
                    <div className="quantity d-flex">
                        <input type="number" min={1} value={item.quantity} onChange={this.handleQuantity} onKeyUp={() => this.handleUpdateCart(item.product.id, this.state.quantity)} />
                        <div className="plus__minus">
                            <a onClick={() => this.handleUpdateCart(item.product.id, +item.quantity + 1)} href="#1" className="btn__plus">+</a>
                            <a onClick={() => this.handleUpdateCart(item.product.id, +item.quantity - 1)} href="#1" className="btn__minus">-</a>
                        </div>
                    </div>
                </td>
                <td className="cart__subtotal">
                    <span className="amount">{`$ ${item.product.newPrice * item.quantity}.00`}</span>
                </td>
                <td className="cart__remove">
                    <div onClick={() => this.handleDeleteCart(item.product.id)} className="btn__remove">
                        <span className="remove">×</span>
                    </div>
                </td>
            </tr>
        );
    }
}

export default CartPage;