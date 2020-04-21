import React, { Component, Fragment } from 'react';

import HeaderCartContainer from '../../containers/HeaderCartContainer';
import CartContainer from '../../containers/CartContainer';
import ProductsContainer from '../../containers/ProductsContainer';
import Footer from '../../components/Footer';

class CartPage extends Component {
    render() {
        return (
            <Fragment>

                <HeaderCartContainer />

                <CartContainer />

                <ProductsContainer />
                
                <Footer />

            </Fragment>
        );
    }
}

export default CartPage;