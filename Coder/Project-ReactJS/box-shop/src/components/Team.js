import React, { Component, Fragment } from 'react';

class Team extends Component {
    render() {
        return (
            <Fragment>
                {/* BEGIN TEAM */}
                <section className="team">
                    <div className="container text-center">
                        <h5>MEET OUR TEAM</h5>
                        <div className="row">
                            <div className="col-md-4 pl-0 pr-3">
                                <div className="team__item">
                                    <div className="team__image">
                                        <img src="./img/team-member-5.jpg" alt="team-member" />
                                        <div className="team__social">
                                            <i className="fab fa-facebook-f" />
                                            <i className="fab fa-twitter" />
                                            <i className="fab fa-google-plus-g" />
                                            <i className="fab fa-pinterest-p" />
                                            <i className="fab fa-instagram" />
                                        </div>
                                    </div>
                                    <div className="team__content">
                                        <h5>MR. STORMIT</h5>
                                        <p>CEO of theme-sky</p>
                                        <p>Our grantees and partners generosity truth, prevention nutrition involvement Ford Foundation. Enabler agenda results global leaders.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 px-2">
                                <div className="team__item">
                                    <div className="team__image">
                                        <img src="./img/team-member-3.jpg" alt="team-member" />
                                        <div className="team__social">
                                            <i className="fab fa-facebook-f" />
                                            <i className="fab fa-twitter" />
                                            <i className="fab fa-google-plus-g" />
                                            <i className="fab fa-pinterest-p" />
                                            <i className="fab fa-instagram" />
                                        </div>
                                    </div>
                                    <div className="team__content">
                                        <h5>MR. KING</h5>
                                        <p>Developer</p>
                                        <p>Our grantees and partners generosity truth, prevention nutrition involvement Ford Foundation. Enabler agenda results global leaders.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 pr-0 pl-3">
                                <div className="team__item">
                                    <div className="team__image">
                                        <img src="./img/team-member-6.jpg" alt="team-member" />
                                        <div className="team__social">
                                            <i className="fab fa-facebook-f" />
                                            <i className="fab fa-twitter" />
                                            <i className="fab fa-google-plus-g" />
                                            <i className="fab fa-pinterest-p" />
                                            <i className="fab fa-instagram" />
                                        </div>
                                    </div>
                                    <div className="team__content">
                                        <h5>MS. JENNY</h5>
                                        <p>Developer</p>
                                        <p>Our grantees and partners generosity truth, prevention nutrition involvement Ford Foundation. Enabler agenda results global leaders.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* END TEAM */}
            </Fragment>
        );
    }
}

export default Team;