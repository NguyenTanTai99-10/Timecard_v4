import React, {Component, useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  StatusBar,
  Image,
  Platform,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import Sizes from '../../utils/Sizes';
import images from '../../res/image';

import Icon from 'react-native-vector-icons/FontAwesome5';
import {fonts, screenWidth} from '../../res/style/theme';
import {objectIsNull, arrayIsEmpty} from '../../utils/Functions';

// Kéo xuống dưới cùng để xem ví dụ

const propsType = {
  color: String, //Màu nền
  title: String(require), // Tiêu đề
  iconLeft: Component, // icon trái
  iconRight: Component, // icon phải
  iconCenter: Component, // icon giữa
  onPressLeft: Function, // callBack onPress trái
  onPressRight: Function, // callBack onPress phải
  onPressCenter: Function, // callBack onPress giữa
  titleStyle: textStyle, // style tiêu đề
  align: String, // "left" hoặc 'center'
  height: Number, // chưa set

  itemLeft: undefined,
  itemRight: undefined,
};

const textStyle = {
  fontFamily: String,
  fontSize: Number,
  fontColor: String,
};

const renderItem = (item, index, count) => {
  return (
    <TouchableOpacity
      onPress={() => {
        if (item.onPress) {
          item.onPress();
        }
      }}
      key={index + ''}
      style={styles.touchItem}>
      {item.type === 'text' ? (
        <Text style={item.text.style ? item.text.style : styles.textItem}>
          {item.text.name}
        </Text>
      ) : item.type === 'image' ? (
        <Image
          resizeMode="contain"
          source={item.image.source}
          style={item.image.style ? item.image.style : styles.imageItem}
        />
      ) : item.type === 'icon' ? (
        <Icon
          name={item.icon.name ? item.icon.name : ''}
          size={item.icon.size ? item.icon.size : Sizes.h32}
          color={item.icon.color ? item.icon.color : '#fff'}
        />
      ) : // <View></View>
      item.type === 'notification' ? (
        <View style={{}}>
          <Image
            resizeMode="contain"
            source={images.ic_notifi}
            style={{width: Sizes.s40, height: Sizes.s40}}
          />
          {count > 0 && (
            <View style={styles.viewBG}>
              <View style={styles.viewCount}>
                <Text style={styles.txt_count}>{count > 9 ? '9+' : count}</Text>
              </View>
            </View>
          )}
        </View>
      ) : null}
    </TouchableOpacity>
  );
};

const HeaderCustom = (props = propsType) => {
  const {itemLeft, itemRight, dataNotification} = props;
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!objectIsNull(dataNotification)) {
      if (dataNotification.code === '1') {
        setCount(dataNotification.Data.length);
      } else {
        setCount(0);
      }
    }
  }, [dataNotification]);

  return (
    <View>
      <SafeAreaView
        style={{
          backgroundColor: props.color ? props.color : '#bb64a1',
        }}
      />

      {/* <View
        style={[
          styles.content,
          {
            backgroundColor: props.color ? props.color : '#bb64a1',
            height: Platform.OS === 'ios' ? Sizes.s100 : Sizes.s160,
          },
        ]}> */}
        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle="light-content"
        />
        <ImageBackground
          source={images.ic_header_salary}
          style={{ width: '100%',
          flexDirection: 'row',
          // justifyContent: 'space-between',
          alignItems: 'flex-end',
          height: Platform.OS === 'ios' ? Sizes.s100 : Sizes.s160,}}>
          <View style={styles.header}>
            {/* viewLeft */}
            <View style={[styles.viewItem, {justifyContent: 'flex-start'}]}>
              {!arrayIsEmpty(itemLeft) &&
                itemLeft.map((value, index) => {
                  return renderItem(value, index);
                })}
            </View>

            {/* viewCenter */}
            <View
              style={{
                width: '50%',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                numberOfLines={1}
                style={{
                  fontSize: Sizes.h42,
                  fontWeight: 'bold',
                  color: '#fff',
                }}>
                {props.title ? props.title : ''}
              </Text>
            </View>
            {/* viewRight */}
            <View style={[styles.viewItem, {justifyContent: 'flex-end'}]}>
              {!arrayIsEmpty(itemRight) &&
                itemRight.map((value, index) => {
                  return renderItem(value, index, count);
                })}
            </View>
          </View>
        </ImageBackground>
      {/* </View> */}
    </View>
  );
};

const styles = new StyleSheet.create({
  content: {
    width: '100%',
    flexDirection: 'row',
    // justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  icon: {
    width: Sizes.s100,
    height: Sizes.s100,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  title: {
    // flex: 1,
    textAlign: 'center',
    color: 'white',
    fontSize: Sizes.h40,
    marginHorizontal: Sizes.s40,
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Sizes.s20,
  },
  viewItem: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    // backgroundColor: 'red',
    // justifyContent: 'space-around',
    // alignSelf: 'flex-start'
  },
  touchItem: {
    paddingVertical: Sizes.s10,
    justifyContent: 'center',
    alignItems: 'center',

    marginHorizontal: Sizes.s10,
    paddingHorizontal: Sizes.s20,

    // backgroundColor: 'red'
    // alignSelf: 'flex-start'
  },
  textItem: {
    fontSize: fonts.textDefaultApp,
    color: '#fff',
  },
  imageItem: {
    width: Sizes.h32,
    height: Sizes.h32,
  },
  viewCount: {
    width: Sizes.s50,
    height: Sizes.s40,
    backgroundColor: '#E34141',
    borderRadius: Sizes.s20,
    borderWidth: 2,
    borderColor: '#F7931B',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt_count: {
    fontSize: Sizes.s20,
    fontWeight: 'bold',
    color: 'white',
  },
  viewBG: {
    position: 'absolute',
    width: Sizes.s60,
    height: Sizes.s60,
    bottom: 0,
    alignItems: 'flex-end',
  },
});
HeaderCustom.defaultProps = {
  onPressLeft: () => {},
  onPressRight: () => {},
};
export default HeaderCustom;

// Example

// <HeaderCustom
//     title="Invited people"
//     itemLeft={[
//         {
//             text: {
//                 name: 'back',
//                 style: {
//                     fontSize: Sizes.h32,
//                     color: '#f42'
//                 },
//             },
//             icon: {
//                 name: 'chevron-left',
//                 size: Sizes.h34,
//                 color: '#fff'
//             },
//             image: {
//                 source: images.ic_back_screen,
//                 style: {
//                     width: Sizes.h32,
//                     height: Sizes.h32,
//                 }
//             },
//             onPress: () => {
//                 props.navigation.goBack()
//             },
//             type: 'image'
//         }
//     ]}
//     itemRight={[
//         {
//             text: {
//                 name: 'Add new',
//                 style: {
//                     fontSize: Sizes.h32,
//                     color: '#f42'
//                 },
//             },
//             icon: {
//                 name: 'chevron-left',
//                 size: Sizes.h34,
//                 color: '#fff'
//             },
//             image: {
//                 source: images.ic_back_screen,
//                 style: {
//                     width: Sizes.h32,
//                     height: Sizes.h32,
//                 }
//             },
//             onPress: () => {
//                 props.navigation.goBack()
//             },
//             type: 'text'
//         },
//         {
//             text: {
//                 name: 'back',
//                 style: {
//                     fontSize: Sizes.h32,
//                     color: '#f42'
//                 },
//             },
//             icon: {
//                 name: 'chevron-left',
//                 size: Sizes.h34,
//                 color: '#f25'
//             },
//             image: {
//                 source: images.ic_back_screen,
//                 style: {
//                     width: Sizes.h32,
//                     height: Sizes.h32,
//                 }
//             },
//             onPress: () => {
//                 props.navigation.goBack()
//             },
//             type: 'icon'
//         }
//     ]}
// />
