/**
 * NOTE: 个人中心 头像展示组件,  头像大小320 * 640 比例
 * Param:  param
 * Return: {undefined}
 **/
import {
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';
import React, { Component } from 'react';
import styleConfig from '../config/config-styles';
import EStyleSheet from 'react-native-extended-stylesheet';
import Icon from 'react-native-vector-icons/Ionicons';
import { BlurView, VibrancyView } from 'react-native-blur';// 图片模糊库
import RoundImage from '../modules/RoundImage';

const SettingIcon = (<Icon name="ios-settings-outline" color="#fff" size={26} />);

/**
 *
 * Param:  clickSettingFn -> function
 * Return: {undefined}
 **/
export class PersonHeader extends Component {
  constructor(props) {
    super(props);
  }

  imageLoaded() {
    this.setState({ viewRef: findNodeHandle( this.backgroundImage ) });
  }
  render () {
    const { userName,
            vipName,
            source,
            clickSettingFn } = this.props;
    return (
      <View style={styles.container}>
        <Image
          ref={(img) => { this.backgroundImage = img; }}
          style={ styles.bgc}
          source={ source } />
          <BlurView
            style={styles.blur}
            blurType="light"
            blurAmount={6}
            />
          <TouchableOpacity
            onPress={ clickSettingFn }
            style={styles.settingIcon}>
            { SettingIcon}
          </TouchableOpacity>
          <View style={ styles.blurBox }>
            <View style={ styles.avatarBox}>
              <View style={styles.avatarIon}>
                <RoundImage
                  style={ styles.avatarPic}
                  source={require('./img/avatar@2x.png')}/>
                <Icon style={ styles.vipIcon}
                      name="ios-settings-outline"
                      color="yellow"
                      size={26} />
              </View>
              <View style={ styles.avatar }>
                <Text style={ styles.userDisplay}>{ userName}</Text>
                <Text style={ styles.userDisplay}>{ vipName}</Text>
              </View>
            </View>
          </View>
      </View>
    )
  }
}

const styles = EStyleSheet.create({
  container: {
    position: 'relative',
  },
  blur: {
    position: "absolute",
    left:0,
    top:0,
    bottom: 0,
    right: 0
  },
  vipIcon: {
    position: 'absolute',
    right: '0.2rem',
    bottom: '0.2rem',
    backgroundColor: 'transparent'
  },
  avatarPic: {
    borderWidth: 1, borderColor: '$globalWhite', borderStyle: 'solid',
    marginTop: '3rem'
  },
  avatarIon: {
    position: 'relative',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  blurBox: {
    height: '100%',
    position: 'absolute',
    left: 0, right: 0, bottom: 0, top: 0,
    zIndex: 2
  },
  avatarBox: {
    position: 'relative',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  settingIcon: {
    width: '3rem',
    position: 'absolute',
    left: '1rem',
    top: 20,
    backgroundColor: 'transparent',
    zIndex: 3
  },
  bgc: {
    width: '100%'
  },
  avatar: {
    height: '3.5rem'
  },
  text: {
    alignItems: 'center',
  },
  userDisplay: {
    backgroundColor: 'transparent',
    color: '$globalWhite',
    marginTop: '0.2rem'
  }
})
