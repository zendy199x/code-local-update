import { combineReducers } from 'redux';
import query from './query';
import breadcrumb from './breadcrumb';

const appReducers = combineReducers({
	query,
	breadcrumb
});

export default appReducers;