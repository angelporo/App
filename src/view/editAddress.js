/**
 * 编辑收货地址页面
 * Param:  param
 * Return: { undefined }
 **/
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import store from '../redux/store/store';
import styleConfig from '../config/config-styles';
import { Provider, connect } from 'react-redux';
import EditAddress from '../modules/EditAddress';
function mapStateToProps (state) {
  return {
    sourceData: state.toJS().user.userAddress
  };
}
function mapDispatchToProps (dispatch) {
  return {
    nameDispatch: function () {alert('ok')}
  };
}

let AppComponent = connect( mapStateToProps, mapDispatchToProps )( EditAddress );

export default class AppEditAddress extends Component {
  static navigatorButtons = {
    rightButtons: [
      {
        buttonColor: styleConfig.$globalColorAssist,
        id: 'save',
        title: '保存'
      }
    ]
  };
  static navigatorStyle = {
    tabBarHidden: true
  };

  constructor(props){
    super(props);
  }
  render () {
    return (
      <Provider store={ store }>
        <AppComponent id={ this.props.id } type={this.props.type} navigator={this.props} />
      </Provider>
    );
  }
}
