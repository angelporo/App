/**
 * 用户订单页面
 * Param:  param
 * Return: { undefined }
 **/
import {
  View,
  Text,
  ScrollView,
  RefreshControl,
  TouchableOpacity,
  TouchableWithoutFeedback
} from 'react-native';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styleConfig, { globalStyle, refreshColor } from '../config/config-styles';import EStyleSheet from 'react-native-extended-stylesheet';
import Icon from 'react-native-vector-icons/Ionicons';
import Alert from '../modules/Alert';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import OrderItem from './OrderItem';
import * as Animatable from 'react-native-animatable';

export default class UserOrder extends Component{
  hintSendGoods (item) {
    // 提醒发货
    alert(item.id);
  }

  intoConfirmOrderPage (item) {
    this.navigator.push({
      screen: 'example.ConfirmOrder',
      title: '确认订单',
      animated: true,
      passProps: {item: item},
      animationType: 'slide-horizontal',
      backButtonTitle: '',
      backButtonHidden: false
    });
  }
  orderButton () {
    // 构建对应的订单产生的按钮
    // TODO: 根据订单类型, 添加订单中每一项的操作,(handle: Function[ item])
    // 每个handle调用的时候全部传入了当前订单所有一直参数itme
    return [{
      type: 1,//待发货
      buttons: [{ text: '提醒发货',
                  buttonColor: 'gray',
                  handle: this.hintSendGoods.bind(this) },
                {text: '退款',
                 buttonColor: 'gray',
                 handle: () => alert('退款')}]
    }, {
      type: 2, //已发货
      buttons: [{text: '联系卖家',
                 buttonColor: 'gray',
                 handle: () => alert('联系卖家')},
                {text: '取消订单',
                 buttonColor: 'gray',
                 handle: () => alert('取消订单')}]
    }, {
      type: 3, // 待付款
      buttons: [{text: '延长发货',
                 buttonColor: 'gray',
                 handle: () => alert('延长')},
                {text: '查看物流',
                 buttonColor: 'gray',
                 handle: this.intoLookLogiticsView.bind(this)},
                {text: '售后',
                 buttonColor: 'gray',
                 handle: () => alert('申请售后')},
                {text: '评价',
                 buttonColor: 'red',
                 handle: this.intoCommentView.bind(this)}]
    }, {
      type: 4, //退货/换货
      buttons: [{text: '延长发货',
                 buttonColor: 'gray',
                 handle: () => alert('延长')},
                {text: '删除订单',
                 buttonColor: 'gray',
                 handle: (id, type) => this.deleteOrder(id, type)},
                {text: '售后',
                 buttonColor: 'gray',
                 handle: () => alert('申请售后')},
                {text: '付款',
                 buttonColor: 'red',
                 handle: this.intoConfirmOrderPage.bind(this)
                }]
    }];
  }
  intoCommentView (item) {
    this.navigator.push({
      screen: 'example.UserSendCommentView',
      title: '发表评价',
      animated: true,
      passProps: {item: item},
      animationType: 'slide-horizontal',
      backButtonTitle: '',
      backButtonHidden: false
    });
  }

  intoLookLogiticsView (item) {
    this.navigator.push({
      screen: 'example.UserLookLogitics',
      title: '查看物流',
      animated: true,
      passProps: {item: item},
      animationType: 'slide-horizontal',
      backButtonTitle: '',
      backButtonHidden: false
    });
  }

  componentWillMount() {

  }
  componentDidMount(){

  }

  static navigatorStyle = {
    navBarHidden: true
  }
  deleteOrder (item) {
    // 删除订单
    // 通知服务器,  删除成功后删除store中当前id的订单
    this.setState({
      isShowAlert: !this.state.isShowAlert,
      alertTitle: `是否删除id位${item.id}此订单, ${item.type}`
    });
  }

  constructor (props) {
    super(props);
    this.state = {
      activeTab: 1,
      tabBarData: [{text: '全部'}, {text: '代发货'}, {text: '待收货'}, {text: '待评价', isShowArrow: true}, {text: '退款/售后'}],
      isShowAlert: false,
      alertTitle: ''
    };
    this.navigator = this.props.navigator.navigator;
  }

  handleIntoStoreDefault (storeID)   {
    alert(storeID);
  }
  render () {
    const { userOrders } = this.props;
    return (
      <View style={{height: '100%'}}>
        <Alert
          isShow={ this.state.isShowAlert }
          titleDescription={ this.state.alertTitle }
          Left={<Text>取消</Text>}
          Right={<Text style={{color: styleConfig.$globalColorPro}}>确定</Text>}
          onPressLeft={ () => this.setState({isShowAlert: !this.state.isShowAlert})}
          onPressRight={ () => console.log('n')}
          />
          <ScrollableTabView
            renderTabBar={(goToPage,
                           tabs,
                           activeTab) =>
                          <OrderBar
                              goToPage={ goToPage }
                              activeTab={ activeTab }
                              sourceData={ this.state.tabBarData }
                            />}
            ref={(tabView) => { this.tabView = tabView; }}
            >
            <OrderItemBox
              onPressStoreTitle={ this.handleIntoStoreDefault.bind(this)}
              navigator={ this.props.navigator }
              orderSystem={this.orderButton.bind(this)()}
              sourceData={ userOrders } />{ /* 全部订单*/}
            <OrderItemBox
              navigator={ this.props.navigator }
              orderSystem={this.orderButton.bind(this)()}
              sourceData={ userOrders.filter(
                (n) => {
                  return n.type == 1;
                }
              ) } />{ /* 待发货*/}
              <OrderItemBox
                onPressStoreTitle={ this.handleIntoStoreDefault.bind(this)}
                navigator={ this.props.navigator }
                orderSystem={this.orderButton.bind(this)()}
                sourceData={ userOrders.filter(
                  (n) => {
                    // 过滤待发货订单
                    return n.type == 2;
                  }
                ) } />{ /* 待收获 */}
                <OrderItemBox
                  onPressStoreTitle={ this.handleIntoStoreDefault.bind(this)}
                  navigator={ this.props.navigator }
                  orderSystem={this.orderButton.bind(this)() }
                  sourceData={ userOrders.filter(
                    (n) => {
                      return n.type == 3;
                    }
                  ) } />{ /* 待评价 */}
                  <OrderItemBox
                    onPressStoreTitle={ this.handleIntoStoreDefault.bind(this)}
                    navigator={ this.props.navigator }
                    orderSystem={ this.orderButton.bind(this)() }
                    sourceData={ userOrders.filter(
                      (n) => {
                        return n.type == 4;
                      }
                    ) } />{ /* 退款/售后 */}
          </ScrollableTabView>
      </View>
    );
  }
}

export class OrderBar extends Component{
  constructor(props){
    super(props);
  }

  handleTabBarItem(pageNumber) {
    const { goToPage } = this.props;
    goToPage(pageNumber);
  }

  render () {
    const { sourceData, activeTab, goToPage } = this.props;
    return (
      <View style={styles.orderBar}>
        {
          sourceData.map( (n, i) => {
            return(
              <TouchableOpacity
                  key={i}
                  onPress={ () => this.handleTabBarItem.bind(this)(i)}
                style={[ styles.tabBarItem, activeTab == i ? { backgroundColor: styleConfig.$globalColorPro } : {}]}>
                <Text style={[styles.barItemText]}>{ n.text }</Text>
              </TouchableOpacity>
            );
                })
        }
      </View>
    );
  }
}

export class OrderItemBox extends Component{
  constructor(props){
    super(props);
  }

  handleIntoOrderDetail (item) {
    // item: 用户点击的当前订单全部信息
    this.props.navigator.navigator.push({
      screen: 'example.AppOrderDetail',
      title:  '订单详情',
      animated: true,
      passProps: {item: item},
      animationType: 'slide-horizontal',
      backButtonTitle: '',
      backButtonHidden: false
    });
  }

  render () {
    const { sourceData, orderSystem, onPressStoreTitle } = this.props;
    return(
      <ScrollView style={styles.orderPage}>
        <View style={ styles.orderItemBox }>
          {
            sourceData.map( (n, i) => {
              return (<OrderItem
                          onPressStoreName={ onPressStoreTitle }
                          orderSystem={ orderSystem }
                          intoOrderDetail={ this.handleIntoOrderDetail.bind(this) }
                          item={ n }
                          key={ i } />);
            })
          }
        </View>
      </ScrollView>
    );
  };
}

const styles = EStyleSheet.create({
  tabBarItem: {
    width: '20%',
    justifyContent: 'center',
    alignItems: 'center',
    height: '2.3rem'
  },
  orderBar: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
    height: '2.3rem'
  },
  barItemText:{
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    width: '100%',
    fontSize: '0.8rem',
    textAlign: 'center'
  },
  orderPage: {
    // borderStyle: 'solid',
    // borderColor: '#fff',
    // borderRightWidth: 1,
    // borderLeftWidth: 1,
    height: '100%',
    backgroundColor: '$globalBgc'
  },
  orderItemBox: {
    marginTop: '-0.5rem'
  }
});
