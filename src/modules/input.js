/**
 * NOTE: 项目中所有input框
 * Param:  param
 * Return: {undefined}
 **/
'use strict'
import React, { Component } from 'react';
import {
  View,
  TextInput,
  Picker
} from 'react-native';
import styleConfig, { globalStyle } from '../config/config-styles';
import EStyleSheet from 'react-native-extended-stylesheet';
import Icon from 'react-native-vector-icons/Ionicons';

export class LoginInput extends Component {
  constructor(props) {
    super(props);
    this.state = { placeholder: '请输入手机号' ,
                   value: 'hah'};
  }

  render() {
    return (
      <View>
      <TextInput
        style={styles.loginInput}
        keyboardType="numeric"
        onChangeText={(text) => this.setState({text})}
        placeholder={this.state.placeholder}
        { ...this.props }
        />
        <Picker
          selectedValue={'hah'}
          onValueChange={(lang) => alert(lang)}>
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
        </Picker>
      </View>
    );
  }
}

// TODO: 登录注册input框样式

let styles = EStyleSheet.create({
  loginInput: {
    height: '3rem',
    fontSize: '0.8rem',
  }
})
