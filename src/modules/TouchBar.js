import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import React, { Component } from 'react';
import styleConfig from '../config/config-styles';
import EStyleSheet from 'react-native-extended-stylesheet';
import Icon from 'react-native-vector-icons/Ionicons';

const defaultTouchBarRightChild = (<Icon name="ios-arrow-forward" color='#6b6b6b' size={26} />);

export function TouchBar ({
  isTouch=true,
  IconChild,
  title,
  onClick,
  RightChild = defaultTouchBarRightChild
}) {
  let ItemContent = () => (
    <View style={styles.container}>
      <View style={ styles.icon} >
        { IconChild }
      </View>
      <View style={ styles.title}>
        <Text style={styles.text}>
          {title}
        </Text>
      </View>
      <View style={[styles.icon, { alignItems: 'flex-end'}]}>
        { RightChild }
      </View>
    </View>
  )

  let IsTouchableBar = ({ ChiledElement}) => {
    if( isTouch ){
      return (
        <TouchableOpacity onPress={ onClick } style={styles.container}>
          <ChiledElement />
        </TouchableOpacity>
      )
    }else {
      return (
        <View style={styles.container}>
          <ChiledElement />
        </View>
      )
    }
  }
  return (
    <View style={styles.box}>
      <IsTouchableBar ChiledElement={ ItemContent } />
    </View>
  )
}

const styles = EStyleSheet.create({
  box: {
    height: '2.5rem',
    paddingRight: '1rem',
    paddingLeft: '1rem',
    backgroundColor: '$globalWhite',
    borderBottomWidth: 2,
    borderColor: '$globalBorder',
    borderStyle: 'solid',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  icon: {
    justifyContent: 'center'
  },
  title: {
    flex: 1,
    flexGrow: 1,
    paddingLeft: '0.5rem',
    justifyContent: 'center',
  },
  text: {
    fontSize: '1rem',
    color: '$globalColorAssist',
    width: '100%'
  }
})
