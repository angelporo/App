import { Dimensions } from 'react-native';
const { height, width } = Dimensions.get('window');
import EStyleSheet from 'react-native-extended-stylesheet';

const FontSize = width > 340 ? 18 : 16;

const proColor = '#FF2763';
const assistColor = '#4c4c4c';
export const refreshColor = ['#ff0000', '#00ff00', '#0000ff'];
export default {
  $height: height,
  $width: width,
  rem: FontSize,
  $globalWhiteSpace: "0.8rem",
  $globalColorPro: proColor,
  $globalColorAssist: "#4c4c4c",
  $globalWhite: '#ffffff',
  $globalBgc: '#f3f3f3',
  $globalFontSize: '8',
  $globalBorder:'#E9E9E9'
}

export let globalStyle = EStyleSheet.create({
  html: {
    position: 'relative',
    backgroundColor: '$globalWhite'
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
  ml1: {
    marginLeft: '1rem'
  },
  mr1: {
    marginRight: '1rem'
  },
  px1: {
    paddingLeft: '1rem',
    paddingRight: '1rem'
  },
  mld5: {
    marginLeft: '0.5rem'
  },
  mrd5: {
    marginRight: '0.5rem'
  },
  flexCenter: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  flexauto: {
    flex:1
  },
  flexFix: {
    flex:0
  },
  flexStart: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  flexEnd: {
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  sbarbgd: {
    backgroundColor: '$globalWhite'
  },
  flexStart: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  flexBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  flexbox: {
    flex: 1,
    flexDirection: 'row',
  },
  center: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  bgdW: {
    backgroundColor: '$globalWhite'
  },
  gbdc: {
    backgroundColor: '$globalBgc'
  },
  bgcp: {
    backgroundColor: '$globalColorPro'
  },
  solidBorder: {
    borderColor: '$globalBorder',
    borderWidth: 1,
    borderStyle: 'solid'
  },
  textColorPro: {
    color: proColor
  },
  tl: {
    textAlign: 'left'
  },
  tr: {
    textAlign: 'right'
  },
  py1: {
    paddingTop: '1rem',
    paddingBottom: '1rem'
  },
  mrd5: {
    marginRight: '0.5rem'
  },
  lh1: {
    lineHeight: '1rem'
  },
  lhd5: {
    lineHeight: '1.5rem'
  },
  bb: {
    borderBottomColor: '$globalBorder',
    borderStyle: 'solid',
    borderBottomWidth: 1
  },
  pyd5: {
    paddingTop: '0.5rem',
    paddingBottom: '0.5rem'
  },
  mtd5: {
    marginTop: '0.5rem'
  },
  cw: {
    color: '$globalWhite'
  },
  cca: {
    color: '$globalColorAssist'
  },
  mt2: {
    marginTop: '2rem',
  },
  cp: {
    color: '$globalColorPro'
  },
  fzd8: {
    fontSize: '0.8rem'
  },
  px1: {
    paddingLeft: '0.8rem',
    paddingRight: '0.8rem'
  },
  pld5: {
    paddingLeft: '0.5rem'
  }
});
