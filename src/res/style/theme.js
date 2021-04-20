import { Dimensions } from 'react-native';
import Sizes from '../../utils/Sizes';


const colors = {
   white: '#FFFFFF',
   white1: '#D9D9D9',
   white2: '#F5F5F5',
   white3: '#eef7fe',
   black: '#333333',
   black1: '#262626',
   black2: '#595959',
   black_transparent: 'rgba(0,0,0,0.25)',
   green: '#2EB553',
   green1: '#4DD077',
   green2: '#8CE1A7',
   green2: '#EBFAEF',
   yellow: '#FFEC3D',
   yellow1: '#FFF566',
   yellow2: '#FFFB8F',
   purple: '#722ED1',
   purple1: '#9254DE',
   purple2: '#B37FEB',
   blue: '#4D89FF',
   blue1: '#69C0FF',
   blue2: '#91D5FF',
   blue3: '#BAE7FF',
   lightblue: '#F1F6FF',
   lightblue1: '#1890FF',
   cyan: '#13C2C2',
   cyan1: '#36CFC9',
   cyan2: '#5CDBD3',
   red: '#F5222D',
   red1: '#FF4D4F',
   red2: '#FF7875',
   red3: '#FFA39E',
   gray: '#8C8C8C',
   gray1: '#BFBFBF',
   gray2: '#E6E7E9',
   gray3: '#E8E8E8',
   gray4: '#F5F5F5',
   gray5: '#BFBFBF',
   orange: '#FA8C16',
   orange1: '#FFA940',
   orange2: '#FFC069',
   orange3: '#FF9C6E',
   orange4: '#FFBB96',
   orange5: '#FFD8BF',
};
//

///////////////////////////////////////////////
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const fonts = {
   // bold: 'SanFranciscoText-Bold',
   // heavy: 'SanFranciscoText-Heavy',
   // light: 'SanFranciscoText-Light',
   // // medium: 'SanFranciscoText-Medium',
   // regular: 'SanFranciscoText-Regular',
   // semibold: 'SanFranciscoText-Semibold',
   // thin: 'SanFranciscoText-Thin',
   textDefault: Sizes.h28,
   textDefaultApp: Sizes.h28,
   //List button
   textListButton: Sizes.h80,
 
   // Tab Screen
   textTitleTab: Sizes.h30,
   iconTitlteTab: Sizes.h42,
 
   textTitleButton: Sizes.h32,
   // textTitleInfoTask: Sizes.h26,
   paddingHorizontalView: Sizes.s20,
   // textID
   textID: Sizes.h28,
   //text Title
   textTitle: Sizes.s35,
   // text co`n la.i + so phan tram %
   textContent: Sizes.h28,
   // view bao ben trong  Item
   marginVerticalViewInItem: Sizes.s10,
   marginHorizontalViewInItem: Sizes.s20,
 
   //View bao ben ngoai item
   marginHorizontalViewitem: Sizes.s30,
   marginVerticalViewitem: Sizes.s15,
 
   ///view Tung dong item
   marginHorizontalItem: Sizes.s5,
   marginVerticalItem: Sizes.s7,
   // View Title
   marginLeftTitle: Sizes.s10,
   marginVerticalTitle: Sizes.s5,
};
export { colors, screenWidth, screenHeight, fonts };
