import React, { Component } from 'react';
import {
  Text,
  View,
  AlertIOS,
  Dimensions
} from 'react-native';
import App from './app';
import EStyleSheet from 'react-native-extended-stylesheet';
function ButtonText () {
  return (
    <Button style={styles.button} textStyle={{fontSize: 18, color: '#fff'}} onPress={this.clickButton}>
      Hello!
    </Button>
  )
}

export default class ModulesView extends Component {
  clickButton () {
    AlertIOS.alert('跳转查看全部组件');
  };

  render () {
    return(
        <View style={styles.container}>
        <App />
      </View>
    );
  }
}
const {height, width} = Dimensions.get('window');
const styles = EStyleSheet.create({
  container: {
    flex: 1,
    width: width,
    height: height,
    backgroundColor: '$globalBgc'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '$globalColorPro',
    fontSize: '0.6rem'
  },
  button: {
    backgroundColor: "#cccccc"
  },
  button: {
    backgroundColor:  "$globalColorPro",
    borderColor: "$globalColorPro",
    borderRadius: 0
  }
});

