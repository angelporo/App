import {
  View,
  Text,
  ScrollView,
  Dimensions,
  StatusBar,
  RefreshControl,
  AsyncStorage
} from 'react-native';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styleConfig, { globalStyle } from '../config/config-styles';
import EStyleSheet from 'react-native-extended-stylesheet';
import Icon from 'react-native-vector-icons/Ionicons';

/**
 * 抽象在本机永久储存key, value数据
 * Param: param
 * Return: {undefined}
 **/
export class Storage {
  /**
   * 获取之前储存的数据
   * Param: param
   * Return: { undefined }
   **/
  static get( key ) {
    return AsyncStorage.getItem( key ).then((value) => {
      const jsonValue = JSON.parse( value );
      return jsonValue;
    });
  }

  /**
   * 设置初始值
   * Param: param
   * Return: {undefined}
   **/
  static set(key, value) {
    return AsyncStorage.setItem(key, JSON.stringify(value));
  }

  /**
   * 更新已有值
   * Param: param
   * Return: {undefined}
   **/
  static update (key, value) {
    return Storage.get(key).then((item) => {
      value = typeof value === 'string' ? value : Object.assign({}, item, value);
      return AsyncStorage.setItem(key, JSON.stringify(value));
    });
  }

  /**
   * 删除已有值
   * Param: param
   * Return: { undefined }
   **/
  static delete(key) {
    return AsyncStorage.removeItem(key);
  }
}
