import React, { Component } from 'react';
import {connect} from 'react-redux';

import Helpers from './../libs/Helpers';
import Validate from './../libs/Validate';

import {actUpdateProduct, actRemoveProduct, actChangeNotify} from './../actions/index';
import * as configs from './../constants/Config';

class CartItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: 0,
        };
    }

    handleChange = (event) => {
        const target = event.target;    // input selectbox
        const value  = target.type === 'checkbox' ? target.checked : target.value;
        const name   = target.name;

        this.setState({
            [name]: value
        });
    }

    handleDelete = (product) =>{
        this.props.removeProduct(product);
        this.props.changeNotify(configs.NOTI_ACT_DELETE);
    }

    handleUpdate = (product, quantity) =>{
        if(Validate.checkQuantity(+quantity) === false){
            this.props.changeNotify(configs.NOTI_GREATER_THAN_ONE);
        }else{
            this.props.updateProduct(product, +quantity);
            this.props.changeNotify(configs.NOTI_ACT_UPDATE);
        }
    }

    render() {
        let {cartItem, index} = this.props;
        let {product}         = cartItem;
        let quantity          = (this.state.value !== 0) ? this.state.value : cartItem.quantity;

        return (
            <tr>
                <th scope="row">{ index + 1 }</th>
                <td>{product.name}</td>
                <td>{Helpers.toCurrency(product.price, "$", "left")}</td>
                <td><input name="value" min={1} type="number" value={quantity} onChange={this.handleChange} /></td>
                <td>
                    {this.showSubTotal(product.price, quantity)}
                </td>
                <td>
                    <a onClick={()=>this.handleUpdate(product, quantity)} className="label label-info update-cart-item" type="button" data-product>Update</a>
                    <a onClick={()=>this.handleDelete(product)}  className="label label-danger delete-cart-item" type="button" data-product>Delete</a>
                </td>
            </tr>
        );
    }

    showSubTotal(price, quantity){
        let result = null;
        result = <strong>{Helpers.toCurrency(price * quantity, "$", "left")} </strong>
        return result
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        removeProduct: (product) => {
            dispatch(actRemoveProduct(product)) ;
        },
        updateProduct: (product, quantity) => {
            dispatch(actUpdateProduct(product, quantity)) ;
        },
        changeNotify: (value) => {
            dispatch(actChangeNotify(value));
        }
    }
}

export default connect(null, mapDispatchToProps)(CartItem);
