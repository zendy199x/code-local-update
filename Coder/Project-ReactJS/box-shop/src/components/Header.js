import React, { Component, Fragment } from 'react';
import {Link} from 'react-router-dom';

import Menu from './Menu';

class Header extends Component {

    render() {

        let { cart } = this.props;

        return (
            <Fragment>
                {/* BEGIN HEADER */}
                <header className="header">
                    <div className="header__top">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-md-3 ">
                                    <div className="phone my-3">
                                        <p><i className="fas fa-phone" />+189 284 5679</p>
                                    </div>
                                </div>
                                <div className="col-md-9">
                                    <div className="meta__group">
                                        <ul className="nav">
                                            <li className="nav-item">
                                                <a className="nav-link" href="#1">English <i className="fas fa-angle-down" /></a>
                                                <div className="list__wrapper">
                                                    <div className="list__item">
                                                        <ul>
                                                            <li><a href="#1">French</a> </li>
                                                            <hr />
                                                            <li><a href="#1">German</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="#1">USD <i className="fas fa-angle-down" /></a>
                                                <div className="list__wrapper">
                                                    <div className="list__item">
                                                        <ul>
                                                            <li><a href="#1">USD</a> </li>
                                                            <hr />
                                                            <li><a href="#1">EUR</a></li>
                                                            <hr />
                                                            <li><a href="#1">AUD</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="#1"><i className="far fa-heart" /> Wishlist (0)</a>
                                            </li>
                                            <li className="nav-item">
                                                <div className="login_signup">
                                                    <i className="far fa-user" />
                                                    <a className="nav-link" href="#1"> Login</a>/<a className="nav-link" href="#1"> Sign up</a>
                                                </div>
                                                <div className="form__item__wrapper">
                                                    <form action="#1" className="form__item">
                                                        <div className="form-group">
                                                            <label htmlFor="username">Username</label>
                                                            <input type="text" className="form-control" id="username" autoFocus />
                                                        </div>
                                                        <div className="form-group">
                                                            <label htmlFor="password">Password</label>
                                                            <input type="password" className="form-control" id="password" />
                                                        </div>
                                                        <button type="submit" className="btn btn-dark">Login</button>
                                                        <div className="forgot">
                                                            <a href="#1">Forgot Your Password ?</a>
                                                        </div>
                                                    </form>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* END HEADER TOP */}

                    {/* BEGIN HEADER MIDDLE */}

                    <div className="header__middle">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-4 logo__wrapper">
                                    <div className="logo">
                                        <Link to="/" href="#1">
                                            <img src="/img/logo.png" alt="Boxshop" title="Boxshop" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-md-5 search__wrapper">
                                    <form className="form-group">
                                        <div className="search">
                                            <div className="search__field">
                                                <input type="text" placeholder="Search for products" />
                                            </div>
                                            <div className="search__button">
                                                <input type="button" />
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div className="col-md-3 shopping__card__wrapper">

                                    <div className="card__content">
                                        <a href="#1" className="cart__control">
                                            <i className="fas fa-cart-plus" />
                                            <span className="cart__number"> {cart.length} items </span>
                                            <span className="hyphen">-</span>
                                            <span className="cart__total"> <i className="fas fa-dollar-sign" /> {this.showTotalAmount(cart)}.00 </span>
                                        </a>
                                        <div className="cart__mini">
                                            <div className="cart__mini_content">

                                                {this.props.children}

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* END HEADER MIDDLE */}

                    {/* BEGIN MENU  */}

                    <Menu />

                    {/* END MENU */}

                </header>
                {/* END HEADER */}
                {/* BEGIN CAROUSEL */}
                <section className="box__carousel">
                    <div id="demo" className="carousel slide" data-ride="carousel">
                        {/* The slideshow */}
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="/img/slideshow-1-bg.jpg" alt="slideshow" />
                                <div className="carousel__content">
                                    <h5 className="animated fadeInDown slow">SALE UP TO 50% ALL PRODUCTS</h5>
                                    <h1 className="animated jackInTheBox slow">Fresh From The Farm</h1>
                                    <p className="animated zoomIn slow">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta velit odio dolorum, tempora quaerat modi quibusdam.</p>
                                    <button className="animated bounceIn btn__shopnow"><Link to="/shop">SHOP NOW</Link></button>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src="/img/slideshow-2-bg.jpg" alt="slideshow" />
                                <div className="carousel__content">
                                    <h5 className="animated fadeInDown slow">SALE UP TO 50% ALL PRODUCTS</h5>
                                    <h1 className="animated jackInTheBox slow">By Fresh Fruit For Delivery</h1>
                                    <p className="animated zoomIn slow">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta velit odio dolorum, tempora quaerat modi quibusdam.</p>
                                    <button className="animated bounceIn btn__shopnow"><Link to="/shop">SHOP NOW</Link></button>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src="/img/slideshow-3-bg.jpg" alt="slideshow" />
                                <div className="carousel__content">
                                    <h5 className="animated fadeInDown slow">SALE UP TO 50% ALL PRODUCTS</h5>
                                    <h1 className="animated jackInTheBox slow">Organic Fruits And Veggies</h1>
                                    <p className="animated zoomIn slow">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta velit odio dolorum, tempora quaerat modi quibusdam.</p>
                                    <button className="animated bounceIn btn__shopnow"><Link to="/shop">SHOP NOW</Link></button>
                                </div>
                            </div>
                        </div>
                        {/* Left and right controls */}
                        <a className="carousel-control-prev" href="#demo" data-slide="prev">
                            <span className="carousel-control-prev-icon"><i className="fas fa-chevron-left" /></span>
                        </a>
                        <a className="carousel-control-next" href="#demo" data-slide="next">
                            <span className="carousel-control-next-icon"><i className="fas fa-chevron-right" /></span>
                        </a>
                    </div>
                </section>
                {/* END CAROUSEL */}
                    <div id="back__top">
        				<div className="div"><i className="fas fa-chevron-circle-up"></i></div>
    				</div>
            </Fragment>

        );
    }

    showTotalAmount = cart => {
        let total = 0;
        for (let item of cart) {
            total += (item.product.newPrice * item.quantity);
        }
        return total;
    }
}

export default Header;