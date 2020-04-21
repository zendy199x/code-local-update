import { combineReducers } from 'redux';

import products from './products';
import cart from './cart';

const reducer = combineReducers({
    products,
    cart
});

export default reducer;