import React, { Component, Fragment } from 'react';

import HeaderCartContainer from '../../containers/HeaderCartContainer';
import Blog from '../../components/Blog';
import Footer from '../../components/Footer';

class BlogPage extends Component {
    render() {
        return (
            <Fragment>
                
                <HeaderCartContainer />

                <Blog />
                
                <Footer />

            </Fragment>
        );
    }
}

export default BlogPage;