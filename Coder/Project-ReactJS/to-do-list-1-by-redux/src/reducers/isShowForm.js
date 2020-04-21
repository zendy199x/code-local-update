import * as types from './../constants/ActionTypes.js';
const defaultState = false;

const isShowForm = (state = defaultState, action) => {
	switch(action.type){
		case types.CLOSE_FORM:
			return false;
		case types.OPEN_FORM:
			return true;
		case types.TOGGLE_FORM:
			return !state;
		default:
			return state;
	}
}

export default isShowForm;