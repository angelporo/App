import { Map, fromJS, List, Seq } from 'immutable';
import shoppingCar from './shoppingCarState';
export default fromJS({
  userCookie: '1234323432',
  userName: 'liyuan',
  vipGrade: '普通会员',
  id: '24243',
  birthday: 1500015750021,
  mobile: '15000000000',
  address: ['地址一', '地址二'],
  defaultAddress: '陕西省太原市小店区太原高新技术残页开发区晋阳街长治路口, 天骄科技园8层',
  avatar: "https://m.360buyimg.com/n12/jfs/t2158/10/2523294688/365362/c6ad6e25/570a6c49N8e2b6728.jpg!q70.jpg",
  // 资产详情
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
  }],
  myShoppingCars: [{
    goodsName: '金龙鱼 食用油 花生浓香食用调和油5L',
    price: '320',
    stock: '100',  //库充,  每次修改数量后需要更新后端的数据
    buyNum: '12',
        id: '234',
    attr:'颜色: 优雅红 重量: 12g',
    isChecked: false,
    goodsUri: 'https://m.360buyimg.com/n12/jfs/t3034/115/824321925/193914/39327879/57b46343N23b7df02.jpg!q70.jpg',
  }, {
    goodsName: '金龙鱼 食用油 花生浓香食用调和油5L',
    price: '320',
    stock: '100',  //库充,  每次修改数量后需要更新后端的数据
    buyNum: '12',
        id: '234',
    attr:'颜色: 优雅红 重量: 12g',
    isChecked: false,
    goodsUri: 'https://m.360buyimg.com/n12/jfs/t3034/115/824321925/193914/39327879/57b46343N23b7df02.jpg!q70.jpg',
  }, {
    goodsName: '金龙鱼 食用油 花生浓香食用调和油5L',
    price: '320',
    stock: '100',  //库充,  每次修改数量后需要更新后端的数据
    buyNum: '12',
        id: '234',
    attr:'颜色: 优雅红 重量: 12g',
    isChecked: false,
    goodsUri: 'https://m.360buyimg.com/n12/jfs/t3034/115/824321925/193914/39327879/57b46343N23b7df02.jpg!q70.jpg',
  }, {
    goodsName: '金龙鱼 食用油 花生浓香食用调和油5L',
    price: '320',
    stock: '100',  //库充,  每次修改数量后需要更新后端的数据
    buyNum: '12',
        id: '234',
    attr:'颜色: 优雅红 重量: 12g',
    isChecked: false,
    goodsUri: 'https://m.360buyimg.com/n12/jfs/t3034/115/824321925/193914/39327879/57b46343N23b7df02.jpg!q70.jpg',
  }]
})
