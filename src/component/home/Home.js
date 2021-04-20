import React, {Component} from 'react';
import {
  Text,
  View,
  ImageBackground,
  Image,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import Images from '../../res/image';
import Sizes from '../../utils/Sizes';
import HeaderCustom from '../custom/HeaderCustom';
import LottieView from 'lottie-react-native';

import {colors, fonts, screenWidth, screenHeight} from '../../res/style/theme';
import Icon from 'react-native-vector-icons/FontAwesome5';
import moment from 'moment';
const HEADER_MAX_HEIGHT = heightPercentage('55%');
const HEADER_MIN_HEIGHT = heightPercentage('40%');
import {
  widthPercentageToDP as widthPercentage,
  heightPercentageToDP as heightPercentage,
} from 'react-native-responsive-screen';
// import {notification} from '../Notification/Notification';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeChekcIn: '',
      time: '',
      timeIn: '',
      timeOut: '',
      checkIn: true,
      checkOut: true,
      title: 'check in',
    };
  }

  // componentDidMount(){ console.log('1234');}
  componentDidMount() {
    // console.log('123');
    setInterval(() => {
      const a = new Date();
      const b = this.formatDate(a);
      this.setState({time: b});
    }, 1000);
  }
  formatDate = date => {
    // console.log('date===',date);
    // const date = new Date(a);
    const h = `0${date.getHours()}`.slice(-2);
    const m = `0${date.getMinutes()}`.slice(-2);
    const s = `0${date.getSeconds()}`.slice(-2);
    return `${h} : ${m}: ${s} `;
  };
  Notifi = data => {
    // console.log('title==', data.Title);
    const option = {
      soundName: 'default',
      playSound: true,
      vibrate: true,
    };
    switch (data.Title) {
       
       case 'check in':
        notification.configure();
        notification.PushChancel('1');
        notification.PushNotifi(
          '1',
          'Cảm ơn đã Check In',
          `Bạn đã Check In lúc ${data.timeCheckIn}`,
          option,
        );
        break;
      case 'check out':
        notification.configure();
        notification.PushChancel('1');
        notification.PushNotifi(
          '1',
          'Cảm ơn đã Check Out',
          `Bạn đã Check Out lúc ${data.timeCheckIn}`,
          option,
        );
        break;
    }

    // console.log('timeChekcIn', timeCheckIn);
    // const option = {
    //   soundName: 'default',
    //   playSound: true,
    //   vibrate: true,
    // };
    // notification.configure();
    // notification.PushChancel('1');
    // notification.PushNotifi(
    //   '1',
    //   'Chào mừng bạn đến với app chúng tôi',
    //   `Bạn đã Check In lúc ${timeCheckIn.timeCheckIn}`,
    //   option,
    // );
    // // notification.PushNotifiContent();
  };

  render() {
    // console.log(this.state.timeNow);
    return (
      <View style={{flex: 1}}>
        <HeaderCustom
          title="HOME"
          itemLeft={[
            {
              image: {
                source: Images.ic_menu_right,
                style: {
                  width: Sizes.h40,
                  height: Sizes.h40,
                },
              },
              onPress: () => {
                this.props.navigation.openDrawer();
              },
              type: 'image',
            },
          ]}
          // itemRight={[
          //   {
          //     text: {
          //       style: {
          //         fontSize: Sizes.h32,
          //         color: '#fff'
          //       },
          //       name: 'Save',
          //       onPress: () => { }
          //     },
          //     type: 'text',
          //   },
          // ]}
        />
        <ImageBackground
          source={Images.ic_bg_timecard}
          style={{height: screenHeight, width: screenWidth}}>
          <View
            style={{
              flexDirection: 'row',

              marginVertical: 15,
              marginHorizontal: 15,
              height: 80,
            }}>
            <View style={{flex: 0.5, flexDirection: 'column'}}>
              <View
                style={{
                  flex: 0.5,
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  alignContent: 'center',
                }}>
                <Icon name="wifi" size={20} style={{color: '#91D5FF'}}></Icon>
                <Text style={{fontSize: 20, paddingLeft: 15}}>Wifi</Text>
              </View>
              <View style={{flex: 0.5, flexDirection: 'row'}}>
                <Icon
                  name="calendar-alt"
                  size={25}
                  style={{color: 'orange'}}></Icon>
                <Text style={{paddingLeft: 15, fontSize: 15 , width:'80%'}}>
                  {moment(new Date()).format('dddd')}{' '}
                  {moment(new Date()).format('L')}
                </Text>
              </View>
            </View>
            <View
              style={{
                flex: 0.5,
                marginHorizontal: 5,
                marginVertical: 5,
                borderRadius: 15,
                borderWidth: 2,
                borderColor: 'pink',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{fontSize: 30, fontWeight: 'bold', color: 'orange'}}>
                {this.state.time}
                {/* {moment(new Date()).format('LTS')} */}
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',

              //   marginVertical: 15,
              marginHorizontal: 15,
            }}>
            <TouchableOpacity
            onPress={()=>{
              this.props.navigation.navigate('RequireLateContainer')
            }}
            >
              <ImageBackground
                source={Images.bg_bt_request_late}
                style={{
                  height: 100,
                  width: (screenWidth * 0.9) / 2,
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                resizeMode="contain">
                <Image
                  source={Images.ic_request_late}
                  style={{height: 50, width: 50}}
                  resizeMode="contain"></Image>
                <Text
                  style={{color: 'white', fontWeight: 'bold', fontSize: 20}}>
                  Xin đi trễ
                </Text>
              </ImageBackground>
            </TouchableOpacity>
            {this.state.title === 'check in' ? (
              <TouchableOpacity
                onPress={() => {
                  // this.Notifi({
                  //   timeCheckIn: this.state.time,
                  //   Title: this.state.title,
                  // });
                  this.setState({timeIn: this.state.time});
                  this.setState({checkIn: false});
                  this.setState({title: 'check out'});
                }}>
                <ImageBackground
                  source={Images.bg_bt_check_in}
                  style={{
                    height: 100,
                    width: (screenWidth * 0.9) / 2,
                    marginLeft: 10,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                  resizeMode="contain">
                  <Image
                    source={Images.ic_check_in}
                    style={{height: 50, width: 50}}
                    resizeMode="contain"></Image>
                  <Text
                    style={{color: 'white', fontWeight: 'bold', fontSize: 20}}>
                    Check In
                  </Text>
                </ImageBackground>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={() => {
                  // this.Notifi({
                  //   timeCheckIn: this.state.time,
                  //   Title: this.state.title,
                  // });
                  this.setState({timeOut: this.state.time});
                  this.setState({checkOut: false});
                  // this.setState({title: 'check in'});
                }}>
                <ImageBackground
                  source={Images.bg_bt_check_in}
                  style={{
                    height: 100,
                    width: (screenWidth * 0.9) / 2,
                    marginLeft: 10,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                  resizeMode="contain">
                  <Image
                    source={Images.ic_check_in}
                    style={{height: 50, width: 50}}
                    resizeMode="contain"></Image>
                  <Text
                    style={{color: 'white', fontWeight: 'bold', fontSize: 20}}>
                    Check Out
                  </Text>
                </ImageBackground>
              </TouchableOpacity>
            )}
          </View>
          <View
            style={{
              // flexDirection:'row',
              // justifyContent:'flex-start',
              // alignItems :'center',

              //   marginVertical: 15,
              marginHorizontal: 15,
            }}>
            {this.state.checkIn === true ? (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                }}>
                <Image
                  source={Images.ic_error_data}
                  style={{height: 30, width: 30}}
                  resizeMode="contain"></Image>
                <Text style={{marginLeft: 10}}>Bạn chưa Check In</Text>
              </View>
            ) : (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                }}>
                <Image
                  source={Images.ic_Done}
                  style={{height: 30, width: 30}}
                  resizeMode="contain"></Image>
                <Text style={{marginLeft: 10}}>
                  Check In thành công {this.state.timeIn}
                </Text>
              </View>
            )}
            {/* <Image
                source={Images.ic_error_data}
                style={{height: 30, width: 30}}
                resizeMode="contain"></Image>
              <Text style={{marginLeft:10}}>Bạn chưa Check In</Text> */}
            {this.state.checkOut === true ? (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                }}>
                <Image
                  source={Images.ic_error_data}
                  style={{height: 30, width: 30}}
                  resizeMode="contain"></Image>
                <Text style={{marginLeft: 10}}>Bạn chưa Check Out</Text>
              </View>
            ) : (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                }}>
                <Image
                  source={Images.ic_Done}
                  style={{height: 30, width: 30}}
                  resizeMode="contain"></Image>
                <Text style={{marginLeft: 10}}>
                  Check Out thành công {this.state.timeOut}
                </Text>
              </View>
            )}
          </View>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            {/* <LottieView
              source={require('../../res/Json/24280-calendar-booking.json')}
              autoPlay
              loop
              style={{width: screenWidth, height: screenHeight / 2}}
            /> */}
            <Image source={Images.time_management} style={{ height:screenWidth , width:screenWidth }}
            resizeMode='contain'
            />
      
          </View>

          {/* 
            <TouchableOpacity>
                <ImageBackground source={Images.ic_checkin_checkout}
        style={{height:screenWidth/2,width:screenWidth/2 , justifyContent:'center' , alignItems:'center'}} resizeMode={'cover'} >
            <Text>
                Time
            </Text>
            <Text style={{fontSize:20, color:'white' }}>
                CHECK IN
            </Text>

            </ImageBackground>
            </TouchableOpacity> */}
        </ImageBackground>
      </View>
    );
  }
}
