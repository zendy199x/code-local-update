import { combineReducers} from 'redux';
import { sampleReducer, SampleReducerState } from './sampleReducer';

export interface State {
  sampleReducer: SampleReducerState;
};

export const reducers = combineReducers<State>({
  sampleReducer,
});