import React, { Component, Fragment } from 'react';

class PortfolioList extends Component {
    render() {
        return (
            <Fragment>
                {/* BEGIN GALLERY FILTER */}
                <section className="filter">
                    <div className="container px-0">
                        <div className="row">
                            <div className="col-md-12">
                                <ul className="nav nav-pills">
                                    <li className="nav-item" data-filter="all"><a className="nav-link active" data-toggle="pill" href="#home">All</a></li>
                                    <li className="nav-item" data-filter="fashion"><a className="nav-link" data-toggle="pill" href="#home">Fashion</a></li>
                                    <li className="nav-item" data-filter="design"><a className="nav-link" data-toggle="pill" href="#home">Design</a></li>
                                    <li className="nav-item" data-filter="graphics"><a className="nav-link" data-toggle="pill" href="#home">Graphics</a></li>
                                    <li className="nav-item" data-filter="photography"><a className="nav-link" data-toggle="pill" href="#home">Photography</a></li>
                                    <li className="nav-item" data-filter="sports"><a className="nav-link" data-toggle="pill" href="#home">Sports</a></li>
                                </ul>
                                <hr />
                                <div className="portfolio">

                                    {this.props.children}

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* END GALLERY FILTER */}
            </Fragment>
        );
    }
}

export default PortfolioList;