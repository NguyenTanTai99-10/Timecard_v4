import React from 'react';
import {View, Text, ActivityIndicator, Modal} from 'react-native';
import {colors} from '../../res/style/theme';
// import LottieView from 'lottie-react-native';
const LoadingView = props => {
  return (
    <Modal visible={props.visible} statusBarTranslucent transparent>
      <View
        style={{
          flex: 1,
          backgroundColor: '#00000036',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1,
        }}>
        
        {/* <LottieView
          source={require('../../res/Json/9844-loading-40-paperplane.json')}
          autoPlay
          loop
          style={{height: 200, width: 200}}
        /> */}
        <ActivityIndicator size="large" color={colors.blue} />

        {/* <Text style={{ fontSize: 16, color: 'white', marginTop: 8, fontWeight: 'bold' }}>
               {props.loadingText || 'Loading...'}
            </Text> */}
      </View>
    </Modal>
  );
};

export default LoadingView;
// import React, { Component } from 'react';
// import LottieView from 'lottie-react-native';
// import {
//   View,
//   StyleSheet,
//   ActivityIndicator
// } from 'react-native'
// // LottiView
// const LoadingView = (props) => {
//   return (
//     <View
//       style={{
//         position: "absolute",
//         top: 0,
//         bottom: 0,
//         left: 0,
//         right: 0,
//         backgroundColor: props.backgroundColor === 'none' ? undefined : props.backgroundColor,
//         justifyContent: "center",
//         alignItems: "center",
//         zIndex: 1
//       }}
//     >
//       <View style={[styles.container, styles.horizontal]}>

//       <LottieView   source={require('../../res/Json/46140-loading-use-black-background.json')} autoPlay loop
//         style={{height:200 , width:200 ,}}
//         />
//         <ActivityIndicator size="large" color={'#1E90FF'}  />

//       </View>
//     </View>
//   )
// }

// LoadingView.defaultProps = {
//   backgroundColor: "#00000036"
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems:'center',
//     flexDirection:'column'

//   },
//   horizontal: {
//     // flexDirection: "row",
//     // justifyContent: "space-around",
//     padding: 10
//   }
// });

// export default LoadingView
