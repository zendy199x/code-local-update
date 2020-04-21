import * as types from './../constants/ActionType';

let defaultState = [
	{to: '/', name: 'Home'},	// HomePage
	// ArtistPage
	// AlbumPage
];

const breadcrumb = (state = defaultState, action) => {
	let {to , name} = action;
	switch(action.type){

		case types.GO_HOME:
			state =  [{to: '/', name: 'Home'}];
			return [...state];

		case types.GO_ARTIST:
			state[1] = {to , name};
			if(state.length > 2) state.splice(-1,1);

			return [...state];
			
		case types.GO_ALBUM:
			state[2] = {to , name};
			return [...state];

		default:
			return state;
	}
}

export default breadcrumb;