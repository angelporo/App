/**
 * 个人中心
 * Param:  param
 * Return: {undefined}
 **/
import { StatusBar} from 'react-native';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import store from '../redux/store/store';
import styleConfig from '../config/config-styles';
import { Provider, connect } from 'react-redux';
import UserInfo from '../modules/UserInfo';

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

let UserInfoPage = connect()( UserInfo );

export default class AppUserInfo extends Component {
  static navigatorStyle = {
    navBarRightButtonColor: '#ccc',
    navBarLeftButtonColor: '#ccc',
    navBarHidden: true,
  };

  constructor(props){
    super(props);
  }
  render () {
    return (
      <Provider store={ store } >
        <UserInfoPage navigator={this.props} />
      </Provider>
    )
  }
}
