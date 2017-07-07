'use strict';
import React, { Component } from 'react';
import store from './src/redux/store/store';
import { Provider } from 'react-redux';
import { AppRegistry } from 'react-native';
import ModulesView from './src/view/modulesView';
import EStyleSheet from 'react-native-extended-stylesheet';
import styleConfig from './src/config/config-styles';
import Icon from 'react-native-vector-icons/Ionicons';
import Home from './src/view/home';
import AppPerson from './src/view/person';
import LoginView from './src/view/login';
import GoodsDetail from './src/view/goodsDetail';
import AppSearch from './src/view/search'
import { Navigation } from 'react-native-navigation';
import Nav from './src/view/nav';
import ShoppingCar from './src/view/shoppingCar';
import AppUserInfo from './src/view/userInfo';
// 初始化入口文件注入全局style对象;
EStyleSheet.build( styleConfig );

// AppRegistry.registerComponent('Jzcapp', () => App );

// register all screens of the app (including internal ones)
function RegisterScreens() {
  Navigation.registerComponent('example.Home', () => Home);
  Navigation.registerComponent('example.Login', () => LoginView);
  Navigation.registerComponent('example.Class', () => LoginView);
  Navigation.registerComponent('example.Nav', () => Icon);
  Navigation.registerComponent('example.Person', () => AppPerson);
  Navigation.registerComponent('example.GoodsDetail', () => GoodsDetail);
  Navigation.registerComponent('example.Search', () => AppSearch);
  Navigation.registerComponent('example.Nav', () => Nav);
  Navigation.registerComponent('example.ShoppingCar', () => ShoppingCar);
  Navigation.registerComponent('example.AppUserInfo', () => AppUserInfo);
}

RegisterScreens(); // this is where you register all of your app's screens

// Navigation.showModal({
//   screen: "example.Person",
//   passProps: {},
//   navigatorStyle: {},
//   navigatorButtons: {},
//   animationType: 'slide-up'
// });


// start the app
Navigation.startTabBasedApp({
  tabs: [
    {
      label: '首页',
      title: 'U兔购',
      screen: 'example.Home', // this is a registered name for a screen
      icon: require('./src/view/img/home.png'),
      selectedIcon: require('./src/view/img/home.png'), // iOS only
    },
    {
      label: '分类',
      screen: 'example.Nav',
      icon: require('./src/view/img/home.png'),
      selectedIcon: require('./src/view/img/home.png'), // iOS only
      title: 'U兔购'
    },
    {
      label: '购物车',
      screen: 'example.ShoppingCar',
      icon: require('./src/view/img/home.png'),
      selectedIcon: require('./src/view/img/home.png'), // iOS only
      title: '购物车'
    },
    {
      label: '我的',
      screen: 'example.Person',
      icon: require('./src/view/img/home.png'),
      selectedIcon: require('./src/view/img/home.png'), // iOS only
      title: undefined,
      tabsStyle: {
        navBarHidden: true,
      }
    }
  ],
  tabsStyle: { // optional, add this if you want to style the tab bar beyond the defaults
    tabBarBackgroundColor: '#fff',  // change the background color of the tab bar
    tabBarTranslucent: false , // change the translucent of the tab bar to false
    tabBarSelectedButtonColor: styleConfig.$globalColorPro,
    tabBarLabelColor: styleConfig.$globalColorAssist, // iOS only. change the color of tab text
    tabBarSelectedLabelColor: styleConfig.$globalColorPro, // iOS only. change the color of the selected tab text
    tabBarHideShadow: true // iOS only. Remove default tab bar top shadow (hairline)
  },
  appStyle: {
    orientation: 'portrait' // Sets a specific orientation to the entire app. Default: 'auto'. Supported values: 'auto', 'landscape', 'portrait'
  },
  // drawer: { // optional, add this if you want a side menu drawer in your app
  //   left: { // optional, define if you want a drawer from the left
  //     screen: 'example.Person', // unique ID registered with Navigation.registerScreen
  //     passProps: {} // simple serializable object that will pass as props to all top screens (optional)
  //   },
  // },
  passProps: {}, // simple serializable object that will pass as props to all top screens (optional)
  animationType: 'fade' // optional, add transition animation to root change: 'none', 'slide-down', 'fade'
});
