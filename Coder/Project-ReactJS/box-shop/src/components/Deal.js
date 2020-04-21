import React, { Component, Fragment } from 'react';

class Deal extends Component {
    render() {
        return (
            <Fragment>
                {/* BEGIN DEAL */}
                <section className="deal">
                    <div className="container">
                        <div className="row deal__products">
                            <div className="col-md-12 px-0">
                                <h3 className="heading__title">Deals of the day</h3>
                            </div>

                            {this.props.children}

                        </div>
                        <div className="row deal__advertise">
                            <div className="col-md-6 pl-0 pr-2">
                                <div className="advertise__left advertise__img">
                                    <a href="#1">
                                        <img src="/img/bg-banner-2-organic.jpg" alt="bg-banner-2-organic" />
                                        <img src="/img/text-banner-2-organic.png" alt="text-banner-2-organic" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-6 pr-0 pl-2">
                                <div className="advertise__right advertise__img">
                                    <a href="#1">
                                        <img src="/img/bg-banner-3-organic.jpg" alt="bg-banner-3-organic" />
                                        <img src="/img/text-banner-3-organic.png" alt="text-banner-3-organic" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* END DEAL */}

            </Fragment>
        );
    }
}

export default Deal;