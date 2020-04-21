import React, { Component, Fragment } from 'react';

import HeaderCartContainer from '../../containers/HeaderCartContainer';
import About from '../../components/About';
import AboutTesti from '../../components/AboutTesti';
import Team from '../../components/Team';
import Footer from '../../components/Footer';

class AboutPage extends Component {
    render() {
        return (
            <Fragment>

                <HeaderCartContainer />

                <About />

                <AboutTesti />

                <Team />

                <Footer />

            </Fragment>
        );
    }
}

export default AboutPage;