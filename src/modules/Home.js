'use strict'
import {
  View,
  Text,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  RefreshControl,
  InteractionManager
} from 'react-native';
import React, { Component } from 'react';
import styleConfig, { globalStyle, refreshColor } from '../config/config-styles';
import { testData } from '../redux/initSate';
import EStyleSheet from 'react-native-extended-stylesheet';
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchBar,
         ViewTouchTitleBar
       } from '../modules/TouchBar';
import HomeSwiper, { HomeSwiperAdCenter } from '../modules/HomeSwiper';
import { fromJS } from 'immutable';
import {  HomeRowList,
          TitleScriptionBar,
          HomeRecommend,
          HomeRecommendGoods
       } from '../modules/HomeListItem';

const TouchIcon = (<Icon name="ios-book" size={ 22 } color={ styleConfig.$globalColorAssist} />);
const HomeTitleTouchBar = (<ViewTouchTitleBar title="U兔购" onPressLeft={() => alert('ok')}  Right={ TouchIcon } />
)
export function ScanIcon ({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Icon name="ios-qr-scanner-outline" color={'#ccc'} size={20} />
    </TouchableOpacity>
  )
}

export default class Home extends Component {
  intoGoodsDetail (id) {
    this.props.navigator.navigator.push({
      screen: 'example.GoodsDetail',
      title: '',
      animated: true,
      passProps: {goodsId: id},
      animationType: 'slide-horizontal',
      backButtonTitle: '',
      backButtonHidden: true,
    });
  }

  onNavigatorEvent(event) {
    if (event.type == 'NavBarButtonPress') {
      if (event.id == 'scan') {
        this.props.navigator.navigator.push({
          screen: 'example.Person',
          title: "",
          passProps: {},
          animated: true,
          animationType: 'slide-horizontal',
          backButtonTitle: '' ,
          backButtonHidden: false,
          navigatorStyle: {},
          navigatorButtons: {}
        });
      }
      if (event.id == 'search') {
        this.props.navigator.navigator.push({
          screen: 'example.Search', // unique ID registered with Navigation.registerScreen
          title: "", // navigation bar title of the pushed screen (optional)
          passProps: {}, // Object that will be passed as props to the pushed screen (optional)
          animated: true, // does the push have transition animation or does it happen immediately (optional)
          animationType: 'slide-horizontal', // 'fade' (for both) / 'slide-horizontal' (for android) does the push have different transition animation (optional)
          backButtonTitle: '' , // override the back button title (optional)
          backButtonHidden: false, // hide the back button altogether (optional)
        });
      }
    }
  }

  constructor(props) {
    super(props);
    this.props.navigator.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
    this.state = {
      recommendTitleImage : "https://m.360buyimg.com/mobilecms/jfs/t5953/56/1066729502/67974/966811b/592e82d5N5e1dc697.jpg!q70.jpg"
    }
  }

  render () {
    return (
      <ScrollView
        contentContainerStyle={styles.homeView}
        refreshControl={
            <RefreshControl
                refreshing={false}
                onRefresh={ () => alert('下拉成功')}
                tintColor="#ff0000"
                title="下拉刷新"
                titleColor={ styleConfig.$globalColorPro }
                colors={ refreshColor }
                progressBackgroundColor="#ffff00"
                />
      }
        >
        <StatusBar
          backgroundColor={styleConfig.$globalWhite}
          barStyle="dark-content"
          />
        <View style={[globalStyle.html, globalStyle.gbdc]}>
          <View>
            <HomeSwiper data={ this.props.topSwiper } />
          </View>
          {/* 第二层广告*/}
          <HomeRowList
            titUri= { this.state.recommendTitleImage }
            listData={ this.props.luckRecommend }
            onPress={(id) => this.intoGoodsDetail.bind(this)(id)}
            />
          {/*推荐商品*/}
            <HomeRecommend source={ this.props.recommend } />
            <HomeSwiperAdCenter data={ this.props.centerAdData } />
            <HomeRecommendGoods source={ this.props.hotGoods} />
        </View>
      </ScrollView>
    )
  }
}

let styles = EStyleSheet.create({
  homeView: {
    backgroundColor: '$globalWhite',
  },
  wrapper: {
    backgroundColor: '#fff',
  },
  activeDot: {
    backgroundColor: '$globalWhite',
    width: 8,
    marginLeft:'0.5rem',
    height: 8,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '$globalWhite',
    borderStyle: 'solid'
  },
  dot: {
    backgroundColor: 'transparent',
    width: 8,
    marginLeft:'0.5rem',
    height: 8,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '$globalWhite',
    borderStyle: 'solid'
  },
  slide1: {
    height: '100%',
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ccc'
  },
  text: {
    color: '#000',
    fontSize: 30,
    fontWeight: 'bold',
  }
})
