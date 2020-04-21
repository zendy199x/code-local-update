import * as types from './../constants/ActionTypes';

const defaultState = '';

const search = (state = defaultState, action) => {
	switch(action.type){
		case types.CHANGE_SEARCH:
			return action.search;
		default:
			return state;
	}
}

export default search;