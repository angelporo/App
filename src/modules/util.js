import {
  View,
  Text,
  ScrollView,
  Dimensions,
  StatusBar,
  RefreshControl,
} from 'react-native';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styleConfig, { globalStyle } from '../config/config-styles';
import EStyleSheet from 'react-native-extended-stylesheet';
import Icon from 'react-native-vector-icons/Ionicons';

const descriptionTextColor="#6b6b6b";

/**
 *
 * Param:  param
 * Return: { 可点击touchBar后面部分带 又剪头图标和少量描述文字component }
 **/
export function TextReturnButton ({descriptionNode}) {
  const returnIcon = (<Icon name="ios-arrow-forward" color={descriptionTextColor} size={22} />);
  return (
    <View style={styles.flexEnd}>
      <View style={styles.rightBarScription}>
        { descriptionNode }
      </View>
      <View>
        { returnIcon }
      </View>
    </View>
  )
}

/**
 *
 * Param:  param
 * Return: { 账户各种余额分类明细行,  }
 **/
export function RemainDetailItem ({title,
                                   time,
                                   num,
                                   result
                                  }) {
  return (
    <View style={[globalStyle.px1]}>
      <View style={[styles.detailRow ]}>
        <View style={styles.flexAutoWidth}>
          <Text style={styles.DetailItemTitle}>{ title }</Text>
          <Text style={[styles.DetailItemTitle, {
                  color: descriptionTextColor
                }]}>{ time }</Text>
        </View>
        <View>
          <Text style={styles.detailitemNum}>{ num }</Text>
          { result ? <Text style={[styles.detailitemNum, {
                             color: descriptionTextColor,
                             fontSize: 12
                           }]}>{ result }</Text> : null }
        </View>
      </View>
    </View>
  )
}


let styles = EStyleSheet.create({
  touchbarView: {
    marginTop: '0.6rem'
  },
  DetailItemTitle: {
    lineHeight: '2rem',
  },
  detailitemNum: {
    lineHeight: '1.5rem',
  },
  detailRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderColor: '$globalBorder',
  },
  flexAutoWidth: {
  },
  starBox: {
    paddingLeft: '$globalWhiteSpace',
    paddingRight: '$globalWhiteSpace'
  },
  flexEnd: {
    flexDirection: "row",
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  rightBarScription: {
    marginRight: '0.5rem',
  },
  scriptionText: {
    color: '$globalColorAssist',
  }
})
