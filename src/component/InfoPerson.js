import React, {Component} from 'react';
import {FlatList, Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
// import {Avatar} from 'react-native-elements';
import  Icon  from 'react-native-vector-icons/FontAwesome5';
import  Icons  from 'react-native-vector-icons/MaterialCommunityIcons';

import Images from '../res/image';
import {colors, fonts, screenWidth,screenHeight} from '../res/style/theme';
import Header from './custom/Header';

export default class UserInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      phone: '',
      position: '',
      birthDay: '',
      avt: '',
    };
    // this.data = [
    //   {label: 'Họ và tên', value: this.state.dataInfo.name},
    //   {label: 'Tên đăng nhập', value: this.state.dataInfo.name},
    //   //  position
    //   {label: 'Email', value: this.state.dataInfo.email},
    //   {label: 'Số điện thoại', value: this.state.dataInfo.phone},
    //   {label: 'Chức danh', value: this.state.dataInfo.position},
    // ];
  }

  componentDidMount() {
    let data = this.props.route.params;
    // console.log(data.data.avatar);
    this.setState({
      name: data.data.name,
      email: data.data.email,
      phone: data.data.phone,
      position: data.data.position,
      birthDay: data.data.dob,
      avt: data.data.avatar,
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <Header
          isShowBack
          onPressBack={() => this.props.navigation.goBack()}
          title="Thông tin cá nhân"
        />
        <ImageBackground
          source={Images.ic_bg_timecard}
          style={{width: screenWidth, height: screenHeight}}>
          <Image
            style={styles.img}
            source={{
              uri: `${this.state.avt}`,
            }}
          />

          <View style={[styles.item, {marginTop: 30}]}>
            <View style={{flexDirection:'row' , justifyContent:'center' , alignItems:'center'}}>
              <Icon 
              name ='user-circle'
              size={35}
              
              style={{width:35 , height:35 , color:'#bb64a1'}}
              />
              <Text style={[styles.text,{marginLeft:10}]}>Họ và tên</Text>
            </View>
            
            <Text style={styles.text}>{this.state.name}</Text>
          </View>
          <View style={styles.item}>
          <View style={{flexDirection:'row' , justifyContent:'center' , alignItems:'center'}}>
          <Icon 
              name ='calendar-alt'
              size={35}
              
              style={{width:35 , height:35 , color:'#bb64a1'}}
              />
              <Text style={[styles.text,{marginLeft:10}]}>Ngày sinh</Text>
            </View>
            <Text style={styles.text}>{this.state.birthDay}</Text>
          </View>
          <View style={styles.item}>
          <View style={{flexDirection:'row' , justifyContent:'center' , alignItems:'center'}}>
          <Icons 
              name ='gmail'
              size={35}
              
              style={{width:35 , height:35 , color:'#bb64a1'}}
              />
              <Text style={[styles.text,{marginLeft:10}]}>Gmail</Text>
            </View>
            <Text style={styles.text}>{this.state.email}</Text>
          </View>
          <View style={styles.item}>
          <View style={{flexDirection:'row' , justifyContent:'center' , alignItems:'center'}}>
          <Icon 
              name ='phone-square-alt'
              size={35}
              
              style={{width:35 , height:35 , color:'#bb64a1'}}
              />
              <Text style={[styles.text,{marginLeft:10}]}>Số điện thoại</Text>
            </View>
            <Text style={styles.text}>{this.state.phone}</Text>
          </View>
          <View style={styles.item}>
          <View style={{flexDirection:'row' , justifyContent:'center' , alignItems:'center'}}>
          <Icon 
              name ='star'
              size={30}
              
              style={{width:35 , height:35 , color:'#bb64a1'}}
              />
              <Text style={[styles.text,{marginLeft:10}]}>Nghề nghiệp</Text>
            </View>
            <Text style={styles.text}>{this.state.position}</Text>
          </View>
        </ImageBackground>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomColor: colors.gray2,
    borderBottomWidth: 1,
    alignItems:'center'
  },
  text: {
    fontSize: 16,
    // fontFamily: fonts.medium,
  },
  img: {
    width: screenWidth * 0.4,
    height: screenWidth * 0.4,
    alignSelf: 'center',
    borderRadius: 100,
    top: 10,
  },
});
