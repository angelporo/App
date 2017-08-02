import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styleConfig, { globalStyle } from '../config/config-styles';
import EStyleSheet from 'react-native-extended-stylesheet';
import Icon from 'react-native-vector-icons/Ionicons';

const defaultTouchBarRightChild = (<Icon name="ios-arrow-forward" color='#6b6b6b' size={26} />);

TouchBar.PropTypes = {
  isTouch: PropTypes.bool,
  IconChild: PropTypes.node,
  title: PropTypes.string,
  onClick: PropTypes.func,
  RightChild: PropTypes.node
}

export function TouchBar ({
  isTouch=true,
  IconChild,
  title,
  style,
  bold = true,
  onClick,
  RightChild = defaultTouchBarRightChild
}) {
  let ItemContent = () => (
    <View style={[styles.container, style]}>
      <View style={ styles.icon} >
        { IconChild }
      </View>
      <View style={ IconChild ? styles.title : styles.noIcontitle}>
        <Text style={styles.text}>
          {title}
        </Text>
      </View>
      <View style={[styles.icon, { alignItems: 'flex-end'}]}>
        { RightChild }
      </View>
    </View>
  );

  let IsTouchableBar = ({ ChiledElement}) => {
    if( isTouch ){
      return (
        <TouchableOpacity onPress={ onClick } style={[styles.container, style]}>
          <ChiledElement />
        </TouchableOpacity>
      );
    }else {
      return (
        <View style={[styles.container, style]}>
          <ChiledElement />
        </View>
      );
    }
  };
  if(bold) {
    // 区分底部线条粗细
    return (
      <View style={styles.box}>
        <IsTouchableBar ChiledElement={ ItemContent } />
      </View>
    );
  }else {
    return(
      <View style={styles.lightBox}>
        <IsTouchableBar ChiledElement={ ItemContent } />
      </View>
    );
  }
}

export class ViewTouchTitleBar extends Component {
  constructor(props) {
    super(props);
  }
  handleReturn () {
    let { onPressLeft } = this.props;
    onPressLeft();
  }
  render () {
    let { Right, LeftIcon, title, style } = this.props;
    let DefaultReturnIcon = (<Icon size={22} onPress={() => this.handleReturn.bind(this)()} style={styles.returnIcon} name="ios-arrow-back-outline" color={styleConfig.$globalColorAssist}/> );
    return (
      <View style={[styles.titleBox, style]}>
        <View style={styles.titleLeft}  >
          { LeftIcon || DefaultReturnIcon }
        </View>
        <View style={styles.titleCenter}>
          <Text style={styles.titleCenterText}>{ title }</Text>
        </View>
        <View style={styles.titleRight}>
          { Right }
        </View>
      </View>
    );
  }
}

const styles = EStyleSheet.create({
  titleBox: {
    height: '2.5rem',
    position: 'relative',
    paddingTop: '0.3rem',
    backgroundColor: '$globalWhite',
    paddingBottom: '0.3rem',
    paddingLeft: '$globalWhiteSpace',
    paddingRight: '$globalWhiteSpace'
  },
  titleLeft: {
    width: '3rem',
    height: '2.5rem',
    position: 'absolute',
    justifyContent:'center',
    left: 0, top: 0,zIndex: 100
  },
  titleCenter : {
    marginTop: '0.4rem',
    justifyContent: 'center'
  },
  titleCenterText: {
    width: '100%',
    textAlign: 'center',
    color: '$globalColorPro'
  },
  titleRight: {
    width: '4rem',
    height: '2.5rem',
    position: 'absolute',
    justifyContent: 'center',
    right: 0, top: 0,
    paddingRight: '$globalWhiteSpace',
  },
  lightBox: {
    paddingTop: '0.3rem',
    paddingBottom: '0.3rem',
    paddingRight: '$globalWhiteSpace',
    paddingLeft: '$globalWhiteSpace',
    backgroundColor: '$globalWhite',
    borderBottomWidth: 1,
    borderColor: '$globalBorder',
    borderStyle: 'solid',
  },
  box: {
    paddingTop: '0.3rem',
    paddingBottom: '0.3rem',
    paddingRight: '$globalWhiteSpace',
    paddingLeft: '$globalWhiteSpace',
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
  noIcontitle: {
    flex: 1,
    flexGrow: 1,
    justifyContent: 'center',
  },
  returnIcon: {
    paddingLeft: '$globalWhiteSpace'
  },
  text: {
    fontSize: '1rem',
    color: '$globalColorAssist',
    width: '100%'
  }
})
