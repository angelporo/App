import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
let appReducer = (state, action ) => {
  switch(action.type) {
  case "INIT" :
    return state.count + 1;
  }
}

let store = createStore(
  appReducer,
  applyMiddleware(
    thunkMiddleware,
    createLogger
  ));

export default store;
