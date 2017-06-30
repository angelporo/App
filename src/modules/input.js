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
  Picker,
  Text,
  TouchableOpacity,
} from 'react-native';
import styleConfig, { globalStyle } from '../config/config-styles';
import EStyleSheet from 'react-native-extended-stylesheet';
import Button from 'apsl-react-native-button';
import Icon from 'react-native-vector-icons/Entypo';

const loginHintColor = "#8B7778";
const LoginIcon = (<Icon name="mobile" size={ 16 } color={loginHintColor} />);
const PasswordIcon = (<Icon name="lock" size={ 16 } color={loginHintColor} />);
const EyeIcon = (<Icon name="eye" size={ 16 } color={ loginHintColor } />);
const UnableEye = ( <Icon name="eye-with-line" size={ 16 } color={ loginHintColor} />)
const EmailIcon = (<Icon name="mail" size={ 16 } color={loginHintColor} />);
const DownTriangleIcon =  (<Icon name="triangle-down" size={ 16 } color={loginHintColor} />);
export class LoginInput extends Component {
  constructor(props) {
    super(props);
    this.state = { placeholder: '请输入手机号' ,
                   value: ''
                 };
  }

  render() {
    return (
      <View style={[styles.container]}>
        <View style={ styles.inputIcon}>
          { LoginIcon }
        </View>
        <TouchableOpacity
          onPress={ () => { alert('click select address icons')}}
          style={[styles.selectAddressNumber, globalStyle.flexCenter]}>
          <Text style={styles.selectText}>+86</Text>
          <Text style={{marginLeft: 3, marginTop: 2}}>{ DownTriangleIcon }</Text>
        </TouchableOpacity>
        <View style={[styles.inputBox]}>
          <TextInput
            style={styles.loginInput}
            keyboardType="numeric"
            onChangeText={(text) => this.setState({text})}
            placeholder={this.state.placeholder}
            { ...this.props }
            />
        </View>
      </View>
    );
  }
}

export class PassWordInput extends Component {
  constructor (props) {
    super(props);
    this.state = {
      placeholder: '请输入密码',
      textEntry: true
    }
  }
  render () {
    return(
      <View style={[styles.container]}>
        <View style={ styles.inputIcon}>
          { PasswordIcon }
        </View>
        <View
          style={[styles.selectAddressNumber, globalStyle.flexCenter]}>
        </View>
        <View style={[styles.inputBox, styles.passwordInput]}>
          <TextInput
            style={styles.password}
            keyboardType="email-address"
            secureTextEntry={ this.state.textEntry }
            onChangeText={(text) => this.setState({text})}
            placeholder={this.state.placeholder}
            { ...this.props }
            />
            <TouchableOpacity
              onPress={ () => this.setState({ textEntry: !this.state.textEntry })}
              >
              <Text style={styles.passwordEyeIcon}>{ this.state.textEntry ? EyeIcon : UnableEye  }</Text>
            </TouchableOpacity>
        </View>
      </View>
    )
  }
}

/**
 * NOTE: 登录注册验证码input
 * Param:  param
 * Return: {undefined}
 **/

export class VerifyCode extends Component {
  constructor (props) {
    super(props);
    this.state = {
      placeholder: '输入验证码',
      disable: true,
      time: 90
    }
  }

  render () {
    let { text } = this.props;
    return(
      <View style={[styles.container]}>
        <View style={ styles.inputIcon}>
          { EmailIcon }
        </View>
        <View
          style={[styles.selectAddressNumber, globalStyle.flexCenter]}>
        </View>
        <View style={[styles.inputBox, styles.passwordInput]}>
          <TextInput
            style={styles.password}
            keyboardType="numeric"
            onChangeText={(text) => this.setState({text})}
            placeholder={this.state.placeholder}
            { ...this.props }
            />
            <Button
              title={ text }
              style={styles.verifyButtonBox }
              textStyle={ styles.verifyButton }
              disabledStyle={styles.disabledStyle}
              isDisabled={ this.state.disable }
              onPress={ () => alert('获取验证码')}
              >
              { this.state.disable ? this.state.time : text }
            </Button>
        </View>
      </View>
    )
  }
}


let styles = EStyleSheet.create({
  loginInput: {
    height: '2rem',
    fontSize: '0.8rem',
    paddingLeft: '4rem',
    color: loginHintColor
  },
  password: {
    flex: 1,
    height: '3rem',
    width: '12rem',
    fontSize: '0.8rem',
    paddingLeft: '0.5rem',
    color: loginHintColor
  },
  container: {
    paddingBottom: '1rem',
    paddingLeft: '3rem',
    paddingRight: '3rem',
    width: '100%',
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    left: '-2rem'
  },
  inputIcon: {
    position: 'relative',
    left: '3.5rem'
  },
  selectText: {
    color: loginHintColor
  },
  inputBox: {
    borderBottomColor: '$globalBorder',
    borderBottomWidth: 1,
    borderStyle: 'solid',
    width: '100%'
  },
  selectAddressNumber: {
    width: '4rem',
    position: 'relative',
    left: '4rem',
    zIndex: 1,
  },
  verifyButton: {
    color: '$globalWhite',
    fontSize: '0.8rem',
  },
  verifyButtonBox: {
    backgroundColor: '$globalColorPro',
    width: '5rem',
    marginTop: '0.4rem',
    height: '2rem',
    borderRadius: '0.2rem',
    marginBottom: 0 ,
    overflow: 'hidden',
    borderColor: '$globalColorPro',
    flex: 0,
  },
  passwordInput: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  disabledStyle: {
    backgroundColor: '#DCD2D1',
    borderColor: '#DCD2D1'
  }
})
