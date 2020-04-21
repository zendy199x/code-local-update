import React, { Component } from 'react';
import Title from './Title';
import ProductsContainer from './../containers/ProductsContainer';
import Cart from './Cart';
class App extends Component {
    render() {
        return (
            <div>
                <Title />
                <div className="row">
                	<ProductsContainer />
                	<Cart />
                </div>
            </div>
        );
    }
}

export default App;

