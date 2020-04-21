import * as types from './../constants/ActionType';
import * as configs from './../constants/Config';
import {remove } from 'lodash';

let defaultState = [];
let cartItems 	 = JSON.parse(localStorage.getItem(configs.CARTS_FROM_LOCAL_STOGARE));
defaultState 	 = (cartItems !== null && cartItems.length > 0) ? cartItems : defaultState;


let getProductPosition = (cartItems, product) => {
	let total  = cartItems.length;
	for(let i = 0; i < total; i++){
		if(cartItems[i].product.id === product.id) return i;
	}
	return -1;
}

const carts = (state = defaultState, action) => {
	let {product, quantity} = action;
	let position = -1;

	switch(action.type){
		case types.BUY_PRODUCT:
			position = getProductPosition(state, product);

			if(position > -1){ // edit
				state[position].quantity += quantity;
			}else{
				state.push({product, quantity });
			}

			localStorage.setItem(configs.CARTS_FROM_LOCAL_STOGARE, JSON.stringify(state));

			return [...state];

		case types.UPDATE_PRODUCT:
			position = getProductPosition(state, product);

			if(position > -1){ // update
				state[position].quantity = quantity;
			}

			localStorage.setItem(configs.CARTS_FROM_LOCAL_STOGARE, JSON.stringify(state));

			return [...state];

		case types.REMOVE_PRODUCT:
			remove(state, (cartItem)=> {
	            return cartItem.product.id === product.id;
	        });
	        localStorage.setItem(configs.CARTS_FROM_LOCAL_STOGARE, JSON.stringify(state));
			return [...state];

		default:
			return state;
	}
}

export default carts;