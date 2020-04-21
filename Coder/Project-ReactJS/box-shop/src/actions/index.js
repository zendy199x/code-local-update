import * as types from '../constants/ActionTypes';

import callAPI from '../services/callAPI';

export const actFetchProductsRequest = () => {
    return dispatch => {
        return callAPI("products", 'GET', null).then(res => {
            dispatch(actFetchProducts(res.data));
        });
    }
}

export const actFetchProducts = products => {
    return {
        type: types.FETCH_PRODUCTS,
        products
    }
}


export const actAddToCart = (product, quantity) => {
    return {
        type: types.ADD_TO_CART,
        product,
        quantity
    }
}

export const actDeleteCart = (id) => {
    return {
        type: types.DELETE_CART,
        id
    }
}

export const actUpdateCart = (id, quantity) => {
    return {
        type: types.UPDATE_CART,
        id,
        quantity
    }
}

export const actMessage = message => {
    return {
        type: types.CHANGE_MESSAGE,
        message
    }
}



