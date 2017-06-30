'use strict';
/**
 * NOTE: 弹出框组件
 * Param:  param
 * Return: { jsx }
 **/
import React, { Component } from 'react';
import {
  View,
  Text,
  Animated,
  ActivityIndicator
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import styleConfig from '../config/config-styles';
import Icon from 'react-native-vector-icons/Ionicons';

/**
 * NOTE: 全局项目提示信息框
 * Param:  {msg : String, //提示信息
 * closeMsg: Function ,  关闭信息
 }
 * Return: {undefined}
 **/
export class HintMsg extends Component {
  constructor(props) {
    super(props)
    this.state = {
      msg : null || this.props.msg,
      opacity: new Animated.Value(0)
    }
  }
  componentDidMount () {
    const _this = this;
    // 自动关闭提示信息
    this.show()
    if (this.state.msg) {
      // 提示框存在
      this.timer = setTimeout( () =>{
        _this.close();
        // 预留关闭提示光钩子
        this.props.closeMsgBefor && this.props.closeMsgBefor()
        // 设置关闭提示框状态
        this.setState({msg : null});
      },2000)
    }else {
      // 提示框不存在
      return false;
    }
  }

  componentWillUnmount () {
    this.timer && clearTimeout(this.timer);
  }

  show() {
    this.setState({
      isShow: true
    });
    Animated.parallel([
      Animated.timing(this.state.opacity, {
        toValue: 1,
        duration: 150
      }),
    ]).start();
  }

  close () {
    this.setState({
      isShow: true
    });
    Animated.parallel([
      Animated.timing(this.state.opacity, {
        toValue: 0,
        duration: 150
      }),
    ]).start();
  }

  render () {
    if (this.state.msg) {
      return(
        <Animated.View style={[ styles.hintBox, { opacity: this.state.opacity}]}>
          <View style={styles.hintBgc}>
            <Text style={ [styles.msg ] }>{this.state.msg}</Text>
          </View>
        </Animated.View>
      )
    }else {
      return null;
    }
  }
}

export class Loading extends Component{
  constructor (props){
    super(props);
  }
  render () {
    let { isShow } = this.props;
    if (isShow) {
    return(
      <View style={styles.hintBox}>
      <ActivityIndicator
        style={styles.centering}
        size="small"
        hidesWhenStopped={false}
        />
      </View>
    )
    }else {
      return null
    }
  }
}

const styles = EStyleSheet.create({
  hintBox: {
    width: '$width',
    height: '$height',
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
    position: 'absolute',
    left: 0, right: 0, top: 0, bottom: 0
  },
  centering: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
    zIndex: 1000
  }, 
  hintBgc: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    paddingBottom: '0.4rem',
    paddingTop: '0.4rem',
    paddingLeft: '1rem',
    paddingRight: '1rem',
    borderRadius: '0.2rem'
  },
  msg: {
    color: '$globalWhite',
  }
})
