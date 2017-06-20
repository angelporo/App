/**
 * 按钮组件页面
 * Param:  param
 * Return: {undefined}
 **/
import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import styleConfig from '../config/config-styles';
import Icon from 'react-native-vector-icons/Ionicons';
import Button from 'apsl-react-native-button';

/**
 * 登录不带图标button
 * Param:  param
 * Return: { undefined }
 **/
export function LoginButton ({
  bgc,
  onPress,
  style
}) {
  return (
          <Button
            style={[{backgroundColor: bgc,
                    borderColor: bgc,
                    height: 36,
                    width: '100%',
                    borderRadius: 5
            }, style]}
            onPress={onPress}
                  textStyle={{fontSize: 1*styleConfig.rem, color: styleConfig.$globalWhite}}>
            确定
            </Button>
  )
}

const styles = EStyleSheet.create({
})
