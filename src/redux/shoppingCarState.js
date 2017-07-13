import {  fromJS } from 'immutable';
export const shoppingCar = fromJS({
  myShoppingCars: [{
    goodsName: '金龙鱼 食用油 花生浓香食用调和油5L',
    price: '23',
    buyNum: "12",
    id: 99,
    attr:'颜色: 优雅红 重量: 12g',
    stock: '26',  //库充,  每次修改数量后需要更新后端的数据
    isChecked: true,
    goodsUri: "https://m.360buyimg.com/n1/jfs/t5188/51/2464810685/318542/b0000ec9/591ace77N031ea22f.jpg!q70.jpg",
  }, {
    goodsName: '金龙鱼 食用油 花生浓香食用调和油5L',
    price: '320',
    buyNum: '12',
    id: '76',
    attr:'颜色: 优雅红 重量: 12g',
    isChecked: false,
    stock: '100',  //库充,  每次修改数量后需要更新后端的数据
    goodsUri: "https://m.360buyimg.com/mobilecms/jfs/t6514/354/2038494708/25989/b2b9ca12/595b7c87N20cc2cdb.png!q70.jpg",
  }, {
    goodsName: '金龙鱼 食用油 花生浓香食用调和油5L',
    price: '320',
    buyNum: '12',
    stock: '100',  //库充,  每次修改数量后需要更新后端的数据
    id: '654',
    attr:'颜色: 优雅红 重量: 12g',
    isChecked: false,
    goodsUri: "https://m.360buyimg.com/mobilecms/jfs/t6619/170/1953358639/12389/4961c701/595a2e61Ne8dd9917.jpg!q70.jpg",
  }, {
    goodsName: '金龙鱼 食用油 花生浓香食用调和油5L',
    price: '320',
    buyNum: '12',
    stock: '100',  //库充,  每次修改数量后需要更新后端的数据
    id: '634',
    attr:'颜色: 优雅红 重量: 12g',
    isChecked: false,
    goodsUri: "https://m.360buyimg.com/n1/jfs/t3754/93/859730387/145590/72759017/5819cbc0Na5bad5e9.jpg!q70.jpg",
  }, {
    goodsName: '金龙鱼 食用油 花生浓香食用调和油5L',
    price: '320',
    buyNum: '12',
    attr:'颜色: 优雅红 重量: 12g',
    stock: '100',  //库充,  每次修改数量后需要更新后端的数据
    id: '1255',
    isChecked: false,
    goodsUri: "https://m.360buyimg.com/n1/jfs/t5275/215/967088973/27980/9d4d1959/59099770Nda33fb45.jpg!q70.jpg",
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
});
