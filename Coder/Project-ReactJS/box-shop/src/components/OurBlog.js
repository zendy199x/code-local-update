import React, { Component, Fragment } from 'react';

class OurBlog extends Component {
    render() {
        return (
            <Fragment>
                {/* BEGIN BLOG */}
                <section className="blog">
                    <div className="container">
                        <div className="row px-0">
                            <div className="col-md-12 px-0 pb-5">
                                <h3 className="heading__title my-0">Our Blog</h3>
                            </div>
                            <div className="col-md-4 pl-0">
                                <article>
                                    <div className="blog__thumbnail">
                                        <img src="/img/blog-2-480x320.jpg" alt="blog" />
                                        <div className="img__overlay" />
                                    </div>
                                    <h1>100% compatible WPML plugin</h1>
                                    <div className="entry__meta">
                                        <div className="row align-items-center">
                                            <div className="col-md-6">
                                                <div className="row align-items-center justify-content-end">
                                                    <div className="date__time">
                                                        <div>25</div>
                                                        <div>OCT</div>
                                                    </div>
                                                    <div className="col-md-4 px-0">
                                                        <div className="comment__cout">
                                                            <i className="far fa-comments" />
                                                            <span className="number">02</span>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4 px-0">
                                                        <div className="view__cout">
                                                            <i className="far fa-eye" />
                                                            <span className="number">323</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="col-md-12 pr-0">
                                                    <div className="author">Post by<a href="#1">Jane Doe</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="blog__content">
                                        <p>Solve challenges Action Against Hunger citizenry Martin Luther King Jr. Combat malaria, mobilize lasting change billionaire philanthropy revitalize</p>
                                    </div>
                                    <button className="blog__button">READ MORE</button>
                                </article>
                            </div>
                            <div className="col-md-4 px-2">
                                <article>
                                    <div className="blog__thumbnail">
                                        <img src="/img/blog-3-480x320.jpg" alt="blog" />
                                        <div className="img__overlay" />
                                    </div>
                                    <h1>Responsive and retina ready</h1>
                                    <div className="entry__meta">
                                        <div className="row align-items-center">
                                            <div className="col-md-6">
                                                <div className="row align-items-center justify-content-end">
                                                    <div className="date__time">
                                                        <div>20</div>
                                                        <div>MAY</div>
                                                    </div>
                                                    <div className="col-md-4 px-0">
                                                        <div className="comment__cout">
                                                            <i className="far fa-comments" />
                                                            <span className="number">02</span>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4 px-0">
                                                        <div className="view__cout">
                                                            <i className="far fa-eye" />
                                                            <span className="number">323</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="col-md-12 pr-0">
                                                    <div className="author">Post by<a href="#1">Jane Doe</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="blog__content">
                                        <p>Solve challenges Action Against Hunger citizenry Martin Luther King Jr. Combat malaria, mobilize lasting change billionaire philanthropy revitalize</p>
                                    </div>
                                    <button className="blog__button">READ MORE</button>
                                </article>
                            </div>
                            <div className="col-md-4 pr-0">
                                <article>
                                    <div className="blog__thumbnail">
                                        <img src="/img/blog-4-480x320.jpg" alt="blog" />
                                        <div className="img__overlay" />
                                    </div>
                                    <h1>Use HTML5 and CSS3</h1>
                                    <div className="entry__meta">
                                        <div className="row align-items-center">
                                            <div className="col-md-6">
                                                <div className="row align-items-center justify-content-end">
                                                    <div className="date__time">
                                                        <div>01</div>
                                                        <div>NOV</div>
                                                    </div>
                                                    <div className="col-md-4 px-0">
                                                        <div className="comment__cout">
                                                            <i className="far fa-comments" />
                                                            <span className="number">02</span>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4 px-0">
                                                        <div className="view__cout">
                                                            <i className="far fa-eye" />
                                                            <span className="number">323</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="col-md-12 pr-0">
                                                    <div className="author">Post by<a href="#1">Jane Doe</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="blog__content">
                                        <p>Solve challenges Action Against Hunger citizenry Martin Luther King Jr. Combat malaria, mobilize lasting change billionaire philanthropy revitalize</p>
                                    </div>
                                    <button className="blog__button">READ MORE</button>
                                </article>
                            </div>
                        </div>
                    </div>
                </section>
                {/* END BLOG */}

            </Fragment>
        );
    }
}

export default OurBlog;