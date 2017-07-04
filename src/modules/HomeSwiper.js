'use strict'
import {
  View,
  Text,
  Image
} from 'react-native';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styleConfig, { globalStyle } from '../config/config-styles';
import EStyleSheet from 'react-native-extended-stylesheet';
import Icon from 'react-native-vector-icons/Ionicons';
import Swiper from 'react-native-swiper';

export default class HomeSwiper extends Component {
  constructor (props){
    super(props);
  }
  render () {
    let { data } = this.props;
    return (
        <View style={styles.swaperBox}>
        <Swiper
      height={ 160 }
      dot={<View style={styles.dot} />}
      activeDot={<View style={styles.activeDot} />}
      paginationStyle={{
        bottom: 10
      }}
        >
        { this.props.data.map((n, i) => {
          return(
            <View key={i} style={styles.swiperItem}>
              <View style={styles.imgBox}>
                <Image
                  source={{uri: n.uri}}
                  style={{width: '100%', height: '100%'}}
                  resizeMode={Image.resizeMode.cover}
                  />
              </View>
            </View>
          );
        })
        }
      </Swiper>
        </View>
    )
  }
}

/**
 * NOTE: 商品详情页面轮播
 * Param:  param
 * Return: {undefined}
 **/
export class GoodsDetailSwiper extends Component {
  constructor (props){
    super(props);
  }
  render () {
    let { data } = this.props;
    return (
        <View style={styles.swaperBox}>
        <Swiper
      showsPagination={false}
      style={styles.goodsDetail}
        >
        { this.props.data.map((n, i) => {
          return(
              <View key={i}>
              <Image
                style={{width: '100%', height: '100%'}}
                source={{uri: n.uri}}
                resizeMode={ Image.resizeMode.cover }
              />
              </View>
          );
        })
        }
      </Swiper>
        </View>
    )
  }
}


/**
 * NOTE: 首页腰部广告
 * Param:  param
 * Return: {undefined}
 **/
export class HomeSwiperAdCenter extends Component {
  constructor (props){
    super(props);
  }
  render () {
    let { data } = this.props;
    return (
        <View style={styles.swiperAdCenter}>
        <Swiper
      height={ 80 }
      showsPagination={false}
        >
        { this.props.data.map((n, i) => {
          return(
              <View key={i} style={styles.swiperItem}>
                <View style={styles.imgBox}>
                  <Image
                    resizeMode={Image.resizeMode.cover}
                    style={{width: '100%', height: '100%'}}
                    source={{uri: n.uri}}
                    />
              </View>
              </View>
          )
        })
        }
      </Swiper>
        </View>
    )
  }
}


HomeSwiperAdCenter.propTypes = {
  data:PropTypes.array
}
HomeSwiper.propTypes = {
  data:PropTypes.array
}


let styles = EStyleSheet.create({
  swaperBox: {
  },
  swiperAdCenter: {
    marginBottom: '0.5rem',
    marginTop: '0.5rem'
  },
  wrapper: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  },
  goodsDetail: {
    maxHeight: '24rem'
  },
  activeDot: {
    backgroundColor: '$globalWhite',
    width: 8,
    marginLeft:'0.5rem',
    height: 8,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '$globalWhite',
    borderStyle: 'solid'
  },
  dot: {
    backgroundColor: 'transparent',
    width: 8,
    marginLeft:'0.5rem',
    height: 8,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '$globalWhite',
    borderStyle: 'solid'
  },
  imgBox: {
    height: '100%',
  },
  swiperItem: {
    height: '100%'
  },
  text: {
    color: '#000',
    fontSize: 30,
    fontWeight: 'bold'
  }
})
