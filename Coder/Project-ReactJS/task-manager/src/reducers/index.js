import { combineReducers } from 'redux';
import notify from './notify';
import user from './user';

const appReducers = combineReducers({
    notify,
    user
});

export default appReducers;