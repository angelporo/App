/**
 * 用户信息页面
 * Param:  param
 * Return: {undefined}
 **/
import {
  ScrollView,
  TouchableOpacity,
  FlatList,
  ListView,
  Animated
} from 'react-native';
import React, { Component } from 'react';
import styleConfig, { globalStyle, refreshColor } from '../config/config-styles';import EStyleSheet from 'react-native-extended-stylesheet';
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchBar, ViewTouchTitleBar } from '../modules/TouchBar';
import Alert from '../modules/Alert';
import { SwitchBar,
         SwitchVadio
       } from '../modules/SwitchBar';
import { createAnimatableComponent, View, Text } from 'react-native-animatable';
import * as util from '../redux/utils/util';
const editIcon = (<Icon name="ios-create-outline" size={ 22 } color={'#929292'} />);
const deleteIcon = (<Icon name="ios-trash-outline" size={ 22 } color={'#929292'} />);

const AnimatableListView = createAnimatableComponent(ScrollView);

export default class Address extends Component{

  menuBox = null
  constructor(props){
    super(props);
    this.props.navigator.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
    const { dataSource } = this.props;
    // var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      isEdit: false,
      checked: false,
      dataSource: dataSource
    };
  }

  onNavigatorEvent(event) {
    const _this = this;
    if (event.type == 'NavBarButtonPress') {
      if (event.id == 'manageButton') {
        this.setState({
          isEdit: !this.state.isEdit
        }, () => {
          _this.props.navigator.navigator.setButtons({
            rightButtons: [
              {
                buttonColor: '#282828',
                id: "manageButton",
                title: _this.state.isEdit ? '取消' : '管理'
              }
            ],
            animated: true
          });
        });
      }
    }
  }

  handleDetelAddress (index) {
    const { dataSource, deleteUserAddressItem } = this.props;
    const newSourceData = util.deleteArrayByIndex(index , dataSource);
    deleteUserAddressItem({newAddressSourceData: newSourceData});
  }

  componentWillMount() {

  }
  componentDidMount(){

  }

  intoEditAddressPage (id) {
    this.props.navigator.navigator.push({
      screen: 'example.AppEditAddress',
      title: '编辑地址',
      animated: true,
      passProps: {id: id, type: 'edit'},
      animationType: 'slide-horizontal',
      backButtonTitle: '',
      backButtonHidden: false
    });
  }
  render () {
    const _this = this;
    const { dataSource } = this.props;
    return(
      <View style={{height: '100%'}}>
        <AnimatableListView
          >
          {
            dataSource.map( (rowData, i) => {
              return (
                <AnimationMenuBox
                  handleDetelAddress={this.handleDetelAddress.bind(this) }
                  handleEditButton={ this.intoEditAddressPage.bind(this) }
                  index={ i }
                  key={ i } isEdit={ this.state.isEdit } rowData={ rowData } />
              );
            })
          }
      </AnimatableListView>
        </View>
    );
  };
}

export class AnimationMenuBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fadeAnim: new Animated.Value(1),
      refHeight: new Animated.Value(0)
    };
  }
  ref = null
  handleRef = (ref) => {
    this.ref = ref;
  }

  handleDetelAddress(index) {
    const { handleDetelAddress, handleEditButton } = this.props;
    // this.ref._component.measure((w, y, width, height, ox, oy) => {
    //   console.log(width, height);
    // });
    Animated.spring(
      this.state.fadeAnim,
      {
        toValue: 0
      }
    ).start();
    this.time1 = setTimeout( () => handleDetelAddress(index), 350);
    this.time2 = setTimeout(() => {
      Animated.spring(
        this.state.fadeAnim,
        {
          toValue: 1
        }
      ).start();
    } , 350);
  }
  componentWillUnmount() {
    this.time1 && clearTimeout(this.time1);
    this.time2 && clearTimeout(this.time2);
  }
  componentDidMount() {
  }

  render () {
    const { rowData, index, handleEditButton } = this.props;
    const defaultAddress = <Text style={[globalStyle.cp]}>[默认地址] </Text>;
    const addressType = rowData.type === 1 ? defaultAddress : null;
    if (__DEV__) {
      if (!rowData.address) {
        throw new Error('检查userAddress对象中的address属性, Address.js');
      }
      if (!rowData.name) {
        throw new Error('检查userAddress对象中的name属性, Address.js');
      }
      if (!rowData.mobile) {
        throw new Error('检查userAddress对象中的mobile属性, Address.js');
      }
    }
    return (
      <Animated.View
        ref={ this.handleRef.bind(this) }
        style={[globalStyle.px1,
                globalStyle.bb,
                styles.addressRowDataBox,
                {opacity: this.state.fadeAnim}
        ]}>
        <View style={ styles.flexbetween }>
          <Text style={[globalStyle.lhd5, styles.addressMobileText]}>{rowData.name} </Text>
          <Text style={[globalStyle.lhd5, styles.addressMobileText]}>{ rowData.mobile }</Text>
        </View>
        <View style={ styles.addrss }>
          <Text style={ styles.addressText }>{ addressType }{ rowData.address }</Text>
        </View>
        {
          this.props.isEdit ?
                <AddressMenus
                    handleDelete={ this.handleDetelAddress.bind( this ) }
                    handleEditButton={ handleEditButton.bind(this) }
                    item={ rowData }
                    index={ index }
                    />
              : null
            }

      </Animated.View>
    );
  }
}

function AddressMenus ({item, handleDelete, index, handleEditButton}) {
  const menuAddressButtonColor = item.type === 1 ? {color: styleConfig.$globalColorPro} : {color: styleConfig.$globalColorAssist};
  const menuAddressTextContent = item.type === 1 ? '默认地址' : '设为默认';
  return (
    <View style={styles.addressMenuBox}>
      { /* 地址菜单 */}
      <View style={styles.menuVadio}>
        <SwitchVadio
          checked={item.type === 1}
          style={{flex: 0}}
          changeValue={() => this.setState({checked: !this.state.checked})}
          />
          <Text style={ menuAddressButtonColor }>{ menuAddressTextContent }</Text>
      </View>
      <View style={styles.menuVadioRight}>
        <TouchableOpacity
          style={styles.menuRightText}
          onPress={ () => handleEditButton(item.id)}>
          { editIcon }
          <Text style={[{color: '#929292'}, globalStyle.mld5]}>编辑</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.menuRightText, globalStyle.mld5]}
          onPress={ () => handleDelete(index) }>
          { deleteIcon }
          <Text style={[{color: '#929292'}, globalStyle.mld5]}>删除</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = EStyleSheet.create({
  addrss: {
    paddingBottom: '$globalWhiteSpace'
  },
  menuVadio: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row'
  },
  menuVadioRight: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexDirection: 'row'
  },
  menuRightText: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexDirection: 'row'
  },
  addressMenuBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderStyle: 'solid',
    borderTopWidth: 1,
    paddingTop: 1,
    paddingBottom: 1,
    borderColor: '$globalBorder'
  },
  flexbetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '2.5rem',
    paddingTop: '$globalWhiteSpace'
  },
  addressItem: {
  },
  addressMobileText: {
    color: '#282828'
  },
  addressText: {
    color: '#929292'
  },
  html: {
    marginTop: '-0.5rem',
    height: '100%',
    backgroundColor: '$globalBgc'
  },
  addressItemBox: {
    marginTop: '0.5rem',
    backgroundColor: '$globalWhite'
  }
});
