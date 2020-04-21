import React, { Component, Fragment } from 'react';

class About extends Component {
    render() {
        return (
            <Fragment>
                {/* BEGIN ABOUT */}
                <section className="about">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <div className="contact_content">
                                    <h4>WHO ARE WE ?</h4>
                                    <blockquote className="blockquote">Our grantees and partners generosity truth, prevention nutrition
                                      involvement Ford Foundation. Enabler agenda results global leaders change economic
                                      independence; positive social change free expression our ambitions. Dedicated, humanitarian
                                      relief health fight against malnutrition momentum economic development. Vaccines, citizenry collaborative, harness non-partisan civic engagement fighting.</blockquote>
                                    <button className="blog__button">CONTACT US NOW</button>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <img src="./img/about-us-product.jpg" alt="about-us-product" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 mission">
                                <h4>OUR MISSION</h4>
                                <button className="accordion default">What's WordPress?</button>
                                <div className="panel">
                                    <p>Our grantees and partners generosity truth, prevention nutrition involvement Ford Foundation.
                                      Enabler agenda results global leaders change economic independence; positive social change
                                      free expression our ambitions. Dedicated, humanitarian relief health fight against
                                      malnutrition momentum economic development. Vaccines, citizenry collaborative, harness non-partisan. Andrew Carnegie policymakers civic engagement fighting .</p>
                                </div>
                                <button className="accordion">Why should I use WordPress?</button>
                                <div className="panel">
                                    <p>Our grantees and partners generosity truth, prevention nutrition involvement Ford Foundation.
                                      Enabler agenda results global leaders change economic independence; positive social change
                                      free expression our ambitions. Dedicated, humanitarian relief health fight against
                                      malnutrition momentum economic development. Vaccines, citizenry collaborative, harness non-partisan. Andrew Carnegie policymakers civic engagement fighting .</p>
                                </div>
                                <button className="accordion">What are themes?</button>
                                <div className="panel">
                                    <p>Our grantees and partners generosity truth, prevention nutrition involvement Ford Foundation.
                                      Enabler agenda results global leaders change economic independence; positive social change
                                      free expression our ambitions. Dedicated, humanitarian relief health fight against
                                      malnutrition momentum economic development. Vaccines, citizenry collaborative, harness non-partisan. Andrew Carnegie policymakers civic engagement fighting .</p>
                                </div>
                                <button className="accordion">How do I install a theme?</button>
                                <div className="panel">
                                    <p>Our grantees and partners generosity truth, prevention nutrition involvement Ford Foundation.
                                      Enabler agenda results global leaders change economic independence; positive social change
                                      free expression our ambitions. Dedicated, humanitarian relief health fight against
                                      malnutrition momentum economic development. Vaccines, citizenry collaborative, harness non-partisan. Andrew Carnegie policymakers civic engagement fighting .</p>
                                </div>
                            </div>
                            <div className="col-md-6 bar">
                                <h4>OUR EXPERIENCE</h4>
                                <h6>Development</h6>
                                <div id="bar1" className="barfiller">
                                    <div className="tipWrap">
                                        <span className="tip" />
                                    </div>
                                    <span className="fill" data-percentage={60} />
                                </div>
                                <h6>Design</h6>
                                <div id="bar2" className="barfiller">
                                    <div className="tipWrap">
                                        <span className="tip" />
                                    </div>
                                    <span className="fill" data-percentage={80} />
                                </div>
                                <h6>Marketing</h6>
                                <div id="bar3" className="barfiller">
                                    <div className="tipWrap">
                                        <span className="tip" />
                                    </div>
                                    <span className="fill" data-percentage={40} />
                                </div>
                                <h6>Photoshop</h6>
                                <div id="bar4" className="barfiller">
                                    <div className="tipWrap">
                                        <span className="tip" />
                                    </div>
                                    <span className="fill" data-percentage={90} />
                                </div>
                                <h6>HTML</h6>
                                <div id="bar5" className="barfiller">
                                    <div className="tipWrap">
                                        <span className="tip" />
                                    </div>
                                    <span className="fill" data-percentage={60} />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* END ABOUT */}

            </Fragment>
        );
    }
}

export default About;