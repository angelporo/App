/**
 * 选择bar
 * Param:  param
 * Return: {undefined}
 **/
import {
  View,
  Text,
  Switch
} from 'react-native';
import React, { Component } from 'react';
import styleConfig , { globalStyle } from '../config/config-styles';
import EStyleSheet from 'react-native-extended-stylesheet';
import Icon from 'react-native-vector-icons/Ionicons';

export class SwitchBar extends Component {
  constructor (props) {
    super(props);
    this.state = {
      value: false
    }
  }
  onChangeValue () {
    let { changeValue } = this.props;
    let _this = this;
    this.setState({
      value: !_this.state.value
    })
    changeValue();
  }

  render () {
    let { text, onValueChange, style } = this.props;
    return (
      <View style={[styles.swtichBar, style]}>
        <View >
          <Text>{ text }</Text>
        </View>
        <View style={ styles.end }>
          <Switch
            onValueChange={ () => this.onChangeValue.bind(this)() }
            value={ this.state.value }
            onTintColor={ styleConfig.$globalColorPro }
            {...this.props}
            />
        </View>
      </View>
    )
  }
}

export class Vadio extends Component{
  constructor(props) {
    super(props)
    this.state = {
      checked: this.props.checked ? this.props.checked : false
    }
  }
  onChangeValue () {
    let { changeValue } = this.props;
    this.setState({
      checked: !this.state.checked
    })

    changeValue();
  }
  render () {
    let { changeValue } = this.props
    let VadioEntry = (<Icon
                      name="ios-radio-button-on"
                      size={ 22 }
                      onPress={ () => this.onChangeValue.bind(this)() }
                      color={ styleConfig.$globalColorPro }
                      />);
    let VadioOutline = (<Icon
                        name="ios-radio-button-off-outline"
                        size={ 22 }
                        onPress={ () => this.onChangeValue.bind(this)() }
                        color={ styleConfig.$globalColorAssist }
                        />);
    if (this.state.checked) {
      return VadioEntry;
    }else {
      return VadioOutline;
    }
  }
}

export class SwitchVadio extends Component {
  constructor (props) {
    super(props);
    this.state = {
      checked: props.checked || false
    }
  }
  onChangeValue () {
    let { changeValue } = this.props;
    let _this = this;
    this.setState({
      checked: !_this.state.checked
    })
    changeValue();
  }

  render () {
    let { text, onValueChange, style } = this.props;
    return (
      <View style={[styles.swtichBar, style]}>
        <View >
          <Vadio
            checked={this.state.checked}
            changeValue={ () => this.onChangeValue.bind(this)() }
            />
        </View>
        <View style={[ globalStyle.mld5 ]}>
          <Text>{ text }</Text>
        </View>
      </View>
    )
  }
}

let styles = EStyleSheet.create({
  swtichBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '$globalWhite',
    // paddingLeft: '$globalWhiteSpace',
    // paddingRight: '$globalWhiteSpace',
    // paddingBottom: '0.2rem',
    // paddingTop: '0.2rem'
  },
  end: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  }
})
