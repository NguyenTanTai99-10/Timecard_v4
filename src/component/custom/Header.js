import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Image,
  
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome5';
import Images from '../../res/image';
import {colors, screenWidth, screenHeight} from '../../res/style/theme';
import Sizes from '../../utils/Sizes';
import StatusBarView from './StatusBarView';

const Header = props => {
  // console.log('props===',props);
  const iconBack = () => (
    <TouchableOpacity
      
      style={styles.iconBack}
      onPress={() => props.onPressBack()}>
      <Icon name="arrow-left" size={20} color={colors.white} />
    </TouchableOpacity>
  );
  const iconMenu = () => (
    <TouchableOpacity
      
      style={styles.iconBack}
      onPress={() => props.onPressMenu()}>
      <Icon name="bars" size={20} color={colors.white} />
    </TouchableOpacity>
  );
  const iconRight = () => (
    <TouchableOpacity
      style={{
        width: 40,
        height: 40,
        marginHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center',
        
      }}
      onPress={() => props.iconRight()}>
        {/* plus-circle */}
        <Icon name="plus-circle" size={25} color={colors.white} />
      {/* <Image  source={Images.icon_add} style={{width:30, height:30}}/> */}
      {/* <Text>acb</Text> */}
    </TouchableOpacity>
  );
  const images = image => (
    // console.log(props.image;

    <View
      style={{
        width: 30,
        height: 30,
        marginHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
      }}>
      {/* <View
        style={{
          borderRadius: 100,
          backgroundColor:'red'
        }}> */}
      <Image
        source={{
          uri: `${props.image}`,
        }}
        style={{width: 30, height: 30, resizeMode: 'cover', borderRadius: 9999}}
        // resizeMode="contain"
      ></Image>

      {/* </View> */}
    </View>
  );
  //////////////////////////////////
  return (
    <View>
      <StatusBarView />
      {/* <View style={styles.container}> */}
      <ImageBackground
        source={Images.ic_header_salary}
        style={{
          height: Platform.OS === 'ios' ? Sizes.s100 : Sizes.s110,

          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          // flex: 3,
          // flex:1
        }}>
        <View style={{justifyContent: 'center', alignItems: 'flex-start' , flex:0.2}}>
          {props.isShowMenu ? iconMenu() : null}
          {props.isShowBack ? iconBack() : null}
        </View>

        <View style={{justifyContent: 'center', alignItems: 'center' , flex:0.6}}>
          <Text style={styles.title}>{props.title}</Text>
        </View>
        <View style={{justifyContent: 'center', alignItems: 'flex-end' ,flex:0.2}}>
          {props.isShowImage ? images(props.image) : null}
          

          {props.isShowRight ? iconRight() : null}
        </View>
      </ImageBackground>
      {/* </View> */}
    </View>
  );
};

export default Header;
Header.defaultProps = {
  onPressBack: () => {},
  onPressMenu: () => {},
  iconRight :()=>{}
};
const styles = StyleSheet.create({
  container: {
    height: Platform.OS === 'ios' ? Sizes.s100 : Sizes.s110,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    //  backgroundColor: '#bb64a1',
    // borderColor: colors.gray,
    // borderBottomWidth: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.white,
  },
  iconBack: {
    position: 'absolute',
    left: 0,
    height: 48,
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
     
  },
});
