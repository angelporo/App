import {Map, fromJS} from 'immutable';
import home from '../state/homeState'; // 首页


// type
const UPGRADE_ALLDATA = 'UPGRADE_ALLDATA';


/**
 * 更新页面所有数据
 * Param:  { data : Object}
 * Return: {undefined}
 **/
export function handleUpGradeHomeAllData (data) {
  return {
    type: UPGRADE_ALLDATA,
    data
  };
}

/**
 * 首页reducer
 * Param: param
 * Return: { new state }
 **/
export default function (state = home, action) {
  switch (action.type) {
  case UPGRADE_ALLDATA:
    return state;
  default:
    return state;
  }
}
