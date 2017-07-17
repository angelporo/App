import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import appReducer from '../reducer/appReducer';

let store = createStore(
  appReducer,
  applyMiddleware(
    thunkMiddleware
  ));

export default store;
