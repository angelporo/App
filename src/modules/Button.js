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
import styleConfig, { globalStyle } from '../config/config-styles';
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
  style,
  disabled
}) {
  return (
          <Button
            style={[{backgroundColor: bgc,
                    borderColor: bgc,
                    height: 36,
                    width: '100%',
                    borderRadius: 5
            }, style]}
            textStyle={ styles.verifyButton }
            disabledStyle={styles.disabledStyle}
            onPress={onPress}
            isDisabled={ disabled }
            textStyle={{fontSize: 1*styleConfig.rem, color: styleConfig.$globalWhite}}
            >
            确定
            </Button>
  )
}

export function ProColorMessageButton ({
  text
}) {
  return (
    <View style={styles.hintBox}>
      <Text style={[globalStyle.bgcp, styles.goodsHintPer]}>{ text }</Text>
    </View>
  )
}




const styles = EStyleSheet.create({
  disabledStyle: {
    backgroundColor: '#DCD2D1',
    borderColor: '#DCD2D1'
  },
  hintBox: {
    paddingLeft: '0.2rem',
    paddingRight: '0.2rem',
    backgroundColor: '$globalColorPro',
    paddingBottom: '0.25rem',
    paddingTop: '0.25rem',
    marginLeft: '0.3rem',
    marginTop: '0.3rem',

  },
  goodsHintPer: {
    textAlign: 'center',
    lineHeight: '1rem',
    fontSize: '0.8rem',
    color: '$globalWhite'
  }
})
