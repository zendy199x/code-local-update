import React, { Component, Fragment } from 'react';

class Footer extends Component {
    render() {
        return (
            <Fragment>
                {/* BEGIN FOOTER */}
                <footer className="footer">
                    <div className="footer__top">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-4 px-0">
                                    <div className="subscribe">
                                        <img src="/img/logo-organic-white.png" alt="logo-organic-white" />
                                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore.</p>
                                        <h2 className="footer__title">NEWSLETTER SIGN UP</h2>
                                        <form className="subscribe__form">
                                            <div className="subscribe__sub">
                                                <input type="email" name="email" placeholder="Enter your email address" required />
                                                <button type="submit" className="subscribe__btn"><i className="far fa-paper-plane" /></button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="col-md-8">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="footer__services">
                                                <h2 className="footer__title">SERVICES</h2>
                                                <ul className="footer__menu">
                                                    <li><a href="#1">Search Terms</a></li>
                                                    <li><a href="#1">Advanced Search</a></li>
                                                    <li><a href="#1">Orders &amp; Returns</a></li>
                                                    <li><a href="#1">RSS</a></li>
                                                    <li><a href="#1">Help &amp; FAQs</a></li>
                                                    <li><a href="#1">Consultant</a></li>
                                                    <li><a href="#1">Store Locations</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="footer__categories">
                                                <h2 className="footer__title">CATEGORIES</h2>
                                                <ul className="footer__menu">
                                                    <li><a href="#1">All Brands</a></li>
                                                    <li><a href="#1">Fashion Clothing</a></li>
                                                    <li><a href="#1">Cosmetics &amp; Beauty</a></li>
                                                    <li><a href="#1">Computers &amp; Laptops</a></li>
                                                    <li><a href="#1">Smartphones &amp; Tablets</a></li>
                                                    <li><a href="#1">Home Funiture</a></li>
                                                    <li><a href="#1">Food &amp; Fruit</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-md-4 pr-0">
                                            <div className="footer__contact">
                                                <h2 className="footer__title">CONTACTS</h2>
                                                <ul className="footer__menu">
                                                    <li><a href="#1"><i className="fas fa-map-marker-alt mr-3" /> 868 Fake Street, New York</a></li>
                                                    <li><a href="#1"><i className="fas fa-phone-volume mr-3" /> (08) 8827 633354</a>
                                                    </li>
                                                    <li><a href="#1"><i className="far fa-envelope mr-3" /> support.theme-sky.com</a>
                                                    </li>
                                                    <li><a href="#1"><i className="fas fa-fax mr-3" /> +1-212-9876543</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer__bottom">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-md-6 px-0">
                                    <div className="copyright">
                                        <p> © 2017 BoxShop. All Rights Reserved.Theme by theme-sky.com</p>
                                    </div>
                                </div>
                                <div className="col-md-6 px-0">
                                    <div className="payment text-right">
                                        <img src="/img/payment.png" alt="payment" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
                {/* END FOOTER */}

            </Fragment>
        );
    }
}

export default Footer;