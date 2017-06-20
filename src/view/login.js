'use strict'
import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput
} from 'react-native';
import styleConfig, { globalStyle } from '../config/config-styles';
import EStyleSheet from 'react-native-extended-stylesheet';
import Icon from 'react-native-vector-icons/Ionicons';
import RoundImage from '../modules/RoundImage';
import { LoginInput } from '../modules/input';

export default class Login extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <View style={[ globalStyle.bgdW]}>
        <View style={[styles.loginContainer]}>
          <RoundImage style={[ globalStyle.bb]} source={require('../modules/img/avatar@2x.png')} />
          <View>
            <Text style={[globalStyle.tc, globalStyle.mt1]}>登录注册</Text>
          </View>
        </View>
        <View style={[ globalStyle.bgdW]}>
          <LoginInput />
        </View>
      </View>
    )
  }
}

let styles = EStyleSheet.create({
  loginContainer: {
    flex: 0,
    height: '18rem',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  }
})
