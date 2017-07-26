/**
 * 编辑收货地址组件
 * Param:  param
 * Return: {undefined}
 **/
'use strict';
import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import styleConfig, { globalStyle } from '../config/config-styles';
import EStyleSheet from 'react-native-extended-stylesheet';
import Icon from 'react-native-vector-icons/Ionicons';
import { LoginInput, PassWordInput, VerifyCode } from '../modules/input';
import { HintMsg, Loading } from '../modules/hint';
import { TouchBar } from '../modules/TouchBar';
import { TextReturnButton } from './util';
import { SwitchBar } from '../modules/SwitchBar';
import AddressPicker from './AddressPicker';

export default class EditAddress extends Component {
  onNavigatorEvent(event) {
    const _this = this;
    if (event.type == 'save') {
      // 用户点击保存编辑地址按钮
    }
  }
  constructor (props) {
    super(props);
    const { sourceData, id } = this.props;
    const data = sourceData.filter( (item) => { return (item.id === id);})[0];
    this.state = {
      isFetching: false,
      editAddress: data,
      showAddressPicker: false,
      name: data.name, // 修改后的名字
      mobile: data.mobile, // 修改后的手机号
      addressDetail: data.addressDetail
    };
  }

  handleDefaultAddress (value) {
    // 设置为默认
    const { id } = this.props;
  }

  handleAddressPickerButton (province, city, district) {
    this.setState({showAddressPicker: false});
  }

  render () {
    const { type } = this.props;
    if (type === 'edit') {
      // 编辑地址页面
      const {  province, city, district, type } = this.state.editAddress;
      // TODO: 修改名字和手机号editBar
      return (
        <ScrollView style={ styles.html }>
          <View style={[styles.touchBar, globalStyle.bb]}>
            <Text>名字</Text>
            <TextInput
              value={ this.state.name }
              style={ styles.textinput }
              onChangeText={ (name) => this.setState({name}) }
              />
          </View>
          <View style={[styles.touchBar, globalStyle.bb]}>
            <Text>手机号</Text>
            <TextInput
              value={ this.state.mobile }
              style={ styles.textinput }
              maxLength={ 11 }
              keyboardType='numeric'
              onChangeText={ (mobile) => this.setState({mobile}) }
              />
          </View>
          <TouchBar
            title="所在地区"
            IconChild={ null }
            onClick={ () => this.setState({showAddressPicker: !this.state.showAddressPicker})}
            bold={ false }
            RightChild={<RightChild text={`${province}${city}${district}`} />}
            />
          <View style={[styles.touchBar, globalStyle.bb]}>
            <Text>街道</Text>
            <TextInput
              value={ this.state.addressDetail }
              style={ styles.textinput }
              onChangeText={ (addressDetail) => this.setState({addressDetail}) }
              />
          </View>
            <View style={[globalStyle.mtd5, styles.switchBar]}>
              <SwitchBar
                defaultValue={ type }
                text='设为默认'
                changeValue={ this.handleDefaultAddress.bind(this)} />
            </View>
            <AddressPicker
              onPressConfrim={ this.handleAddressPickerButton.bind(this) }
              isShow={ this.state.showAddressPicker }
              />
        </ScrollView>
      );
    }else if (type === 'add') {
      // 添加地址页面
      return (
        <View>
          <Text>add</Text>
        </View>
      );
    }
  }
};

export const RightChild = ({text}) => {
  const TouchIcon = (<Icon name="ios-arrow-forward" style={[{marginLeft: 5}, styles.textColor]} color='#6b6b6b' size={26} />);
  return (
    <View style={styles.touchBarRight}><Text style={ styles.textColor}>{ text }</Text>{ TouchIcon }</View>
  );
}

const styles = EStyleSheet.create({
  switchBar: {
  },
  touchBarRight: {
    width: '12rem',
    paddingBottom: 5,
    paddingTop: 5,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  html: {
    backgroundColor: '$globalBgc',
    height: '100%'
  },
  textColor: {
    fontSize: '0.8rem',
    color: '$globalColorAssist'
  },
  touchBar: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingRight: '$globalWhiteSpace',
    paddingLeft: '$globalWhiteSpace',
    backgroundColor: '$globalWhite'
  },
  textinput: {
    height: '2rem',
    width: '13rem',
    textAlign: 'right',
    fontSize: '0.8rem',
    color: '$globalColorAssist'
  }
});
