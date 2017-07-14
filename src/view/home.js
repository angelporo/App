/**
 * 首页
 * Param:  param
 * Return: {undefined}
 **/
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import store from '../redux/store/store';
import styleConfig from '../config/config-styles';
import { Provider, connect } from 'react-redux';
import Home from '../modules/Home';
function mapStateToProps (state) {
  return {
    topSwiper: state.home.topSwiper,
    luckRecommend: state.home.luckRecommend,
    recommend: state.home.recommendGoods,
    brandRecommend: state.home.brandRecommend,
    hotGoods: state.home.hotGoods,
    centerAdData: state.home.centerAdData
  }
}
function mapDispatchToProps (dispatch) {
  return {
    nameDispatch: function () {alert('ok')}
  }
}

let AppHome = connect(mapStateToProps, mapDispatchToProps)( Home );

export default class GoodsDetail extends Component {
  static navigatorButtons = {
    rightButtons: [
      {
        buttonColor: '#ccc'
      },
      {
        icon: require('./img/scan.png'),
        id: 'scan',
        buttonColor: styleConfig.$globalColorPro
      }
    ],
    leftButtons: [
      {
        icon: require('./img/search.png'),
        id: 'search',
        buttonColor: styleConfig.$globalColorPro
      }
    ],
  }

static navigatorStyle = {
    navBarRightButtonColor: '#ccc',
    navBarLeftButtonColor: '#ccc'
};

  constructor(props){
    super(props);
  }
  render () {
    return (
      <Provider store={ store } >
        <AppHome navigator={this.props} />
      </Provider>
    )
  }
}
