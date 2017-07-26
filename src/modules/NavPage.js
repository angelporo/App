/**
 * 商城分类页面
 * Param:  param
 * Return: {undefined}
 **/
import {
  View,
  Text,
  StatusBar,
  ScrollView,
  FlatList, 
  TouchableWithoutFeedback,
  TouchableOpacity,
  Image
} from 'react-native';
import React, { Component } from 'react';
import styleConfig, { refreshColor, globalStyle } from '../config/config-styles';
import EStyleSheet from 'react-native-extended-stylesheet';
import Icon from 'react-native-vector-icons/Ionicons';
import Alert from '../modules/Alert';
const TouchIcon = (<Icon name="ios-book" size={ 22 } color="red" />);

export class NavItem extends Component {
  constructor(props){
    super(props);
  }
  borderLeftByIsActive (){
    if (this.props.isActive) {
      return styles.bl;
    }else{
      return styles.blw
    }
  }
  textColorByIsactive () {
    if(this.props.isActive) {
      return globalStyle.cp;
    }else {
      return null;
    }
  }
  handleChangeActiveItem() {
    let { onPress } = this.props;
    onPress();
    // this.setState({
    //   isActive: true
    // });
  }
  render () {
    let  { text, isActive } = this.props;
    return(
      <View style={this.borderLeftByIsActive.bind(this)()}>
        <TouchableWithoutFeedback
          onPress={this.handleChangeActiveItem.bind(this)}
          style={styles.navItem}>
          <View>
            <Text style={[styles.navItemText, this.textColorByIsactive.bind(this)()]}>{ text }</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    )
  }
}


export function ActiveNavShowContent ({
  sourceData,
  adUri,
}) {
  return (
    <View>
      <View>
        <Image
          style={styles.activeItemAD}
          resizeMode={Image.resizeMode.contain}
          source={{ uri: adUri }} />
      </View>
      <View style={styles.activeContentIconBox}>
        {
          sourceData.map( (n, i) => (<TouchableOpacity
                                        key={i}
                                        onPress={() => alert('into nac class page')}
                                        style={{width: '33%',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                marginTop: 0.6 * styleConfig.rem
                                               }}>
                                    <Image
                                        style={styles.activeContentIconLogo}
                                        source={{uri: n.uri}}
                                        resizeMode={Image.resizeMode.contain}
                                        />
                                      <Text style={[globalStyle.tc,
                                                    {color: styleConfig.$globalColorAssist}
                                                   ]}>{ n.name }</Text>
                                    </TouchableOpacity>))
        }
      </View>
    </View>
  );
}

export default class Class extends Component {
  onNavigatorEvent(event) {
    if (event.type == 'NavBarButtonPress') {
      if (event.id == 'scan') {
        this.props.navigator.navigator.push({
          screen: 'example.Person',
          title: "",
          passProps: {},
          animated: true,
          animationType: 'slide-horizontal',
          backButtonTitle: '' ,
          backButtonHidden: false,
          navigatorStyle: {},
          navigatorButtons: {}
        });
      }
      if (event.id == 'search') {
        this.props.navigator.navigator.push({
          screen: 'example.Search',
          title: "",
          passProps: {},
          animated: true,
          animationType: 'slide-horizontal',
          backButtonTitle: '' ,
          backButtonHidden: false
        });
      }
    }
  }
  constructor(props){
    super(props);
    this.props.navigator.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
    this.state = {
      // nav 更具每一项中的id是否和当前状态是否相同来设置当前值,
      dataSource: [{key: '推荐分类', id: 1}, {key: '京东超市', id: 2}, {key: '手机数码', id: 3}, {key: '电脑办公', id: 4}, {key: '箱包手袋', id: 6}, {key: '全球购', id: 7}, {key: '男装', id: 8}, {key: '女装', id: 9}, {key: '女鞋', id: 10}, {key: '男鞋', id: 11}, {key: '内衣配饰', id: 12}],
      activeAdUri: 'https://m.360buyimg.com/mobilecms/jfs/t5716/33/5041005995/130298/c0258ee0/595a2039N3312b96f.jpg!q70.jpg', //如果是字符串则显示图片,  如果是数组, 则显示swiper component
      activeItemData: [{name: '连衣裙', id: 1, uri: 'https://m.360buyimg.com/n1/jfs/t5776/162/3629216489/13200/53420548/593fb0b2N7c4dac6a.jpg!q70.jpg'}, {name: '衬衫', id: 1, uri: 'https://m.360buyimg.com/n1/jfs/t5776/162/3629216489/13200/53420548/593fb0b2N7c4dac6a.jpg!q70.jpg'}, {name: '衬衫', id: 1, uri: 'https://m.360buyimg.com/n1/jfs/t5776/162/3629216489/13200/53420548/593fb0b2N7c4dac6a.jpg!q70.jpg'}, {name: '衬衫', id: 1, uri: 'https://m.360buyimg.com/n1/jfs/t5776/162/3629216489/13200/53420548/593fb0b2N7c4dac6a.jpg!q70.jpg'}],
      navActiveItem: 2 //对应开启的item ID
    };
  }

  handleChangeActiveItem (id) {
    const newDataSource = Object.values(Object.assign({}, this.state.dataSource));
    this.setState({
      dataSource: newDataSource,
      navActiveItem: id
    });
  }
  render () {
    return (
      <View style={styles.navBox}>
        <View style={styles.navBar}>
          <FlatList
            data={this.state.dataSource}
            renderItem={ ({item, index}) =>
                         (<NavItem
                              key={index}
                              isActive={this.state.navActiveItem == item.id}
                              onPress={ () => this.handleChangeActiveItem.bind(this)(item.id)}
                          text={ item.key }
                          />
                         )
                       }
        />
        {
          /*
            <ScrollView style={{height: '100%'}}>
            {
            this.state.dataSource.map( (item, i) => <NavItem
            key={i}
            isActive={this.state.navActiveItem == item.id}
            onPress={ () => this.handleChangeActiveItem.bind(this)(item.id)}
            text={ item.key }
            />)
            }
            </ScrollView>
          */
        }
      </View>
        <View style={[styles.navContant, globalStyle.px1]}>
        <ActiveNavShowContent adUri={this.state.activeAdUri} sourceData={this.state.activeItemData} />
        </View>
        </View>
    )
  }
}

let styles = EStyleSheet.create({
  navBox: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    paddingTop: 20
  },
  navItemText: {
    lineHeight: '2.5rem',
    textAlign: 'center',
    color: '$globalColorAssist'
  },
  navBar: {
    width: '5rem'
  },
  navItem: {
    height: '2.5rem',
    backgroundColor: '$globalWhite'
  },
  blw: {
    borderLeftWidth: 4,
    borderStyle: 'solid',
    borderColor: '$globalWhite'
  },
  bl: {
    borderLeftWidth: 4,
    borderStyle: 'solid',
    borderColor: '$globalColorPro',
  },
  navList: {
    height: '100%',
  },
  navContant: {
    flex: 1,
    paddingRight: '$globalWhiteSpace',
  },
  activeItemAD: {
    width: '100%',
    height: '6rem',
  },
  activeContentIconBox: {
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
  },
  activeContentIconLogo: {
    width: '100%',
    height: '4rem',
  }
})
