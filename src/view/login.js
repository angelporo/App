/**
 * 登录页面
 * Param:  param
 * Return: {undefined}
 **/
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import store from '../redux/store/store';
import { Provider, connect } from 'react-redux';
import Login from '../modules/Login';

function mapStateToProps (state) {
  return {
    name: 'liyuan'
  }
}
function mapDispatchToProps (dispatch) {
  return {
    nameDispatch: function () {alert('ok')}
  };
}

let AppLogin = connect( mapStateToProps, mapDispatchToProps )(Login);

export default class LoginView extends Component {

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
        <AppLogin navigator={ this.props } />
      </Provider>
    );
  }
}
