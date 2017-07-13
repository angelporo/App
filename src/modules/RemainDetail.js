/**
 * 账户余额明细
 * Param:  param
 * Return: {undefined}
 **/
import {
  View,
  Text,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  FlatList
} from 'react-native';
import React, { Component } from 'react';
import styleConfig, { globalStyle, refreshColor } from '../config/config-styles';
import EStyleSheet from 'react-native-extended-stylesheet';
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchBar, ViewTouchTitleBar } from '../modules/TouchBar';
import { RemainDetailItem } from './util'

const IntrgralIcon = (<Icon name="ios-aperture" size={ 22 } color="red" />);
const testData = [{title: '转给朋友', time: '2018-06-12', num: '-33', result: '成功'}, {title: '转给朋友', time: '2018-06-12', num: '-33', result: '成功'}, {title: '转给朋友', time: '2018-06-12', num: '-33', result: '成功'}, {title: '转给朋友', time: '2018-06-12', num: '-33', result: '成功'}, {title: '转给朋友', time: '2018-06-12', num: '-33', result: '成功'}, {title: '转给朋友', time: '2018-06-12', num: '-33', result: '成功'}, {title: '转给朋友', time: '2018-06-12', num: '-33', result: '成功'}, {title: '转给朋友', time: '2018-06-12', num: '-33', result: '成功'}, {title: '转给朋友', time: '2018-06-12', num: '-33', result: '成功'}, {title: '转给朋友', time: '2018-06-12', num: '-33', result: '成功'}, {title: '转给朋友', time: '2018-06-12', num: '-33', result: '成功'}, {title: '转给朋友', time: '2018-06-12', num: '-33', result: '成功'}, {title: '转给朋友', time: '2018-06-12', num: '-33', result: '成功'}, {title: '转给朋友', time: '2018-06-12', num: '-33', result: '成功'}]


export default class RemainDetail extends Component {
  static navigatorStyle = {
    navBarHidden: true,
  }

  constructor (props) {
    super(props);
    this.state = {
      detailData: testData
    }
  }
  render () {
    return (
      <View style={{position: 'relative', height: '100%'}}>
        <ScrollView
          style={{backgroundColor: styleConfig.$globalBgc,}}
          showsVerticalScrollIndicator={false}>
          <View style={[globalStyle.mtd5, globalStyle.bgdW]}>
            <View style={styles.header}>
              <Text style={styles.lh2}>当日收益(元)</Text>
              <Text style={[globalStyle.cpus, {color: styleConfig.$globalColorPro}, styles.remainNum]}>+666.66</Text>
              <Text style={styles.lh2}>账户余额$6666.00</Text>
            </View>
          </View>
          <View style={[styles.disableBox, globalStyle.bgdW, globalStyle.px1]}>
            <View style={styles.disableLeft}>
              <Text style={styles.disableNumText}>可用余额(元)</Text>
              <Text style={styles.disableNumText}>60000</Text>
            </View>
            <View style={styles.paceholderBox}></View>
            <View style={styles.disableRight}>
              <Text style={styles.disableNumText}>可用余额(元)</Text>
              <Text style={styles.disableNumText}>60000</Text>
            </View>
          </View>
          <View style={[globalStyle.px1, globalStyle.bb, globalStyle.pyd5]}>
            <Text style={[globalStyle.cca]}>收支明细</Text>
          </View>
          <View style={[globalStyle.bgdW]}>
            <FlatList
              data={this.state.detailData}
              renderItem={ ({ item}) => <RemainDetailItem time={item.time} title={item.title} result={item.result} num={item.num} />}
              />
          </View>
        </ScrollView>
        <View style={styles.detailBottomBox}>
          <TouchableOpacity
            onPress={ () => alert('转到零钱')}
            style={styles.buttonAc}>
            <Text style={globalStyle.cca}>转至零钱</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={ () => alert('转到零钱')}
            style={styles.buttonPc}>
            <Text style={[globalStyle.cw,]}>消费</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

let styles = EStyleSheet.create({
  scriptionText: {
    color: '$globalColorAssist',
    fontSize: '0.8rem',
  },
  buttonAc: {
    backgroundColor: '#d5d5d5',
    width: '45%',
    paddingTop: '0.7rem',
    paddingBottom: '0.7rem',
    alignItems: 'center',
    borderRadius: '0.5rem',
  },
  buttonPc: {
    backgroundColor: '$globalColorPro',
    width: '45%',
    marginLeft: '0.5rem',
    paddingTop: '0.7rem',
    paddingBottom: '0.7rem',
    alignItems: 'center',
    borderRadius: '0.5rem',
  },
  detailBottomBox: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingBottom: '0.5rem', 
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  remainNum: {
    fontSize: '2rem',
  },
  disableBox: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: '1rem',
    paddingTop: '1rem',
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderColor: '$globalBorder'
  },
  disableRight: {
    width: '50%',
    alignItems: 'flex-end',
  },
  paceholderBox: {
    backgroundColor: '$globalBorder',
    width: 1,
    height: '2.5rem',
  },
  disableLeft: {
    width: '50%',
  },
  lh2: {
    lineHeight: '2rem',
    color: '$globalColorAssist',
  },
  disableNumText: {
    color: '$globalColorAssist',
    lineHeight: '2rem',
  }
})
