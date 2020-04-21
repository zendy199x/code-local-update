import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Cart extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fee: 0
        }
    }

    render() {

        let { cart } = this.props;

        return (
            <div className="col-md-3 px-0">
                <div className="cart__total">
                    <table className="table">
                        <tbody className="table__total">
                            <tr>
                                <td colSpan={2}>
                                    <span className="total__header">CART TOTALS</span>
                                </td>
                            </tr>
                            <tr>
                                <td>Subtotal</td>
                                <td className="amount">$ {this.showTotalAmount(cart)}</td>
                            </tr>
                            <tr>
                                <td>Shipping</td>
                                <td>
                                    <label>
                                        <input type="radio" name="fee" value={0} onChange={this.handleCheckFee} defaultChecked /> Free shipping
                                    </label>
                                    <label>
                                        <input type="radio" name="fee" value={10} onChange={this.handleCheckFee} /> Local Pickup: <span className="amount">$10.00</span>
                                    </label>
                                </td>
                            </tr>
                            <tr>
                                <td>Total</td>
                                <td className="amount">${this.showTotalAmount(cart) + +this.state.fee}</td>
                            </tr>
                            <tr>
                                <td colSpan={2}>
                                    <button className="blog__button__green"><Link>PROCEED TO CHECKOUT</Link></button>
                                    <button className="blog__button__inverse"><Link to='/shop'>CONTINUE SHOPPING</Link></button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }

    handleCheckFee = (e) => {
        let target = e.target;
        let value = target.value;
        this.setState({
            [target.name]: value
        });
    }

    showTotalAmount = cart => {
        let total = 0;
        for (let item of cart) {
            total += (item.product.newPrice * item.quantity);
        }
        return total;
    }
}

export default Cart;