/**
 * 商品详情
 * Param:  param
 * Return: {undefined}
 **/
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import store from '../redux/store/store';
import { Provider, connect } from 'react-redux';
import GoodsDetailComponent from '../modules/GoodsDetail'

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

let App = connect(mapStateToProps, mapDispatchToProps )(GoodsDetailComponent);

export default class GoodsDetail extends Component {
  static navigatorStyle = {
    navBarHidden: true,
    tabBarHidden: true
  }

  constructor(props){
    super(props);
  }
  render () {
    return (
      <Provider store={ store } >
        <App navigator={this.props} />
      </Provider>
    )
  }
}
