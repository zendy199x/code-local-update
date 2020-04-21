import React, { Component, Fragment } from 'react';

import HeaderCartContainer from '../../containers/HeaderCartContainer';
import PortfolioList from '../../components/PortfolioList';
import Portfolio from '../../components/Portfolio';
import Footer from '../../components/Footer';

class PortfolioPage extends Component {
    render() {
        let { match } = this.props;

        return (
            <Fragment>
                
                <HeaderCartContainer />

                <PortfolioList>

                    {this.showportItems(portItems)}

                </PortfolioList>

                <Footer />

            </Fragment>
        );
    }

    showportItems = (portItems) => {
        let result = null;
        if (portItems.length > 0) {
            result = portItems.map((item, index) => {
                return <Portfolio item={item} key={index} index={index}></Portfolio>
            });
        }
        return result;
    }

}

const portItems = [
    {
        id: 1,
        src: "/img/blog-1-380x300.jpg",
        class: "all design sports",
        name: "blog-1"
    },
    {
        id: 2,
        src: "/img/blog-2-380x300.jpg",
        class: "all fashion sports",
        name: "blog-2"
    },
    {
        id: 3,
        src: "/img/blog-3-380x300.jpg",
        class: "all design graphics",
        name: "blog-3"
    },
    {
        id: 4,
        src: "/img/blog-4-380x300.jpg",
        class: "all design graphics",
        name: "blog-6"
    },
    {
        id: 5,
        src: "/img/blog-5-380x300.jpg",
        class: "all fashion sports",
        name: "blog-5"
    },
    {
        id: 6,
        src: "/img/blog-6-380x300.jpg",
        class: "all design sports",
        name: "blog-6"
    },
    {
        id: 7,
        src: "/img/blog-7-380x300.jpg",
        class: "all fashion graphics",
        name: "blog-7"
    },
    {
        id: 8,
        src: "/img/blog-8-380x300.jpg",
        class: "all graphics photography",
        name: "blog-8"
    },
    {
        id: 9,
        src: "/img/blog-1-380x300.jpg",
        class: "all fashion photography",
        name: "blog-9"
    },

];

export default PortfolioPage;