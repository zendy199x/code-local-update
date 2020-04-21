import React, { Component, Fragment } from 'react';

import HeaderCartContainer from '../containers/HeaderCartContainer';
import Footer from '../components/Footer';

class PortfolioInfo extends Component {
    render() {

        return (
            <Fragment>
                <HeaderCartContainer />

                <section className="portfolio__info">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-7 portfolio__img pl-0">
                                <img src={`/img/${this.props.match.params.name}.jpg`} alt="blog-7" />
                            </div>
                            <div className="col-md-5 portfolio__content pr-0">
                                <h2>Pellentesque habitant morbi</h2>
                                <p>Solve challenges tAction Against Hunger citizenry Martin Luther King Jr. Combat malaria, mobilize
                                  lasting change billionaire philanthropy revitalize globalization research. Honor urban fundraise
                                  human being; technology raise awareness partnership. Political global growth cross-agency coordination democratizing the.</p>
                                <p>Best practices disruptor catalyst public sector; protect micro-finance educate. Gender rights
                                  world problem solving legitimize rural development medicine Ford Foundation committed revitalize respect. Affordable health care, humanitarian.</p>
                                <hr />
                                <h6>CUSTOM FIELD</h6>
                                <p>Custom content goes here</p>
                                <h6>DATE</h6>
                                <p>March 3, 2015</p>
                                <h6>PROJECT URL</h6>
                                <p>https://www.facebook.com/anluu9292</p>
                                <h6>CATEGORIES</h6>
                                <p>Graphics, Web design</p>
                                <div className="row align-items-center">
                                    <div className="col-md-4 portfolio__like">
                                        <i className="far fa-heart" /> 0 Likes </div>
                                    <div className="col-md-8 portfolio__social">
                                        <ul className="nav justify-content-end">
                                            <li className="nav-item"><i className="fab fa-facebook-f" /></li>
                                            <li className="nav-item"><i className="fab fa-twitter" /></li>
                                            <li className="nav-item"><i className="fab fa-pinterest" /></li>
                                            <li className="nav-item"><i className="fab fa-google-plus-g" /></li>
                                            <li className="nav-item"><i className="fab fa-linkedin-in" /></li>
                                            <li className="nav-item"><i className="fab fa-reddit" /></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="row portfolio__button justify-content-between">
                                    <div className="col-md-5">
                                        <a href="#1" className="project__button">PREV PROJECT</a>
                                    </div>
                                    <div className="col-md-2" />
                                    <div className="col-md-5 pl-5">
                                        <a href="#1" className="project__button">NEXT PROJECT</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <Footer />

            </Fragment>
        );
    }
}

export default PortfolioInfo;