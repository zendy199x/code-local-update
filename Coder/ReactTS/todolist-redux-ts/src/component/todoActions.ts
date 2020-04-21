import { ActionType } from 'typesafe-actions';
import {todoActions} from './actions';

type TodoActions = ActionType<typeof todoActions>;
