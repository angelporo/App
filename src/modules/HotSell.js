/**
 * 首页热销详情页面
 * Param:  param
 * Return: { undefined }
 **/
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  RefreshControl
} from 'react-native';
import React, { Component } from 'react';
import styleConfig, { globalStyle, refreshColor } from '../config/config-styles';
import EStyleSheet from 'react-native-extended-stylesheet';
import Icon from 'react-native-vector-icons/Ionicons';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import HotSall from '../redux/homeState';
import { HotSaleItem, GoodsRowItem } from './HomeListItem';

const returnIcon = (<Icon name="ios-arrow-forward" color='#6b6b6b' size={22} />);
const ClassIcon = (<Icon name="ios-keypad" size={ 26 } color="red" />);

export default class HotTabView extends Component {
  static navigatorStyle = {
    navBarHidden: true,
  }

  constructor (props) {
    super(props);
    this.state = {
      activeTab: 1,
      tabBarData: [{text: '最新'}, {text: '销量'}, {text: '信用'}, {text: '价格', isShowArrow: true}],
      HotSall: HotSall.toJS().hotGoods
    }
  }

  render () {
    return (
      <ScrollableTabView
        renderTabBar={(goToPage, tabs, activeTab) => <HotSellTabBar
                                                        goToPage={goToPage}
                                                        activeTab={activeTab}
                                                        sourceData={this.state.tabBarData}
                                                      />}
        ref={(tabView) => { this.tabView = tabView; }}
        >
        <TabItemContent sourceData={this.state.HotSall} />
        <TabItemContent sourceData={this.state.HotSall} />
        <TabItemContent sourceData={this.state.HotSall} />
        <TabItemContent sourceData={this.state.HotSall} />
      </ScrollableTabView>
    )
  }
}

export class TabItemContent extends Component {
  constructor(props)  {
    super(props);
  }
  render () {
    const data = this.props.sourceData;
    return (
      <ScrollView
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
      <GoodsRowItem source={ data }/>
      </ScrollView>
    )
  }
}

export class HotSellTabBar extends Component {
  constructor(props) {
    super(props);
  }
  handleTabBarItem(pageNumber) {
    const { goToPage } = this.props;
    goToPage(pageNumber);
  }
  render () {
    const {goToPage,  activeTab, sourceData} = this.props;
    const arrowUp = (<Icon name="ios-arrow-up" size={12} />);
    const arrowDown = (<Icon name="ios-arrow-down" size={12} />);
    return (
      <View style={styles.tabBarBox}>
        <View style={styles.tabBar}>
          {
            sourceData.map( (n, i) => {
              if (n.isShowArrow) {
                return (
                  <TouchableOpacity
                    key={i}
                    onPress={ () => this.handleTabBarItem.bind(this)(i)}
                    style={styles.tabBarItem}>
                    <View style={[styles.centerFlex]}>
                      <Text style={[activeTab == i ? { color: styleConfig.$globalColorPro} : {}, globalStyle.pyd5]}>{ n.text }</Text>
                      <View style={globalStyle.mld5}>
                        <View
                          style={{width: 20}}
                          >
                          { arrowUp }
                        </View>
                        <View
                          style={{width: 20}}
                          >
                          { arrowDown }
                        </View>
                      </View>
                    </View>
                  </TouchableOpacity>
                );
              }else{
                return (
                  <TouchableOpacity
                    key={i}
                    onPress={ () => this.handleTabBarItem.bind(this)(i)}
                    style={styles.tabBarItem}>
                    <Text style={[activeTab == i ? { color: styleConfig.$globalColorPro} : {}, globalStyle.pyd5]}>{ n.text }</Text>
                  </TouchableOpacity>
                )
              }
            })
          }
        </View>
        <TouchableOpacity
          onPress={() => alert('分类')}
          style={styles.classIcon}>
          <View style={[styles.classIconB]}>
            { ClassIcon }
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

let styles = EStyleSheet.create({
  centerFlex: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  tabBar: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  tabBarItem: {
    width: '25%',
    alignItems: 'flex-start',
  },
  tabBarBox: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: '$globalWhiteSpace',
    paddingRight: '$globalWhiteSpace',
  },
  classIcon: {
    width: '2rem',
    alignItems: 'flex-end',
  },
  classIconB: {
    paddingLeft: 5,
    paddingTop: 5,
    paddingBottom: 5,
  },
  hotSaleBox: {
    paddingLeft: '$globalWhiteSpace',
    paddingRight: '$globalWhiteSpace',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '$globalWhite',
    marginTop: '-0.5rem',
  },
  classIconButton: {
  },
})
