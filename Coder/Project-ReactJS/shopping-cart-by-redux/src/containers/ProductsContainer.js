import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {actChangeNotify, actBuyProduct} from './../actions/index'
import * as configs from './../constants/Config';

import ProductItem from './../components/ProductItem';
import ProductList from './../components/ProductList';

class ProductsContainer extends Component {

    render() {
        let {products}  = this.props;
        return (
            <ProductList>
                {this.showElementProduct(products)}
            </ProductList>
        );
    }

    showElementProduct(products){
        let xhtml  = <b>{configs.NOTI_EMPTY_PRODUCT}</b>;
        if(products.length > 0 ){
            xhtml = products.map((product, index)=> {
                return (
                    <ProductItem 
                        onBuyProduct={this.props.buyProduct}
                        onChangeNotify={this.props.changeNotify}
                        key={index} 
                        product={product} index={index} 
                    />
                );
            });
        }
        return xhtml;
    }

  
}

ProductsContainer.propTypes = {
    products: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        summary: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        canBuy: PropTypes.bool.isRequired,
    })).isRequired
}

const mapStateToProps = state => {
    return {
        products: state.products
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        buyProduct: (product, quantity) => {
            dispatch(actBuyProduct(product, quantity)) ;
        },
        changeNotify: (value) => {
            dispatch(actChangeNotify(value));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);