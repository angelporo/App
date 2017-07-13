/**
 * 我的钱包
 * Param:  param
 * Return: {undefined}
 **/
import {
  View,
  Text,
  ScrollView,
  Dimensions,
  TouchableOpacity
} from 'react-native';
import React, { Component } from 'react';
import styleConfig, { globalStyle, refreshColor } from '../config/config-styles';
import EStyleSheet from 'react-native-extended-stylesheet';
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchBar, ViewTouchTitleBar } from '../modules/TouchBar';
import { TextReturnButton } from './util'

const IntrgralIcon = (<Icon name="ios-aperture" size={ 22 } color="red" />);

export default class MyWallet extends Component {
  static navigatorStyle = {
    navBarHidden: true,
  }

  constructor (props) {
    super(props);
    this.state = {
      userName: '',
      idCard: '',
      detailAddress: '',
      showAddressPicker: false,
      selectedCity: '',
      selectedProvince: '',
      selectedArea: ''
    }
  }
  RightReturnText(text) {
    return <TextReturnButton descriptionNode={<Text style={[globalStyle.lh1, styles.scriptionText]}>{text}</Text>} />
  }
  handleIntoRemain () {
    // 进入账户余额详情页面
    this.props.navigator.navigator.push({
      screen: 'example.AppRemainDetail',
      title: '账户余额',
      passProps: {},
      animated: true,
      animationType: 'slide-horizontal',
      backButtonTitle: '',
      backButtonHidden: false,
      navigatorStyle: {},
      navigatorButtons: {}
    });
  }
  render () {
    return (
      <ScrollView
        style={{backgroundColor: styleConfig.$globalBgc}}
        showsVerticalScrollIndicator={false}>
        <View style={[globalStyle.mtd5]}>
          <TouchBar
            title={ <Text>账户余额<Text style={{color: '#FD9F01', fontSize: 12}}>$66.44</Text></Text> }
            IconChild={ <Icon name="ios-aperture" size={ 40 } color="#FD9F01" /> }
            bold={false}
            onClick={ this.handleIntoRemain.bind(this) }
            />
        </View>
        <View style={[globalStyle.mtd5]}>
          <TouchBar
            title={'积分' }
            IconChild={ IntrgralIcon }
            bold={false}
            onClick={ () => alert('ok') }
            RightChild={ this.RightReturnText("66个")}
            />
            <TouchBar
              title="电子卷"
              bold={false}
              IconChild={ IntrgralIcon }
              onClick={ () => alert('ok') }
              RightChild={ this.RightReturnText("66个")}
              />
              <TouchBar
                title="礼包"
                bold={false}
                IconChild={ IntrgralIcon }
                onClick={ () => alert('ok') }
                RightChild={ this.RightReturnText("66个")}
                />
        </View>
        <View style={[globalStyle.mtd5]}>
          <TouchBar
            title="财富基金"
            bold={false}
            IconChild={ IntrgralIcon }
            onClick={ () => alert('ok') }
            RightChild={ this.RightReturnText("66个")}
            />
            <TouchBar
              title="重复消费"
              bold={false}
              IconChild={ IntrgralIcon }
              onClick={ () => alert('ok') }
              RightChild={ this.RightReturnText("66个")}
              />
        </View>
        <View style={[globalStyle.mtd5]}>
          <TouchBar
            title="零钱"
            bold={false}
            IconChild={ IntrgralIcon }
            onClick={ () => alert('ok') }
            RightChild={ this.RightReturnText("66个")}
            />
        </View>
      </ScrollView>
    )
  }
}


let styles = EStyleSheet.create({
  scriptionText: {
    color: '$globalColorAssist',
    fontSize: '0.8rem',
  }
})
