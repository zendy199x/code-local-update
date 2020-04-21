import React, { Component, Fragment } from 'react';
import {Link} from 'react-router-dom';

class Portfolio extends Component {
    render() {

        let { item } = this.props;

        return (
            <Fragment>
                <div className={item.class}>
                    <img src={item.src} alt={item.name}/>
                    <div className="portfolio__meta">
                        <h6><Link to={`/portfolio/${item.name}`}>{item.name}</Link></h6>
                        <div className="portfolio__cats">
                            <a href="#1">Fashion</a> / <a href="#1">Web design</a>
                        </div>
                        <div className="portfolio__icons">
                            <a href="#1"><i className="fas fa-link" /></a>
                            <a href="#1"><i className="far fa-heart" /></a>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Portfolio;