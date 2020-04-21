import React, { Component, Fragment } from 'react';

import { NavLink } from 'react-router-dom';

class Menu extends Component {
    render() {
        return (
            <Fragment>
                <div className="header__bottom">
                    <div className="container">
                        <div className="row main__menu">
                            <div className="col-md-12">
                                <ul className="nav justify-content-center">
                                    <li className="nav-item">
                                        <NavLink to='/' exact activeClassName="active" className="nav-link">HOME <i className="fas fa-angle-down" /></NavLink>
                                        <div className="list__wrapper">
                                            <div className="list__item">
                                                <ul>
                                                    <li><a href="#1">Supermarket 2</a> </li>
                                                    <hr />
                                                    <li><a href="#1">Home Furniture</a></li>
                                                    <hr />
                                                    <li><a href="#1">Home Glasses</a></li>
                                                    <hr />
                                                    <li><a href="#1">Home Shoes</a> </li>
                                                    <hr />
                                                    <li><a href="#1">Home Electronic</a></li>
                                                    <hr />
                                                    <li><a href="#1">Home Houseware</a></li>
                                                    <hr />
                                                    <li><a href="#1">Home Organic</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to='/portfolio' exact activeClassName="active" className="nav-link">PAGE <i className="fas fa-angle-down" /></NavLink>
                                        <div className="list__wrapper">
                                            <div className="list__item">
                                                <ul>
                                                    <li><a href="#1">Portfolio</a></li>
                                                    <hr />
                                                    <li><a href="#1">FAQ</a></li>
                                                    <hr />
                                                    <li><a href="#1">About us</a></li>
                                                    <hr />
                                                    <li><a href="#1">About us 2</a> </li>
                                                    <hr />
                                                    <li><a href="#1">Contact us</a></li>
                                                    <hr />
                                                    <li><a href="#1">Coming soon</a></li>
                                                    <hr />
                                                    <li><a href="#1">404</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to='/blog' exact activeClassName="active" className="nav-link">BLOG <i className="fas fa-angle-down" /></NavLink>
                                        <div className="list__wrapper">
                                            <div className="list__item">
                                                <ul>
                                                    <li><a href="#1">Blog Standard</a></li>
                                                    <hr />
                                                    <li><a href="#1">Blog List Style</a></li>
                                                    <hr />
                                                    <li><a href="#1">Blog Masonry</a></li>
                                                    <hr />
                                                    <li><a href="#1">Blog Detail</a> </li>
                                                    <hr />
                                                    <li><a href="#1">Forums</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to='/shop' exact activeClassName="active" className="nav-link">SHOP <i className="fas fa-angle-down" /></NavLink>
                                        <div className="shop__wrapper">
                                            <div className="shop__items">
                                                <div className="row">
                                                    <div className="col-md-4 shop__item">
                                                        <div className="shop__layout">
                                                            <ul>
                                                                <h6><a href="#1">SHOP LAYOUT</a> </h6>
                                                                <li className="pt-2"><a href="#1">Shop layout 1</a> </li>
                                                                <li><a href="#1">Shop layout 2</a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="shop__detail">
                                                            <ul>
                                                                <h6><a href="#1">DETAIL LAYOUT</a> </h6>
                                                                <li className="pt-2"><a href="#1">Detail layout 1</a> </li>
                                                                <li><a href="#1">Detail layout 2</a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="shop__product">
                                                            <ul>
                                                                <h6><a href="#1">PRODUCT TYPES</a> </h6>
                                                                <li className="pt-2"><a href="#1">Variable product</a> </li>
                                                                <li><a href="#1">Variable product 2</a></li>
                                                                <li><a href="#1">External product</a></li>
                                                                <li><a href="#1">Group product</a> </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4 shop__item">
                                                        <div className="shop__item__recent">
                                                            <h5><a href="#1">RECENT PRODUCTS</a></h5>
                                                            <div className="row pt-3">
                                                                <div className="col-md-6">
                                                                    <div className="shop__item__thumbnail">
                                                                        <a href="#1"><img src="/img/lychee.jpg" alt="lychee" /></a>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6 pl-1">
                                                                    <a href="#1">Cras pose psum default</a>
                                                                    <div className="rating">
                                                                        <span><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star-half-alt" /></span>
                                                                    </div>
                                                                    <span className="price">$599.00</span>
                                                                </div>
                                                            </div>
                                                            <div className="row pt-3">
                                                                <div className="col-md-6">
                                                                    <div className="shop__item__thumbnail">
                                                                        <a href="#1"><img src="/img/lingonberry.jpg" alt="lychee" /></a>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6 pl-1">
                                                                    <a href="#1">Donec ligula cum default</a>
                                                                    <div className="rating">
                                                                        <span><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="far fa-star" /></span>
                                                                    </div>
                                                                    <span className="price">$70.00</span>
                                                                </div>
                                                            </div>
                                                            <div className="row pt-3">
                                                                <div className="col-md-6">
                                                                    <div className="shop__item__thumbnail">
                                                                        <a href="#1"><img src="/img/banana.jpg" alt="lychee" /></a>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6 pl-1">
                                                                    <a href="#1">Donec adicig piscu simple</a>
                                                                    <div className="rating">
                                                                        <span><i className="far fa-star" />
                                                                            <i className="far fa-star" />
                                                                            <i className="far fa-star" />
                                                                            <i className="far fa-star" />
                                                                            <i className="far fa-star" /></span>
                                                                    </div>
                                                                    <span className="old__price">$400.00</span>
                                                                    <span className="price">$349.00</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4 shop__img pt-2">
                                                        <img src="/img/mega-menu-1.jpg" alt="mega-menu-1" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to='/shortcode' exact activeClassName="active" className="nav-link">SHORTCODE <i className="fas fa-angle-down" /></NavLink>
                                        <div className="shortcode__wrapper">
                                            <div className="shortcode__items">
                                                <div className="row">
                                                    <div className="col-md-3 shortcode__item">
                                                        <ul>
                                                            <h6><a href="#1">SHOP SHORTCODE</a> </h6>
                                                            <li><a href="#1">Best selling product</a> </li>
                                                            <li><a href="#1">Recent products</a></li>
                                                            <li><a href="#1">Feature products</a></li>
                                                            <li><a href="#1">Sale products</a> </li>
                                                            <li><a href="#1">Top rated products</a></li>
                                                            <li><a href="#1">Product deals slider</a></li>
                                                            <li><a href="#1">Products widget</a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-md-3 shortcode__item">
                                                        <ul>
                                                            <h6><a href="#1">BLOG SHORTCODE 1</a> </h6>
                                                            <li><a href="#1">Typography</a> </li>
                                                            <li><a href="#1">Feature</a></li>
                                                            <li><a href="#1">Heading</a></li>
                                                            <li><a href="#1">FAQ</a> </li>
                                                            <li><a href="#1">Google map</a></li>
                                                            <li><a href="#1">Images gallery</a></li>
                                                            <li><a href="#1">Message box</a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-md-3 shortcode__item">
                                                        <ul>
                                                            <h6><a href="#1">BLOG SHORTCODE 2</a> </h6>
                                                            <li><a href="#1">Tab content</a> </li>
                                                            <li><a href="#1">Accordion</a></li>
                                                            <li><a href="#1">Button</a></li>
                                                            <li><a href="#1">Progress bar</a> </li>
                                                            <li><a href="#1">Single image</a></li>
                                                            <li><a href="#1">Price table</a></li>
                                                            <li><a href="#1">Milestone</a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-md-3 shortcode__item">
                                                        <ul>
                                                            <h6><a href="#1">SHOP SHORTCODE 3</a> </h6>
                                                            <li><a href="#1">Shortcode blog</a> </li>
                                                            <li><a href="#1">Banner</a></li>
                                                            <li><a href="#1">Team member</a></li>
                                                            <li><a href="#1">Testimonial</a> </li>
                                                            <li><a href="#1">Slider logo</a></li>
                                                            <li><a href="#1">Twitter slider</a></li>
                                                            <li><a href="#1">Portfolio</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to='/theme' exact activeClassName="active" className="nav-link">THEME FEATURE <i className="fas fa-angle-down" /></NavLink>
                                        <div className="theme__wrapper">
                                            <div className="theme__items">
                                                <div className="row">
                                                    <div className="col-md-2 theme__item">
                                                        <ul>
                                                            <h6><a href="#1">LIST PAGES</a> </h6>
                                                            <li><a href="#1">Blog standard</a> </li>
                                                            <li><a href="#1">Blog mansory</a></li>
                                                            <li><a href="#1">Blog detail</a></li>
                                                            <li><a href="#1">Forums</a> </li>
                                                            <li><a href="#1">Topic</a></li>
                                                            <li><a href="#1">Forum detail</a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-md-2 theme__item">
                                                        <ul>
                                                            <h6><a href="#1">LIST PAGES</a> </h6>
                                                            <li><a href="#1">About us</a> </li>
                                                            <li><a href="#1">Service</a></li>
                                                            <li><a href="#1">Contact us</a></li>
                                                            <li><a href="#1">FAQ</a> </li>
                                                            <li><a href="#1">Coming soon</a></li>
                                                            <li><a href="#1">404 page</a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-md-2 theme__item">
                                                        <ul>
                                                            <h6><a href="#1">LIST PAGES</a> </h6>
                                                            <li><a href="#1">Shop page</a> </li>
                                                            <li><a href="#1">Shopping cart</a></li>
                                                            <li><a href="#1">Checkout</a></li>
                                                            <li><a href="#1">My account</a> </li>
                                                            <li><a href="#1">Track order</a></li>
                                                            <li><a href="#1">Wishlist</a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-md-2 theme__item">
                                                        <ul>
                                                            <h6><a href="#1">LIST PAGES</a> </h6>
                                                            <li><a href="#1">Portfolio</a> </li>
                                                            <li><a href="#1">Team member</a></li>
                                                            <li><a href="#1">Testimonial</a></li>
                                                            <li><a href="#1">Feature</a> </li>
                                                            <li><a href="#1">Slider logo</a></li>
                                                            <li><a href="#1">Price table</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to='/about' exact activeClassName="active" className="nav-link">ABOUT US</NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment >
        );
    }
}

export default Menu;