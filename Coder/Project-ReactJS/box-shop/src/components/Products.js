import React, { Component, Fragment } from 'react';

class Products extends Component {
    render() {
        return (
            <Fragment>
                <section className="products">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 px-0">
                                <h3 className="heading__title">New Products</h3>
                            </div>
                            <div className="col-md-12 px-0 products__items">
                                <div className="owl-carousel owl-theme">

                                    {this.props.children}

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Fragment>
        );
    }
}

export default Products;