/**
 * NOTE: 原型图片,  登录注册,  用户头像使用
 * 默认大小为5rem
 * Param:  param
 * Return: {undefined}
 **/
import {
  View,
  Text,
  Image,
} from 'react-native';
import React, { Component } from 'react';
import styleConfig from '../config/config-styles';
import EStyleSheet from 'react-native-extended-stylesheet';

export default function RoundImage ({
  style,
  source,
}) {
  return (
      <View style={[styles.avatarPic, style]}>
      <Image
    style={ [styles.avatarPic]}
    source={ source }
      />
      </View>
  );
}

const styles = EStyleSheet.create({
  avatarPic: {
    width: '5rem',
    height: '5rem',
    borderRadius: '2.5rem',
    overflow: 'hidden'
  }
});
