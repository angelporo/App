import { Dimensions } from 'react-native';
const {height, width} = Dimensions.get('window');
import EStyleSheet from 'react-native-extended-stylesheet';
const FontSize = width > 340 ? 16 : 14;
export default {
  $height: height,
  $width: width,
  rem: FontSize,
  $globalWhiteSpace: "8rem",
  $globalColorPro: '#FF2763',
  $globalColorAssist: "#4c4c4c",
  $globalWhite: '#ffffff',
  $globalBgc: '#f3f3f3',
  $globalFontSize: '8',
  $globalBorder:'#E9E9E9'
}

export let globalStyle = EStyleSheet.create({
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
  bgdW: {
    backgroundColor: '$globalWhite',
  },
  solidBorder: {
    borderColor: '$globalBorder',
    borderWidth: 1,
    borderStyle: 'solid'
  }
})
