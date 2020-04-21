import { combineReducers } from 'redux';
import products from './products';
import carts from './carts';
import notify from './notify';

const appReducers = combineReducers({
	products,
	notify,
	carts
	
});

export default appReducers;