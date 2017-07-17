'use strict';
import {
  View,
  Text,
  Image,
  ScrollView,
  ListView,
  FlatList,
  TouchableOpacity,
  SwipeableListView
} from 'react-native';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styleConfig, { globalStyle } from '../config/config-styles';
import EStyleSheet from 'react-native-extended-stylesheet';
import Icon from 'react-native-vector-icons/Ionicons';
import ImageContain from '../modules/Image';
import { TouchBar, ViewTouchTitleBar } from '../modules/TouchBar';
import { SwitchVadio } from '../modules/SwitchBar';
import CounterBar from '../modules/Counter';
import Swipeable from 'react-native-swipeable';
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
        <Text style={[globalStyle.cw, {fontSize: 10}]}>{ text }</Text>
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
                       text={n.description}
              />
            } )
          }
      </View>
    </View>
  )
}

export class RecommendItem extends Component {
  constructor(props) {
    super(props);
  }
  render () {
    const {uri, goodsTitle, key} = this.props;
    return (
      <TouchableOpacity key={key}
                        onPress={() => { alert('into goods detaile page');}}
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
  data,
  onPressMore
}) {
  return (
    <View>
      <View style={[ globalStyle.bgdW, globalStyle.px1, globalStyle.center, globalStyle.mtd5]}>
        <View style={[globalStyle.pyd5]}>
          <Text>{ title }</Text>
        </View>
        <View style={[globalStyle.flexauto]}>
          <Text style={[globalStyle.fzd8,
                        globalStyle.mld5,
                        globalStyle.cca
                ]}>{ titleScription }</Text>
        </View>
        <TouchableOpacity
          style={[globalStyle.flexEnd]}
          onPress={ onPressMore }>
          <Text style={[globalStyle.fzd8, globalStyle.cca, globalStyle.pyd5]}>{ rightButtonText }</Text>
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
    const source = this.props.source || [];
    const { onPressMore } = this.props;
    if (source.length == 0) {
      return null;
    }else {
      return(
        <View>
          <TitleScriptionBar
            title={'推荐'}
            titleScription="Recommended"
            onPressMore={ onPressMore }
            rightButtonText='查看更多'
            />
          <View style={[styles.recommendBox]}>
            {
              source.map( (n, i) => {
                return <RecommendItem uri={n.uri} goodsTitle={n.title} key={i} />;
              })
            }
          </View>
        </View>
      );
    }
  }
}

export class HomeRecommendGoods extends Component{
  constructor(props) {
    super(props);
  }
  render () {
    const source = this.props.source || [];
    const { onPressMore } = this.props;
    if (source.length == 0) {
      return null;
    }else {
      return(
        <View>
          <TitleScriptionBar
            title={'热销'}
            titleScription="Hot sale"
            onPressMore={ onPressMore }
            rightButtonText='查看更多'
            />
            <GoodsRowItem source={source} />
        </View>
      );
    }
  }
}

export function GoodsRowItem ({source}) {
  return (
          <View style={[styles.hotSaleBox]}>
    <FlatList
      data={ source }
      columnWrapperStyle={{justifyContent: 'space-between', flexDiraction: 'row'}}
      numColumns={2}
      renderItem={ ({item, index}) => {
        return ( <HotSaleItem
                     handleIntoGoodsDetail={ () => alert('12')}
                     key={index}
                     price={item.price}
                     sale={item.sales}
                     goodsName={item.goodsName}
                     uri={item.uri}
                     />
               );
      } }
      />
      </View>
  )
}


export function HotSaleItem ({price, sale, uri, goodsName, handleIntoGoodsDetail}) {
  return (
    <TouchableOpacity
      onPress={ handleIntoGoodsDetail }
      style={[styles.hotSaleItem]}>
      <View>
        <Image
          source={{uri: uri}}
          resizeMode={Image.resizeMode.contain}
          style={styles.hotItemImage}
          />
      </View>
      <View>
        <Text style={[globalStyle.cca,
                      globalStyle.fzd8,
                      styles.hotItemGoodsName
              ]}>{ goodsName }</Text>
        <View style={styles.flexBetween}>
          <Text style={[globalStyle.cp]}>{ `${price}` }</Text>
          <Text style={[globalStyle.cca, {fontSize: 10}]}>{`${sale}人已付款`}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export const RightButton = ({onPress}) => {
  return (
    <View style={styles.rowBack}>
      <View style={styles.deleteButtonBox}>
        <TouchableOpacity
          onPress={ onPress }
          style={styles.deleteButton}>
          <Text style={[globalStyle.cw]}>删除</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export class SwiperShoppingCarItem extends Component {
  static propTypes = {
    isChecked: PropTypes.bool,
    changeCheckBox: PropTypes.func,
    itemData: PropTypes.object,
    onPressDelete: PropTypes.func
  }
  constructor (props) {
    super(props);
  }
  swipeable = null

  deleteItem () {
    let {onPressDelete} = this.props;
    onPressDelete()
  }

  render () {
    let { isChecked,
          changeCheckBox,
          itemData,
          onPressDelete,
          onPressAddCounter,
          onPressReduceCounter,
          onChange
        } = this.props;
    return (
      <View style={{marginTop: 5}}>
        <Swipeable
          onRef={ref => this.swipeable = ref}
          rightButtons={[<RightButton onPress={this.deleteItem.bind(this)} />]}>
          <View style={styles.orderItem}>
            <View style={[globalStyle.px1, styles.goodsImageItemBox]}>
              <SwitchVadio style={[styles.swtichBar]} text="" checked={ itemData.isChecked } changeValue={ changeCheckBox } />
              <View style={styles.goodsImageItem}>
                <View style={[globalStyle.flexStart]}>
                  <Image
                    source={{uri: itemData.goodsUri}}
                    resizeMode={Image.resizeMode.cover}
                    style={[styles.goodsInfoImage]}
                    />
                </View>
                <View style={styles.goodsTitl}>
                  <View>
                    <Text style={[globalStyle.fzd8]} >{ itemData.goodsName } </Text>
                  </View>
                  <View>
                    <Text style={[{color: '#c9c9c9',
                                   fontSize: 10,
                                   height: 14,
                                   lineHeight: 14
                          }]}>{ itemData.attr}</Text>
                  </View>
                  <View style={[styles.counterBox]}>
                    <Text style={[globalStyle.cp, globalStyle.fzd8]}>{`${itemData.price}`}</Text>
                    <View style={[globalStyle.flexEnd, styles.mtd2]}>
                      <CounterBar
                        onPressReduce={ onPressReduceCounter }
                        onPressAdd={ onPressAddCounter }
                        num={ itemData.buyNum }
                        stock={ itemData.stock }
                        onChange={ (value) => onChange(value) }
                        />
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </Swipeable>
      </View>
    )
  }
}

let styles = EStyleSheet.create({
  $orderImgItemSize: '5rem',
  rowFront: {
    marginTop: '0.5rem',
    backgroundColor: '$globalBgc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  orderItem: {
    height: '6rem',
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: '$globalWhite',
  },
  deleteButton: {
    backgroundColor: '$globalColorPro',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  deleteButtonBox: {
    width: 75,
    height: '100%'
  },
  rowBack: {
    backgroundColor: '$globalColorPro'
  },
  goodsImageItemBox: {
    flexDirection: 'row',
    backgroundColor: '$globalWhite',
    justifyContent: 'space-between',
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
  hotSaleBox: {
    paddingLeft: '$globalWhiteSpace',
    paddingRight: '$globalWhiteSpace',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '$globalWhite'
  },
  hotItemImage: {
    width: '100%',
    height: '6rem'
  },
  hotItemGoodsName: {
    lineHeight: '1rem',
    fontSize: '0.8rem',
    height: '2.2rem',
    marginTop: '0.5rem',
    overflow: 'hidden',
    paddingLeft: '0.2rem',
    paddingRight: '0.2rem'
  },
  flexBetween: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: '0.5rem',
    paddingLeft: '0.2rem',
    paddingRight: '0.2rem'
  },
  hotSaleItem: {
    paddingBottom: '0.2rem',
    width:'48%',
    marginTop: '0.6rem',
    borderColor: '#f7f7f7',
    borderWidth: 1,
    borderStyle: 'solid'
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
    width: '$orderImgItemSize',
    height: '$orderImgItemSize'
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
    color: '$globalColorAssist',
    fontSize: '0.8rem',
    lineHeight: '2rem'
  },
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    backgroundColor: '$globalColorPro',
    paddingLeft: '0.4rem',
    paddingRight: '0.4rem'
  },
  textWhite: {
    color: '$globalWhite'
  },
  titImg: {
    width: '100%',
    height: '3rem'
  },
  recommendLeft: {
  },
  mtd2: {
    marginTop: '0.2rem',
  }
})
