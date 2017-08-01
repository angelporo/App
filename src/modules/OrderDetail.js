/**
 * 订单详情组件
 * Param:  param
 * Return: {undefined}
 **/
import {
  ScrollView,
  TouchableOpacity,
  FlatList,
  ListView,
  Animated
} from 'react-native';
import React, { Component } from 'react';
import styleConfig, { globalStyle, refreshColor } from '../config/config-styles';import EStyleSheet from 'react-native-extended-stylesheet';
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchBar, ViewTouchTitleBar } from '../modules/TouchBar';
import Alert from '../modules/Alert';
import { SwitchBar,
         SwitchVadio
       } from '../modules/SwitchBar';
import { createAnimatableComponent, View, Text } from 'react-native-animatable';
import * as util from '../redux/utils/util';
import { OrderInfoBox, OrderListItemRightComponent } from './OrderItem';
const AnimatableListView = createAnimatableComponent(ScrollView);
const ContactIcon = (<Icon name="ios-chatbubbles-outline" size={ 22 } color={styleConfig.$globalColorPro} />);
const CallIcon = (<Icon name="ios-call" size={ 22 } color={styleConfig.$globalColorPro} />);

export default class OrderDetail extends Component {
  constructor(props) {
    super(props);
    const data = props.item;
    this.state = {
      storeName: data.storeName,
      address: data.orderUserInfo.address,// 对应订单收货地址
      mobile: data.orderUserInfo.mobile,  // 对应订单收货手机号
      name: data.orderUserInfo.name, // 对应订单收货名字
      orderNum: data.orderInfo.orderNum,  // 对应订单编号
      payNum: data.orderInfo.payNum,  // 对应订单第三方支付交易号
      payType: '微信支付',
      orderCreateTime: data.orderInfo.createTime, // 订单创建时间
      orderType: data.typeStatus,   // 订单状态
      payDetaile: `共一件商品 实付款: 999(含运费)` //付款详情
    };
  }

  componentWillUnmount() {
  }
  componentDidMount() {

  }

  handleIntoGoodsDetaile() {
    const id = this.props.item.id;
    alert(id);
  }

  render () {
    const RightText = OrderListItemRightComponent(this.props.item);
    const OrderItemContent = OrderInfoBox( RightText )({onPress: this.handleIntoGoodsDetaile.bind(this),
                                                        orderInfo: this.props.item});
    return (
      <AnimatableListView
        animation="bounceInUp"
        duration={ 1200 }
        delay={ 300 }
        style={styles.html}>
        <View style={[globalStyle.px1, globalStyle.bgdW]}>
          <View style={[globalStyle.bb, globalStyle.pyd5]}>
            <Text>收货人信息</Text>
          </View>
          <View style={[ globalStyle.pyd5]}>
            <View>
              <Text>{ this.state.name}   { this.state.mobile }</Text>
            </View>
          </View>
          <View style={[ globalStyle.pyd5]}>
            <View>
              <Text style={[styles.addressText]}>收货地址: { this.state.address }</Text>
            </View>
          </View>
        </View>

        <View style={[globalStyle.mtd5,
                      globalStyle.bgdW,
                      globalStyle.px1
              ]}>
          <View style={[globalStyle.bb, globalStyle.pyd5]}>
            <Text>订单信息</Text>
          </View>
          <View>
            <Text style={[globalStyle.cca,
                          styles.addressText
                  ]}>订单编号: { this.state.orderNum }</Text>
            <Text style={[{color: '#bbb'},
                          styles.addressText
                  ]}>{this.state.payType}: { this.state.payNum }</Text>
            <Text style={[{color: '#bbb'},
                          styles.addressText
                  ]}>创建时间: { this.state.orderCreateTime }</Text>
            <Text style={[{color: '#bbb'},
                          styles.addressText
                  ]}>订单状态: { this.state.orderType }</Text>
          </View>
        </View>
        <View style={[styles.orderItemTitle,
                      globalStyle.pyd5,
                      globalStyle.px1,
              ]}>
          <TouchableOpacity>
            <Text>{ this.state.storeName }</Text>
          </TouchableOpacity>
        </View>

        <OrderItemContent disableTouch />

        <View style={[globalStyle.px1, globalStyle.bgdW]}>
          <View style={[globalStyle.bb, globalStyle.pyd5]}>
            <Text style={[globalStyle.tr, globalStyle.cca]}>{ this.state.payDetaile }</Text>
          </View>
          <View style={ styles.orderBottomButton }>
            <TouchableOpacity style={[globalStyle.flexCenter, styles.orderButton]}>
              { ContactIcon }
              <Text style={[globalStyle.cca, globalStyle.mld5]}>联系小兔</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.bl, globalStyle.flexCenter, styles.orderButton]}>
              { CallIcon }
              <Text style={[globalStyle.cca, globalStyle.mld5]}>联系客服</Text>
            </TouchableOpacity>
          </View>
        </View>
      </AnimatableListView>
    );
  }
}

const styles = EStyleSheet.create({
  orderBottomButton: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingBottom: '0.3rem',
    paddingTop: '0.3rem'
  },
  orderButton: {
    width: '50%'
  },
  bl: {
    borderLeftWidth: 1,
    borderStyle: 'solid',
    borderLeftColor: '$globalBorder'
  },
  orderItemTitle: {
    backgroundColor: '$globalWhite',
    marginTop: '0.5rem'
  },
  html: {
    backgroundColor: '$globalBgc'
  },
  addressText: {
    lineHeight: '1.3rem'
  }
});
