import { combineReducers } from 'redux';
import toDoReducer from '../reducers';

export const rootReducer = combineReducers({
  todoState: toDoReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
