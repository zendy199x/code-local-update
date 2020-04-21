import { combineReducers } from 'redux';
import tasks from './tasks';
import isDisplayForm from './isDisplayForm';
import itemEditing from './itemEditing';
import filterTable from './filterTable';
import search from './search';
import sort from './sort';

const myReducer = combineReducers({
    tasks, // tasks : tasks,
    isDisplayForm, // isDisplayForm : isDisplayForm
    itemEditing, // itemEditing : itemEditing
    filterTable,
    search,
    sort // sort : sort
});

export default myReducer;