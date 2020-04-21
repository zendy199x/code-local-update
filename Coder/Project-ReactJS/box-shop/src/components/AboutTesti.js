import React, { Component, Fragment } from 'react';

class AboutTesti extends Component {
    render() {
        return (
            <Fragment>
                <section className="testi about__testi">
                    <div className="testi__content">
                        <div className="testi-carousel owl-carousel owl-theme">
                            <div className="item">
                                <img src="/img/testimonial-1.jpg" alt="testimonial" />
                                <span><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star-half-alt" /></span>
                                <p><i className="fas fa-quote-left" /> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                                  diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim
                                  ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate</p>
                                <a href="#1">MISS. BONNI</a>
                                <p>CEO - Themesky</p>
                            </div>
                            <div className="item">
                                <img src="/img/testimonial-2.jpg" alt="testimonial" />
                                <span><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star-half-alt" /></span>
                                <p><i className="fas fa-quote-left" /> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                                  diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim
                                  ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in</p>
                                <a href="#1">MR. KEN</a>
                                <p>CEO - Themesky</p>
                            </div>
                            <div className="item">
                                <img src="/img/testimonial-3.jpg" alt="testimonial" />
                                <span><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star-half-alt" /></span>
                                <p><i className="fas fa-quote-left" /> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                                  diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim
                                  ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in</p>
                                <a href="#1">MRS.JANE</a>
                                <p>CEO - Themesky</p>
                            </div>
                        </div>
                    </div>
                </section>


            </Fragment>
        );
    }
}

export default AboutTesti;