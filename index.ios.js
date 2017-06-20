import React, { Component } from 'react';
import store from './src/redux/store/store';
import { Provider } from 'react-redux';
import { AppRegistry } from 'react-native';
import ModulesView from './src/view/modulesView';
import EStyleSheet from 'react-native-extended-stylesheet';
import styleConfig from './src/config/config-styles';
// 初始化入口文件注入全局style对象;
EStyleSheet.build( styleConfig );

export default class App extends Component {
  render() {
    return (
      <Provider store={ store } >
        <ModulesView />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('Jzcapp', () => App );
