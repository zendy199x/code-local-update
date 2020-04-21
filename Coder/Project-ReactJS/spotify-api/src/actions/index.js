import * as types from './../constants/ActionType';

export const actSearch = (query) => {
	return {
		type : types.SEARCH_ARTIST,
		query
	}
}

export const actChangeQuery = (query) => {
	return {
		type : types.CHANGE_QUERY,
		query
	}
}

export const actGoHome = () => {
	return {
		type : types.GO_HOME
	}
}

export const actGoArtist = (name, to) => {
	return {
		type : types.GO_ARTIST,
		name, 
		to
	}
}

export const actGoAlbum = (name, to) => {
	return {
		type : types.GO_ALBUM,
		name, 
		to
	}
}

