/**
 * 购物车组件
 * Param:  param
 * Return: {undefined}
 **/
import {
  View,
  Text,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  ListView,
  FlatList,
  RefreshControl,
} from 'react-native';
import React, { Component } from 'react';
import styleConfig, { globalStyle } from '../config/config-styles';
import EStyleSheet from 'react-native-extended-stylesheet';
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchBar, ViewTouchTitleBar } from './TouchBar';
import Alert from '../modules/Alert';
import { Vadio } from './SwitchBar';
import { SwiperShoppingCarItem } from './HomeListItem';
import { shoppingCar } from '../redux/state/shoppingCarState';

export default class ShoppCar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAllChecked: false,
      goodsSourceData: shoppingCar.toJS().myShoppingCars,
      checkeds: [],
      isFetch: false,
      allPrice: 1232,
      page: 1,
      isShowAlert: false,
      surrentIndex: null // 用户操作的数据索引
    };
  }

  changelAllCheckBox () {
    const goodsData = this.props.goodsSourceData;
    const newGoodsSourceData = goodsData.map( (n, i) => {
      n.isChecked = !this.state.isAllChecked;
      return n;
    } );
    const { updateMyShoppingCarList } = this.props;
    updateMyShoppingCarList( newGoodsSourceData);
    this.setState({
      isAllChecked: !this.state.isAllChecked,
      checkeds: this.getCheckeds(newGoodsSourceData)
    });
  }

  /**
   * 获取选中的商品
   * Param:  param
   * Return: { Array }
   **/
  getCheckeds( SourceData ) {
    return SourceData.filter( n => { return (n.isChecked == true) }); //获取全部选中商品
  }

  changeGoodsItemCheckbox(item, index) {
    // 点击单个商品
    let newGoodsSourceData = this.props.goodsSourceData.map( (n, i) => {
        if (index == i) {
          n.isChecked = !n.isChecked;
        }
      return n;
    }); // 选中或取消单个商品修改后的所有商品
    const isAllChecked = () => this.props.goodsSourceData.every( n => { return n.isChecked == true}); // 是否全选状态
    const { updateMyShoppingCarList } = this.props;
        updateMyShoppingCarList( newGoodsSourceData);
    this.setState({
      isAllChecked: isAllChecked(),
      checkeds: this.getCheckeds(newGoodsSourceData)
    });
    //使用全部选中的商品来拿服务器计算好的总数也可以又前端来计算.
  }
  deleteItemByArray(index, arr) {
    const newArr = arr.slice(0, index).concat(arr.slice(index + 1, arr.length));
    return newArr;
  }

  handleDeleteItem () {
    // 删除单个商品
    let newGoodsSourceData = this.deleteItemByArray(this.state.surrentIndex, this.props.goodsSourceData);
    const { updateMyShoppingCarList } = this.props;
    updateMyShoppingCarList( newGoodsSourceData);
    this.setState({
      isShowAlert: !this.state.isShowAlert,
      checkeds: this.getCheckeds(newGoodsSourceData)
    });
  }
  handleCountAddButton (item, index) {
    // 点击增加数量操作
    const isAllChecked = () => this.props.goodsSourceData.every( n => { return n.isChecked == true}); // 是否全选状态
    const newGoodsSourceData = this.props.goodsSourceData.map((n, i) => {
        if (index == i) {
          n.buyNum = (parseInt(n.buyNum) + 1) + '';
          n.isChecked = true;
        }
      return n;
    });
    const { updateMyShoppingCarList } = this.props;
    updateMyShoppingCarList( newGoodsSourceData);
    this.setState({
      isAllChecked: isAllChecked(),
      checkeds:this.getCheckeds(newGoodsSourceData)
    });
    // 修改购买数量后请求后端改变应付金额
  }

  handleCountReducButton (item, index) {
    // 点击减少数量操作
    const isAllChecked = () => this.props.goodsSourceData.every( n => { return n.isChecked == true}); // 是否全选状态
    const newGoodsSourceData =this.props.goodsSourceData.map((n, i) => {
        if (index == i) {
          n.buyNum = (parseInt(n.buyNum) - 1) + '';
          n.isChecked = true;
        }
      return n;
    });
    const { updateMyShoppingCarList } = this.props;
    updateMyShoppingCarList( newGoodsSourceData );
    this.setState({
      isAllChecked: isAllChecked(),
      checkeds:this.getCheckeds(newGoodsSourceData)
    });
  }
  onChangeItemValue (value, index) {
    const isAllChecked = () => this.props.goodsSourceData.every( n => { return n.isChecked == true}); // 是否全选状态
    const newGoodsSourceData =this.props.goodsSourceData.map((n, i) => {
      if (index == i) {
        n.buyNum = value || '1';
        n.isChecked = true;
      }
      return n;
    });
    const { updateMyShoppingCarList } = this.props;
    updateMyShoppingCarList( newGoodsSourceData );
    this.setState({
      isAllChecked: isAllChecked(),
      checkeds:this.getCheckeds(newGoodsSourceData)
    });
  }
  render () {
    console.log('选中要结算的商品', this.state.checkeds);
    console.log('商品总数', this.props.goodsSourceData.length);
    return (
      <View style={styles.shoppingCar}>
        <Alert
          isShow={ this.state.isShowAlert}
          titleDescription="是否确定删除该商品"
          Left={<Text style={{color: styleConfig.$globalColorPro}}>取消</Text>}
          Right={<Text style={{}}>确定</Text>}
          onPressLeft={ () => this.setState({isShowAlert: !this.state.isShowAlert})}
          onPressRight={ this.handleDeleteItem.bind(this)}
          />
        <FlatList
          data={this.props.goodsSourceData}
          renderItem={ ({item, index}) => {
            return (
              <SwiperShoppingCarItem
                key={index}
                onChange={ (value) => this.onChangeItemValue.bind(this)(value, index)}
                onPressAddCounter={() => this.handleCountAddButton.bind(this)(item, index)}
                onPressReduceCounter={() => this.handleCountReducButton.bind(this)(item, index)}
                changeCheckBox={() => this.changeGoodsItemCheckbox.bind(this)(item, index) }
                itemData={item}
                onPressDelete={ () => this.setState({ isShowAlert: !this.state.isShowAlert,
                                                     surrentIndex: index
                })}
                />
            );
          }}
          />
        <View style={[styles.shoppingFooter ]}>
          <ShoppingCarFooter
      onPressAllCheckbox={ () => this.changelAllCheckBox.bind(this)()}
            isAllChecked={this.state.isAllChecked}
            allPrice={ this.state.allPrice }
            />
        </View>
     </View>
    )
  }
}

export  function ShoppingCarFooter ({
  isAllChecked,
  allPrice,
  onPressAllCheckbox
}) {
  return (
    <View style={styles.footer}>
      <View style={ styles.footerBox}>
        <View style={styles.footer}>
          <Vadio checked={ isAllChecked } changeValue={ onPressAllCheckbox } />
            <View style={[globalStyle.mld5]}>
              <Text style={[globalStyle.fzd8]}>全选</Text>
            </View>
        </View>
        <View>
          <View>
            <Text style={[globalStyle.fzd8, globalStyle.tc]}>合计:<Text style={[globalStyle.cp]}>{`${allPrice}`}</Text></Text>
            <Text style={[globalStyle.fzd8, {marginTop: 5}]}>不含运费及优惠</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity
        style={styles.clearingButtonBox}>
        <Text style={[globalStyle.cw, styles.clearingButton]}>去接算</Text>
      </TouchableOpacity>
    </View>
  )
}

let styles = EStyleSheet.create({
  shoppingFooter: {
    backgroundColor: '$globalWhite',
    width: '100%',
    position: 'absolute',
    left: 0,
    bottom: 0,
    borderColor: '$globalBorder',
    borderBottomWidth: 1,
    borderStyle: 'solid',
  },
  footerBox: {
    paddingLeft: '$globalWhiteSpace',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    width: '70%',
    paddingRight: '1.5rem'
  },
  clearingButtonBox: {
    width: '30%',
    backgroundColor: '$globalColorPro',
    alignItems: 'center',
    justifyContent: 'center',
    height: '3rem',
  },
  clearingButton: {
  },
  shoppingCar: {
    position: 'relative',
    height: '100%',
    backgroundColor: styleConfig.$globalBgc,
    paddingBottom: '3rem',
  },
  footer: {
    height: '3rem',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  }
})
