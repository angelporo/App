'use strict';
import {
  View,
  Text,
  Image,
  ScrollView, 
  TouchableOpacity
} from 'react-native';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styleConfig, { globalStyle } from '../config/config-styles';
import EStyleSheet from 'react-native-extended-stylesheet';
import Icon from 'react-native-vector-icons/Ionicons';
import ImageContain from '../modules/Image';
import { TouchBar, ViewTouchTitleBar } from '../modules/TouchBar';
import { testData } from '../redux/initSate';
import { SwitchVadio } from '../modules/SwitchBar';
import CounterBar from '../modules/Counter';

export function HomeRowAdItem ({
  id,
  uri,
  text,
  pric,
  i,
  onPress
}) {
  return(
    <TouchableOpacity
      key={i}
      style={styles.rowAdItem}
      onPress={ () => onPress()}
      >
      <View >
        <ImageContain
          style={styles.img}
          uri={uri}
          />
      </View>
      <View style={[styles.rowButton, globalStyle.flexCenter]}>
        <Text style={[globalStyle.cw]}>{text }</Text>
      </View>
    </TouchableOpacity>
  );
}

export function HomeRowList ({titUri, listData, onPress}){
  return (
    <View style={[globalStyle.bgdW, globalStyle.pyd5, globalStyle.mtd5]}>
      <View >
        <Image
          style={styles.titImg}
          resizeMode={Image.resizeMode.cover}
          uri={titUri}
          source={{uri: titUri}}
          />
      </View>
      <View style={[ globalStyle.px1, styles.flexRow]}>
        {
          listData.map( (n, i) => {
            return <HomeRowAdItem
                       id={n.id}
                       pric={n.text}
                       uri={n.uri}
                       i= {i}
                       onPress={ () => onPress(n.id)}
            text={n.text} />
            } )
          }
      </View>
    </View>
  )
}

export function RecommendItem ({
  uri, goodsTitle, key
}) {
  return (
    <TouchableOpacity key={key}
                      onPress={() => {alert('into goods detaile page')}}
      style={[styles.RecommendList]}>
      <Image
        style={styles.recommendlistItemImg}
        source={{uri: uri}}
        resizeMode={Image.resizeMode.cover}
        />
      <View>
        <Text style={styles.text}>{ goodsTitle }</Text>
      </View>
    </TouchableOpacity>
  )
}

RecommendItem.propTypes = {
  uri: PropTypes.string,
  goodsTitle: PropTypes.string
}

/**
 * NOTE: 首页推荐商品list item
 * Param:  param
 * Return: {undefined}
 **/
export function TitleScriptionBar ({
  title,
  titleScription,
  rightButtonText,
  data
}) {
  return (
    <View>
      <View style={[ globalStyle.bgdW, globalStyle.px1, globalStyle.center, globalStyle.mtd5]}>
        <View style={[globalStyle.pyd5]}>
          <Text>{ title }</Text>
        </View>
        <View style={[globalStyle.flexauto]}>
          <Text style={[globalStyle.fzd8, globalStyle.mld5, globalStyle.cca]}>{ titleScription }</Text>
        </View>
        <TouchableOpacity
          style={[globalStyle.flexEnd]}
          onPress={ () => alert('ok') }>
          <Text style={[globalStyle.fzd8, globalStyle.cca]}>{ rightButtonText }</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export class HomeRecommend extends Component{
  constructor(props) {
    super(props);
  }
  render () {
    return(
      <View>
        <TitleScriptionBar
          title={'推荐'}
          titleScription="Recommended"
          rightButtonText='查看更多'
          />
        <View style={[styles.recommendBox]}>
          {
            testData.map( (n, i) => {
              return <RecommendItem uri={n.uri} goodsTitle={n.text} key={i} />;
            })
          }
        </View>
      </View>
    )
  }
}

export class ShoppingCarGoodsItem extends Component {
  constructor (props) {
    super(props);
  }
  render () {
    return (
      <ScrollView
        iosbounces={false}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        iosbounces={false}
        scrollEventThrottle={100}
        iosalwaysBounceHorizontal={false}
        removeClippedSubviews={false}
        style={[globalStyle.bgdc, {width: styleConfig.$width}]}
        >
        <View style={[globalStyle.flexStart, {overflow: 'hidden', width: styleConfig.$width}]}>
        <View style={[globalStyle.px1, styles.goodsImageItemBox]}>
            <SwitchVadio style={[styles.swtichBar]} text="" checked={ false } changeValue={ () => alert('Switch Vadio')} />
            <View style={styles.goodsImageItem}>
              <View style={[globalStyle.flexStart]}>
                <Image
                  source={{uri: 'https://m.360buyimg.com/n12/jfs/t3034/115/824321925/193914/39327879/57b46343N23b7df02.jpg!q70.jpg'}}
                  resizeMode={Image.resizeMode.cover}
                  style={[styles.goodsInfoImage]}
                  />
              </View>
              <View style={styles.goodsTitl}>
                <View>
                  <Text style={[globalStyle.fzd8]} >乐视超级电视 超4 X55 55英寸 HDR 3GB+32GB 4K高清2D智能语音遥控 </Text>
                </View>
                <View>
                  <Text style={[globalStyle.fzd8]}>颜色: 优雅红</Text>
                </View>
                <View style={[styles.counterBox]}>
                  <Text style={[globalStyle.cp, globalStyle.fzd8]}>$320</Text>
                  <View style={[globalStyle.flexEnd]}>
                    <CounterBar num='2' stock="4" />
                  </View>
                </View>
              </View>
            </View>
        </View>

        <View>
          <Text>button</Text>
        </View>
        </View>
      </ScrollView>
    )
  }
}


let styles = EStyleSheet.create({
  goodsImageItemBox: {
    width: '$width', 
    flexDirection: 'row',
    marginTop: '0.5rem',
    backgroundColor: '$globalWhite',
    justifyContent: 'space-between',
    paddingTop: '0.2rem',
    paddingBottom: '0.2rem'
  },
  counterBox: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  goodsImageItem: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  goodsTitl: {
    paddingLeft: '0.5rem',
    flexDirection: 'column',
    flex: 1,
    height: '5rem',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  swtichBar: {
    width: '2rem',
  },
  goodsInfoImage: {
    width: '5rem',
    height: '5rem',
  },
  recommendBox: {
    flex: 0,
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingRight: '1rem', 
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor: '$globalWhite',
  },
  RecommendList: {
    width: '50%',
    paddingLeft: '1rem'
  },
  recommendlistItemImg: {
    width: '100%',
    height: '6rem',
  },
  rowAdItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '0.2rem',
    borderWidth: 2,
    borderColor: 'transparent'
  },
  img: {
    width: '8rem',
    height: '4rem',
  },
  rowButton: {
    width:'100%',
    paddingTop: '0.2rem',
    paddingBottom: '0.2rem',
    backgroundColor: '$globalColorPro',
    marginTop: 1,
    borderRadius: '0.2rem',
  },
  text: {
    color: '$globalColorAssist'
  }, 
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    backgroundColor: '$globalColorPro',
    paddingLeft: '0.4rem',
    paddingRight: '0.4rem',
  },
  textWhite: {
    color: '$globalWhite',
  },
  titImg: {
    width: '100%',
    height: '3rem'
  },
  recommendLeft: {

  }
})
