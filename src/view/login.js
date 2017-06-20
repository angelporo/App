'use strict'
import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import styleConfig, { globalStyle } from '../config/config-styles';
import EStyleSheet from 'react-native-extended-stylesheet';
import Icon from 'react-native-vector-icons/Ionicons';
import RoundImage from '../modules/RoundImage';
import { LoginInput, PassWordInput } from '../modules/input';
import { LoginButton } from '../modules/Button'


export default class Login extends Component {
  constructor (props) {
    super(props);
    this.state = {
      abbleColor: styleConfig.$globalColorPro,
    }
  }

  render () {
    return (
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
        <View style={[globalStyle.tc, globalStyle.mt1, styles.loginBottom]}>
          <LoginButton bgc={ this.state.abbleColor }
                       onPress={ () => alert('login...')} />
            <View style={[globalStyle.flexEnd]}>
              <TouchableOpacity
                style={[styles.LoginHint, globalStyle.mt1]}
                onPress={ () => alert('使用验证码登录')}
                >
                <Text style={[globalStyle.textColorPro, globalStyle.tr]}>使用验证码登录</Text>
              </TouchableOpacity>
            </View>
        </View>
      </View>
    )
  }
}

let styles = EStyleSheet.create({
  loginContainer: {
    flex: 0,
    height: '13rem',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  loginPage: {
    height: '$height'
  },
  loginBottom: {
    paddingLeft: '2rem',
    paddingRight: '2rem'
  },
  LoginHint: {
    fontSize: '0.8rem',
    width: '8rem',
    textAlign: 'right'
  }
})
