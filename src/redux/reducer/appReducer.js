import { combineReducers } from 'redux';
import { fromJS } from 'immutable';
import shoppingReducer from '../reducer/shoppingCar';
import homeReducer from '../reducer/home';
import user from '../reducer/user';

export default combineReducers({ shoppingReducer, homeReducer, user });
