/**
 * 订单详情页面
 * Param:  param
 * Return: {undefined}
 **/
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import store from '../redux/store/store';
import styleConfig from '../config/config-styles';
import { Provider, connect } from 'react-redux';
import  OrderDetail from '../modules/OrderDetail';

function mapStateToProps (state) {
  return {
  };
}

function mapDispatchToProps (dispatch) {
  return {
  };
}

let App = connect(mapStateToProps, mapDispatchToProps)(  OrderDetail );

export default class  AppOrderDetail extends Component {

  static navigatorStyle = {
    tabBarHidden: true
  };

  constructor(props){
    super(props);
  }
  render () {
    return (
      <Provider store={ store } >
        <App item={this.props.item } navigator={this.props} />
      </Provider>
    );
  }
}
