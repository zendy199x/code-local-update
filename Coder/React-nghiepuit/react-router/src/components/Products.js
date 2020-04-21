import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import Product from './Product';

class Products extends Component {
    render() {
        var products = [
            {
                id: 1,
                slug: 'apple',
                name: 'iPhone X',
                price: 35000000
            },
            {
                id: 2,
                slug: 'apple2',
                name: 'iPhone XS Max',
                price: 40000000
            },
            {
                id: 3,
                slug: 'apple3',
                name: 'iPhone 11',
                price: 45000000
            }
        ];

        var { match } = this.props; //this.props.match
        var url = match.url;

        var result = products.map((product, index) => {
            return (
                <NavLink to={`${url}/${product.slug}`} key={index}>
                    <li className="list-group-item" >
                        { product.id } - { product.name } - { product.price }
                    </li>
                </NavLink>
            )
        })

        var {location} = this.props;
        console.log(location);

        return(
            <div className="container">
                <h1>Danh sách sản phẩm</h1>
                <div className="row">
                    <ul className="list-group">
                        { result }
                    </ul>
                </div>
                <div className="row">
                    <Route path="/products/:name" component={Product} />
                </div>
            </div>
        )
    }
}

export default Products;