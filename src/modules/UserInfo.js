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
  DatePickerIOS
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
import AddressPicker from './AddressPicker'
import { SwitchBar,
         SwitchVadio
       } from '../modules/SwitchBar';
import CommendStar from '../modules/CommendStar';
import CounterBar from '../modules/Counter';
import ExampleView from './test';
import { TextReturnButton } from './util'

const TouchIcon = (<Icon name="ios-book" size={ 22 } color="red" />);

export default class UserInfo extends Component {
  static navigatorStyle = {
    navBarHidden: true
  }

  returnButton () {
    this.props.navigator.navigator.pop({
      animated: true,
      animationType: 'slide',
    });
  }
  handleRealName () {
    this.props.navigator.navigator.push({
      screen: 'example.AppRealName',
      title: "实名认证",
      passProps: {},
      animated: true,
      animationType: 'slide-horizontal',
      backButtonTitle: '',
      backButtonHidden: false,
      navigatorStyle: {},
      navigatorButtons: {},
    });
  }

  _handleSettingIcon () {
    alert('lcick setting icons');
  }
  constructor(props) {
    super(props);
  }
  render () {
    const ScrollHeight = styleConfig.$height - 48 + 20;
    const OrderIcon = (<Icon name="ios-book" size={ 22 } color="red" />);
    const ListHead = (<TouchBar title="全部资产" IconChild={ OrderIcon } onClick={ () => { alert('全部资产') }}/>);
    const {
      userName,
      userBirthDay
    } = this.props;
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{backgroundColor: styleConfig.$globalBgc}}
        >
        {/*
           <DatePickerIOS
                       date={ this.state.date }
                       mode="datetime"
                       onDateChange={ (date) =>alert(date) }
                       />
               */
          }
        <TouchBar
          title="用户名"
          bold={false}
          onClick={() => alert('ok')}
          RightChild={ <TextReturnButton descriptionNode={<Text style={[globalStyle.lh1, styles.scriptionText]}>China Cannon</Text>} />}
          />
          <TouchBar
            title="出生日期"
            bold={false}
            onClick={() => alert('ok')}
            RightChild={ <TextReturnButton descriptionNode={<Text style={[globalStyle.lh1, styles.scriptionText]}>2017/06/17</Text>} />}
            />
            <TouchBar
              title="性别"
              bold={false}
              onClick={() => alert('ok')}
              RightChild={ <TextReturnButton descriptionNode={<Text style={[globalStyle.lh1, styles.scriptionText]}>保密</Text>} /> }
              />
              <TouchBar
                title="实名认证"
                bold={false}
                onClick={ this.handleRealName.bind(this)}
                RightChild={ <TextReturnButton descriptionNode={<Text style={[globalStyle.lh1, styles.scriptionText]}>立即认证</Text>} />}
                />
              <AddressPicker
                isShow={false}
                onPressConfrim={() => alert('选择日期')}
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
  },
  scriptionText: {
    color: '$globalColorAssist',
  }
})
