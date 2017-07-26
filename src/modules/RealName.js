/**
 * 实名认证组件
 * Param:  param
 * Return: {undefined}
 **/
import {
  View,
  Text,
  ScrollView,
  Dimensions,
  StatusBar,
  TextInput,
  TouchableOpacity
} from 'react-native';
import React, { Component } from 'react';
import styleConfig, { globalStyle, refreshColor } from '../config/config-styles';
import EStyleSheet from 'react-native-extended-stylesheet';
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchBar, ViewTouchTitleBar } from './TouchBar';
import AddressPicker from './AddressPicker';

import Alert from './Alert';
import { SwitchBar,
         SwitchVadio
       } from './SwitchBar';
import CommendStar from './CommendStar';
import CounterBar from './Counter';
import App from './test'

const returnIcon = (<Icon name="ios-arrow-forward" color='#6b6b6b' size={22} />);
const TouchIcon = (<Icon name="ios-book" size={ 22 } color="red" />);

export default class RealName extends Component {
  static navigatorStyle = {
    navBarHidden: true,
  }

  returnButton () {
    this.props.navigator.navigator.pop({
      animated: true,
      animationType: 'slide',
    });
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
  onChangeDetailAddress (value) {
    this.setState({
      detailAddress: value
    })
  }

  onChaneName (value) {
    this.setState({
      userName: value
    })
  }

  onChangeIdCard (value) {
    this.setState({
      idCard: value
    })
  }
  onPressConfrimAddress( province, city, area) {
    // 用户点击地址选择器, 获取省 市 区回调
    console.log(province, city, area)
    this.setState({
      showAddressPicker: !this.state.showAddressPicker,
      selectedProvince: province,
      selectedCity: city,
      selectedArea: area
                  })
  }

  render () {
    const address = this.state.selectedArea !== '' ? `${this.state.selectedProvince} - ${this.state.selectedCity} - ${this.state.selectedArea}` : '';
    return (
      <ScrollView
        style={{backgroundColor: styleConfig.$globalBgc}}
        showsVerticalScrollIndicator={false}>
        <View style={{backgroundColor: styleConfig.$globalBgc}}>
          <InputBar
            text="真是姓名"
            placeholder="请如实填写"
            onChangeText={ this.onChaneName.bind(this) }
            value={ this.state.userName }
            />
          <InputBar
            text="身份证号"
            placeholder="请如实填写"
            onChangeText={ this.onChangeIdCard.bind(this) }
            value={ this.state.idCard }
            />
          <GetIdCardBackgroundImage
            text="证件照片"
            description="请上传身份证正面照片"
            onPress={ () => alert('ok')}
            />
            <TouchBar
              title="现居地"
              RightChild={(
                <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                  <Text style={[globalStyle.fzd8,
                                globalStyle.lh1,
                                globalStyle.cca,
                                globalStyle.mr1
                        ]}>{ address }</Text>
                    { returnIcon }
                </View>
              )}
              onClick={ () => this.setState({showAddressPicker: !this.state.showAddressPicker}) }
              bold={ false }
              />
              <InputBar
                text="详细地址"
                placeholder="街道, 楼牌号等"
                onChangeText={ this.onChangeDetailAddress.bind(this) }
                value={ this.state.detailAddress }
                />
              <AddressPicker
                onPressConfrim={ this.onPressConfrimAddress.bind(this) }
                isShow={ this.state.showAddressPicker }
                />
              <View>
              </View>
        </View>
      </ScrollView>
    )
  }
}

export function InputBar ({
  text,
  placeholder,
  onChangeText,
  value
}){
  return (
    <View style={styles.InputBarContain}>
      <View style={styles.titleBox}>
        <Text style={[globalStyle.cca]}>{ text }</Text>
      </View>
        <TextInput
          style={styles.textInput}
          onChangeText={ onChangeText }
          placeholder={ placeholder }
          value={value}
          />
    </View>
  )
}

export function GetIdCardBackgroundImage ({
  text,
  description,
  onPress
}){
  const textColor='#b2b2b2';
  const AddIcon = (<Icon name="md-add" size={ 40 } color={textColor} />)
  return (
    <View style={styles.InputBarContain}>
      <View style={styles.titleBox}>
        <Text style={[globalStyle.cca]}>{ text }</Text>
      </View>
      <View style={styles.idCardBox}>
        <TouchableOpacity
          onPress={ onPress }
          style={styles.idCardImage}>
          <View>
            { AddIcon }
          </View>
          <View style={[globalStyle.mt1]}>
            <Text style={{color: textColor}} >{ "请上传身份证正面照片" }</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={ onPress }
          style={[styles.idCardImage, {marginTop: 15}]}>
          <View>
            { AddIcon }
          </View>
          <View style={[globalStyle.mt1]}>
            <Text style={{color: textColor}} >{ "请上传身份证反面照片" }</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

let styles = EStyleSheet.create({
  idCardImage: {
    borderStyle: 'dashed',
    borderWidth: 1,
    width: '13rem',
    height: '7rem',
    borderColor: '$globalBorder',
    borderRadius: '0.4rem',
    justifyContent: 'center',
    alignItems: 'center'
  },
  touchbarView: {
    marginTop: '0.6rem'
  },
  InputBarContain: {
    backgroundColor: '$globalWhite',
    paddingLeft: '$globalWhiteSpace',
    paddingRight: '$globalWhiteSpace',
    paddingTop: '0.75rem',
    paddingBottom: '0.75rem',
    borderBottomWidth: 1,
    borderColor: '$globalBorder',
    borderStyle: 'solid',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  idCardBox: {
    flex: 1,
    flexBasis: 1,
  },
  titleBox: {
    width: '5.5rem',
  },
  textBox: {
    flex: 1,
  },

  textInput: {
    color: '$globalColorAssist',
    fontSize: '0.9rem',
    flex: 1,
    flexBasis: 1,
  },
  html: {
    borderBottomWidth: 1,
    borderColor: '$globalBorder',
    borderStyle: 'solid',
  }
})
