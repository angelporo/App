/**
 * 搜索页面
 * Param:  param
 * Return: {undefined}
 **/
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import store from '../redux/store/store';
import styleConfig from '../config/config-styles';
import { Provider, connect } from 'react-redux';
import Search from '../modules/Search';

function mapStateToProps (state) {
  return {
    name: 'liyuan'
  }
}
function mapDispatchToProps (dispatch) {
  return {
    nameDispatch: function () {alert('ok')}
  }
}

let SearchView = connect()( Search );

export default class AppSearch extends Component {
  static navigatorButtons = {
    rightButtons: [
      {
        buttonColor: '#ccc',
      },
      {
        icon: require('./img/home.png') ,
        id: 'scan',
        buttonColor: styleConfig.$globalColorPro,
      }
    ],
    leftButtons: [
      {
        icon: require('./img/left.png') ,
        id: 'search',
        buttonColor: styleConfig.$globalColorPro,
      }
    ]
  }

  static navigatorStyle = {
    navBarRightButtonColor: '#ccc',
    navBarLeftButtonColor: '#ccc',
    navBarHidden: true,
    tabBarHidden: true
  };

  constructor(props){
    super(props);
  }
  render () {
    console.log(this.props);
    return (
      <Provider store={ store } >
        <SearchView navigator={this.props} />
      </Provider>
    )
  }
}
