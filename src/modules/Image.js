'use strict';
import {
  Image,
} from 'react-native';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styleConfig, { globalStyle } from '../config/config-styles';
import EStyleSheet from 'react-native-extended-stylesheet';
import Icon from 'react-native-vector-icons/Ionicons';

export default class AppImage extends Component  {
  constructor(props) {
    super(props);
  }
  render () {
    return(
      <Image
        {...this.props}
        onError={() => alert('image err ...')}
        onLoad={ () => console.log('image loading')}
        />
    );
  }
}


