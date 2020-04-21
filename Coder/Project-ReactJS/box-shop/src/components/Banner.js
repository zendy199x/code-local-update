import React, { Component, Fragment } from 'react';

class Banner extends Component {
    render() {
        return (
            <Fragment>
                {/* BEGIN BANNER */}
                <section className="banner">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="banner__info">
                                    <img src="/img/text-banner-1-organic.png.png" alt="text-banner-1-organic" />
                                    <p>Our grantees and partners generosity truth, prevention nutrition involvement Ford Foundation.
                                      Enabler agenda results global leaders change.</p>
                                    <button className="btn__shopnow">SH<i className="fas fa-circle-notch fa-spin" />P NOW</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* END BANNER */}

            </Fragment>
        );
    }
}

export default Banner;