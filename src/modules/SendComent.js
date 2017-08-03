/**
 *  发表评论组件
 * Param:  param
 * Return: {undefined}
 **/
import {
  ScrollView,
  TouchableOpacity,
  FlatList,
  ListView,
  Animated,
  Image,
  TextInput
} from 'react-native';
import React, { Component } from 'react';
import styleConfig,
{ globalStyle,
  refreshColor
} from '../config/config-styles';
import EStyleSheet from 'react-native-extended-stylesheet';
import Icon from 'react-native-vector-icons/Ionicons';
import EIcon from 'react-native-vector-icons/Entypo';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Alert from '../modules/Alert';
import CommendStar from '../modules/CommendStar';
import { SwitchBar,
         SwitchVadio,
         Vadio
       } from '../modules/SwitchBar';
import AppImage from './Image';
import { createAnimatableComponent, View, Text } from 'react-native-animatable';
import * as util from '../redux/utils/util';
const deleteIcon = (<Icon name="ios-trash-outline" size={ 22 } color={'#929292'} />);
// 动画初始化
const AnimatableListView = createAnimatableComponent(ScrollView);

export default class  UserSendComment extends Component {
  onNavigatorEvent(event) {
    const _this = this;
    if (event.type == 'NavBarButtonPress') {
      if (event.id == 'submit') {
        // 发送评论消息
        alert('发布评价');
      }
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      comments: {
        goods: 0, // 商品描述相符程度
        express: 0, // 物流服务
        manner: 0 // 服务态度
      },
      hiddenNameComment: true,
      uploadImage:  [],  // 上传的图片
      commentText: '', // 评价内容可设置不足15字不让提交
    };
    this.props.navigator.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }

  componentWillUnmount() {

  }

  componentDidMount() {

  }
  changeHiddenNameValue () {
    this.setState({hiddenNameComment: !this.state.hiddenNameComment});
  }
  render () {
    const HiddenName = VideoDescriptionComponent(<Vadio
                                                 checked={ this.state.hiddenNameComment }
                                                 changeValue={this.changeHiddenNameValue.bind(this)}/>)({name: '匿名', description: '你写的评价会以匿名的形式展示'});
    return (
      <ScrollView style={{backgroundColor: styleConfig.$globalBgc}}>
        <View style={[globalStyle.flexStart,
                      globalStyle.px1,
                      globalStyle.pyd5,
                      globalStyle.bb,
                      globalStyle.bgdW
              ]}>
          <AppImage
            resizeMode={Image.resizeMode.contain}
            source={{uri: this.props.item.goodsLogo}}
            style={styles.goodsLogo}
            />
          <CommendStar
            text="描述相符"
            style={styles.starBox}
            defaultValue={ 5 }
              changeValue={ ( score ) => this.setState({Comments: {
                goods: score, // 物流服务
              }})}
            />
        </View>
        <View style={[globalStyle.px1,
                      globalStyle.pyd5,
                      globalStyle.bgdW
              ]}>
          <TextInput
            style={[{height: 80, overflow: 'hidden'},
                    globalStyle.fzd8,
                    globalStyle.cca
            ]}
            multiline={true}
            onChangeText={(text) => this.setState({commentText: text})}
            value={ this.state.commentText }
            placeholder="宝贝满足宁的期待吗?说说它的优点和美中不足的地方吧!"
            />
        </View>
        {/* 添加照片按钮*/}
        <View style={[globalStyle.px1,
                      globalStyle.py1,
                      globalStyle.bb,
                      globalStyle.bgdW
              ]}>
          <UploadImageComponent onPress={() => alert('pleace select camera')}/>
        </View>
        {
          HiddenName
        }
        <View style={[globalStyle.mtd5,
                      styles.commentsBox,
                      globalStyle.px1,
                      globalStyle.pyd5
              ]}>
          <View>
            <MIcon name="flower" size={ 22 } color={styleConfig.$globalColorPro} />
          </View>
          <View style={{flex: 1, marginLeft: 5}}>
            <Text style={[globalStyle.fzd8, globalStyle.lhd5]}>对{this.props.item.storeName}进行评价</Text>
            <CommendStar
              text="物流服务"
              defaultValue={5}
              style={styles.starBox}
              changeValue={ ( score ) => this.setState({Comments: {
                express: score, // 物流服务
              }})}
              />
            <CommendStar
              text="服务态度"
              defaultValue={5}
              style={styles.starBox}
              changeValue={ ( score ) => this.setState({Comments: {
                manner: score
                }})
              }
              />
          </View>
        </View>
      </ScrollView>
    );
  }
}

/**
 * 匿名评论样式条, WrappedComponent是左边可控组件
 * Param: {(wrappedComponent: Elements)({name: String, description: String})}
 * Return: {undefined}
 **/
export let VideoDescriptionComponent = wrappedComponent => ({name, description}) => {
  return(
    <View style={[globalStyle.flexBetween,
                  globalStyle.px1,
                  globalStyle.bgdW
          ]}>
      <View style={[ globalStyle.flexStart ]}>
        { wrappedComponent }
        <Text>{ name }</Text>
      </View>
      <View>
        <Text style={[{color: '#939393'}, globalStyle.fzd8]}> { description }</Text>
      </View>
    </View>
  );
}

/**
 * 添加图片按钮
 * Param: param
 * Return: {undefined}
 **/
export function UploadImageComponent ({onPress}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.UploadImageBox}
      >
      <EIcon name="camera" size={ 30 } color={'#929292'} />
      <Text style={[globalStyle.cca]}>添加照片</Text>
    </TouchableOpacity>
  );
}

const styles = EStyleSheet.create({
  goodsLogo: {
    width: '3rem',
    height: '3rem'
  },
  UploadImageBox: {
    width: '5rem',
    height: '5.5rem',
    borderWidth: 1,
    borderColor: '$globalBorder',
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center'
  },
  commentsBox: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '$globalWhite'
  }
});
