/**
 * HOC 下拉刷新组件
 * Param: param
 * Return: { undefined }
 **/
'use strict';
import {
  View,
  ScrollView,
  RefreshControl,
} from 'react-native';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styleConfig, { globalStyle, refreshColor } from '../config/config-styles';
import EStyleSheet from 'react-native-extended-stylesheet';
import Icon from 'react-native-vector-icons/Ionicons';

export const HOCRefetch = WrappedCompnoent =>
  ({url,
    data,
    sources,
    isRefetch=true
   }) => class HOC extends Component {
  constructor (props) {
    super(props);
  }
  componentWillMount () {

  }
  render () {
    return (
      <ScrollView
        contentContainerStyle={styles.homeView}
        refreshControl={
          isRefetch ?
            <RefreshControl
                refreshing={false}
                onRefresh={ () => alert('下拉成功')}
                tintColor="#ff0000"
                title="下拉刷新"
                titleColor={ styleConfig.$globalColorPro }
                colors={ refreshColor }
                progressBackgroundColor="#ffff00"
            /> :
          null
      }
      >
      { WrappedCompnoent }
      </ScrollView>
    );
  }
};

const styles = EStyleSheet.create({
  homeView: {
    backgroundColor: '$globalWhite'
  }
});
