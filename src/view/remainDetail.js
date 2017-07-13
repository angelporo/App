/**
 * 我的钱包页面
 * Param:  param
 * Return: {undefined}
 **/
import { StatusBar} from 'react-native';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import store from '../redux/store/store';
import styleConfig from '../config/config-styles';
import { Provider, connect } from 'react-redux';
import RemainDetail from '../modules/RemainDetail';

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

let RemainDetailPage = connect()( RemainDetail );

export default class AppRemainDetail extends Component {
  static navigatorStyle = {
    tabBarHidden: true,
  };

  constructor(props){
    super(props);
    this.props.navigator.setStyle({
      navBarButtonFontSize: 16, // Change font size nav bar buttons (eg. the back button) (remembered across pushes)
      navBarTextColor: styleConfig.$globalColorAssist,
      navBarButtonFontWeight: '100', // Change font weight nav bar buttons (eg. the back button) (remembered across pushes)
      navBarLeftButtonFontSize: 16, // Change font size of left nav bar button
      navBarLeftButtonColor: '#ccc', // Change color of left nav bar button
      navBarLeftButtonFontWeight: 100, // Change font weight of left nav bar button
    });
  }
  render () {
    return (
      <Provider store={ store } >
        <RemainDetailPage navigator={this.props} />
      </Provider>
    )
  }
}
