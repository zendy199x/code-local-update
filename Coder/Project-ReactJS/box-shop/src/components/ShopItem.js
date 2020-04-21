import React, { Component, Fragment } from 'react';
import { Link } from "react-router-dom";

class ShopItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            quantity: 1,
            isShowMessage: false
        }
    }

    handleQuantity = e => {
        let target = e.target;
        let value = target.value;
        this.setState({
            quantity: value
        })
    };

    handleIncreasehandleDecrease = (one) => {
        this.setState({
            quantity: this.state.quantity + one
        })
    }

    handlAddToCart = product => {
        this.props.handlAddToCart(product, this.state.quantity);
        this.setState({
            isShowMessage: true
        })
    };

    render() {

        let { thisProduct } = this.props;
        let { quantity, isShowMessage } = this.state;

        return (
            <Fragment>
                <div>
                    {/* BEGIN SHOP ITEM */}
                    <section className="shop__item">
                        <div className="container px-0">
                            <div className="row">
                                {isShowMessage ? this.showMessage(thisProduct.name, quantity) : ''}
                                <div className="col-md-6 item__image pl-0">
                                    <div className="item-carousel owl-carousel owl-theme">
                                        <div className="item"><img src="/img/apple.jpg" alt="apple" /></div>
                                        <div className="item"><img src="/img/banana.jpg" alt="banana" /></div>
                                        <div className="item"><img src="/img/peace.jpg" alt="peace" /></div>
                                        <div className="item"><img src="/img/tomato.jpg" alt="tomato" /></div>
                                        <div className="item"><img src="/img/sweetlime.jpg" alt="sweetlime" /></div>
                                        <div className="item"><img src="/img/pineapple.jpg" alt="pineapple" /></div>
                                        <div className="item"><img src="/img/orange.jpg" alt="orange" /></div>
                                    </div>
                                    <div className="product__image ml-auto">
                                        <img src={thisProduct.src1} alt="cabbage" />
                                        <div className="products__sale">
                                            {thisProduct.status === 'sale' ? <span className="onsale">SALE</span> : ''}
                                            {thisProduct.status === 'soldout' ? <span className="onsoldout">SOLD OUT</span> : ''}
                                            {thisProduct.status === 'hot' ? <span className="onsale">HOT</span> : ''}
                                        </div>
                                        <a href="#1" className="btn__play"><i className="far fa-play-circle" /></a>
                                    </div>
                                </div>
                                <div className="col-md-6 item__content">
                                    <div className="item__info">
                                        <div className="rating">
                                            <span>{this.showRating(thisProduct.rating)}</span>
                                            <a href="#1"><i className="fas fa-pencil-alt" /> 3 Reviews</a>
                                        </div>
                                        <p>Social good making progress catalytic effect diversity social responsibility Peace Corps
                                          Bloomberg. Safeguards, prevention; education crisis management positive social change.
                                          Plumpy’nut honor planned giving development, Jane Addams justice change-makers economic independence think tank.</p>
                                        <div className="meta">

                                            {thisProduct.inventory > 0 ?
                                                <span className="stock">Availability: <span><i className="far fa-check-circle" /> In Stock </span></span> :
                                                <span className="outStock">Availability: <span><i className="far fa-clock"></i> Out Of Stock </span></span>
                                            }

                                            <span className="sku pl-5">Sku: <span>00{thisProduct.id}</span></span>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="price">
                                        <h1>{`$ ${thisProduct.newPrice}.00`}</h1>
                                    </div>
                                    <div className="add__cart d-flex align-items-center">
                                        <div className="quantity d-flex">

                                            <input type="number" min={1} value={this.state.quantity} onChange={this.handleQuantity} />

                                            <div className="plus__minus">

                                                <a href="#1" onClick={() => this.handleIncreasehandleDecrease(+1)} className="btn__plus">+</a>
                                                <a href="#1" onClick={() => this.handleIncreasehandleDecrease(-1)} className="btn__minus">-</a>

                                            </div>
                                        </div>
                                        <button onClick={() => this.handlAddToCart(thisProduct)} className="btnAdd"><i className="fas fa-shopping-cart" /> ADD TO CART</button>
                                        <div className="extra">
                                            <a href="#1"><i className="far fa-heart" /></a>
                                        </div>
                                        <div className="extra">
                                            <a href="#1"><i className="fas fa-sync-alt" /></a>
                                        </div>
                                        <div className="extra">
                                            <a href="#1"><i className="far fa-envelope" /></a>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="meta__link">
                                        <div className="cats__link">
                                            <span>Categories: </span><span className="cats__link"><a href="#1">{thisProduct.type}</a></span>
                                        </div>
                                        <div className="tags__link"><span>Tags: </span><span className="tags__link">
                                            <a href="#1">boxshop</a>, <a href="#1">theme-sky</a>, <a href="#1">woocommerce</a>, <a href="#1">wordpress</a></span>
                                        </div>
                                        <ul className="meta__social">
                                            <li className="twitter">
                                                <a href="#1" target="_blank"><i className="fab fa-twitter" />Tweet</a>
                                            </li>
                                            <li className="facebook">
                                                <a href="#1" target="_blank"><i className="fab fa-facebook-f" />Share</a>
                                            </li>
                                            <li className="google-plus">
                                                <a href="#1" target="_blank"><i className="fab fa-google-plus-g" />Google+</a>
                                            </li>
                                            <li className="pinterest">
                                                <a href="#1" target="_blank"><i className="fab fa-pinterest" />Pinterest</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* END SHOP ITEM */}
                    {/* BEGIN ITEM DESCRIPT */}
                    <section className="item__descript">
                        <div className="container px-0">
                            <div className="row des__content">
                                <div className="col-md-12 px-0">
                                    <ul className="nav nav-pills" role="tablist">
                                        <li className="nav-item pr-2">
                                            <a className="nav-link active" data-toggle="pill" href="#home"><i className="fas fa-pencil-alt" />
                                                DESCRIPTION</a>
                                        </li>
                                        <li className="nav-item pr-2">
                                            <a className="nav-link" data-toggle="pill" href="#menu1"><i className="fas fa-tag" /> REVIEW (3)</a>
                                        </li>
                                        <li className="nav-item pr-2">
                                            <a className="nav-link" data-toggle="pill" href="#menu2"><i className="fas fa-comments" /> CUSTOM TAB</a>
                                        </li>
                                    </ul>
                                    <div className="tab-content">
                                        <div id="home" className="container tab-pane active"><br />
                                            <h6>Paragraph text</h6>
                                            <p style={{ marginBottom: '25px' }}>Nam tristique porta ligula, vel viverra sem eleifend nec.
                                              Nulla sed purus augue, eu euismod tellus. Nam mattis eros nec mi sagittis sagittis.
                                              Vestibulum suscipit cursus bibendum. Integer at justo eget sem auctor auctor eget vitae arcu. Nam tempor malesuada porttitor. Nulla quis dignissim ipsum.</p>
                                            <h6>Unordered list</h6>
                                            <p style={{ marginBottom: '25px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />
                                                Maecenas ullamcorper est et massa mattis condimentum.<br />
                                                Vestibulum sed massa vel ipsum imperdiet malesuada id tempus nisl.<br />
                                                Etiam nec massa et lectus faucibus ornare congue in nunc.<br />
                                                Mauris eget diam magna, in blandit turpis.</p>
                                            <h6>Ordered list</h6>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />
                                                Maecenas ullamcorper est et massa mattis condimentum.<br />
                                                Vestibulum sed massa vel ipsum imperdiet malesuada id tempus nisl.<br />
                                                Etiam nec massa et lectus faucibus ornare congue in nunc.<br />
                                                Mauris eget diam magna, in blandit turpis.</p>
                                        </div>
                                        <div id="menu1" className="container tab-pane fade"><br />
                                            <p>Your custom content goes here. You can add the content for individual product</p>
                                        </div>
                                        <div id="menu2" className="container tab-pane fade"><br />
                                            <p>Your custom content goes here. You can add the content for individual product</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* END ITEM DESCRIPT */}
                </div>


            </Fragment>
        );
    }

    showMessage = (name, quantity) => {
        return (
            <div class="col-md-12 px-0">
                <div class="message">
                    <p>{quantity} x “{name}” have been added to your cart.</p>
                    <Link to="/cart">VIEW CART</Link>
                </div>
            </div>
        );
    }

    showRating = rating => {

        let result = [];
        if (rating >= 0) {
            for (let i = 1; i <= rating; i++) {
                result.push(<i className="fas fa-star" key={'i' + i} />);
            }
            if (rating !== parseInt(rating)) {
                result.push(<i className="fas fa-star-half-alt" key={'rating' + rating} />);
            }
            for (let j = 1; j <= 5 - rating; j++) {
                result.push(<i className="far fa-star" key={'j' + j} />);
            }
        }
        return result
    }
}

export default ShopItem;