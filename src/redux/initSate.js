import { Map, fromJS, List, Seq } from 'immutable';
import home from './state/homeState'; // 首页
import user from './state/userState';// 用户所有信息
import goodsDetailDefaultData from './state/goodsDetailState';// 商品详情
import shoppingCar from './state/shoppingCarState'; //购物车
import pagePublick from './state/pagePublic'; //页面中共享状态, 必要情况下使用

const list = [{
  uri: 'https://m.360buyimg.com/mobilecms/s220x220_jfs/t2734/303/1629213587/280241/b28eb195/574519f3Nbc149af8.jpg!q70.jpg',
  text: 'haha',

  id: '1'
}, {
  uri: 'https://m.360buyimg.com/mobilecms/s220x220_jfs/t2734/303/1629213587/280241/b28eb195/574519f3Nbc149af8.jpg!q70.jpg',
  text: 'haha',
  id: '1'
}, {
  uri: 'https://m.360buyimg.com/mobilecms/s220x220_jfs/t2734/303/1629213587/280241/b28eb195/574519f3Nbc149af8.jpg!q70.jpg',
  text: 'haha',
  id: '1'
}, {
  uri: 'https://m.360buyimg.com/mobilecms/s220x220_jfs/t2734/303/1629213587/280241/b28eb195/574519f3Nbc149af8.jpg!q70.jpg',
  text: 'haha',
  id: '1'
}];

const testList = fromJS({list: list});

const initState = user.mergeDeep(
        { goodsDetail : goodsDetailDefaultData},
        {home: home}
      )

export const testData = testList;
export default initState;
