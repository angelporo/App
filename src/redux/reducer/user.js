import {Map, fromJS} from 'immutable';
import user from '../state/userState'; // 首页


// type
const UPDATE_MYGOODS = "UPDATE_MYGOODS";
const UPGRADE_PERSON = 'UPGRADE_PERSON';

/**
 * 更新用户购物车
 * Param: { newMyGoods: Object }
 * Return: {undefined}
 **/
export function updateMyShoppingCarList ( myGoods ) {
  return {
    type: UPDATE_MYGOODS,
    newMyGoods: myGoods
  };
};

/**
 * 更新个人中心页面信息
 * Param: { data: Object }
 * Return: {undefined}
 **/
export function refetchingPersonData ( data ) {
  return {
    type: UPGRADE_PERSON,
    userData: data
  };
};

/**
 * 个人中心reducer
 * Param: param
 * Return: { new state }
 **/
export default function (state = user, action) {
  switch (action.type) {
  case UPDATE_MYGOODS:
    return state.set('myShoppingCars', action.newMyGoods);
  case UPGRADE_PERSON:
    return state;
  default:
    return state;
  }
}
