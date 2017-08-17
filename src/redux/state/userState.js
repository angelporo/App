import { Map, fromJS, List, Seq } from 'immutable';
import shoppingCar from './shoppingCarState';
export default fromJS({
  userCookie: 123433,
  userName: 'liyuan',
  vipGrade: '普通会员',
  id: '24243',
  birthday: 1500015750021,
  mobile: '15000000000',
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
  }],
  userOrder: [{
    id: 123,
    type: 1,
    storeID: 323,
    typeStatus: '商家已发货',
    storeName: 'Armani阿玛尼',
    state: '等待买家付款',
    goodsLogo: 'https://m.360buyimg.com/mobilecms/jfs/t5701/157/596702822/37671/f662d2ce/5920448fN135432ac.jpg!q70.jpg',
    goodsName: '【租赁】出租 9成新 Apple iPhone 6 16G 全网通 12月租期每月租金',
    goodsArguments: '颜色分类: 红色',
    price: '$103',
    originalPrice: '$203',
    buyNum: '1',
    buyScription: '共意见商品 合计: 999(含运费$20)',
    storeContact: '1245534354', // 商家联系方式
    orderUserInfo: {
      name: '李渊',
      mobile: '1830340384',
      address: '山西省太原市小店区天骄科技园8层'
    },
    orderInfo: {
      orderNum: '1245124645234324465',// 订单编号
      payNum: '233653452345456423', // 第三方付款编号
      createTime: '1500694362919'
    },
    orderAddress: {
      id: 123,
      province: '陕西省',
      city: '太原市',
      district: '小店区',
      detail: '晋阳街长治路口,  天骄科技园8层'
    }
  }, {
    id: 2345,
    type: 3,
    storeID: 323,
    typeStatus: '商家已发货',
    storeName: 'Armani阿玛尼',
    state: '卖家已发货',
    goodsLogo: 'https://m.360buyimg.com/mobilecms/jfs/t5701/157/596702822/37671/f662d2ce/5920448fN135432ac.jpg!q70.jpg',
    goodsName: '【租赁】出租 9成新 Apple iPhone 6 16G 全网通 12月租期每月租金',
    goodsArguments: '颜色分类: 红色',
    price: '$103',
    originalPrice: '$203',
    buyNum: '1',
    buyScription: '共意见商品 合计: 999(含运费$20)',
    storeContact: '1245534354', // 商家联系方式
    orderUserInfo: {
      name: '李渊',
      mobile: '1830340384',
      address: '山西省太原市小店区天骄科技园8层'
    },
    orderInfo: {
      orderNum: '1245124645234324465',// 订单编号
      payNum: '233653452345456423', // 第三方付款编号
      createTime: '1500694362919'
    },
    orderAddress: {
      id: 123,
      province: '陕西省',
      city: '太原市',
      district: '小店区',
      detail: '晋阳街长治路口,  天骄科技园8层'
    }
  }, {
    id:3534,
    type: 2,
    storeID: 323,
    storeName: 'Armani阿玛尼',
    typeStatus: '商家已发货',
    state: '延长发货',
    goodsLogo: 'https://m.360buyimg.com/mobilecms/jfs/t5701/157/596702822/37671/f662d2ce/5920448fN135432ac.jpg!q70.jpg',
    goodsName: '【租赁】出租 9成新 Apple iPhone 6 16G 全网通 12月租期每月租金',
    goodsArguments: '颜色分类: 红色',
    price: '$103',
    originalPrice: '$203',
    buyNum: '1',
    buyScription: '共意见商品 合计: 999(含运费$20)',
    storeContact: '1245534354', // 商家联系方式
    orderUserInfo: {
      name: '李渊',
      mobile: '1830340384',
      address: '山西省太原市小店区天骄科技园8层'
    },
    orderInfo: {
      orderNum: '1245124645234324465',// 订单编号
      payNum: '233653452345456423', // 第三方付款编号
      createTime: '1500694362919'
    },
    orderAddress: {
      id: 123,
      province: '陕西省',
      city: '太原市',
      district: '小店区',
      detail: '晋阳街长治路口,  天骄科技园8层'
    }
  }, {
    id: 2334656,
    type: 2,
    storeName: 'Armani阿玛尼',
    storeID: 323,
    typeStatus: '商家已发货',
    state: '延长发货',
    goodsLogo: 'https://m.360buyimg.com/mobilecms/jfs/t5701/157/596702822/37671/f662d2ce/5920448fN135432ac.jpg!q70.jpg',
    goodsName: '【租赁】出租 9成新 Apple iPhone 6 16G 全网通 12月租期每月租金',
    goodsArguments: '颜色分类: 红色',
    price: '$103',
    originalPrice: '$203',
    buyNum: '1',
    buyScription: '共意见商品 合计: 999(含运费$20)',
    storeContact: '1245534354', // 商家联系方式
    orderUserInfo: {
      name: '李渊',
      mobile: '1830340384',
      address: '山西省太原市小店区天骄科技园8层'
    },
    orderInfo: {
      orderNum: '1245124645234324465',// 订单编号
      payNum: '233653452345456423', // 第三方付款编号
      createTime: '1500694362919' //
    },
    orderAddress: {
      id: 123,
      province: '陕西省',
      city: '太原市',
      district: '小店区',
      detail: '晋阳街长治路口,  天骄科技园8层'
    }
  }, {
    id: 46566,
    type: 4,
    storeName: 'Armani阿玛尼',
    typeStatus: '商家已发货',
    state: '延长发货',
    storeID: 323,
    goodsLogo: 'https://m.360buyimg.com/mobilecms/jfs/t5701/157/596702822/37671/f662d2ce/5920448fN135432ac.jpg!q70.jpg',
    goodsName: '【租赁】出租 9成新 Apple iPhone 6 16G 全网通 12月租期每月租金',
    goodsArguments: '颜色分类: 红色',
    price: '$103',
    originalPrice: '$203',
    buyNum: '1',
    buyScription: '共意见商品 合计: 999(含运费$20)',
    storeContact: '1245534354', // 商家联系方式
    orderUserInfo: {
      name: '李渊',
      mobile: '1830340384',
      address: '山西省太原市小店区天骄科技园8层'
    },
    orderInfo: {
      orderNum: '1245124645234324465',// 订单编号
      payNum: '233653452345456423', // 第三方付款编号
      createTime: '1500694362919'
    },
    orderAddress: {
      id: 123,
      province: '陕西省',
      city: '太原市',
      district: '小店区',
      detail: '晋阳街长治路口,  天骄科技园8层'
    }
  }],
  userAddress: [{
    id: 123,
    name: '石磊',
    mobile: '13191070518',
    province: '山西省',// 省
    city: '太原市',// 市
    district: '小店区',// 区
    addressDetail: '晋阳街长治路口, 天骄科技园',// 用户填写详细地址
    address: '山西省太原市小店区, 景阳街长治路口, 天骄科技园8层, ',
    type: 0 // type ? 默认 : 不是默认
  }, {
    id: 4534,
    name: '刘涛',
    mobile: '13191070518',
    province: '山西省',// 省
    city: '太原市',// 市
    district: '小店区',// 区
    addressDetail: '晋阳街长治路口, 天骄科技园',// 用户填写详细地址
    address: '山西省太原市小店区, 景阳街长治路口, 天骄科技园8层, ',
    type: 1
  }, {
    id: 345345,
    name: '田恺',
    mobile: '13191070518',
    province: '山西省',// 省
    city: '太原市',// 市
    district: '小店区',// 区
    addressDetail: '晋阳街长治路口, 天骄科技园',// 用户填写详细地址
    address: '山西省太原市小店区, 景阳街长治路口, 天骄科技园8层, ',
    type: 0
  }, {
    id: 546546,
    name: '王宇飞',
    mobile: '13191070518',
    province: '山西省',// 省
    city: '太原市',// 市
    district: '小店区',// 区
    addressDetail: '晋阳街长治路口, 天骄科技园',// 用户填写详细地址
    address: '山西省太原市小店区, 景阳街长治路口, 天骄科技园8层, ',
    type: 0
  }]
})
