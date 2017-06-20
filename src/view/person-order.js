/**
 * NOTE: 个人中心 头部订单 list组件
 * Param:  param
 * Return: { jsx }
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
import {TouchableIconButton} from '../modules/Button';
import {TouchBar} from '../modules/TouchBar';

const OrderIcon = (<Icon name="ios-book" size={ 22 } color="red" />);
/**
 * 个人中心 全部订单list
 * Param:  param
 * Return: {undefined}
 **/
export default class PersonOrder extends Component {
  constructor(props){
    super(props);
  };

  render () {
    const { touchText, text  } = this.props;
    return (
      <View>
        <View>
          <TouchBar
            title={ touchText }
            IconChild={ OrderIcon }
            isTouch={false}
            />
        </View>
        <View style={ styles.contanier}>
          <TouchableOpacity style={ styles.item} onPress={ () => {alert('la')} }>
            <View style={ styles.itemIcon}>
              <Icon name="md-reorder" color='#42CEFB' size={40} />
              </View>
            <Text style={styles.text}>{ touchText }</Text>
          </TouchableOpacity>
          <TouchableOpacity style={ styles.item} onPress={ () => {alert('la')} }>
            <View style={ styles.itemIcon}>
              <Icon name="md-reorder" color='#42CEFB' size={40} />
              </View>
            <Text style={styles.text}>{ text }</Text>
          </TouchableOpacity>
          <TouchableOpacity style={ styles.item} onPress={ () => {alert('la')} }>
            <View style={ styles.itemIcon}>
              <Icon name="md-reorder" color='#42CEFB' size={40} />
              </View>
            <Text style={styles.text}>{ text }</Text>
          </TouchableOpacity>
          <TouchableOpacity style={ styles.item} onPress={ () => {alert('la')} }>
            <View style={ styles.itemIcon}>
              <Icon name="md-reorder" color='#42CEFB' size={40} />
              </View>
            <Text style={styles.text}>{ text }</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}
const styles = EStyleSheet.create({
  contanier:{
    backgroundColor: '$globalWhite',
    paddingBottom: '0.7rem',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  item: {
    flex: 1,
    alignItems: 'center'
  },
  itemIcon: {
    height: '2.5rem'
  },
  text: {
    fontSize: '1rem'
  }
})
