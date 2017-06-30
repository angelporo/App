'use strict';
import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ImagePickerIOS,
  ActivityIndicator,
} from 'react-native';
import styleConfig, { globalStyle } from '../config/config-styles';
import EStyleSheet from 'react-native-extended-stylesheet';
import Icon from 'react-native-vector-icons/Ionicons';
import RoundImage from '../modules/RoundImage';
import { LoginInput, PassWordInput, VerifyCode } from '../modules/input';
import { LoginButton } from '../modules/Button';
import { HintMsg, Loading } from '../modules/hint';


export default class Login extends Component {
  constructor (props) {
    super(props);
    this.state = {
      abbleColor: styleConfig.$globalColorPro,
      isLoading: true
    };
  }

  render () {
    return (
      <View>
        <HintMsg msg={ '发布成功' }  closeMsgBefor={() => {} } />
          <Loading isShow={ true }  />
          <View style={[ globalStyle.bgdW, styles.loginPage]}>
            <View style={[styles.loginContainer]}>
              <RoundImage style={[ globalStyle.bb]} source={require('../modules/img/avatar@2x.png')} />
              <View>
                <Text style={[globalStyle.tc, globalStyle.mt1]}>登录注册</Text>
              </View>
            </View>
            <View style={[ globalStyle.bgdW]}>
              <LoginInput />
            </View>
            <View style={[ globalStyle.bgdW]}>
              <PassWordInput />
            </View>
            <VerifyCode text="获取验证码" />
            <View style={[globalStyle.mt1, styles.loginBottom]}>
              <LoginButton bgc={ this.state.abbleColor }
                           disabled={ false }
                           onPress={ () => {
                             alert(ImagePickerIOS.openSelectDialog);
                }} />
                <View style={[globalStyle.flexEnd]}>
                  <TouchableOpacity
                    style={[styles.LoginHint, globalStyle.mt1]}
                    onPress={ () => alert('使用验证码登录')}
                    >
                    <Text style={[globalStyle.textColorPro, globalStyle.tr, globalStyle.fzd8]}>使用验证码登录</Text>
                  </TouchableOpacity>
                </View>
            </View>
          </View>
      </View>
    );
  }
}

let styles = EStyleSheet.create({
  loginContainer: {
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
    height: '13rem',
    width: '100%',
  },
  loginPage: {
    height: '$height'
  },
  loginBottom: {
    paddingLeft: '2rem',
    paddingRight: '2rem'
  },
  LoginHint: {
    width: '8rem',
  }
})
