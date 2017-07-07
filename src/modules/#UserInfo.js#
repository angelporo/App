/**
 * 用户信息页面
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
import styleConfig, { globalStyle, refreshColor } from '../config/config-styles';
import EStyleSheet from 'react-native-extended-stylesheet';
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchBar, ViewTouchTitleBar } from '../modules/TouchBar';
import { PersonHeader } from '../modules/personHead';
import PersonOrder from '../modules/person-order';
import PersonAssetComponent from '../modules/person-asset';
import Alert from '../modules/Alert';
import { SwitchBar,
         SwitchVadio
       } from '../modules/SwitchBar';
import CommendStar from '../modules/CommendStar';
import CounterBar from '../modules/Counter';



const returnIcon = (<Icon name="ios-arrow-forward" color='#6b6b6b' size={22} />);
const TouchIcon = (<Icon name="ios-book" size={ 22 } color="red" />);
function RightText ({descriptionNode}) {
  return (
    <View style={styles.flexEnd}>
      <View style={styles.rightBarScription}>
        { descriptionNode }
      </View>
      <View>
        { returnIcon }
      </View>
    </View>
  )
}

export default class UserInfo extends Component {

  static navigatorStyle = {
    navBarHidden: true
  }

  returnButton () {
    this.props.navigator.navigator.pop({
      animated: true, // does the pop have transition animation or does it happen immediately (optional)
      animationType: 'slide', // 'fade' (for both) / 'slide-horizontal' (for android) does the pop have different transition animation (optional)
    });
  }

  _handleSettingIcon () {
    alert('lcick setting icons');
  }
  render () {
    const ScrollHeight = styleConfig.$height - 48 + 20;
    const OrderIcon = (<Icon name="ios-book" size={ 22 } color="red" />);
    const ListHead = (<TouchBar title="全部资产" IconChild={ OrderIcon } onClick={ () => { alert('全部资产') }}/>);
    const {
      userName,
      userBirthDay,
    } = this.props;
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={[globalStyle.html]}>
        <View style={{backgroundColor: styleConfig.$globalBgc}}>
          <ViewTouchTitleBar
            onPressLeft={ this.returnButton.bind(this) }
            title="用户信息" />
        </View>
        <TouchBar
          title="用户名"
          bold={false}
          onClick={() => alert('ok')}
          RightChild={ <RightText descriptionNode={<Text style={[globalStyle.lh1]}>China Cannon</Text>} />}
          />
        <TouchBar
          title="出生日期"
          bold={false}
          onClick={() => alert('ok')}
          RightChild={ <RightText descriptionNode={<Text style={[globalStyle.lh1]}>2017/06/17</Text>} />}
          />
        <TouchBar
          title="性别"
          bold={false}
          onClick={() => alert('ok')}
          RightChild={ <RightText descriptionNode={<Text style={[globalStyle.lh1]}>保密</Text>} />}
          />
        <TouchBar
          title="实名认证"
          bold={false}
          onClick={() => alert('ok')}
          RightChild={ <RightText descriptionNode={<Text style={[globalStyle.lh1]}>立即认证</Text>} />}
          />
      </ScrollView>
    )
  }
}

function testComponent () {
  return (
    <View>
        <SwitchBar text='设为默认' changeValue={ () => alert('change Value success')} />
        <View style={{marginTop: 10}}>
        </View>
        <CommendStar
      text="物流服务"
      style={styles.starBox}
      changeValue={ ( score ) => alert(score)}
        />

</View>
  )
}


let styles = EStyleSheet.create({
  touchbarView: {
    marginTop: '0.6rem'
  },
  starBox: {
    paddingLeft: '$globalWhiteSpace',
    paddingRight: '$globalWhiteSpace'
  },
  flexEnd: {
    flexDirection: "row",
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  rightBarScription: {
    marginRight: '0.5rem',
  }
})
