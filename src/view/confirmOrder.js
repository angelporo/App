/**
 * 确认订单页面
 * Param:  param
 * Return: {undefined}
 **/
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import store from '../redux/store/store';
import styleConfig from '../config/config-styles';
import { Provider, connect } from 'react-redux';
import  ConfirmOrderComponent from '../modules/ConfirmOrder.js';

function mapStateToProps (state) {
  return {
  };
}

function mapDispatchToProps (dispatch) {
  return {
  };
}

let App = connect(mapStateToProps, mapDispatchToProps)(  ConfirmOrderComponent );

export default class  ConfirmOrder extends Component {
static navigatorStyle = {
    navBarRightButtonColor: '#ccc',
    navBarLeftButtonColor: '#ccc',
    tabBarHidden: true
};

  constructor(props){
    super(props);
  }
  render () {
    return (
      <Provider store={ store } >
        <App item={ this.props.item} navigator={this.props} />
      </Provider>
    );
  }
}
