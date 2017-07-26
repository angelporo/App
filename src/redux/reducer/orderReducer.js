import { Map, fromJS } from 'immutable';
import  user from '../state/userState'; // 首页

// type
const DELETE_ORDER = 'DELETE_ORDER';

/**
 * 删除一个订单
 * Param:  { data : Object}
 * Return: {undefined}
 **/
export function handleUpGradeHomeAllData (id) {
  return {
    type:  DELETE_ORDER,
    data
  }
}

/**
 * 订单页面reducer
 * Param: param
 * Return: { new state }
 **/
export default function (state =  state, action) {
  switch ( action.type) {
  case  DELETE_ORDER:
    return  state;
  default:
    return state;
  }

}
