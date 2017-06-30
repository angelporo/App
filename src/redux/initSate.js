import { Map, fromJS, List, Seq } from 'immutable';

export const user = fromJS({
  userName: 'liyuan',
  vipGrade: '普通会员',
  id: '24243',
  userCookie: '1234323432',
  avatar: "https://m.360buyimg.com/n12/jfs/t2158/10/2523294688/365362/c6ad6e25/570a6c49N8e2b6728.jpg!q70.jpg",
  asset: [{
    className: '账户余额',
    num: '91010'
  }, {
    className: '积分',
    num: '233'
  }, {
    className: '礼包',
    num: '3423'
  }, {
    className: '电子卷',
    num: '34222'
  }, {
    className: '财富基金',
    num: '5443'
  }]
})

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

const goodsDetailDefaultData = fromJS({
  goodsName: '七匹狼 纯色休闲T恤',
  price: '139.8',
  discount: '8.5', //折扣
  sales: '23023', // 销量
  storeInfo: {
    allGoods: '123312',//全部商品
    fansNum: '23123',// 关注人数
    storeLogo: 'https://m.360buyimg.com/mobilecms/s220x220_jfs/t2734/303/1629213587/280241/b28eb195/574519f3Nbc149af8.jpg!q70.jpg', //商家blogo
    type: 12, // 钻石类型
  },
  goodsDetailImage: ['https://m.360buyimg.com/mobilecms/s220x220_jfs/t2734/303/1629213587/280241/b28eb195/574519f3Nbc149af8.jpg!q70.jpg', 'https://m.360buyimg.com/mobilecms/s220x220_jfs/t2734/303/1629213587/280241/b28eb195/574519f3Nbc149af8.jpg!q70.jpg'], //商品详情图片
  isColliction: null,
})

const goodsDetail = goodsDetailDefaultData.toJS();

const testList = fromJS({list: list});

const initState = user.mergeDeep( testList,
                                  { goodsDetail : goodsDetail }
                                );

export const testData = testList.toJS().list;

console.log(initState);

export default initState.toJS();
