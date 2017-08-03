/**
 * 个人中心逻辑页面
 * Param:  param
 * Return: {undefined}
 **/
import {
  View,
  Text,
  ScrollView,
  Dimensions,
  StatusBar,
  RefreshControl,
} from 'react-native';
import React, { Component } from 'react';
import styleConfig, { refreshColor } from '../config/config-styles';
import EStyleSheet from 'react-native-extended-stylesheet';
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchBar, ViewTouchTitleBar } from '../modules/TouchBar';
import { PersonHeader } from '../modules/personHead';
import PersonOrder from '../modules/person-order';
import PersonAssetComponent from '../modules/person-asset';
import { SwitchBar,
         SwitchVadio
       } from '../modules/SwitchBar';
import CommendStar from '../modules/CommendStar';
import CounterBar from '../modules/Counter';

const TouchIcon = (<Icon name="ios-book" size={ 22 } color="red" />);

export default class Person extends Component {
  static navigatorStyle = {
    navBarHidden: true
  }
  handleIntoUserInfo() {
    this.props.navigator.navigator.push({
      screen: 'example.AppUserInfo',
      title: '用户信息',
      animated: true,
      passProps: {id: '1'},
      animationType: 'slide-horizontal',
      backButtonTitle: '',
      backButtonHidden: false,
    });
  }
  handleIntoAddressPage () {
    this.props.navigator.navigator.push({
      screen: 'example.AppAddressManage',
      title: '收货地址',
      animated: true,
      passProps: {id: '1'},
      animationType: 'slide-horizontal',
      backButtonTitle: '',
      backButtonHidden: false
    });
  }
  handleIntoAppOrder () {
    this.props.navigator.navigator.push({
      screen: 'example.AppOrder',
      title: '我的订单',
      animated: true,
      passProps: {id: '1'},
      animationType: 'slide-horizontal',
      backButtonTitle: '',
      backButtonHidden: false
    });
  }
  handleIntoMyWallet () {
    this.props.navigator.navigator.push({
      screen: 'example.AppMyWallet',
      title: '我的钱包',
      passProps: {id: '2'},
      animated: true,
      animationType: 'slide-horizontal',
      backButtonTitle: '',
      backButtonHidden: false
    });
  }

  _handleSettingIcon () {
    alert('lcick setting icons');
  }
  render () {
    const ScrollHeight = styleConfig.$height - 48 + 20;
    const OrderIcon = (<Icon name="ios-book" size={ 22 } color="red" />);
    const ListHead = (<TouchBar title="全部资产" IconChild={ OrderIcon } onClick={ () => { alert('全部资产'); }}/>);
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{position: 'relative', backgroundColor: styleConfig.$globalBgc}}
        refreshControl={
            <RefreshControl
                refreshing={false}
                onRefresh={ () => alert('下拉成功')}
                tintColor="#ff0000"
                title="下拉刷新"
                titleColor={ styleConfig.$globalColorPro }
                colors={ refreshColor }
                progressBackgroundColor="#ffff00"
                />
      }>
      <PersonHeader source={ require('../modules/img/avatar@2x.png')} userName='angely.me' vipName="普通会员" clickSettingFn={ this._handleSettingIcon} />
      { /* 全部订单*/}
      <PersonOrder touchText="全部订单" text='代发货'/>
      { /* 我的资产*/ }
      <PersonAssetComponent  hintTitle='全部资产' style={{marginTop: 10}} />
      <View HintHeadCompnent={ ListHead }  style={styles.touchbarView}>
        <TouchBar
          title={'用户信息' }
          IconChild={ TouchIcon }
          onClick={ this.handleIntoUserInfo.bind(this) }
          />
        <TouchBar
          title={'账户安p全' }
          IconChild={ TouchIcon }
          onClick={ () => { alert('订单') }}
          />
          <TouchBar
            title={'资金管理' }
            IconChild={ TouchIcon }
            onClick={ () => { alert('订单') }} />
            <TouchBar
              title={'我的钱包' }
              IconChild={ TouchIcon }
              onClick={ this.handleIntoMyWallet.bind(this)} />
            <TouchBar
              title={'收货地址'}
              IconChild={ TouchIcon }
              onClick={ this.handleIntoAddressPage.bind(this) }
              />
            <TouchBar
              title={'我的订单'}
              IconChild={ TouchIcon }
              onClick={ this.handleIntoAppOrder.bind(this) }
              />
      </View>
</ScrollView>
    );
  }
}

let styles = EStyleSheet.create({
  touchbarView: {
    marginTop: '0.6rem'
  },
  starBox: {
    paddingLeft: '$globalWhiteSpace',
    paddingRight: '$globalWhiteSpace'
  }
})
