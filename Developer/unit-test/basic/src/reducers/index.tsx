import { combineReducers} from 'redux';
import { myReducer, SampleReducerState } from './myReducer';

export interface State {
  sampleReducer: SampleReducerState;
};

export const reducers = combineReducers<State>({
  myReducer,
});