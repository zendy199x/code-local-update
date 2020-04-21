import React, { Component } from 'react';


class CartTable extends Component {
    render() {
        return (
            <div className="col-md-9 pl-0">
                <table className="cart__table text-center table">
                    <thead>
                        <tr>
                            <th colSpan={2}>ITEM</th>
                            <th>PRICE</th>
                            <th>QUANTITY</th>
                            <th>TOTAL</th>
                            <th />
                        </tr>
                    </thead>
                    <tbody className="cart__body">

                        {this.props.children}

                        <tr className="cart__footer">
                            <td colSpan="3" className="cart__coupon text-left">
                                <input type="text" placeholder="Coupon code" />
                                <button className="blog__button ml-2">APPLY COUPON</button>
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>
        );
    }
}

export default CartTable;