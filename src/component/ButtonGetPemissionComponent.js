import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  Image,
} from 'react-native';
// import Files from '../Container/Files';
// import Image from '../Container/Image';
// import Show from './Show';

import Header from './custom/Header';
import {colors, fonts, screenWidth, screenHeight} from '../res/style/theme';
import Images from '../res/image';
import CheckGetPemissionContainer from '../container/GetPermissionContainer/CheckGetPemissionContainer';
import YourGetPermissionContainer from '../container/GetPermissionContainer/YourGetPermissionContainer';

export default class Buttons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrButton: ['Your Request', 'Check Request'],
      select: 'Your Request',
    };
  }
  render() {
    const {arrButton, select} = this.state;
    console.log(select);

    return (
      <View style={{flex: 1}}>
        <Header title="Get Permission"
        isShowRight
        
        iconRight={()=>{this.props.navigation.navigate('AddRequiesComponent')}} />
        <ImageBackground
          source={Images.ic_bg_timecard}
          imageStyle={{flex:1}}
          style={{
            height: screenHeight,
            width: screenWidth,
            flex: 1,
          }}>
            <View style={{paddingTop: 10,}}>
 <View
          style={[
            {
              height: 50,
              flexDirection: 'row',
              backgroundColor: 'white',

              borderRadius: 20,
              borderWidth: 2,
              borderColor: 'white',
            },
            //    select===e && {boder}
          ]}>
          {arrButton.map((e, index) => (
            <TouchableOpacity
              onPress={
                () => this.setState({select: e})
                // console.log(index)
              }
              key={index}
              style={[
                styles.btnFromMeToMe,
                select === e && styles.btnFromMeToMeActive,
                {
                  //   borderRadius:
                  //     index === 0 ? (select === e ? 20 : 20) : 0,
                  //   borderBottomLeftRadius:
                  //     index === 0 ? (select === e ? 20 : 0) : 0,
                  // backgroundColor: 'blue',
                  //   borderTopRightRadius:
                  //     index === 1 ? (select === e ? 20 : 0) : 0,
                  //   borderBottomRightRadius:
                  //     index === 1 ? (select === e ? 20 : 0) : 0,
                  // borderRadius:
                  // index === 1 ? (select === e ? 20 : 0) : 0,
                },
              ]}>
              <Text
                style={[
                  {
                    // fontSize: fonts.textTitleTab,
                    color: 'black',
                    fontSize:15
                  },
                  select === e && {color: 'white' , fontWeight: '700',},
                ]}>
                {e}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
            </View>

       
        <View style={{ paddingHorizontal:15,  flex: 1 , marginBottom:40}}>
          
          
          <View
            style={{
              flex: 1,
              
              
              borderRadius: 20,
              
            }}>
            {select === 'Your Request' ? (
              <YourGetPermissionContainer />
            ) : (
              <CheckGetPemissionContainer />
            )}
          </View>
          
        </View>
        <View >
          
        </View>
        </ImageBackground>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  btnFromMeToMe: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 20,
  },
  btnFromMeToMeActive: {
    backgroundColor: '#bb64a1',
    borderRadius: 20,
    
  },
});

{
  /* import React, { Component } from 'react'
import {View, Text, ImageBackground, Image} from 'react-native';
import Header from './custom/Header';
import {colors, fonts, screenWidth, screenHeight} from '../res/style/theme';
import Images from '../res/image';

export default class ButtonGetPemissionComponent extends Component {
    render() {
        return (
            <View style={{flex:1}}>
                <Header title ="Get Permission"/>
                <ImageBackground
          source={Images.ic_bg_timecard}
          style={{height: screenHeight, width: screenWidth, flex: 1}}>
              
          </ImageBackground>

                

                
            </View>
        )
    }
} */
}
