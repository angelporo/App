// 'use strict';
import {
  View,
  Text,
  PickerIOS,
  StyleSheet,
  TouchableOpacity,
  Modal
} from 'react-native';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styleConfig, { globalStyle } from '../config/config-styles';
import EStyleSheet from 'react-native-extended-stylesheet';
// 读取本地json文件
import jsonData from './cityData.json'

export default class AddressPicker extends Component {
  static propType = {
    isShow: PropTypes.bool,
  }
    // 定义默认属性
    static defaultProps = {
        // 默认显示北京(省)
        selectedProvince: '北京',
        // 默认显示北京省会市)
        selectedCity: '北京',
        // 默认显示(区)
        selectedArea: '东城区'
    }

    // 通过 state 更新
    constructor(props) {
        super(props)

        this.state={
            // 省
            province: [],
            // 市
            city: [],
            // 区
            area: [],
            // 选中的省
            selectedProvince: this.props.selectedProvince,
            // 选中的市
            selectedCity: this.props.selectedCity,
            // 选中的地区
          selectedArea: this.props.selectedArea,
          isShow: true
        }
    }


    // 获取全国省: ['省1', '省2', '省3'......]
    getProvince() {
        var result = [];

        for (var code in jsonData) {

            result.push(jsonData[code].name);
        }

        return result;
    }

    // 获取各个省的城市[['省1-城市1', '省1-城市2', '省1-城市3'......],['省2-城市1', '省2-城市2', '省2-城市3'......]]
    getProvinceCity(province) {
        var result = [];
        var cityData = [];

        for (var code in jsonData) {

            let temp = jsonData[code].name
            if (temp == province) {

                cityData = jsonData[code].city
                for (var j in cityData) {
                    result.push(cityData[j].name);
                }

                break;
            }
        }

        return result;
    }

    // 获取各个省的城市[['省1-城市1-区1', '省1-城市1-区2', '省1-城市1-区3'......]......]
    getProvinceCityArea(province, city) {

        var result = [];
        var cityData = [];

        for (var code in jsonData) {

            let tempProvince = jsonData[code].name
            if (tempProvince == province) {

                cityData = jsonData[code].city
                for (var j in cityData) {
                    let tempCity = cityData[j].name

                    // console.log('查询省: ' + tempProvince + '    查询城市: ' + city)

                    if (tempCity == city) {

                        result = cityData[j].area
                        // console.log('查询区: ' + result)

                        break;
                    }
                }
            }
        }

        return result;
    }


    componentDidMount() {

        var province = this.getProvince();
        this.state.selectedProvince = province[0];

        var city = this.getProvinceCity(this.state.selectedProvince)
        this.state.selectedCity = city[0]

        var area = this.getProvinceCityArea(this.state.selectedProvince, this.state.selectedCity)
        this.state.selectedArea = area[0]


        this.setState({
            province: province,
            city: city,
            area: area
        });

        // console.log('\n******省: '   + province + '\n******默认省: '  + this.state.selectedProvince)
        // console.log('\n******城市: ' + city     + '\n******默认城市: ' + this.state.selectedCity)
        // console.log('\n******区: '   + area     + '\n******默认区: '   + this.state.selectedArea)
    }

    updateProvince(param) {

        var cityData = this.getProvinceCity(param)
        let defaultCity = cityData[0]

        var areaData = this.getProvinceCityArea(param, defaultCity)
        let defaultArea = areaData[0]

        this.setState({
            selectedProvince: param,
            selectedCity: defaultCity,
            selectedArea: defaultArea,
            city: cityData,
            area: areaData,

        })
    }

    updateProvinceCity(city) {

        var areaData = this.getProvinceCityArea(this.state.selectedProvince, city)
        let defaultArea = areaData[0]

        // console.log(this.state.selectedProvince, city, areaData)

        this.setState({
            selectedCity: city,
            selectedArea: defaultArea,
            area: areaData,

        })
    }

    updateProvinceCityArea(area) {

        this.setState({
            selectedArea: area,
        })
    }

    renderPicker(key, i) {

        return <PickerIOS.Item key={i} label={key} value={key} />
    }
  hanldeConfirm () {
    const { onPressConfrim } = this.props;
    onPressConfrim(this.state.selectedProvince, this.state.selectedCity, this.state.selectedArea);
    // this.setState({
    //   isShow: false
    // })
  }
  render() {
    const { isShow } = this.props
    return (
      <Modal
        animationType="slide"
        transparent={ true }
        visible={isShow}
        style={styles.pickBox}>
        <View style={styles.pickContain}>
          <View style={[styles.addressTit, globalStyle.px1]}>
            <TouchableOpacity
              onPress={() => this.hanldeConfirm.bind(this)()}
              ><Text style={[globalStyle.cp, styles.plusText, globalStyle.pyd5]}>确定</Text></TouchableOpacity>
          </View>
          <View style={styles.flexbox}>
            <PickerIOS style={styles.addressitem}
                       selectedValue={this.state.selectedProvince}
                       onValueChange={(language) => this.updateProvince(language)}>
              {this.state.province.map((key, i) => this.renderPicker(key, i))}
            </PickerIOS>
            <PickerIOS style={styles.addressitem}
                       selectedValue={this.state.selectedCity}
                       onValueChange={(language) => this.updateProvinceCity(language)}>
              {this.state.city.map((key, i) => this.renderPicker(key, i))}
            </PickerIOS>
            <PickerIOS style={styles.addressitem}
                       selectedValue={this.state.selectedArea}
                       onValueChange={(area) => this.updateProvinceCityArea(area)}>
              {this.state.area.map((key, i) => this.renderPicker(key, i))}
            </PickerIOS>
          </View>
        </View>
      </Modal>
    );
  }
}
let styles = EStyleSheet.create({
  pickBox: {
    position: 'relative',
    width: '$width',
    height: '$height',
    backgroundColor: "rgba(0, 0, 0, 0.4)"
  },
  pickContain: {
    position: 'absolute',
    width: '100%',
    left: 0, bottom: 0,
  },
  addressTit: {
    alignItems:'flex-end',
    backgroundColor: '#f7f7f9',
  },
  plusText: {
    fontSize: '1.2rem',
  },
  flexbox: {
    flex:1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '$globalWhite',
  },
  addressitem: {
    width: '33%'
  }
})
