/**
 * 管理收货地址
 * Param:  param
 * Return: {undefined}
 **/
import { StatusBar} from 'react-native';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import store from '../redux/store/store';
import styleConfig from '../config/config-styles';
import { Provider, connect } from 'react-redux';
import UserOrder from '../modules/Order';

function mapStateToProps (state) {
  return {
    userOrders: state.getIn(['user', 'userOrder']).toJS()
  };
}

function mapDispatchToProps (dispatch) {
  return {
    nameDispatch: function () {alert('ok')}
  };
}

let Order = connect(mapStateToProps, mapDispatchToProps )( UserOrder );

export default class AppOrder extends Component {
  static navigatorStyle = {
    tabBarHidden: true
  };

  constructor(props){
    super(props);
    this.props.navigator.setStyle({
      navBarButtonFontSize: 16, // Change font size nav bar buttons (eg. the back button) (remembered across pushes)
      navBarTextColor: styleConfig.$globalColorAssist,
      navBarButtonFontWeight: '100', // Change font weight nav bar buttons (eg. the back button) (remembered across pushes)
      navBarLeftButtonFontSize: 16, // Change font size of left nav bar button
      navBarLeftButtonColor: '#ccc', // Change color of left nav bar button
      navBarLeftButtonFontWeight: 100 // Change font weight of left nav bar button
    });
  }
  render () {
    return (
      <Provider store={ store } >
        <Order navigator={this.props} />
      </Provider>
    );
  }
}
