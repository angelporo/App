/**
 * 管理收货地址
 * Param:  param
 * Return: {undefined}
 **/
import { StatusBar} from 'react-native';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import store from '../redux/store/store';
import styleConfig from '../config/config-styles';
import { Provider, connect } from 'react-redux';
import Address from '../modules/Address';
import { deleteUserAddressItem } from '../redux/reducer/user.js';

function mapStateToProps (state) {
  return {
    dataSource: state.toJS().user.userAddress
  };
}

function mapDispatchToProps (dispatch) {
  return {
    deleteUserAddressItem: compose( dispatch, deleteUserAddressItem)
  };
}

let AddressPage = connect(mapStateToProps, mapDispatchToProps)( Address );

export default class AppAddressManage extends Component {
  static navigatorButtons = {
    rightButtons: [
      {
        buttonColor: '#282828',
        id: 'manageButton',
        title: '管理'
      }
    ]
  };

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
        <AddressPage navigator={this.props} />
      </Provider>
    );
  }
}
