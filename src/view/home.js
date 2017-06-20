import {
  View,
  Text
} from 'react-native';
import React, { Component } from 'react';
import styleConfig from '../config/config-styles';
import EStyleSheet from 'react-native-extended-stylesheet';
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchBar } from '../modules/TouchBar';

const TouchIcon = (<Icon name="ios-book" size={ 22 } color="#4F8EF7" />);
export default class Home extends Component {
  render () {
    return (
      <TouchBar
        title=" touchbar "
        IconChild={ TouchIcon }
        onClick={ () => { alert('ok') }}
        />
    )
  }
}
