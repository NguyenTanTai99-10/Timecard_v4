
import React, { Component } from 'react';
import {
   View,
   Text,
   StyleSheet,
   Keyboard,
   Animated,
   ScrollView,
   TouchableOpacity,
   Alert,
   ImageBackground,
   Image,
   Platform
} from 'react-native';
import LottieView from 'lottie-react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Images from '../../res/image';
import { colors, fonts, screenWidth, screenHeight } from '../../res/style/theme';
import StatusBarView from '../custom/StatusBarView';
import TextInputAnimated from '../custom/TextInputAnimated';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoadingView from '../custom/LoadingView';
const logoSize = screenWidth * 0.5;
const duration = 350;
export default class Login extends Component {
   constructor(props) {
      super(props);
      this.state = {
         username: '',
         password: '',
         saveLogin: false,
      };
      this.zoomLogo = new Animated.Value(logoSize);
      this.keyboardDidShow = this.keyboardDidShow.bind(this);
      this.keyboardDidHide = this.keyboardDidHide.bind(this);
   }
   async componentDidMount() {
      this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this.keyboardDidShow);
      this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this.keyboardDidHide);

      //get username and password remember login
      try {
         const jsonValue = await AsyncStorage.getItem('@saveLogin');
         if (jsonValue != null) {
            var data = JSON.parse(jsonValue);
            this.setState({ username: data.username, password: data.password, saveLogin: true });
         }
      } catch (e) {
         // error reading value
      }
   }
   componentWillUnmount() {
      this.keyboardDidShowListener.remove();
      this.keyboardDidHideListener.remove();
   }
   keyboardDidShow() {
      this.zoomOutLogo();
   }
   keyboardDidHide() {
      this.zoomInLogo();
   }
   //thu nho logo
   zoomOutLogo = () => {
      Animated.timing(this.zoomLogo, {
         toValue: logoSize / 2,
         duration: duration,
         useNativeDriver: false,
      }).start();
   };

   //phong to logo
   zoomInLogo = () => {
      Animated.timing(this.zoomLogo, {
         toValue: logoSize,
         duration: duration,
         useNativeDriver: false,
      }).start();
   };

   //
   onChangeUsername = (text) => {
      this.setState({ username: text });
   };
   onClearUsername = () => {
      this.setState({ username: '' });
   };
   onClearPassword = () => {
      this.setState({ password: '' });
   };
   onChangePassword = (text) => {
      console.log('text===', text);
      this.setState({ password: text });
   };

   //remember login
   onPressSaveLogin = () => {
      this.setState({ saveLogin: !this.state.saveLogin }, async () => {
         if (!this.state.saveLogin) {
            try {
               await AsyncStorage.removeItem('@saveLogin');
            } catch (e) {
               // remove error
            }
         }
      });
   };
   saveLogin = async () => {
      if (this.state.saveLogin) {
         try {
            const jsonValue = JSON.stringify({
               username: this.state.username,
               password: this.state.password,
            });
            await AsyncStorage.setItem('@saveLogin', jsonValue);
         } catch (e) {
            // saving error
         }
      }
   };
   //press login
   onPressLogin = () => {
      if (this.state.username === '' || this.state.password === '') {

         Alert.alert('Lưu ý', 'Bạn phải nhập đầy đủ thông tin đăng nhập');
      } else {
         // console.log('this.state.password====',this.state.password);
         this.props.loginAction({ email: this.state.username, password: this.state.password });
      }
   };
   ///////////////////////////////
   async componentDidUpdate(prevProps) {


      if (this.props.status !== null && this.props.status !== prevProps.status) {
         // console.log('(this.props.status==',this.props.message);
         // console.log('vao day1');
         if (this.props.status === 1) {
            // console.log('vao day2');
            console.log(this.props.data);

            this.saveLogin();
            this.props.navigation.replace('Drawers', { data: this.props.data });
         } else {
            // console.log('vao day message');
            setTimeout(() => {
               Alert.alert('Thông báo', this.props.message);
            }, 10);
         }
      }
      if (this.props.error !== null && this.props.error !== prevProps.error) {
         // console.log('vao day error');
         setTimeout(() => {
            Alert.alert('Thông báo', this.props.error);
         }, 10);
      }
   }
   render() {
      return (
         <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.container}
            keyboardShouldPersistTaps="handled"
         >
            <StatusBarView />
            <LoadingView visible={this.props.loading} />
            <ImageBackground
               source={Images.ic_bg_timecard}
               style={{ width: screenWidth, height: screenHeight }}
            ><Animated.Image
                  source={Images.ic_logo}
                  resizeMode='contain'
                  style={[styles.logo, { height: this.zoomLogo, width: this.zoomLogo }]}
               />
               {/* /////////////////////////// */}
               {Platform.OS === 'ios' ? <View style={{ justifyContent: 'center', alignItems: 'center' }}>

                  <Image source={Images.welcome_PNG32}
                  resizeMode ='contain'
                     style={{ height: 100, width :screenWidth*0.9}}
                  />
               </View> :
                  <View style={{ justifyContent: 'center', alignItems: 'center' }}>

                     <LottieView source={require('../../res/Json/12546-welcome.json')} autoPlay loop
                        style={{ height: 100, width: 100, }}
                     />
                  </View>
                  

               }


               <TextInputAnimated
                  label="Tên đăng nhập hoặc Email"
                  style={styles.input}
                  value={this.state.username}
                  onChangeText={this.onChangeUsername}
                  onPressClear={this.onClearUsername}
               />
               <TextInputAnimated
                  isPassword
                  style={styles.input}
                  label="Mật khẩu"
                  value={this.state.password}
                  onChangeText={this.onChangePassword}
                  onPressClear={this.onClearPassword}
               />
               {/* ////////////////////////// */}
               <TouchableOpacity style={styles.save}
                  onPress={this.onPressSaveLogin}
               >
                  <Icon
                     name={this.state.saveLogin ? 'check-circle' : 'circle'}
                     size={16}
                     color={colors.blue}
                  />
                  <Text style={styles.txtSave}>Ghi nhớ đăng nhập</Text>
               </TouchableOpacity>
               <TouchableOpacity style={styles.btnLogin}
                  onPress={this.onPressLogin}
               >
                  <Text style={styles.txtBtnLogin}>Đăng nhập</Text>
               </TouchableOpacity>

               {/* ////////////////////// */}
               <View style={styles.view}>
                  <TouchableOpacity
                     style={styles.subView}
                     onPress={() => this.props.navigation.navigate('FogetPasswordConatiner')}
                  >
                     <Text style={styles.txtsignup}>Quên mật khẩu</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                     style={styles.subView}
                  // onPress={() => this.props.navigation.navigate('SignUp')}
                  >
                     <Text style={styles.txtsignup}>Đăng ký</Text>
                  </TouchableOpacity>
               </View>
               <View style={styles.view}>
                  <TouchableOpacity
                     style={styles.subView1}
                  // onPress={() => this.props.navigation.navigate('Forget')}
                  >
                     <Image source={Images.ic_facebook} style={{ height: 70, width: 70 }} resizeMode='contain' />
                  </TouchableOpacity>
                  <TouchableOpacity
                     style={styles.subView1}
                  // onPress={() => this.props.navigation.navigate('SignUp')}
                  >
                     <Image source={Images.ic_gmail} style={{ height: 70, width: 70 }} resizeMode='contain' />


                  </TouchableOpacity>
               </View>

            </ImageBackground>
            {/* /////////logo////////// */}

         </ScrollView>
      );
   }
}
const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: colors.white,
   },
   input: {
      marginTop: 20,
      backgroundColor: '#f0eff6'
   },
   logo: {
      alignSelf: 'center',
      marginTop: 20,

   },
   login: {
      fontSize: 32,
      fontWeight: 'bold',
      color: colors.red2,
      textAlign: 'center',
      marginVertical: 16,
   },
   btnLogin: {
      height: 44,
      backgroundColor: colors.blue,
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal: 16,
      marginTop: 20,
      borderRadius: 50,
   },
   txtBtnLogin: {
      fontSize: 18,
      color: colors.white,
      // fontFamily: fonts.bold,
   },
   view: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 16,
   },
   subView: {
      height: 44,
      borderRadius: 50,
      backgroundColor: colors.green1,
      justifyContent: 'center',
      alignItems: 'center',
      width: '47%',
   },
   subView1: {
      height: 44,
      borderRadius: 50,
      // backgroundColor: colors.green1,
      justifyContent: 'center',
      alignItems: 'center',
      width: '47%',
   },
   txtsignup: {
      fontSize: 16,
      textAlign: 'center',
      color: colors.white,
      // fontFamily: fonts.semibold,
   },
   save: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 28,
      marginTop: 12,
   },
   txtSave: {
      fontSize: 16,
      color: colors.blue,
      marginLeft: 8,
      // fontFamily: fonts.medium,
   },
});


