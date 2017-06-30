'use strict';
import {
  View, 
  Image,
} from 'react-native';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styleConfig, { globalStyle } from '../config/config-styles';
import EStyleSheet from 'react-native-extended-stylesheet';
import Icon from 'react-native-vector-icons/Ionicons';

export default function ImageContain({style={width: '100%', height: '100%'},
                                uri
                               }) {
  return(
    <Image
      style={[style]}
             source={{uri: uri}}
             resizeMode={Image.resizeMode.contain}
             />
  )
}

ImageContain.PropTypes = {
  uri: PropTypes.string,
  style: PropTypes.object
}
