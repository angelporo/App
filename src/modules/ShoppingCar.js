/**
 * 购物车组件
 * Param:  param
 * Return: {undefined}
 **/
import {
  View,
  Text,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  StatusBar,
  RefreshControl,
} from 'react-native';
import React, { Component } from 'react';
import styleConfig, { globalStyle } from '../config/config-styles';
import EStyleSheet from 'react-native-extended-stylesheet';
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchBar, ViewTouchTitleBar } from './TouchBar';
import Alert from './Alert';
import { Vadio } from './SwitchBar';
import { SwiperShoppingCarGoodsItem, SwiperText } from './HomeListItem';

export default class ShoppCar extends Component {

  _handleSettingIcon () {
  }
  render () {
    return (
      <View style={{position: 'relative', height: '100%', backgroundColor: styleConfig.$globalBgc}}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{position: 'relative'}}
          refreshControl={
              <RefreshControl
                  refreshing={false}
                  onRefresh={ () => alert('下拉成功')}
                  tintColor="#ff0000"
                  title="下拉刷新"
                  titleColor={ styleConfig.$globalColorPro }
                  colors={['#ff0000', '#00ff00', '#0000ff']}
                  progressBackgroundColor="#ffff00"
                  />
        }>
        <SwiperShoppingCarGoodsItem />
        </ScrollView>
        <View style={[styles.shoppingFooter ]}>
          <ShoppingCarFooter />
        </View>
     </View>
    )
  }
}

export  function ShoppingCarFooter () {
  return (
    <View style={styles.footer}>
      <View style={ styles.footerBox}>
        <View style={styles.footer}>
          <Vadio checked={ false } changeValue={() =>alert('ok')} />
            <View style={[globalStyle.mld5]}>
              <Text style={[globalStyle.fzd8]}>全选</Text>
            </View>
        </View>
        <View>
          <View>
            <Text style={[globalStyle.fzd8, globalStyle.tc]}>合计:<Text style={[globalStyle.cp]}>$0</Text></Text>
            <Text style={[globalStyle.fzd8, {marginTop: 5}]}>不含运费及优惠</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.clearingButtonBox}>
        <Text style={[globalStyle.cw, styles.clearingButton]}>去接算</Text>
      </TouchableOpacity>
    </View>
  )
}

let styles = EStyleSheet.create({
  shoppingFooter: {
    backgroundColor: '$globalWhite',
    width: '100%',
    position: 'absolute',
    left: 0,
    bottom: 0,
    borderColor: '$globalBorder',
    borderBottomWidth: 1,
    borderStyle: 'solid',
  },
  footerBox: {
    paddingLeft: '$globalWhiteSpace',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    width: '70%',
    paddingRight: '1.5rem'
  },
  clearingButtonBox: {
    width: '30%',
    backgroundColor: '$globalColorPro',
    alignItems: 'center',
    justifyContent: 'center',
    height: '3rem',
  },
  clearingButton: {
  },
  footer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  }
})
