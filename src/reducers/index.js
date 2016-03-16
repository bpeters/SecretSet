import { combineReducers } from 'redux';
import user from '../reducers/user';
import app from '../reducers/app';

const rootReducer = combineReducers({
  user,
  app,
});

export default rootReducer;