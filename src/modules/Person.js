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
import styleConfig from '../config/config-styles';
import EStyleSheet from 'react-native-extended-stylesheet';
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchBar, ViewTouchTitleBar } from '../modules/TouchBar';
import { PersonHeader } from '../modules/personHead';
import PersonOrder from '../modules/person-order';
import PersonAssetComponent from '../modules/person-asset';
import Alert from '../modules/Alert'
import { SwitchBar,
         SwitchVadio
       } from '../modules/SwitchBar'
import CommendStar from '../modules/CommendStar'
import CounterBar from '../modules/Counter'
import { ShoppingCarGoodsItem } from '../modules/ListItem'

const TouchIcon = (<Icon name="ios-book" size={ 22 } color="red" />);

export default class Person extends Component {
  static navigatorStyle = {
    navBarHidden: true
  }

  _handleSettingIcon () {
    alert('lcick setting icons');
  }
  render () {
    const ScrollHeight = styleConfig.$height - 48 + 20;
    const OrderIcon = (<Icon name="ios-book" size={ 22 } color="red" />);
    const ListHead = (<TouchBar title="全部资产" IconChild={ OrderIcon } onClick={ () => { alert('全部资产') }}/>);
    return (
      <View>
        {/*
           <Alert
               title='您确定要删除此订单?'
               titleDescription="删除之后可以在电脑端回收站收回"
               Left={(<Text style={{color: styleConfig.$globalColorPro}}>取消</Text>)}
               Right={(<Text style={{color: 'red'}}>确定</Text>)}
               onPressLeft={ () => alert('click cancel button')}
               onPressRight={ () => alert('click agree  button ')}
               />
        */}
        <ScrollView
      showsVerticalScrollIndicator={false}
      style={{position: 'relative'}}
      refreshControl={
          <RefreshControl
        refreshing={false}
        onRefresh={ () => alert('下拉成功')}
        tintColor="#ff0000"
        title="下拉刷新"
        titleColor={ styleConfig.$globalColorPro }
        colors={['#ff0000', '#00ff00', '#0000ff']}
        progressBackgroundColor="#ffff00"
          />
      }
        >
        <PersonHeader source={ require('../modules/img/avatar@2x.png')} userName='angely.me' vipName="普通会员" clickSettingFn={ this._handleSettingIcon} />
        { /* 全部订单*/}
        <PersonOrder touchText="全部订单" text='代发货'/>
        { /* 我的资产*/}

        <PersonAssetComponent  hintTitle='全部资产' style={{marginTop: 10}} />
        <View HintHeadCompnent={ ListHead }  style={styles.touchbarView}>
        <SwitchBar text='设为默认' changeValue={ () => alert('change Value success')} />
        </View>
        <View style={{marginTop: 10}}>
        <TouchBar
      title={'用户信息' }
      IconChild={ TouchIcon }
      onClick={ () => { alert('订单') }} />
        </View>
        <CommendStar
      text="物流服务"
      style={styles.starBox}
      changeValue={ ( score ) => alert(score)}
        />
        <ViewTouchTitleBar style={{marginTop: 10, marginBottom: 10} } title="设置" Right={ <Text>haha</Text>} />
        <SwitchVadio text="haha" checked={true} changeValue={ () => alert('Switch Vadio')} />
        <CounterBar num='2' stock="4" />
        <ShoppingCarGoodsItem />
        </ScrollView>
        </View>
    )
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
