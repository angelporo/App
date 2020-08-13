/**
 * 订单页面商品展示组件
 * Param:  param
 * Return: {undefined}
 **/
import {
  View,
  Text,
  ScrollView,
  Dimensions,
  RefreshControl,
  TouchableOpacity,
  Image
} from 'react-native';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styleConfig, { globalStyle, refreshColor } from '../config/config-styles';import EStyleSheet from 'react-native-extended-stylesheet';
import Icon from 'react-native-vector-icons/Ionicons';
import { OrderButton } from '../modules/Button';

/**
 * 订单页面订单列表信息右边文字部分
 * Param: param
 * Return: {undefined}
 **/
export let OrderListItemRightComponent = orderInfo => {
  return (
    <View style={styles.orderItemTitleText}>
      <View style={styles.orderItemTitleTextLeft}>
        <View>
          <Text style={[styles.goodsNameText,
                        styles.lhd5,
                        globalStyle.cca
                ]}>{ orderInfo.goodsName }</Text>
        </View>
        <Text style={[globalStyle.fzd8,
                      styles.lhd5,
                      {color: '#A7A7A7'}
              ]}>{ orderInfo.goodsArguments}</Text>
      </View>
      <View style={styles.orderItemTitleTextRight}>
        <Text style={[globalStyle.fzd8,
                      styles.lhd5,
                      globalStyle.cca
              ]}>{ orderInfo.price }</Text>
        <Text style={[globalStyle.fzd8,
                      styles.lhd5,
                      globalStyle.cca
              ]}>{ orderInfo.originalPrice }</Text>
        <Text style={[globalStyle.fzd8, styles.lhd5]}>{ orderInfo.buyNum }</Text>
      </View>
    </View>
  );
}

/**
 * 订单页面订单详情部分抽象
 * Param: ({orderInfo:Object, onPress: func })( element )
 * Return: {undefined}
 **/
export let OrderInfoBox = (OrderRightWrapped) => ({ orderInfo, onPress }) => {
  if(__DEV__){
    if (!orderInfo.goodsLogo) {
      throw new Error('请检查OrderInfoBox组件中goodsLogo属性, OrderItem.js');
    }
    if (!orderInfo.id) {
      throw new Error('请检查OrderInfoBox组件中id属性, OrderItem.js');
    }
  }
  return class OrderItemInfo extends Component {
    constructor(props) {
      super(props);
    }
    render () {
      if (this.props.disableTouch || false) {
        return (
          <View style={[styles.orderItemGoodsBox,
                    globalStyle.gbdc,
                    globalStyle.px1
            ]}>
            <Image
              style={ styles.orderItemGoodsImage }
              resizeMode={ Image.resizeMode.contain }
              source={{ uri: orderInfo.goodsLogo }}/>
            { OrderRightWrapped }
          </View>
        );
      }else {
        return (
                    <TouchableOpacity
            onPress={ () => onPress(orderInfo) }
            style={[styles.orderItemGoodsBox,
                    globalStyle.gbdc,
                    globalStyle.px1
            ]}>
            <Image
              style={ styles.orderItemGoodsImage }
              resizeMode={ Image.resizeMode.contain }
              source={{ uri: orderInfo.goodsLogo }}/>
            { OrderRightWrapped }
          </TouchableOpacity>
        );
      }
    }
  };
};

export default class OrderItem extends Component{
  constructor(props){
    super(props);
  }

  render () {
    const { item,
            orderSystem,
            intoOrderDetail,
            onPressStoreName
          } = this.props;
    const RightArrowIcon = (<Icon name="ios-arrow-forward-outline" size={ 22 } color={styleConfig.$globalColorAssist} />);
    const rightText = OrderListItemRightComponent(item);
    const OrderItemContent = OrderInfoBox( rightText )({onPress: intoOrderDetail,
                                                        orderInfo: item});
    return(
      <View style={[globalStyle.mtd5]}>
        <View style={[styles.orderItemTitle,
                      globalStyle.pyd5,
                      globalStyle.px1
              ]}>
          <TouchableOpacity
            onPress={ () => onPressStoreName(item.storeID) }
            style={[globalStyle.flexStart]}>
            <Text>{ item.storeName }</Text>
            <Text style={[globalStyle.mld5]}>{RightArrowIcon}</Text>
          </TouchableOpacity>
          <Text style={[globalStyle.cp, globalStyle.fzd8]}>{ item.state }</Text>
        </View>
        <OrderItemContent/>
        <View style={[styles.orderScription,
                      globalStyle.px1,
                      globalStyle.pyd5,
                      globalStyle.bgdW,
                      globalStyle.bb
              ]}>
          <Text style={[globalStyle.cca, globalStyle.fzd8]}>{ item.buyScription }</Text>
        </View>
        <View style={[styles.orderItemButtonBox,
                      globalStyle.pyd5,
                      globalStyle.px1,
                      globalStyle.bgdW,
              ]}>
          <OrderButtons
            item={ item }
            buttonSource={ orderSystem }
            />
        </View>
      </View>
    );
  };
}


/**
 * 通过传入订单类型返回相对应的
 * Param: { type: Number}
 * Return: { OrderButtonItem }
 **/
function OrderButtons ({
  item,
  buttonSource // 通过订单类型抽象出的button状态树
}) {
  // 遍历抽象出来的状态树, 渲染对应的text和handle(触发button的方法)
  return (
    <View style={styles.orderButtonBox}>
      {
        buttonSource.map( (buttonItem, i) => {
          if(item.type === buttonItem.type) {
            // 获取符合标准的当前按钮数据
            return buttonItem.buttons.map( (n, index) => {
              // 遍历符合条件的按钮数据
              // 通过符合条件的按钮返回按钮的实例
              if (__DEV__) {
                if(!n.handle){
                  throw new Error('订单页面操作方法错误');
                }
                if(!n.buttonColor) {
                  throw new Error('请检查订单抽象数中buttonColor属性是否从在("gray" or other)');                }
                if(!n.text) {
                  throw new Error('请检查订单抽象数中text属性是否从在');
                }
              }
              return (
                <View style={styles.orderButtonItem}>
                <OrderButton
                  item={ item }
                  key={ index }
                  onPress={ n.handle }
                  color={ n.buttonColor }
                  text={ n.text }
                  type={ n.text }
                  />
                </View>
              );
            });
          }
        })
      }
    </View>
  );
}
const styles = EStyleSheet.create({
  orderItemTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '$globalWhite'
  },
  orderButtonItem: {
    width: '25%',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  orderItemTitleText: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  orderItemTitleTextLeft: {
    width: '60%'
  },
  orderItemTitleTextRight: {
    width: '20%',
    alignItems: 'flex-end'
  },
  lhd5: {
    lineHeight: '1.2rem'
  },
  goodsNameText: {
    height: '2.4rem',
    overflow: 'hidden',
    fontSize: '0.8rem'
  },
  orderItemGoodsBox: {
    flex: 1,
    paddingTop: '0.3rem',
    paddingBottom: '0.3rem',
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
  orderItemGoodsImage: {
    width: '5rem',
    height: '5rem'
  },
  orderItemBox: {
    marginTop: '-0.5rem'
  },
  orderScription: {
    alignItems: 'flex-end'
  },
  orderButtonBox: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
})
