import { createStore } from 'redux';
import appReducers from './reducers/index';

const store = createStore(
	appReducers, /* preloadedState, */
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
  // console.log(store.getState())
});

export default store;


