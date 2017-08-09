/**
 * 查看物流组件
 * Param:  param
 * Return: {undefined}
 **/
import {
  ScrollView,
  TouchableOpacity,
  FlatList,
  ListView,
  Image,
} from 'react-native';
import React, { Component } from 'react';
import styleConfig, { globalStyle, refreshColor } from '../config/config-styles';import EStyleSheet from 'react-native-extended-stylesheet';
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchBar, ViewTouchTitleBar } from '../modules/TouchBar';
import Alert from '../modules/Alert';
import { createAnimatableComponent, View, Text } from 'react-native-animatable';
import AppImage from './Image';
import * as util from '../redux/utils/util';
const deleteIcon = (<Icon name="ios-trash-outline" size={ 22 } color={'#929292'} />);
// 动画初始化
const AnimatableListView = createAnimatableComponent(ScrollView);

export default class LookLogitics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logiticsState: '已派送',
      goodsLogo: this.props.item.goodsLogo
    };
  }

  componentWillUnmount() {
  }
  componentDidMount() {

  }

  render () {
    return (
      <ScrollView style={styles.html}>
        <View style={[globalStyle.flexStart,
                      globalStyle.px1,
                      globalStyle.bgdW,
                      globalStyle.mtd5
              ]}>
          <AppImage
            style={styles.goodsLogo}
            resizeMode={Image.resizeMode.contain}
            source={{uri: this.state.goodsLogo}}
            />
          <View style={[]}>
            <Text style={[globalStyle.fzd8]}>{`物流状态: ${this.state.logiticsState}`}</Text>
            <Text style={[globalStyle.fzd8]}>{`物流公司: ${this.state.logiticsState}`}</Text>
            <Text style={[globalStyle.fzd8]}>{`快递单号: ${this.state.logiticsState}`}</Text>
            <Text style={[globalStyle.fzd8]}>{`官方电话: ${this.state.logiticsState}`}</Text>
          </View>
        </View>
        <View style={[styles.logiticsBox]}>
          <View>
            <TimelineEvent sourceData={[
                             {text: '太原高新区分布的派件一件搜, 感谢使用中通快递', time: '2015-03-23 10:23:50', courrent: 1, index: 3},
                             {text: '您的订单支付成功 ,  等候商家处理, 您的订单支付成功, 您的订单支付成功, 您的订单支付成功', time: '2015-03-23 10:23:50', courrent: 0, index: 1},
                             {text: '太原高新区分布的派件一件搜, 感谢使用中通快递', time: '2015-03-23 10:23:50', courrent: 0, index: 2},
                             {text: '太原高新区分布的派件一件搜, 感谢使用中通快递', time: '2015-03-23 10:23:50', courrent: 0, index: 1},
                             {text: '太原高新区分布的派件一件搜, 感谢使用中通快递', time: '2015-03-23 10:23:50', courrent: 0, index: 0}
                           ]}
                           />
          </View>
        </View>
      </ScrollView>
    );
  }
}

export class TimelineEvent extends Component {
  constructor (props) {
    super(props);
    this.state = {
      data: props.sourceData
    };
  }

  itemComponent ({item, index}) {
    return (
      <View style={[ item.index !== 0 ?
                     styles.lineTimeItem
                     : styles.lineTimeItemOne,
                     styles.timeLIneTimeBox
            ]} key={index}>
        <View style={ item.courrent ?
                      styles.markerStand :
                      styles.markerDefault
              }></View>
        <View style={ styles.timeLineText }>
          <Text style={[ styles.timeLineItem ]}>{ item.text }</Text>
          <Text style={ styles.timeLineItemTime }>{ item.time }</Text>
        </View>
      </View>
    );
  }

  render () {
    return (
      <View style={[globalStyle.pyd5,
                    styles.timeLineBox
            ]}>
      <FlatList
        data={ this.state.data }
        renderItem={ this.itemComponent.bind( this ) }
        />
      </View>
    );
  }
}

const styles = EStyleSheet.create({
  html: {
    backgroundColor: '$globalBgc',
    height: '100%'
  },
  logiticsBox: {
    backgroundColor: '$globalWhite',
    marginTop: '0.5rem'
  },
  goodsLogo: {
    width: '5rem',
    height: '5rem'
  },
  timeLineItem: {
    paddingTop: '0.2rem',
    color: '$globalColorAssist',
    lineHeight: '1.2rem',
    fontSize: '0.8rem'
  },
  timeLineItemTime: {
    fontSize: '0.8rem',
    lineHeight: '1rem',
    color: '$globalColorAssist'
  },
  lineTimeItem: {
    borderStyle: 'solid',
    borderLeftWidth: 1,
    borderLeftColor: '$globalBorder',
    position: 'relative',
    marginLeft: 8,
    marginRight: 8
  },
  lineTimeItemOne: {
    borderStyle: 'solid',
    borderLeftWidth: 0,
    borderLeftColor: '$globalBorder',
    position: 'relative',
    marginLeft: 8,
    marginRight: 8
  },
  markerStand: {
    width: '0.7rem',
    height: '0.7rem',
    borderRadius: '0.35rem',
    backgroundColor: 'red',
    position: 'absolute',
    left: -6,
    top: 0,
    zIndex: 12
  },
  markerDefault: {
    width: '0.5rem',
    height: '0.5rem',
    borderRadius: '0.25rem',
    backgroundColor: '$globalBgc',
    position: 'absolute',
    left: -4,
    top: 0,
    zIndex: 12
  },
  timeLineBox: {
    marginLeft: 8,
    marginRight: 8
  },
  placeholderBox: {
    height: 16
  },
  timeLineText: {
    position: 'relative',
    left: 0,
    top: -8
  },
  timeLIneTimeBox: {
    minHeight: '4rem',
    maxHeight: '10rem',
    paddingLeft: '0.5rem'
  }
});
