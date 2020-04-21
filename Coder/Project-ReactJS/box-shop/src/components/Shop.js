import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

class Shop extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentPage: 1,
            productsPerPage: 12
        }
    }

    handleClick = event => {
        this.setState({
            currentPage: +event.target.id
        });
    }

    renderProduct = (products) => {
        return products;
    }

    renderPageNumbers = (pageNumbers) => {
        let result = null;
        let active = '';
        if (pageNumbers !== undefined) {
            result = pageNumbers.map(number => {
                this.state.currentPage === number ? active = "active" : active = '';
                return <li className="page-item" key={number}>
                            <Link to='/shop' className={`page-link text-dark ${active}`} id={number} onClick={this.handleClick}>{number}</Link>
                        </li>
            })
        }
        return result;
    }

    render() {
        console.log(this.state)
        const products = this.props.children;

        const { currentPage, productsPerPage } = this.state;

        const pageNumbers = []

        // Logic for displaying todos
        if (products !== null) {
            const indexOfLastProduct = currentPage * productsPerPage;
            const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
            var currentProduct = products.slice(indexOfFirstProduct, indexOfLastProduct);

            // Logic for displaying page numbers
            for (let i = 1; i <= Math.ceil(products.length / productsPerPage); i++) {
                pageNumbers.push(i);
            }
        }

        return (
            <Fragment>

                {/* BEGIN SHOP */}
                <section className="shop pt-5">
                    <div className="container">
                        <div className="row sort__filter align-items-center">
                            <div className="col-md-6">
                                <div className="sort">
                                    <a href="#1"><i className="fas fa-th" /></a>
                                    <a href="#1"><i className="fas fa-th-list" /></a>
                                    <select className="sort__select">
                                        <option value="newness">Sort by newness</option>
                                        <option value="popularity">Sort by popularity</option>
                                        <option value="rating">Sort by avarage rating</option>
                                        <option value="low">Sort by price low to high</option>
                                        <option value="high">Sort by price high to low</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-6 text-right">
                                <div className="filter">
                                    <span className="pr-4 showing">Showing 1–16 of 45 results</span>
                                    <span className="pl-4 filter__bar"><a href="#1">Filter <i className="fas fa-bars" /></a></span>
                                </div>
                            </div>
                        </div>
                        <div className="row shop__items">

                            {this.renderProduct(currentProduct)}

                        </div>
                    </div>
                </section>
                {/* END SHOP */}

                {/* BEGIN PAGINATION */}
                <section className="pagination">
                    <ul className="pagination mx-auto py-5">
                        {this.renderPageNumbers(pageNumbers)}
                    </ul>
                </section>
                {/* END PAGINATION */}

            </Fragment>
        );
    }
}

export default Shop;