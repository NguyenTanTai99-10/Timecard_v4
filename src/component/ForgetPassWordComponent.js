import React, { Component } from 'react';
import {
  ImageBackground,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  TouchableNativeFeedback,
  Keyboard
} from 'react-native';
import { colors, fonts, screenWidth, screenHeight } from '../res/style/theme';
import Images from '../res/image';
import Header from './custom/Header';

import LottieView from 'lottie-react-native';

import TextInputAnimated from './custom/TextInputAnimated';

// import TextInputAnimated from './custom/TextInputAnimated';

export default class ForgetPassWordComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Email: ''

    }
  }

  onChangeEmail = (text) => {
    this.setState({ Email: text });
  };

  onClearEmail = () => {
    this.setState({ Email: '' });
  };
  render() {
    return (
      <View >
        

        
        <Header
          isShowBack
          onPressBack={() => this.props.navigation.goBack()}
          title="Forgot Password"
        />
        <TouchableNativeFeedback onPress={Keyboard.dismiss}>
        <ImageBackground
          source={Images.ic_bg_timecard}
          style={{ width: screenWidth, height: screenHeight }}>
          <View style={{ marginHorizontal: 20, marginVertical: 20 }}>
            {Platform.OS === 'ios' ? <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <Image
                source={Images.forgot_password}
                resizeMode ='contain'
                
                style={{height: 200, width: screenWidth}}
              />
            </View> :
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <LottieView
                source={require('../res/Json/16766-forget-password-animation.json')}
                autoPlay
                loop
                style={{height: 200, width: 200}}
              />
            </View> 
            
             }
            
            <View style={{ width: '90%', marginLeft: 20, marginBottom: 10 }}>
              <Text style={{ fontWeight: '600', fontSize: 17, }} >Email</Text>
            </View>



            <TextInputAnimated

              //  isPassword
              //  style={{height:50}}
              label="Email"
              value={this.state.Email}
              onChangeText={this.onChangeEmail}
              onPressClear={this.onClearEmail}
            />
            <View
              style={{ justifyContent: 'center', alignItems: 'center', top: 50 }}>
              <TouchableOpacity
                style={{
                  backgroundColor: '#bb64a1',
                  height: 50,
                  width: screenWidth / 2,
                  borderRadius: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={{ color: 'white', fontWeight: 'bold' }}>
                  CONFIRM
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
        </TouchableNativeFeedback>
      </View>
    );
  }
}
