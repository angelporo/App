/**
 * 评论选择 星星组件
 * Param:  param
 * Return: {undefined}
 **/
import {
  View,
  Text,
  Switch,
  TouchableOpacity
} from 'react-native';
import React, { Component } from 'react';
import styleConfig, { globalStyle } from '../config/config-styles';
import EStyleSheet from 'react-native-extended-stylesheet';
import Icon from 'react-native-vector-icons/Ionicons';

let StarIcon = (<Icon name="md-star" style={{marginLeft: 10}} size={ 16 } color={ styleConfig.$globalColorPro } />);
let STartOutLine = (<Icon name="ios-star-outline" size={ 16 } style={{marginLeft: 10}} color={ styleConfig.$globalColorPro } />);

export default class CommendStar extends Component {
  constructor (props) {
    super(props);
    this.state = {
      macStar: this.props.maxStar ? this.props.maxStar : 5 ,
      surrentNum: 4
    };
  }

  /**
   * 获取渲染评分Icon内容
   * Param: {indexOf: Number, MaxStar: Number}
   * Return: {undefined}
   **/
  starIcon ( indexOf, maxStar ) {
    let Icons = [];
    for(let i = 0; i < maxStar; i++) {
      if (indexOf >= i+1) {
        Icons.push(
            <View key={i} style={styles.starIcon}>
          <Icon
                   name="ios-star"
                   style={styles.starIcon}
                   size={ 20 }
                   onPress={ () => this.changeStartValue(i + 1)}
                   color={ styleConfig.$globalColorPro }
            />
        </View>);
      }else {
        Icons.push(
          <View style={styles.starIcon}>
          <Icon
                   name="ios-star-outline"
                   style={styles.starIcon}
                   size={ 20 }
                   onPress={ () => this.changeStartValue(i + 1)}
                   color={ styleConfig.$globalColorPro }
            />
        </View>);
      }
    }
      return Icons;
  }

  changeStartValue (indexOf) {
    let { changeValue } = this.props;
    this.setState({ surrentNum: indexOf });

    changeValue(indexOf);

  }
  render () {
    let IconsArray = this.starIcon( this.state.surrentNum, this.state.macStar);
    let { text, style } = this.props;
    return (
      <View style={ [ styles.starBox, style]}>
        <View>
          <Text>{ text }</Text>
        </View>
        <View style={ [styles.star ]}>
          { IconsArray }
        </View>
      </View>
    );
  }
}

let styles = EStyleSheet.create({
  starBox: {
    backgroundColor: '$globalWhite',
    paddingTop: '0.4rem',
    paddingBottom: '0.4rem',
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  star: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: '1rem',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  starIcon: {
    marginLeft: '0.6rem',
  }
})
