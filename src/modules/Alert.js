/**
 * NOTE: 弹出框组件
 * Param:  param
 * Return: { jsx }
 **/
import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Animated
} from 'react-native';
import PropTypes from 'prop-types';
import EStyleSheet from 'react-native-extended-stylesheet';
import styleConfig from '../config/config-styles';
import Icon from 'react-native-vector-icons/Ionicons';
/**
 * Param:
 * {    title,
 * titleDescription,
 * Right, // jsx 元素, 主要用来区分颜色
 * Left, // jsx 元素, 主要用来区分颜色
 * onPressLeft,
 * onPressRight
 * }
 *
 * Return: { jsx }
 **/

export default class Alert extends Component {
  constructor(props) {
    super(props)
    this.state = {
      opacityAnimationValue: new Animated.Value(0),
      scaleAnimationValue: new Animated.Value(0)
    }
    this.handleCancel = this.handleCancel.bind(this);
    this.handleAgree = this.handleAgree.bind(this);
  }

  componentDidMount () {
    let _this = this;
    this.timer = setTimeout(
      () => { _this.show() },
      1000
    )
  }

  componentWillUnmount () {
    this.timer && clearTimeout(this.timer);
  }
  show() {
    Animated.parallel([
      Animated.timing(this.state.opacityAnimationValue, {
        toValue: 1,
        duration: 200 + 100
      }),
      Animated.spring(this.state.scaleAnimationValue, {
        toValue: 1,
        duration: 300,
        friction: 5
      })
    ]).start();
  }

  // 关闭弹出框
  _close() {
    this.state.opacityAnimationValue.setValue(0);
    this.state.scaleAnimationValue.setValue(0);
  }

  handleCancel () {
    // 点击取消按钮
    let { onPressLeft } = this.props;
    //调用取消执行函数
    onPressLeft()

    this._close()
  }

  handleAgree () {
    // 点击确定按钮
    let { onPressRight } = this.props;
    //调用同意执行函数
    onPressRight()

    this._close()
  }

  render () {
    const {
      isShow,
      title,
      titleDescription,
      Right, // jsx 元素, 主要用来区分颜色
      Left, // jsx 元素, 主要用来区分颜色
    } = this.props
    if (isShow) {
    this.show()
     return (
       <Animated.View style={ [styles.alertBox, styles.flexCenter,  {opacity: this.state.opacityAnimationValue}]}>
         <Animated.View style={ [styles.container, { transform:[{ scale: this.state.scaleAnimationValue}] }]}>
           <View style={styles.titleBox}>
             <Text style={styles.title} >{title}</Text>
             {
               titleDescription  && (<Text style={styles.c} >{ titleDescription }</Text>)
             }
       </View>

         <View style={styles.buttomBox}>
         <TouchableOpacity onPress={ () => this.handleCancel() } style={styles.buttonItem}>
         { Left }
       </TouchableOpacity>
         <View style={styles.bd}></View>
         <TouchableOpacity onPress={ () => this.handleAgree() } style={ [styles.buttonItem] }>
         { Right }
       </TouchableOpacity>
         </View>
         </Animated.View>
         </Animated.View>
     )
   }else {
     return null
   }
  }
}

Alert.propTypes = {
  isShow: PropTypes.bool,
  titleDescription: PropTypes.string,
  title: PropTypes.string,
  Right: PropTypes.node,
  Left: PropTypes.node,
  onPressRight: PropTypes.func,
  onPressLeft: PropTypes.func
}


const styles = EStyleSheet.create({
  c: {
    textAlign: 'center',
    lineHeight: '1.4rem',
    marginTop: '0.4rem'
  },
  flexCenter: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleBox: {
    paddingTop: '1.4rem',
    paddingBottom: '1.4rem'
  },
  alertBox: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    position: 'absolute',
    left: 0, right: 0, top: 0, bottom: 0,
    zIndex: 10,
  },
  container: {
    width: '80%',
    backgroundColor: '$globalWhite',
    borderRadius: '0.5rem',
  },
  title: {
    textAlign: 'center',
    fontSize: '1.1rem',
    lineHeight: '1.4rem',
    color: '$globalColorPro',
  },
  buttomBox: {
    borderTopColor: '$globalBorder',
    borderTopWidth: 1,
    borderStyle: 'solid',
    flex: 0,
    flexDirection: 'row',
    alignItems: 'center',
  },
  bd: {
    width: 1,
    height: '85%',
    backgroundColor: '$globalBorder',
  },
  buttonItem: {
    height: '2.6rem',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
