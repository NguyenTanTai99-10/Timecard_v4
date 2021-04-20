import React, {Component} from 'react';
import {
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Header from './custom/Header';
import {colors, fonts, screenWidth, screenHeight} from '../res/style/theme';
import Images from '../res/image';
import DropDownPicker from 'react-native-dropdown-picker';

export default class RequireLateComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      TimeLate: 'Thời gian đi trễ',
      Day: 'Chọn ngày',
      data: [
        {
          "label": '30 Phút',
          "value": '30 Phút',

          // hidden: true,
        },
        {
          "label": '1 Hour',
          "value": '1 Hour',
        },
        {
          "label": '2 Hour',
          "value": '2 Hour',
        },
        {
          "label": '1 Day',
          "value": '1 Day',
        },
      ],
    };
  }

  render() {
    // console.log(this.state.country);
    return (
      <View style={{flex: 1, backgroundColor: '#F5F5F5'}}>
        <Header
          title="XIN ĐI TRỄ"
          isShowBack
          onPressBack={() => this.props.navigation.goBack()}
        />
        <ImageBackground
          source={Images.ic_bg_timecard}
          style={{height: screenHeight, width: screenWidth, flex: 1}}>
          <View style={{marginHorizontal: 15, marginVertical: 15, flex: 1}}>
            <View style={{flexDirection: 'row'}}>
              <View style={{flex: 0.5}}>
                <Text>Chọn ngày</Text>
                <DropDownPicker
                  items={this.state.data}
                  placeholder={this.state.TimeLate}
                  containerStyle={{height: 40, width: (screenWidth * 0.8) / 2}}
                  style={[{backgroundColor: '#fafafa'}]}
                  itemStyle={{
                    justifyContent: 'flex-start',
                  }}
                  dropDownStyle={{backgroundColor: '#fafafa'}}
                  onChangeItem={item =>
                    this.setState({
                      TimeLate: item.value,
                    })
                  }
                />
              </View>

              <View style={{flex: 0.5}}>
                <Text>Thời gian đi trễ</Text>
                <DropDownPicker
                  items={this.state.data}
                  // defaultValue={this.state.country}
                  placeholder={this.state.TimeLate}
                  containerStyle={{height: 40, width: (screenWidth * 0.8) / 2}}
                  style={{backgroundColor: '#fafafa'}}
                  itemStyle={{
                    justifyContent: 'flex-start',
                  }}
                  dropDownStyle={{backgroundColor: '#fafafa'}}
                  onChangeItem={item =>
                    this.setState({
                      TimeLate: item.value,
                    })
                  }
                />
              </View>
            </View>

            <View>
              <Text style={{fontWeight: '700', color: 'purple'}}>
                Lý do xin đi trễ:
              </Text>
              <View
                style={{
                  backgroundColor: 'white',
                  height: 100,
                  borderRadius: 10,
                  marginTop: 5,

                  borderWidth: 1,
                  borderColor: '#f0eff6',
                }}>
                <TextInput
                  multiline
                  placeholder="Nhập lý do đi trễ"></TextInput>
              </View>
            </View>
            <View style={{marginTop: 15}}>
              <Text style={{fontWeight: '700', color: 'purple'}}>
                Người nhận thông báo:
              </Text>
              <TextInput
                placeholder="Nhập Username người nhận"
                multiline
                style={{
                  backgroundColor: 'white',
                  marginTop: 5,

                  borderRadius: 10,

                  borderWidth: 1,
                  borderColor: '#f0eff6',
                }}></TextInput>
            </View>
            <View>
              <Text style={{color: 'gray', fontSize: 12}}>
                Example : Kohei Nohara,Thien
              </Text>
            </View>
            <View style={{marginTop: 15}}>
              <Text style={{fontWeight: '700', color: 'purple'}}>
                Cán bộ duyệt đơn :
              </Text>
              <Text style={{}}>-HR xem xét (Loan Or Thuy)</Text>
              <Text style={{}}>-Manager phê duyệt (Kohei Nohara)</Text>
            </View>
          </View>
          <View
            style={{
              marginHorizontal: 15,
              marginVertical: 15,
              flex: 1,
              justifyContent: 'flex-end',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              style={{
                backgroundColor: 'orange',
                width: 200,
                height: 40,
                borderRadius: 5,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{color: 'white', fontWeight: 'bold'}}>GỬI ĐƠN</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    );
  }
}
