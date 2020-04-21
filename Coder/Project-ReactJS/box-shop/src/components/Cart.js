import React, { Component } from 'react';

class Cart extends Component {
    render() {
        return (
            <section className="cart">
                <div className="container">
                    <div className="row">

                        {this.props.children}

                    </div>
                </div>
            </section>
        );
    }
}

export default Cart;