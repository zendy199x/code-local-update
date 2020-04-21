import React, { Component, Fragment } from 'react';

import HeaderCartContainer from '../../containers/HeaderCartContainer';
import Account from '../../components/Account';
import Footer from '../../components/Footer';

class AccountPage extends Component {
    render() {
        return (
            <Fragment>

                <HeaderCartContainer />

                <Account />
                
                <Footer />

            </Fragment>
        );
    }
}

export default AccountPage;