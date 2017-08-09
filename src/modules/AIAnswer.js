/**
 * 自能机器人聊天解答页面
 * Param:  param
 * Return: {undefined}
 **/
import {
  ScrollView,
  TouchableOpacity,
  FlatList,
  FloatList,
  TextInput,
  Image,
  Animated,
  PixelRatio
} from 'react-native';
import React, { Component } from 'react';
import styleConfig, { globalStyle, refreshColor } from '../config/config-styles';import EStyleSheet from 'react-native-extended-stylesheet';
import Icon from 'react-native-vector-icons/Ionicons';
import SIcon from 'react-native-vector-icons/SimpleLineIcons';
import { TouchBar, ViewTouchTitleBar } from '../modules/TouchBar';
import Alert from '../modules/Alert';
import { createAnimatableComponent, View, Text } from 'react-native-animatable';
import * as util from '../redux/utils/util';
import AppImage from './Image';

const MicIcon = (<Icon name="ios-mic" size={ 22 } color={styleConfig.$globalColorPro} />);
const SmileIcon = (<SIcon name="emotsmile" size={ 18 } color={styleConfig.$globalColorPro} />);
// 动画初始化
const AnimatableListView = createAnimatableComponent(ScrollView);
const TextInputBarHeight = 40;


export default class AI extends Component {
  AiDataSource=[{
        infoHead: {type: 0}, // 这里的type为0是AI答复, type为1是用户答复
        infoContent:'亲爱的会员, 很高兴为您服务, 请问有什么可以帮到您的?'
      }, {
        infoHead: {type: 1},
        infoContent: '卧槽! 我没有什么问的!'
      }]

  constructor(props) {
    super(props);
    this.state = {
      sourceData: [],
      userText: '',
      isScroll: false,
      scrollHeight: null, // listView在屏幕中的高度
      scrollCourrentHeight: 40, // listview当前实际高度
      lang: 40,
    };
  }

  componentWillUnmount() {

  }

  componentDidMount() {

  }
  handleSendIssue () {
    // 点击发送按钮发送消息
    if (this.state.userText == '') return;
    const sendData = [{
      infoHead : { type: 0 },
      infoContent : '这里是自定义的死数据, 别看了, 你还没有写完!',
      // TODO: 每一项数据中需要用消息的id来做key值,  不然会性能很慢
    }, {
      infoHead : { type: 1 },
      infoContent : this.state.userText,
      // TODO: 每一项数据中需要用消息的id来做key值,  不然会性能很慢
    }];
    const newSourceData = Array.from(this.state.sourceData.concat(sendData));
    // console.log(this._flatList);
    this.setState({
      userText: '',
      sourceData: Array.from(newSourceData)
    }, () => {
      if( this.state.scrollHeight && this.state.scrollHeight < this.state.scrollCourrentHeight ){
        this._flatList.scrollToEnd();
      }
    });
  }

  getCurrentListViewHeightByItemListHeight (x, y, width, height) {
    // 通过美衣先高度来获取list总的高度
    // TODO: 通过itemlist的高度, 判断内容总高度是否大于scrollView的高度, 如果大于则scrollToEnd
    this.setState({
      scrollCourrentHeight: parseInt(this.state.scrollCourrentHeight) + parseInt(height) + 16,
      lang: height + 16
    });
    console.log( this.state.scrollCourrentHeight, this.state.scrollHeight );
  }

  getListViewHeightByItemListHeight (x, y, width, height) {
    // NOTE: 获取listView总高度
    this.setState({
      scrollHeight: (height - TextInputBarHeight)/PixelRatio.get()
    });
  }

  renderRow ({item, index}) {
    if ( this._flatListBox && !this.state.scrollHeight ) {
      this._flatListBox.ref._component.measure( this.getListViewHeightByItemListHeight.bind(this) );
    }
    if (this._itemList) {
      // 获取itemlist高度
      this._itemList.ref._component.measure(this.getCurrentListViewHeightByItemListHeight.bind(this));
    }
    if( item.infoHead.type == 0 ){
      // AI回复
      return (
        <View ref={ (itemList) => this._itemList = itemList} key={index} style={styles.chatItemLeft}>
          <AppImage
            style={styles.userLogo}
            source={{uri: 'https://m.360buyimg.com/mobilecms/jfs/t5707/243/9085247718/31378/659eaf5a/59813838N88c3875b.jpg!q70.jpg'}}
            resizeMode={Image.resizeMode.contain}
            />
          <View style={[globalStyle.bgdW,
                        globalStyle.ml1,
                        styles.infoContent
                ]}>
            <Text style={ styles.infoText }> { item.infoContent }</Text>
          </View>
        </View>
      );
    }else {
      // 用户回复
      return (
        <View ref={ (itemList) => this._itemList = itemList} key={index} style={styles.chatItemRight}>
          <View style={[globalStyle.bgdW,globalStyle.ml1, styles.infoContent]}>
            <Text style={styles.infoText}> { item.infoContent }</Text>
          </View>
          <AppImage
            style={[styles.userLogo, styles.mld5]}
            source={{uri: this.props.userAvatar}}
            resizeMode={Image.resizeMode.contain}
            />
        </View>
      );
    }
  }

  render () {
    return (
      <View style={styles.html}>
        <View
          ref={(flatlsit) => this._flatListBox = flatlsit}
          style={styles.chatBoxView}>
          <FlatList
            style={styles.chatBox}
            data={ this.state.sourceData }
            ref={( flatList )=> this._flatList = flatList }
            renderItem={ this.renderRow.bind(this) }
            />
        </View>
        <View style={[styles.chatBar]}>
          <TouchableOpacity style={[{width: 35}, globalStyle.flexCenter]}>{MicIcon}</TouchableOpacity>
          <View style={styles.textInput}>
            <TextInput
              style={[{flex: 1}, globalStyle.fzd8 ]}
              value={this.state.userText}
              onChangeText={(userText) => this.setState({userText})}
              placeholder="发送你的困惑!"
              />
          </View>
          <TouchableOpacity style={[{width: 35}, globalStyle.flexCenter]}>
            { SmileIcon }
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this.handleSendIssue.bind(this)}
            style={[globalStyle.flexCenter,
                    styles.submitButton
            ]}>
            <Text style={[globalStyle.cw, globalStyle.fzd8]}>确定</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = EStyleSheet.create({
  html: {
    height: '100%',
    position: 'relative'
  },
  chatBox: {
    paddingLeft: '$globalWhiteSpace',
    paddingRight: '$globalWhiteSpace'
  },
  chatBoxView: {
    height: '100%',
    paddingBottom: TextInputBarHeight,
    backgroundColor: '$globalBgc'
  },
  chatItemLeft: {
    marginTop: 10,
    marginBottom: 6,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  chatItemRight: {
    marginTop: 10,
    marginBottom: 6,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  chatBar: {
    height: 40,
    backgroundColor: '$globalWhite',
    paddingTop: '0.3rem',
    paddingBottom: '0.3rem',
    position: 'absolute',
    left: 0,
    bottom: 0,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  mld5: {
    marginLeft: '1rem'
  },
  userLogo: {
    width: '2.5rem',
    height: '2.5rem'
  },
  infoContent: {
    flexShrink: 1,
    borderRadius: '0.5rem'
  },
  infoText: {
    color: '$globalColorAssist',
    fontSize:'0.8rem',
    padding: '0.4rem'
  },
  textInput: {
    flexGrow: 1,
    flexBasis: 1,
    overflow: 'hidden',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '$globalBorder',
    borderRadius: 5,
    paddingLeft: '0.5rem'
  },
  submitButton: {
    marginRight: '0.5rem',
    backgroundColor: '$globalColorPro',
    borderRadius: '0.3rem',
    paddingTop: '0.3rem',
    paddingBottom: '0.3rem',
    paddingLeft: '0.3rem',
    paddingRight: '0.3rem'
  }
});


const Serializable = Sup => class extends Sup {
  constructor(...args) {
    super(...args);
    if (typeof this.construct.stringify !== 'function') {
      throw new ReferenceError('please define stringify method to the class');
    }
    if (typeof this.construct.parse !== 'function') {
      throw new ReferenceError('please define parse method to the class');
    }
  }

  toString() {
    return this.constructor.stringify(this);
  }
}
