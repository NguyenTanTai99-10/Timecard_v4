import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Pressable,
  Image,
  Alert,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

import Images from '../../res/image';
import {colors, fonts ,screenWidth,screenHeight} from '../../res/style/theme';
import HeaderCustom from '../custom/HeaderCustom';

import Header from '../custom/Header';

const listMenu = [
  {title: 'Thông tin cá nhân', icon: Images.ic_user, screen: 'InfoPerson'},
  {title: 'Đổi mật khẩu', icon: Images.ic_lock1, screen: 'ChangePasswordContainer'},
  {title: 'Thông tin chi tiết', icon: Images.ic_info, screen: ''},
  {title: 'Hướng dẫn sử dụng', icon: Images.ic_guide, screen: ''},
  {title: 'Cài đặt', icon: Images.ic_setting, screen: ''},
];

export default class DrawerComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  componentDidMount() {
    this.setState({data: this.props.data});
  }
  renderMenu = ({item, index}) => (
    <TouchableOpacity
      
      onPress={() => {
        if (item.screen === '') {
          Alert.alert('Thông báo', 'Chức năng đang được cập nhật');
        } else {
          this.props.navigation.navigate(item.screen, {data: this.state.data});
        }
      }}>
      <View style={styles.itemMenu}>
        <Image style={styles.icon} source={item.icon} />
        <Text style={styles.txtMenu}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );
  render() {
    // console.log('=====', this.state.data);
    const {data} = this.state;
    return (
      <View style={{flex: 1}}>
        <Header 
        title={` ${data.name}`}
        image ={this.state.data.avatar}
        isShowImage
        
         />
        {/* <Header title='Hello Friend'
            // {`Xin chào ${userData.fullname}`} 
            /> */}
        <ImageBackground
          source={Images.ic_bg_timecard}
          style={{ height: screenHeight}}>
          <FlatList
            data={listMenu}
            keyExtractor={(item, index) => String(index)}
            renderItem={this.renderMenu}
            ListFooterComponent={
              <TouchableOpacity
                
                style={styles.itemMenu}
                onPress={() => this.props.navigation.replace('Login')}>
                <Image style={styles.icon} source={Images.ic_exit} />
                <Text style={styles.txtMenu}>Đăng xuất</Text>
              </TouchableOpacity>
            }
          />
         
        </ImageBackground>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  itemMenu: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    borderColor: colors.gray2,
    borderBottomWidth: 1,
    paddingHorizontal: 16,
  },
  txtMenu: {
    fontSize: 16,
    marginLeft: 16,
    // fontFamily: fonts.medium,
  },
  icon: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
});
// import React, { Component } from 'react'
// import { Text, View } from 'react-native'

// export default class DrawerComponent extends Component {
//    render() {
//       return (
//          <View>
//             <Text> textInComponent </Text>
//          </View>
//       )
//    }
// }
