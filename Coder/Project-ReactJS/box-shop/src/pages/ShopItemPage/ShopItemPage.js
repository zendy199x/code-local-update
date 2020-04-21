import React, { Component, Fragment } from 'react';

import HeaderCartContainer from '../../containers/HeaderCartContainer';
import ShopItemContainer from '../../containers/ShopItemContainer';
import ProductsContainer from '../../containers/ProductsContainer';
import Footer from '../../components/Footer';

class ShopItemPage extends Component {
    render() {

        let { match } = this.props

        return (
            <Fragment>

                <HeaderCartContainer />

                <ShopItemContainer match={match} />

                <ProductsContainer />

                <Footer />

            </Fragment>
        );
    }
}

export default ShopItemPage;