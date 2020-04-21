import { combineReducers } from 'redux';
import products from './products.js';
import itemEditing from './itemEditing';

const appReducers = combineReducers({
    products,
    itemEditing
});

export default appReducers;