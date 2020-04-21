import React, { Component, Fragment } from 'react';

import HeaderCartContainer from '../../containers/HeaderCartContainer';
import ShopContainer from '../../containers/ShopContainer';
import Footer from '../../components/Footer';

class ShopPage extends Component {
    render() {

        return (
            <Fragment>

                <HeaderCartContainer />

                <ShopContainer />
                
                <Footer />

            </Fragment>
        );
    }
}

export default ShopPage;