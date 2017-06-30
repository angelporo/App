'use strict';
import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Button
} from 'react-native';
import styleConfig, { globalStyle } from '../config/config-styles';
import EStyleSheet from 'react-native-extended-stylesheet';
import Icon from 'react-native-vector-icons/Ionicons';

export default class CounterBar extends Component {
  constructor(props){
    super(props);

    this.state = {
      num: props.num || "1",
      maxGoods: props.stock || 999999
    }
  }

  handleReduce() {
    if (this.state.num <= 1) {
      return;
    }
    this.setState({
      num: (parseInt(this.state.num) - 1) + ''
    })
  }

  handleAdd () {
    if (parseInt(this.state.num) > parseInt(this.props.stock)) {
      return;
    }
    this.setState({
      num: (parseInt(this.state.num) + 1) + ''
    })
  }

  render () {
    let num = parseInt(this.state.num)
    let disbaleReduce = num <= 1 ? {color: styleConfig.$globalBorder} : {}
    let disbaleAdd = parseInt(this.state.num) >= parseInt(this.props.stock) ? {color: styleConfig.$globalBorder} : {}
    return(
      <View style={styles.box}>
        <View style={styles.buttonLeft}>
          <TouchableOpacity
            style={styles.button}
            onPress={ () => this.handleReduce.bind(this)()}>
              <Text style={[styles.reduce, disbaleReduce]}>-</Text>
           </TouchableOpacity>
         </View>
         <View style={ styles.numInput }>
           <TextInput
             style={styles.input}
             value={ this.state.num }
              />
          </View>
          <View style={styles.buttonRight}>
            <TouchableOpacity
              style={styles.button}
              onPress={ () => this.handleAdd.bind(this)()}>
              <Text style={[styles.add, disbaleAdd]}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
    )
  }
}

let styles = EStyleSheet.create({
  box: {
    width: 60,
    height: 20,
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
    width: '100%',
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
