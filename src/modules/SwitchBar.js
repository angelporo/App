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
    const defaultValue = this.props.defaultValue ? true : false;
    this.state = {
      value: defaultValue
    };
  }

  onChangeValue () {
    let { changeValue } = this.props;
    let _this = this;
    this.setState({
      value: !_this.state.value
    });
    // 回调发送当前选中状态
    changeValue(!this.state.value);
  }

  render () {
    let { text, onValueChange, style } = this.props;
    return (
      <View style={[styles.swtichBar, style]}>
        <View>
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
    );
  }
}

export class Vadio extends Component{
  constructor(props) {
    super(props);
    this.state = {
      checked: false
    };
  }
  onChangeValue () {
    let { changeValue } = this.props;
    this.setState({
      checked: !this.state.checked
    });
    changeValue();
  }
  render () {
    let { changeValue } = this.props;
    let VadioEntry = (<Icon
                      name="ios-radio-button-on"
                      size={ 22 }
                      style={styles.padding5}
                      onPress={ this.onChangeValue.bind(this) }
                      color={ styleConfig.$globalColorPro }
                      />);
    let VadioOutline = (<Icon
                        name="ios-radio-button-off-outline"
                        size={ 22 }
                        style={styles.padding5}
                        onPress={ () => this.onChangeValue.bind(this)() }
                        color={ styleConfig.$globalColorAssist }
                        />);
    if (this.props.checked) {
      return VadioEntry;
    }else {
      return VadioOutline;
    }
  }
}

export class SwitchVadio extends Component {
  constructor ( props ) {
    super(props);
    this.state = {
      checked: props.checked || false
    };
  }
  onChangeValue () {
    let { changeValue } = this.props;
    let _this = this;
    // this.setState({
    //   checked: !_this.state.checked
    // })
    changeValue();
  }

  render () {
    let { text, onValueChange, style, checked } = this.props;
    return (
      <View style={[styles.switchBox, style]}>
        <View >
          <Vadio
            checked={ checked }
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

const styles = EStyleSheet.create({
  swtichBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '$globalWhite',
    paddingBottom: 5,
    paddingTop: 5,
    paddingLeft: '$globalWhiteSpace',
    paddingRight: '$globalWhiteSpace',
  },
  switchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '$globalWhite',
  },
  end: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  padding5: {
    padding: '0.4rem',
  }
})
