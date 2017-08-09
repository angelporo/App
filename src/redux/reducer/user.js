import {Map, fromJS} from 'immutable';
import user from '../state/userState'; // 首页


// type
const UPDATE_MYGOODS = "UPDATE_MYGOODS"; // 更新用户购物车
const UPGRADE_PERSON = 'UPGRADE_PERSON'; //更新用户个人中心页面整体数据
const DELETE_ADDRESSITEM = 'DELETE_ADDRESSITEM'; //删除用户收货地址

/**
 * 更新用户购物车
 * Param: { newMyGoods: Object }
 * Return: {undefined}
 **/
export  let updateMyShoppingCarList = ( myGoods ) => {
  return {
    type: UPDATE_MYGOODS,
    newMyGoods: myGoods
  };
};

/**
 * 删除用户收货地址
 * Param:  param
 * Return: {undefined}
 **/
export let deleteUserAddressItem  = ({newAddressSourceData}) => {
  return {
    type: DELETE_ADDRESSITEM,
    newAddressSourceData // 删除后的新用户收货地址
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
  case DELETE_ADDRESSITEM:
    return state.set('userAddress', action.newAddressSourceData);
  default:
    return state;
  }
}



let shakerSort = array => {
  let swap = (array, i, j) => {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  };
  let length = array.length,
      left = 0,
      right = length - 1,
      lastSeappedLeft = left,
      lastSwappedRight = right,
      i,
      j;

  while(left < right) {
    // 从左到右
    lastSwappedRight = 0;
    for( i = left; i < right; i++) {
      if(array[i] > array[i + 1]) {
        swap(array, i, i+1);
        lastSwappedRight = i;
      }
    }
    right = lastSwappedRight;
    lastSeappedLeft = length -1;
    for(j = right; left < j; j--) {
      if(array[j - 1] > array[j]) {
        swap(array, j - 1, j);
        lastSeappedLeft = j;
      }
    }
    left = lastSeappedLeft;
  }
}
