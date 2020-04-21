const defaultState = {orderBy: 'level', orderDir: 'desc'} ;

const sort = (state = defaultState, action) => {
	let {orderBy, orderDir} = action;
	switch(action.type){
		case 'SORT_ITEM':
			return {orderBy, orderDir};
		default:
			return state;
	}
	
}

export default sort;