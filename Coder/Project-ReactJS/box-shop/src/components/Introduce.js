import React, { Component, Fragment } from 'react';

class Introduce extends Component {
    render() {
        return (
            <Fragment>
                {/* BEGIN INTRODUCE */}
                <section className="introduce">
                    <div className="container">
                        <div className="row introduce__items">
                            <div className="col-md-12 welcome__img">
                                <img className="mx-auto" src="/img/welcome.png" alt="welcome" />
                            </div>
                            <div className="col-md-3">
                                <div className="introduce__item">
                                    <img src="/img/icon-grapes.png" alt="icon-grapes" />
                                    <h3>Organic Food</h3>
                                    <p>Vestibulum risus nunc, ultricies ut tincidunt vitae venenatis et.</p>
                                </div>
                                <div className="introduce__item">
                                    <img src="/img/icon-lemon.png" alt="icon-lemon" />
                                    <h3>Always Fresh</h3>
                                    <p>Ultricies ut tincidunt vitae, venenatis dictum eget enim.</p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <img src="/img/feature-product-organic.jpg" alt="feature-product-organic" />
                            </div>
                            <div className="col-md-3">
                                <div className="introduce__item">
                                    <img src="/img/icon-broccoli.png" alt="icon-broccoli" />
                                    <h3>100% Natural</h3>
                                    <p>Ultricies ut tincidunt vitae, venenatis dictum eget enim.</p>
                                </div>
                                <div className="introduce__item">
                                    <img src="/img/icon-cereals.png" alt="icon-cereals" />
                                    <h3>Best Quality</h3>
                                    <p>Vestibulum risus nunc, ultricies ut tincidunt vitae venenatis et.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row free">
                            <div className="col-md-4 free__item">
                                <img src="/img/feature-return.png" alt="feature-return" />
                                <h3>FREE RETURNS</h3>
                                <p>Only for all orders over $100.00</p>
                            </div>
                            <div className="col-md-4 free__item">
                                <img src="/img/feature-shipping.png" alt="feature-shipping" />
                                <h3>FREE SHIPPING</h3>
                                <p>on all orders over $50.00</p>
                            </div>
                            <div className="col-md-4 free__item">
                                <img src="/img/feature-support.png" alt="feature-support" />
                                <h3>FREE SUPPORT</h3>
                                <p>24 / 7 from Monday to Friday</p>
                            </div>
                        </div>
                    </div>
                </section>
                {/* END INTRODUCE */}
            </Fragment>
        );
    }
}

export default Introduce;