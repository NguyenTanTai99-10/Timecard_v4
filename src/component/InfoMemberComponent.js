import React,{useEffect} from 'react';
import {View, Text, ImageBackground, Image} from 'react-native';
import Header from './custom/Header';
import {colors, fonts, screenWidth, screenHeight} from '../res/style/theme';
import Images from '../res/image';

const InfoMemberComponent = ({route, props, navigation}) => {
  console.log('props==', route.params.item);
  const data = route.params.item;
  console.log('data==', data);
 

  return (
    <View style={{flex: 1}}>
      <Header
        title="Attendance Time"
        isShowBack
        onPressBack={() => navigation.goBack()}
      />
      <ImageBackground
        source={Images.ic_bg_timecard}
        style={{width: screenWidth, height: screenHeight}}>
        <View style={{marginHorizontal: 20, marginVertical: 20}}>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <ImageBackground
              source={Images.ic_header_salary}
              style={{
                width: screenWidth * 0.9,
                justifyContent: 'center',
                alignItems: 'center',

                height: (screenWidth * 0.9) / 2,
              }}>
                  {data.avatar === null ?<Image
                style={{
                  width: (screenWidth * 0.5) / 2,
                  height: (screenWidth * 0.5) / 2,
                  alignSelf: 'center',
                  borderRadius: 100,

                  borderColor: 'pink',
                  borderWidth: 1,
                }}
                source={Images.ic_user}
              />:<Image
                style={{
                  width: (screenWidth * 0.5) / 2,
                  height: (screenWidth * 0.5) / 2,
                  alignSelf: 'center',
                  borderRadius: 100,

                  borderColor: 'pink',
                  borderWidth: 1,
                }}
                source={{
                  uri: `${data.avatar}`,
                }}
              /> }
              
              <Text style={{marginTop: 10, fontSize: 20}}>
                {data.name.toUpperCase()}
              </Text>
              <Text style={{fontSize: 20}}>{data.group.name.toUpperCase()}</Text>
            </ImageBackground>
          </View>
          <View style={{marginVertical: 20, marginHorizontal: 20}}>
            <View style={{flexDirection: 'row' , justifyContent:'flex-start', alignItems:'center' , borderBottomWidth:0.5, borderColor:'gray',paddingVertical:20 }}>
              <Image
                source={Images.icon_position}
                style={{width: 30, height: 30}}
              />

              <Text style={{marginLeft:10,fontSize: 17}}>Position:</Text>
              <Text style={{marginLeft:5,fontSize: 17}}>
                  {data.position}

              </Text>
            </View>
            <View style={{flexDirection: 'row' , justifyContent:'flex-start', alignItems:'center' , borderBottomWidth:0.5, borderColor:'gray',paddingVertical:20 }}>
              <Image
                source={Images.icon_position}
                style={{width: 30, height: 30}}
              />

              <Text style={{marginLeft:10,fontSize: 17}}>BirthDay:</Text>
              <Text style={{marginLeft:5,fontSize: 17}}>
                  {data.dob}

              </Text>
            </View><View style={{flexDirection: 'row' , justifyContent:'flex-start', alignItems:'center' , borderBottomWidth:0.5, borderColor:'gray',paddingVertical:20 }}>
              <Image
                source={Images.icon_phone}
                style={{width: 30, height: 30}}
              />

              <Text style={{marginLeft:10,fontSize: 17}}>Phone:</Text>
              <Text style={{marginLeft:5,fontSize: 17}}>
                  {data.phone}

              </Text>
            </View><View style={{flexDirection: 'row' , justifyContent:'flex-start', alignItems:'center' , borderBottomWidth:0.5, borderColor:'gray',paddingVertical:20 }}>
              <Image
                source={Images.icon_email}
                style={{width: 30, height: 30}}
              />

              <Text style={{marginLeft:10,fontSize: 17}}>Email:</Text>
              <Text style={{marginLeft:5,fontSize: 17}}>
                  {data.email}

              </Text>
            </View><View style={{flexDirection: 'row' , justifyContent:'flex-start', alignItems:'center' , borderBottomWidth:0.5, borderColor:'gray',paddingVertical:20 }}>
              <Image
                source={Images.icon_skype}
                style={{width: 30, height: 30}}
              />

              <Text style={{marginLeft:10,fontSize: 17}}>Skype:</Text>
              <Text style={{marginLeft:5,fontSize: 17}}>
                  {data.skype}

              </Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default InfoMemberComponent;
