import React, { Component, Fragment } from 'react';

class Brand extends Component {
    render() {
        return (
            <Fragment>
                {/* BEGIN BRAND */}
                <section className="brand">
                    <div className="container">
                        <div className="row">
                            <div className="brand-carousel owl-carousel owl-theme pl-5">
                                <div className="item">
                                    <img src="/img/brand-1-1.png" alt="brand" />
                                </div>
                                <div className="item">
                                    <img src="/img/brand-2-1.png" alt="brand" />
                                </div>
                                <div className="item">
                                    <img src="/img/brand-3-1.png" alt="brand" />
                                </div>
                                <div className="item">
                                    <img src="/img/brand-4-1.png" alt="brand" />
                                </div>
                                <div className="item">
                                    <img src="/img/brand-5-1.png" alt="brand" />
                                </div>
                                <div className="item">
                                    <img src="/img/brand-1-1.png" alt="brand" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* END BRAND */}

            </Fragment>
        );
    }
}

export default Brand;