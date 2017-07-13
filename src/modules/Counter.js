'use strict';
import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import styleConfig, { globalStyle } from '../config/config-styles';
import EStyleSheet from 'react-native-extended-stylesheet';
import Icon from 'react-native-vector-icons/Ionicons';

export default class CounterBar extends Component {
  constructor(props){
    super(props);
  }
  static propTypes = {
    num: PropTypes.number,// 购买数量
    stock: PropTypes.number,  // 库充
    onPressAdd: PropTypes.func,
    onPressReduce: PropTypes.func
  }
  handleReduce() {
    let { num, onPressReduce } = this.props;
    if (num <= 1) {
      alert('最少只能买一个!');
      return;
    }
    onPressReduce(); //修改外部传进来的num状态
  }

  handleAdd () {
    let { num, stock, onPressAdd  } = this.props;
    if (parseInt(num) >= parseInt(stock)) {
      alert('没有库存了!');
      return;
    }
    onPressAdd();
  }

  render () {
    let { num, stock } = this.props;
    let IntNum = parseInt(num);
    let disbaleReduce = IntNum <= 1 ? {color: styleConfig.$globalBorder} : {};
    let disbaleAdd = IntNum >= parseInt(stock) ? {color: styleConfig.$globalBorder} : {};
    return(
      <View style={styles.box}>
          <TouchableOpacity
            style={styles.buttonLeft}
            onPress={ () => this.handleReduce.bind(this)()}>
              <Text style={[styles.reduce, disbaleReduce]}>-</Text>
           </TouchableOpacity>
         <View style={ styles.numInput }>
           <TextInput
             style={styles.input}
             value={ num }
              />
          </View>
            <TouchableOpacity
              style={styles.buttonRight}
              onPress={ () => this.handleAdd.bind(this)()}>
              <Text style={[styles.add, disbaleAdd]}>+</Text>
            </TouchableOpacity>
        </View>
    )
  }
}

let styles = EStyleSheet.create({
  $buttonWidth: 26,
  box: {
    width: 80,
    height: 22,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '$globalBorder',
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '$globalWhite'
  },
  button: {
    // width: '$buttonWidth',
    // height: '$buttonWidth',
  },
  buttonLeft: {
    flex: 1,
    justifyContent: 'center',
    borderStyle: 'solid',
    borderRightColor: '$globalBorder',
    borderRightWidth: 1,
  },
  reduce: {
    alignItems: 'center',
    textAlign: 'center'
  },
  input: {
    fontSize: '0.7rem',
    textAlign: 'center',
    zIndex: 100,
  },
  numInput: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonRight: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderStyle: 'solid',
    borderLeftColor: '$globalBorder',
    borderLeftWidth: 1,
  },
  add: {
    textAlign: 'center',
  }
})
