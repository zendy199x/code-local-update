import React, { Component, Fragment } from 'react';

class OurProducts extends Component {

    render() {
        return (
            <Fragment>
                {/* BEGIN OUR PRODUCTS */}
                <section className="our__products">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 px-0">
                                <h3 className="heading__title">Our Products</h3>
                            </div>
                        </div>
                        <ul className="nav justify-content-center text-center our__products__menu" role="tablist">
                            <li className="nav-item pr-5">
                                <a className="nav-link" data-toggle="pill" href="#home"><img src="/img/all.png" alt="all" /></a>
                                <a className="nav-link active" data-toggle="pill" href="#home"><img src="/img/all-hover.png" alt="all" className="our__click" /></a>ALL
                            </li>
                            <li className="nav-item pr-5">
                                <a className="nav-link" data-toggle="pill" href="#menu1"><img src="/img/fruits.png" alt="fruits" /></a>
                                <a className="nav-link" data-toggle="pill" href="#menu1"><img src="/img/fruits-hover.png" alt="fruits" className="our__click" /></a>FRUITS
                            </li>
                            <li className="nav-item pr-5">
                                <a className="nav-link" data-toggle="pill" href="#menu2"><img src="/img/juices.png" alt="juices" /></a>
                                <a className="nav-link" data-toggle="pill" href="#menu2"><img src="/img/juices-hover.png" alt="juices" className="our__click" /></a>JUICES
                            </li>
                            <li className="nav-item pr-5">
                                <a className="nav-link" data-toggle="pill" href="#menu3"><img src="/img/veggies.png" alt="veggies" /></a>
                                <a className="nav-link" data-toggle="pill" href="#menu3"><img src="/img/veggies-hover.png" alt="veggies" className="our__click" /></a>VEGGIES
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="pill" href="#menu4"><img src="/img/orthers.png" alt="others" /></a>
                                <a className="nav-link" data-toggle="pill" href="#menu4"><img src="/img/orthers-hover.png" alt="others" className="our__click" /></a>
                                OTHERS
                            </li>
                        </ul>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div id="preloader">
                                    <div id="loader" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-content" id="tab-content">
                        <div id="home" className="container tab-pane active px-0"><br />
                            <div className="row">

                                {this.props.children}


                            </div>
                        </div>

                        <div id="menu1" className="container tab-pane fade"><br />
                            <div className="row">

                                {this.props.children}

                            </div>
                        </div>
                        <div id="menu2" className="container tab-pane fade"><br />
                            <div className="row">

                                {this.props.children}

                            </div>
                        </div>
                        <div id="menu3" className="container tab-pane fade"><br />
                            <div className="row">

                                {this.props.children}

                            </div>
                        </div>
                        <div id="menu4" className="container tab-pane fade"><br />
                            <div className="row">
                                {this.props.children}
                            </div>
                        </div>
                    </div>
                </section>
                {/* END OUR PRODUCTS */}

            </Fragment>
        );
    }
}

export default OurProducts;