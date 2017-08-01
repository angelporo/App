/**
 * 用户确认订单页面组件
 * Param:  param
 * Return: { undefined }
 **/
import {
  ScrollView,
  TouchableOpacity,
  FlatList,
  ListView,
  Animated
} from 'react-native';
import React, { Component } from 'react';
import styleConfig, { globalStyle,
                      refreshColor
                    } from '../config/config-styles';
import EStyleSheet from 'react-native-extended-stylesheet';
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchBar,
         ViewTouchTitleBar
       } from '../modules/TouchBar';
import Alert from '../modules/Alert';
import { SwitchBar,
         SwitchVadio
       } from '../modules/SwitchBar';
import { createAnimatableComponent,
         View,
         Text
       } from 'react-native-animatable';
import * as util from '../redux/utils/util';
import { OrderInfoBox, OrderListItemRightComponent } from './OrderItem';

const deleteIcon = (<Icon name="ios-trash-outline" size={ 22 } color={'#929292'} />);
// 动画初始化
const AnimatableListView = createAnimatableComponent(ScrollView);

export default class ConfirmOrderComponent  extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentWillUnmount () {

  }

  componentDidMount () {

  }

  render () {
    const OrderRightText = OrderListItemRightComponent(this.props.item);
    const OrderItemContent = OrderInfoBox( OrderRightText )({orderInfo: this.props.item});
    return (
      <AnimatableListView
        animation="bounceInUp"
        duration={ 1200 }
        delay={ 300 }
        >
        <OrderItemContent disableTouch />
      </AnimatableListView>
    );
  }
}

const styles = EStyleSheet.create({

});
