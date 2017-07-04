/**
 * 个人中心逻辑页面
 * Param:  param
 * Return: {undefined}
 **/
import {
  View,
  Text,
  Image,
  ScrollView,
  Modal,
  RefreshControl,
  ListView,
  PixelRatio,
  TouchableOpacity,
  InteractionManager
} from 'react-native';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styleConfig, { globalStyle, refreshColor } from '../config/config-styles';
import EStyleSheet from 'react-native-extended-stylesheet';
import Icon from 'react-native-vector-icons/Ionicons';
import { GoodsDetailSwiper } from '../modules/HomeSwiper';
import CommendStar from '../modules/CommendStar'
import { ProColorMessageButton } from '../modules/Button'
import CounterBar from '../modules/Counter'
import { HintMsg, Loading } from '../modules/hint';

let ReturnIcon = (<Icon style={[globalStyle.cw]} name="ios-arrow-dropleft-circle" color="#ccc" size={20} />);
let TouchBarHeight = 26;
let prefetchImg = "https://img1.360buyimg.com/da/jfs/t5800/228/4567349819/124708/8ada1b46/59506dfdNefd95f11.jpg";

let textSiperData = [{uri: 'https://m.360buyimg.com/n12/jfs/t5575/315/2774069126/166468/bfd65dbb/5933ffb3N3481d9da.jpg!q70.jpg'}, {uri: 'https://m.360buyimg.com/n12/jfs/t2437/182/2620062135/221142/6ae1eeb7/5711cee3Nc958a38f.jpg!q70.jpg'}, {uri: 'https://m.360buyimg.com/n12/jfs/t2671/168/409622090/266992/875f55c/5711cee9N70e69e29.jpg!q70.jpg'}];

export default class GoodsDetailComponent extends Component {
  handleReturnPageIcon () {
    this.props.navigator.navigator.pop({
      animated: true,
      animationType: 'slide-horizontal',
    });
  }
  onScroll (event) {
    if (this.state.goodsInfoShow) {
      return;
    }
    let currentHeight = event.nativeEvent.contentOffset.y;
    let height = event.nativeEvent.layoutMeasurement.height;
    let contentHeight = event.nativeEvent.contentSize.height;
    let scrollHeight = (currentHeight + height) - contentHeight
    if( scrollHeight >= 100){
      console.log(scrollHeight);
      this.setState({
        goodsInfoImage: [{uri: "https://img30.360buyimg.com/popWaterMark/jfs/t4846/265/2008501908/300551/2c6370b3/58f6bf07N3eeed3a1.jpg"}, {uri: 'https://img30.360buyimg.com/popWaterMark/jfs/t3169/49/7575776379/73171/169e1430/58b7aac4Nd267b7ad.jpg'}],
        goodsInfoShow: true,
        isFetch: true,
      })
      this.setState({
        isFetch: false,
      })
    }
  }
  constructor(props) {
    super(props);
    console.log('component', this.props);
    this.state = {
      goodsName: '彪马PUMA男鞋跑步鞋2017春新款运',
      storeTag: ['赠送积分158', '积分商品', '商家包邮', '满198送'],
      goodsInfoImage: [],
      discount: '9.5', //折扣
      sale: '23',//销量
      protoPrice: '334', // 商品原价
      goodsInfoShow: false,
      isFetch: false,
      isShowModal: false, //等价价格modal开关
      isShowGoodsArguments: false,
      vipPriceData: [{title: '微客', description: '160'}, {title: '微客', description: '160'}, {title: '微客', description: '160'}, {title: '微客', description: '160'}, {title: '微客', description: '160'}, {title: '微客', description: '160'}],
      goodsArguments: [{title: '商品名称', description: '炫亮魅力丝绒口红'},
                       {title: '商品编号', description: 'ECS000123'},
                       {title: '商品品牌', description: '花颜'},
                       {title: '上架时间', description: '2016-05-12'},
                       {title: '商品重量', description: '25g'},
                       {title: '商品库存', description: '1145'}],
      storeInfo: {
        storeLogo: "https://img1.360buyimg.com/da/jfs/t5800/228/4567349819/124708/8ada1b46/59506dfdNefd95f11.jpg",
        storeName: '跨进电商',
        allGoods: '100453',
        fansNum: '12323',
        goodsInfo: '5.0',
        logistics: '5.0',
        storeService: '5.0'
      }
    }
  }
  handleCloseModal() {
    this.setState({
      isShowModal: !this.state.isShowModal
    })
  }

  handleCloseGoodsArgumentsModal() {
    this.setState({
      isShowGoodsArguments: !this.state.isShowGoodsArguments
    })
  }
  componentDidMount () {
    InteractionManager.runAfterInteractions(() => {
      // ...耗时较长的同步的任务...
      // alert('ok')
    });
  }


  render () {
    return (
      <View style={[globalStyle.html]}>
        <Loading isShow={this.state.isFetch} />
        <PriceMoal closeModal={this.handleCloseModal.bind(this)} isShow={ this.state.isShowModal } title="会员专享价" dataSource={ this.state.vipPriceData } />
        <PriceMoal closeModal={this.handleCloseGoodsArgumentsModal.bind(this)} isShow={ this.state.isShowGoodsArguments } title="商品参数" dataSource={ this.state.goodsArguments } />
      <ScrollView
        style={[globalStyle.html]}
        scrollEventThrottle={10}
        onScroll={this.onScroll.bind(this)}
        contentContainerStyle={{paddingBottom: 45}}
        refreshControl={
            <RefreshControl
                refreshing={false}
                onRefresh={ () => alert('下拉成功')}
                tintColor="#ff0000"
                title="下拉刷新"
                titleColor={ styleConfig.$globalColorPro }
                colors={ refreshColor }
                progressBackgroundColor="#ffff00"
                />
      }
      >
      <View style={styles.goodsDetailImg}>
        <View style={styles.detaileImage}>
          <GoodsDetailSwiper data={ textSiperData } />
        </View>
        <View style={[styles.detailIcons, globalStyle.px1, globalStyle.flexbox]}>
          <TouchableOpacity onPress={() => this.handleReturnPageIcon.bind(this)() }>
            <Icon style={[globalStyle.flexStart]}  name="ios-arrow-dropleft-circle" color="#ccc" size={24} />
          </TouchableOpacity>
          <TouchableOpacity style={[ globalStyle.flexEnd, {flex: 1}]}>
            <Icon name="ios-cart-outline" color="#ccc" size={24} />
          </TouchableOpacity>
        </View>
       </View>
        <View style={[ globalStyle.px1, globalStyle.pyd5, globalStyle.center]}>
          <View style={[globalStyle.flexStart, globalStyle.flexauto]}>
            <Text>{ this.state.goodsName }</Text>
          </View>
          <View style={styles.shareIcon}>
            <TouchableOpacity style={[globalStyle.flexEnd]}>
              <View style={{alignItems: 'center'}}>
                <Icon name="ios-cart-outline" color="#000" size={20} />
                <Text style={globalStyle.tc, globalStyle.fzd8}>分享</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={[globalStyle.px1 ]}>
          <View style={[{flex: 0,
                         alignItems: 'flex-start',
                         justifyContent: 'flex-start',
                         flexDirection:'row',
                         width: '100%',
                }]}>
            <View style={{}}>
              <Text>
                ￥158
              </Text>
            </View>
            <View style={{flexWrap: 'wrap', flex: 1, justifyContent: 'flex-start',alignItems: 'center', flexDirection: 'row' }}>
              {
                  this.state.storeTag.map( (n, i) => {
                    return <ProColorMessageButton text={n} />
                  })
              }
            </View>
          </View>
          <Text style={[{textDecorationLine: 'line-through', color: '#a0a0a0', lineHeight: 24},
                        globalStyle.fzd8
                ]}>原价:￥{this.state.protoPrice} </Text>
          <View style={[globalStyle.bb]}>
            <View style={globalStyle.flexStart}>
              <View>
                <Text style={[{color: '#747474', lineHeight: 24}, globalStyle.fzd8]}>折扣: { this.state.discount}折</Text>
              </View>
              <View>
                <Text style={[{marginLeft: 40, color: '#747474'}, globalStyle.fzd8]}>月销{ this.state.sale }笔</Text>
              </View>
            </View>
          </View>
          <GoodsDetailTouchBar title="会员等级价格" onPress={() => this.setState({isShowModal: true})} />
            <GoodsDetailTouchBar title="产品参数" onPress={() => this.setState({isShowGoodsArguments: true})} />
          <GoodsDetailTouchBar title="查看自提点" onPress={() => alert('ok')} bb={false} />
        </View>
        <GoodsStore storeInfo={this.state.storeInfo} />
        {
          this.state.goodsInfoImage.length != 0 ? <GoodsImgIntro data={this.state.goodsInfoImage} /> : null
        }

</ScrollView>
<GoodsFooter />
      </View>
    )
  }
}

function GoodsDetailTouchBar ({
  onPress,
  title,
  bb=true
}) {
  let borderButton = () => {
    if(bb) {
      return globalStyle.bb
    }else {
      return {}
    }
  }
  let styles = borderButton();
  return (
    <View style={ styles } >
      <TouchableOpacity
        onPress={onPress}
        style={globalStyle.flexStart}>
        <View style={{flex: 1}}>
          <Text style={[{ color: '#282828', lineHeight: TouchBarHeight }, globalStyle.fzd8]}>{ title }</Text>
        </View>
        <View>
          <Icon style={[globalStyle.flexEnd]}  name="ios-arrow-forward" color="#ccc" size={20} />
        </View>
      </TouchableOpacity>
    </View>
  )
}
GoodsDetailTouchBar.PropTypes = {
  onPress: PropTypes.func,
  title: PropTypes.string
}

export class GoodsImgIntro extends Component {
  constructor (props) {
    super(props);
    this.state = {
      height: 200,
      uri: ''
    }
  }

  render () {
    let { data } = this.props;
    let _this = this;
    return (
      <View style={[styles.goodsIntro]}>
        <View style={[globalStyle.mtd5, globalStyle.bgdW]}>
          {
            data.map( (n, i) => {
                return (
                  <FixImage key={i} source={ {uri: n.uri} } />
                )
            })
          }
      </View>
        </View>
    )
  }
}

export class FixImage extends Component {
  constructor(props){
    super(props);
    this.state = {
      height: 0,
      width: 0,
    }
  }
  componentDidMount () {
    Image.getSize(this.props.source.uri, (width, height) => {
      this.setState({width, height});
    });
  }
  render () {
    let { uri } = this.props.source;
    return (
      <View style={ styles.goodsIntroItem }>
        <Image
          style={{height: this.state.height/PixelRatio.get()}}
          source={{uri: uri}}
          resizeMode={Image.resizeMode.contain}
          />
      </View>
    )
  }
}

function GoodsModeItem ({text, num}) {

}

export class GoodsMode extends Component {
  render () {
    return (
      <Moal>
        <View>
          <Text>{ title }</Text>
        </View>
      </Moal>
    )
  }
}

function GoodsStore ({storeInfo}) {
  return (
    <View style={styles.storeInfoBox}>
      <View style={[globalStyle.mtd5, globalStyle.bgdW]}>
        <View style={[globalStyle.flexStart, globalStyle.px1, globalStyle.pyd5]}>
          <View style={styles.goodsStoreLogo}>
            <Image
              style={{width: '100%',
              height: '100%'}}
              source={{uri: storeInfo.storeLogo}}
              resizeMode={Image.resizeMode.contain}
              />
          </View>
          <View style={[globalStyle.mld5]}>
            <Text style={[globalStyle.fzd8]}>{ storeInfo.storeName}</Text>
            <Text style={{fontSize: 14}}>⭐⭐⭐⭐⭐⭐</Text>
          </View>
        </View>
        <View style={[globalStyle.flexCenter]}>
          <View style={{alignItems: 'center', width: '33%'}}>
            <Text style={globalStyle.fzd8}>{ storeInfo.allGoods}</Text>
            <Text style={globalStyle.fzd8}>全部商品</Text>
          </View>
          <View style={[{alignItems: 'center', width: '33%'}, styles.bx1]}>
            <Text style={globalStyle.fzd8}>{ storeInfo.fansNum}</Text>
            <Text style={globalStyle.fzd8}>关注人数</Text>
          </View>
          <View style={{alignItems: 'center', width: '33%'}}>
            <Text style={[globalStyle.fzd8, {lineHeight: 16}]}>商品描述  <Text style={[globalStyle.cp]}>{ storeInfo.goodsInfo }</Text></Text>
            <Text style={[globalStyle.fzd8, {lineHeight: 16}]}>卖家服务  <Text style={[globalStyle.cp]}>{ storeInfo.storeService }</Text></Text>
            <Text style={[globalStyle.fzd8, {lineHeight: 16}]}>物流服务  <Text style={[globalStyle.cp]}>{ storeInfo.logistics }</Text></Text>
          </View>
        </View>
        <View style={[globalStyle.flexCenter, globalStyle.mtd5]}>
          <View style={[globalStyle.flexCenter, {width:'40%'}]}>
            <TouchableOpacity
              style={styles.roundButton}
              onPress={() => alert('相关分类')}>
              <Text style={styles.roundButtonText}>相关分类</Text>
            </TouchableOpacity>
          </View>
          <View style={[globalStyle.flexCenter, {width:'40%'}]}>
            <TouchableOpacity
              style={styles.roundButton}
              onPress={() => alert('相关分类')}>
              <Text style={styles.roundButtonText}>最近上新</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
</View>
  )
}

export class GoodsFooter extends Component {
  constructor(props) {
    super(props);
  }
  render () {
    return (
      <View style={[styles.footerBox, globalStyle.flexStart]}>
        <View style={[{width: '50%'}, styles.footIcon,  globalStyle.flexCenter]}>
          <TouchableOpacity style={{width: '33%', alignItems:'center'}}>
            <Icon name="ios-arrow-dropleft-circle" color="#ccc" size={20} />
            <Text style={[globalStyle.fzd8]}>首页</Text>
          </TouchableOpacity>
          <View style={[{width: '33%'}, styles.bx1]}>
            <TouchableOpacity style={{alignItems: 'center'}}>
              <Icon name="ios-arrow-dropleft-circle" color="#ccc" size={20} />
              <Text style={[globalStyle.fzd8]} >客服</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={{width: '33%', alignItems:'center'}}>
            <Icon name="ios-star" color="#ccc" size={20} />
            <Text style={[globalStyle.fzd8]}>收藏</Text>
          </TouchableOpacity>
        </View>
        <View style={[{width: '50%',height: '100%', backgroundColor: "red"}, globalStyle.flexStart]}>
          <TouchableOpacity
            onPress={() => alert('ok')}
            style={{width: '50%', height: '100%', justifyContent: 'center'}}>
            <Text style={[{fontSize: 14, }, globalStyle.tc, globalStyle.cw]}>加入购物车</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => alert('ok')}
            style={{width: '50%', height: '100%', justifyContent: 'center'}}>
            <Text style={[{fontSize: 14}, globalStyle.tc, globalStyle.cw]}>立即购买</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}


export function GoodsDetailMoalItem ({title, description}) {
  return (
    <View style={[globalStyle.flexStart, globalStyle.bb, globalStyle.pyd5]}>
      <View style={[{width:'40%'}]}>
        <Text style={[globalStyle.fzd8]}>{ title }</Text>
      </View>
      <View style={[{width: '60%'}]}>
        <Text style={[globalStyle.cp, globalStyle.fzd8]}>{ description }</Text>
      </View>
    </View>
  )
}

export class PriceMoal extends Component {
  constructor(props){
    super(props)
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(this.props.dataSource),
    };
  }
  render () {
    let { title, isShow, closeModal } = this.props;
    if (isShow) {
      return (
        <Modal
          transparent={true}
          animationType={"fade"}
          style={styles.modal}>
          <View
            style={[styles.modalPressBox]}
            >
            <TouchableOpacity
              onPress={ closeModal }
              style={{flex:1, width: '100%', height: '50%'}}
                              ></TouchableOpacity>
            <View style={[globalStyle.bgdW, styles.modalBox]}>
              <View style={[globalStyle.py1]}>
                <Text style={[globalStyle.tc, globalStyle.cca]}>{ title }</Text>
              </View>
              <ListView
                style={[globalStyle.px1]}
                dataSource={ this.state.dataSource }
                renderRow={(n, i) => (<GoodsDetailMoalItem key={i} title={ n.title } description={n.description} />)}
          />
          <TouchableOpacity
            onPress={() => alert('shpping goods now !')}
            style={[globalStyle.bgcp, globalStyle.py1]}>
               <Text style={[globalStyle.cw, globalStyle.tc]}>立即购买</Text>
          </TouchableOpacity>
          </View>
      </View>
   </Modal>
      )
    }else {
      return null;
    }
  }
}


let styles = EStyleSheet.create({
  detaileImage: {
  },
  goodsIntro: {
    backgroundColor: styleConfig.$globalBgc,
  },
  goodsIntroItem: {
  },
  storeInfoBox: {
    backgroundColor: styleConfig.$globalBgc,
    marginBottom: '1rem',
  },
  goodsStoreLogo: {
    width:'3rem',
    height: '3rem'
  },
  goodsDetailImg: {
    maxHeight: '24rem',
    position: 'relative',
  },
  modalPressBox: {
    flex: 1,
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    left: 0, top: 0, right: 0, bottom: 0,
  },
  roundButton: {
    width: '4rem',
    borderRadius: '1.5rem',
    height: '1.6rem',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '$globalColorPro',
    overflow: 'hidden',
  },
  roundButtonText: {
    width: '4rem',
    height: '1.2rem',
    lineHeight: '1.2rem',
    textAlign: 'center',
    fontSize: '0.8rem',
    color: '$globalColorPro',
  },
  bx1: {
    borderStyle: 'solid',
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderLeftColor: '$globalBorder',
    borderRightColor: '$globalBorder'
  },
  footerBox: {
    backgroundColor: '$globalWhite',
    zIndex: 10,
    width: '100%',
    position: 'absolute',
    left: 0, right: 0, bottom: 0,
  },
  footIcon: {
    paddingTop: '0.2rem',
    paddingBottom: '0.2rem',
  },
  goodsHintPer: {
    width: '5rem',
    textAlign: 'center',
    fontSize: '0.8rem',
    color: '$globalWhite'
  },
  modal: {
    position: 'relative',
  },
  modalBox: {
    position: 'absolute',
    left: 0, bottom: 0,
    zIndex: 100
  },
  shareIcon: {
    borderLeftColor: '$globalBorder',
    borderStyle:'solid',
    borderLeftWidth: 1,
    paddingLeft: '0.5rem',
    paddingRight: '0.5rem',
  },
  detailIcons: {
    width: '100%',
    height: '2rem',
    position: 'absolute',
    backgroundColor: 'transparent',
    left: 0,
    top: 25,
  }
})
