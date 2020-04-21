import * as types from './../constants/ActionTypes';

export const actCloseForm = () => {
	return {
		type : types.CLOSE_FORM
	}
}

export const actOpenForm = () => {
	return {
		type : types.OPEN_FORM
	}
}

export const actToggleForm = () => {
	return {
		type : types.TOGGLE_FORM
	}
}

export const actSubmitForm = (item) => {
	return {
		type : types.SUBMIT_FORM,
		item
	}
}

export const actSort = (orderBy, orderDir) => {
	return {
		type : types.SORT_ITEM,
		orderBy,
		orderDir
	}
}

export const actSearch = (search) => {
	return {
		type : types.CHANGE_SEARCH,
		search
	}
}

export const actDeteleItem = (id) => {
	return {
		type : types.DELETE_ITEM,
		id
	}
}

export const actSelectedItem = (item) => {
	return {
		type : types.SELECTED_ITEM,
		item
	}
}

export const actUnSelectItem = () => {
	return {
		type : types.UNSELECT_ITEM
	}
}