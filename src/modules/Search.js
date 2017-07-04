'use strict';
import {
  View,
  Text,
  Image,
  ScrollView,
  ListView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styleConfig, { globalStyle } from '../config/config-styles';
import EStyleSheet from 'react-native-extended-stylesheet';
import Icon from 'react-native-vector-icons/Ionicons';
import { SearchKeyWordButton } from '../modules/Button';
const searchIcon = (<Icon name="ios-search" size={ 22 } color={ styleConfig.$globalColorAssist} />);

export class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: ''
    };
  }
  changeValue (value) {
    this.setState({
      searchValue: value
    })
  }
  handleClosePage () {
    let { handleClosePage } = this.props;
    handleClosePage()
  }
  render () {
    return(
      <View style={styles.searchBar}>
        <View style={styles.searchBox}>
            <Icon name="ios-search" size={ 22 } color={ styleConfig.$globalColorAssist} />
            <TextInput
              style={ styles.searchInput }
              autoFocus={true}
              keyboardType="default"
              onChangeText={ (text) =>this.changeValue.bind(this)(text)}
              value={this.state.searchValue}
              placeholder="选份走心的礼物送给他"
              />
        </View>
        <View style={styles.searchButton}>
          <TouchableOpacity
            onPress={this.handleClosePage.bind(this)}
            >
            <Text style={{textAlign: 'center', color: styleConfig.$globalColorAssist}}>取消</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default class Search extends Component {
  constructor(props) {
    super(props);
  }
  handleClosePage () {
    this.props.navigator.navigator.pop({
      animated: true,
      animationType: 'slide-horizontal',
    });
  }
  render () {
    let data = [{text: '李渊'}, {text: 'enheng'}, {text: '外套'}, {text: '内衣'}];
    return (
      <View>
        <View style={styles.searchContain}>
          <SearchBar handleClosePage={this.handleClosePage.bind(this)} />
        </View>
        <View>
          <View style={[globalStyle.px1, globalStyle.flexStart, globalStyle.pyd5]}>
            <Icon name="ios-star-outline" size={ 18 } color={ styleConfig.$globalColorAssist} />
            <Text style={[globalStyle.fzd8,
                          {color: styleConfig.$globalColorAssist, marginLeft: 5}
                  ]}>大家都在搜</Text>
          </View>
          <View style={[globalStyle.flexStart, globalStyle.px1]}>
            {
              data.map( (n, i) => {
                return (<SearchKeyWordButton key={i} keyWords={n} index={i}/>)
              })
            }
          </View>
        </View>
      </View>
    );
  }
}


let styles = EStyleSheet.create({
  searchContain: {
    backgroundColor: '#f6f6f6',
    paddingTop: 25,
    paddingBottom: 5
  },
  searchBar: {
    marginLeft: '$globalWhiteSpace',
    marginRight: '$globalWhiteSpace',
    justifyContent:'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  searchInput: {
    fontSize: '0.8rem',
    paddingLeft: '0.5rem',
    flexGrow: 1
  },
  searchButton: {
    width: '3rem'
  },
  searchBox: {
    backgroundColor: '$globalWhite',
    flexGrow: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingLeft: '1rem',
    height: '2rem',
    borderRadius: '2rem',
    overflow: 'hidden'
  },
  textinputBox: {
    flexGrow: 1,
  }
})
