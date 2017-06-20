/**
 * 按钮组件页面
 * Param:  param
 * Return: {undefined}
 **/
import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
  TouchableOpacity
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import styleConfig from '../config/config-styles';
import Icon from 'react-native-vector-icons/Ionicons';

/**
 * 纵向平均分布带图标按钮 ,  依赖父组件flex: 1
 * Param:  param
 * Return: {undefined}
 **/
export function TouchableIconButton ({
  onClick,
  text,
  fontSize=30,
  style
}) {
  return (
    <TouchableOpacity style={ [style, styles.item]} onPress={ onClick }>
      <Icon name="ios-arrow-forward" color='#6b6b6b' size={fontSize} />
      <Text>{ text }</Text>
    </TouchableOpacity>
  )
}

const styles = EStyleSheet.create({
  item: {
    backgroundColor: '$globalWhite'
  }
})

