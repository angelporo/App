import { Dimensions } from 'react-native';
const {height, width} = Dimensions.get('window');
import EStyleSheet from 'react-native-extended-stylesheet';

const FontSize = width > 340 ? 16 : 14;

const proColor = '#FF2763';
const assistColor = '#4c4c4c';

export default {
  $height: height,
  $width: width,
  rem: FontSize,
  $globalWhiteSpace: "1rem",
  $globalColorPro: proColor,
  $globalColorAssist: "#4c4c4c",
  $globalWhite: '#ffffff',
  $globalBgc: '#f3f3f3',
  $globalFontSize: '8',
  $globalBorder:'#E9E9E9'
}

export let globalStyle = EStyleSheet.create({
  html: {
    position: 'relative'
  },
  tc: {
    textAlign: 'center'
  },
  mt1: {
    marginTop: '1rem'
  },
  mb1: {
    marginBottom: '1rem'
  },
  flexCenter: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  flexEnd: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  bgdW: {
    backgroundColor: '$globalWhite'
  },
  solidBorder: {
    borderColor: '$globalBorder',
    borderWidth: 1,
    borderStyle: 'solid'
  },
  textColorPro: {
    color: proColor
  },
  tr: {
    textAlign: 'right'
  },
  py1: {
    paddingTop: 1 * FontSize,
    paddingBottom: 1 * FontSize
  },
  px1: {
    paddingLeft: 1 * FontSize,
    paddingRight: 1 * FontSize
  }
});
