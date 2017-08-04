/**
 * 智能机器人聊天解答页面
 * Param:  param
 * Return: {undefined}
 **/
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import store from '../redux/store/store';
import styleConfig from '../config/config-styles';
import { Provider, connect } from 'react-redux';
import  AIComponent from '../modules/AIAnswer';

function mapStateToProps (state) {
  return {
    userAvatar: state.get('user').toJS().avatar
  };
}

function mapDispatchToProps (dispatch) {
  return {
  };
}

let App = connect(mapStateToProps, mapDispatchToProps)( AIComponent );

export default class AIAnswer extends Component {
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
        <App navigator={this.props} />
      </Provider>
    );
  }
}
