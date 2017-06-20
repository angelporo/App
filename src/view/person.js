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
  StatusBar
} from 'react-native';
import React, { Component } from 'react';
import styleConfig from '../config/config-styles';
import EStyleSheet from 'react-native-extended-stylesheet';
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchBar } from '../modules/TouchBar';
import { PersonHeader } from '../modules/personHead';
import PersonOrder from '../modules/person-order';
import PersonAssetComponent from '../modules/person-asset';
import Alert from '../modules/Alert'

const TouchIcon = (<Icon name="ios-book" size={ 22 } color="red" />);

export default class Person extends Component {
  _handleSettingIcon () {
    alert('lcick setting icons');
  }
  render () {
    const ScrollHeight = styleConfig.$height - 48 + 20;
    const OrderIcon = (<Icon name="ios-book" size={ 22 } color="red" />);
    const ListHead = (<TouchBar title="全部资产" IconChild={ OrderIcon } onClick={ () => { alert('全部资产') }}/>);
    return (
      <View style={{height: ScrollHeight}}>
        <Alert
          title='您确定要删除此订单?'
          titleDescription="删除之后可以在电脑端回收站收回"
          Left={(<Text style={{color: styleConfig.$globalColorPro}}>取消</Text>)}
          Right={(<Text style={{color: 'red'}}>确定</Text>)}
          onPressLeft={ () => alert('click cancel button')}
          onPressRight={ () => alert('click agree  button ')}
               />
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ height: ScrollHeight, position: 'relative', top: -20}} >
          <PersonHeader source={ require('../modules/img/avatar@2x.png')} userName='angely.me' vipName="普通会员" clickSettingFn={ this._handleSettingIcon} />
          { /* 全部订单*/}
          <PersonOrder touchText="全部订单" text='代发货'/>
          { /* 我的资产*/}
        <PersonAssetComponent  hintTitle='全部资产' style={{marginTop: 10}} />
          <View HintHeadCompnent={ ListHead }  style={styles.touchbarView} >
            <TouchBar
              title={'用户信息' }
              IconChild={ TouchIcon }
              onClick={ () => { alert('订单') }}>
            </TouchBar>
            <TouchBar
              title={'用户信息' }
              IconChild={ TouchIcon }
              onClick={ () => { alert('订单') }}>
            </TouchBar>
            <TouchBar
              title={'用户信息' }
              IconChild={ TouchIcon }
              onClick={ () => { alert('订单') }}>
            </TouchBar>
            <TouchBar
              title={'用户信息' }
              IconChild={ TouchIcon }
              onClick={ () => { alert('订单') }}>
            </TouchBar>
          </View>
          <View style={styles.touchbarView} >
            <TouchBar
              title={'用户信息' }
              IconChild={ TouchIcon }
              onClick={ () => { alert('订单') }}>
            </TouchBar>
            <TouchBar
              title={'用户信息' }
              IconChild={ TouchIcon }
              onClick={ () => { alert('订单') }}>
            </TouchBar>
            <TouchBar
              title={'用户信息' }
              IconChild={ TouchIcon }
              p onClick={ () => { alert('订单') }}>
            </TouchBar>
            <TouchBar
              title={'用户信息' }
              IconChild={ TouchIcon }
              onClick={ () => { alert('订单') }}>
            </TouchBar>
          </View>
          <View style={styles.touchbarView} >
            <TouchBar
              title={'用户信息' }
              IconChild={ TouchIcon }
              onClick={ () => { alert('订单') }}/>
              <TouchBar
                title={'用户信息' }
                IconChild={ TouchIcon }
                onClick={ () => { alert('订单') }}>
              </TouchBar>
              <TouchBar
                title={'用户信息' }
                IconChild={ TouchIcon }
                onClick={ () => { alert('订单') }}>
              </TouchBar>
              <TouchBar
                title={'用户信息' }
                IconChild={ TouchIcon }
                onClick={ () => { alert('订单') }}>
              </TouchBar>
          </View>
        </ScrollView>
      </View>
    )
  }
}

let styles = EStyleSheet.create({
  touchbarView: {
    marginTop: '0.6rem'
  }
})
