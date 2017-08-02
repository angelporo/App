/**
 * 用户发表评论页面
 * Param:  param
 * Return: {undefined}
 **/
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import store from '../redux/store/store';
import styleConfig from '../config/config-styles';
import { Provider, connect } from 'react-redux';
import  UserSendComment from '../modules/SendComent';

function mapStateToProps (state) {
  return {
  };
}

function mapDispatchToProps (dispatch) {
  return {
  };
}

let App = connect(mapStateToProps, mapDispatchToProps)( UserSendComment );

export default class  UserSendCommentView extends Component {
  static navigatorStyle = {
    navBarRightButtonColor: '#ccc',
    navBarLeftButtonColor: '#ccc',
    tabBarHidden: true
  };
  static navigatorButtons = {
    rightButtons: [
      {
        buttonColor: '#ccc',
        buttonFontSize: 12,
        buttonColor: 'styleConfig.$globalColorAssist',
        id: 'submit',
        title: '发布'
      }
    ]
  };
  constructor(props){
    super(props);
  }

  render () {
    return (
      <Provider store={ store } >
        <App item={this.props.item} navigator={this.props} />
      </Provider>
    );
  }
}
