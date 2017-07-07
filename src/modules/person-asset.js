/**
 * NOTE: 个人中心 头部订单 个人资产组件
 * Param:  param
 * Return: { jsx }
 **/
'use strict';
import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  FlatList
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import styleConfig from '../config/config-styles';
import Icon from 'react-native-vector-icons/Ionicons';
import {TouchableIconButton} from '../modules/Button';
import {TouchBar} from '../modules/TouchBar';
const OrderIcon = (<Icon name="ios-book" size={ 22 } color="#f60" />);

//个人中心 资产数据
const data= [{
        id: 1,
        icon: (<Icon name="ios-book" size={ 20 } color="red" />),
        onPress: (id) => {alert(id)},
        type: '账户余额',
        num: 2029,
      }, {
        id: 1,
        icon: (<Icon name="ios-book" size={ 20 } color="red" />),
        onPress: () => {alert(this.id)},
        type: '账户余额',
        num: 2029,
      }, {
        id: 1,
        icon: (<Icon name="ios-book" size={ 20 } color="red" />),
        onPress: () => {alert(this.id)},
        type: '账户余额',
        num: 2029,
      }, {
        id: 1,
        icon: (<Icon name="ios-book" size={ 20 } color="red" />),
        onPress: () => {alert(this.id)},
        type: '账户余额',
        num: 2029,
      }, {
        id: 1,
        icon: (<Icon name="ios-book" size={ 20 } color="red" />),
        onPress: () => {alert(this.id)},
        type: '账户余额',
        num: 2029,
      }]
/**
 * NOTE: 个人中心 全部订单list
 * Param:  param
 * Return: {undefined}
 **/
export default class PersonAssetComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
   }
  }
  render () {
    let { style, hintTitle,  } = this.props;
    return (
      <View style={[ style ]}>
        <TouchBar title={ hintTitle } IconChild={ OrderIcon } isTouch={false} />
          {/*横向列表*/}
          <FlatList
            horizontal={true}
            data={data}
            renderItem={ ({ item }) => <PersonAssetItem data={item} />}
            />
      </View>
    )
  }
}

/**
 * NOTE: 横向列表item
 * Param:  param
 * Return: {undefined}
 **/
export function PersonAssetItem ({data}) {
  return (
    <TouchableOpacity style={ styles.item} onPress={ () => {data.onPress(data.id)} }>
      <View style={ styles.itemIcon }>
        { data.icon }
      </View>
      <Text style={ styles.number }>{ data.num }</Text>
      <Text style={ styles.text }>{ data.type }</Text>
    </TouchableOpacity>
  )
}

const styles = EStyleSheet.create({
  itemIcon: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    width: 78,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '$globalWhite',
    paddingTop: '0.5rem',
    paddingBottom: '0.5rem',
  },
  text: {
    fontSize: '0.8rem'
  },
  number: {
    color: '#f60',
    fontSize: '0.8rem'
  }

})
