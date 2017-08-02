/**
 * 用户确认订单页面组件
 * Param:  param
 * Return: { undefined }
 **/
import {
  ScrollView,
  TouchableOpacity,
  FlatList,
  ListView,
  Animated,
  TextInput,
  Switch
} from 'react-native';
import React, { Component } from 'react';
import styleConfig, { globalStyle,
                      refreshColor
                    } from '../config/config-styles';
import EStyleSheet from 'react-native-extended-stylesheet';
import Icon from 'react-native-vector-icons/Ionicons';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { TouchBar,
         ViewTouchTitleBar
       } from '../modules/TouchBar';
import Alert from '../modules/Alert';
import { SwitchBar,
         SwitchVadio
       } from '../modules/SwitchBar';
import { createAnimatableComponent,
         View,
         Text
       } from 'react-native-animatable';
import * as util from '../redux/utils/util';
import { OrderInfoBox } from './OrderItem';

const deleteIcon = (<Icon name="ios-trash-outline" size={ 22 } color={'#929292'} />);
// 动画初始化
const AnimatableListView = createAnimatableComponent(ScrollView);

const AddressIcon = (<MIcon name="map-marker" size={ 26 } color={'#929292'} />);
const RightArrow = (<Icon name="ios-arrow-forward" size={ 22 } color={'#929292'} />);

export default class ConfirmOrderComponent  extends Component {
  constructor(props) {
    super(props);
    this.state = {
      useGold: true,
      data: {
        name: '李渊', mobile: '13191070518', address: '景阳街长治路口天骄科技园'

      }
    };
  }

  componentWillUnmount () {

  }

  componentDidMount () {

  }
  handleAddButton() {
    //点击添加数量按钮
  }
  handleReducerButton () {
    // 点击减少数量按钮
  }
  onChangeText(text) {
    // 改变input内数量
  }

  render () {
    const OrderRightText = OrderRightComponent(this.props.item);
    const OrderItemContent = OrderInfoBox( OrderRightText )({orderInfo: this.props.item});
    return (
      <View style={styles.html}>
        <ScrollView
          style={{height: '100%', paddingBottom: 40}}
          >
          <View>
            <OrderAddressSelectBox addressInfo={ this.state.data }/>
          </View>
          <View>
            <View  style={[ globalStyle.px1, globalStyle.pyd5]}>
              <Text>{ this.props.item.storeName }</Text>
            </View>
            <OrderItemContent disableTouch />
          </View>
          {
            OrderItemBar(<SelectGoodsNumber
                             reducer={this.handleReducerButton.bind(this)}
                             add={this.handleAddButton.bind(this)}
                             onChangeText={ this.onChangeText.bind(this) }
                             />)('购买数量:')
          }
      {
        OrderItemBar( <TouchableOpacity
                      onPress={ () => alert('ok')}
                      style={[globalStyle.flexCenter]}><Text style={[globalStyle.fzd8]}>自取/快递 免邮 </Text><Text>{ RightArrow }</Text></TouchableOpacity>)('配送方式:')
      }
      {
        OrderItemStartBar( <TextInput style={[{ flex:1}, globalStyle.fzd8, globalStyle.pld5]} placeholder="对本次交易的说明(建议填写)"/>)('买家留言:')
      }
        <View style={[globalStyle.px1, globalStyle.pyd5]}>
        <Text style={{textAlign: 'right'}}>共一件商品  小计: <Text style={styles.num}>$1034.00</Text></Text>
        </View>
        <View style={[{height: 5, backgroundColor: styleConfig.$globalBgc}]}></View>
        <View>
        {
          OrderItemBar(<Switch
                       onValueChange={ () => this.setState({useGold: !this.state.useGold}) }
                       value={ this.state.useGold }
                       onTintColor={ styleConfig.$globalColorPro }
                       />)('可用234金豆豆抵用23元')
        }
      {
        OrderItemBar(<Switch
                     onValueChange={ () => this.setState({useGold: !this.state.useGold}) }
                     value={ this.state.useGold }
                     onTintColor={ styleConfig.$globalColorPro }
                     />)('匿名登录')
      }
      </View>
        </ScrollView>
        <View style={styles.orderFooter}>
        <Text style={{paddingRight: 10}}>合计 : <Text style={[globalStyle.cp]}>$230</Text></Text>
        <TouchableOpacity
      style={styles.confirmButton}
      onPress={ () => alert('ok')}
        >
        <Text style={[globalStyle.cw]}>提交订单</Text>
        </TouchableOpacity>
        </View>
        </View>
    );
  }
}

/**
 * 数量添加选择器
 * Param: {(add: Func)(reducer: Func)}
 * Return: {undefined}
 **/
export let SelectGoodsNumber = ({add , reducer, onChangeText}) => {
  return (
    <View style={[globalStyle.flexBetween, {width: 80}]}>
      <TouchableOpacity style={styles.button} onPress={reducer}><Text>-</Text></TouchableOpacity>
      <TextInput
        onChangeText={ (text) => onChangeText(text)}
        style={[{width: 30, paddingLeft: 7}, globalStyle.fzd8]} value='10'/>
      <TouchableOpacity style={styles.button} onPress={add}><Text>+</Text></TouchableOpacity>
    </View>
  );
}

/**
 * 带有下划线样式
 * Param: {(elements)(String)}
 * Return: {undefined}
 **/
export let OrderItemBar = wrappedRightComponent => title => {
  return (
        <View style={[globalStyle.px1]}>
          <View style={[globalStyle.flexBetween, globalStyle.bb, globalStyle.pyd5]}>
            <Text>{title}</Text>
            { wrappedRightComponent }
          </View>
        </View>
  );
}

/**
 * 主要正对留言样式做出的
 * Param: {(elements)(String)}
 * Return: {undefined}
 **/
export let OrderItemStartBar = wrappedRightComponent => title => {
  return (
        <View style={[globalStyle.px1]}>
          <View style={[globalStyle.flexStart, globalStyle.bb, globalStyle.pyd5]}>
            <Text>{title}</Text>
            { wrappedRightComponent }
          </View>
        </View>
  );
}


export let OrderAddressSelectBox = ({addressInfo}) => {
  return (
    <TouchableOpacity
      onPress={() => alert('change Address')}
      style={[globalStyle.flexBetween, globalStyle.px1]}>
      <Text>{ AddressIcon }</Text>
      <View style={{flex: 1, marginLeft: 5}}>
        <View>
          <Text style={[globalStyle.fzd8, styles.addressName]}>收货人: { addressInfo.name }      电话: { addressInfo.mobile }</Text>
          <Text style={[ globalStyle.fzd8, styles.lhd5]}>收货地址: { addressInfo.address}</Text>
          <Text style={[styles.num, globalStyle.fzd8, styles.lhd5]}>收货不方便时, 可选择代收服务</Text>
        </View>
      </View>
      <Text> { RightArrow }</Text>
    </TouchableOpacity>
  );
}

export let OrderRightComponent = orderInfo => {
  return (
    <View style={{flex: 1, height: '100%', justifyContent: 'center'}}>
      <Text style={[styles.goodsName, globalStyle.fzd8, styles.lh1]}>{orderInfo.goodsName}</Text>
      <Text style={[styles.cca,  globalStyle.fzd8, styles.lh1]}>{orderInfo.goodsArguments}</Text>
      <Text style={[globalStyle.fzd8, styles.sendTime, styles.lh1]}>发货时间: 卖家承诺24小时内发货</Text>
      <View style={[globalStyle.flexBetween]}>
        <Text style={[globalStyle.fzd8, styles.num, styles.lh1]}>合计: 这里的价格参数未定</Text>
        <Text style={[globalStyle.fzd8, styles.lh1]}>X1</Text>
        </View>
    </View>
  );
}

const styles = EStyleSheet.create({
  html: {
    position: 'relative',
    height: '100%'
  },
  goodsName: {
    width: '100%',
    height: '1rem'
  },
  sendTime: {
    color: '#FA96A0'
  },
  num: {
    color: '$globalColorPro'
  },
  cca: {
    color: '#949494'
  },
  lh1: {
    lineHeight: '1rem'
  },
  addressName: {
    lineHeight: '2rem',
  },
  lhd5: {
    lineHeight: '1.5rem'
  },
  button: {
    width: '1.5rem',
    height: '1.5rem',
    backgroundColor: '$globalBgc',
    justifyContent: 'center',
    alignItems: 'center'
  },
  confirmButton: {
    backgroundColor: '$globalColorPro',
    height: '2.5rem',
    width: '5rem',
    alignItems: 'center',
    justifyContent: 'center'
  },
  orderFooter: {
    width: '100%',
    borderStyle: 'solid',
    borderTopWidth: 1,
    borderColor: '$globalBorder',
    backgroundColor: '$globalWhite',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    position: 'absolute',
    left: 0,
    bottom: 0,
  },
});
