import React, { Fragment } from 'react';

import HeaderCartContainer from '../../containers/HeaderCartContainer';
import Introduce from '../../components/Introduce';
import ProductsContainer from '../../containers/ProductsContainer';
import Banner from '../../components/Banner';
import DealContainer from '../../containers/DealContainer';
import OurProductsContainer from '../../containers/OurProductsContainer';
import Testimonial from '../../components/Testimonial';
import OurBlog from '../../components/OurBlog';
import Brand from '../../components/Brand';
import Footer from '../../components/Footer';

function App() {
    return (
        <Fragment>

            <HeaderCartContainer />

            <Introduce />

            <ProductsContainer />

            <Banner />

            <DealContainer />

            <OurProductsContainer />

            <Testimonial />

            <OurBlog />

            <Brand />

            <Footer />

        </Fragment>
    );
}

export default App;