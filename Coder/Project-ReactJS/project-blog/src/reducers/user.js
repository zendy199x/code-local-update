import * as types from './../constants/ActionType';

let defaultState = {
	isLogin: true,
	username: "admin"
};

const checkLogin = (username, password) => {
	if(username === "admin" && password === "123"){
		return true;
	}
	return false;
}

const user = (state = defaultState, action) => {

	switch(action.type){

		case types.USER_LOGIN:
		
			let {username, password} = action;
			if(checkLogin(username, password)) {
				state.username = username;
				state.isLogin = true;
			}
			return {...state};

		case types.USER_LOGOUT:

			state.username = null;
			state.isLogin = false;
			return {...state};

		default:
			return state;
	}
}

export default user;