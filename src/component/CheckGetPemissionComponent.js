
import React, {Component} from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Header from './custom/Header';
import {colors, fonts, screenWidth, screenHeight} from '../res/style/theme';
import Images from '../res/image';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default class CheckGetPemissionComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          status: 'approved',
          require: ' xin ve som',
          timeapply: '08:30-17h30 20-12-2012',
          timerequest: '08:15 19-12-2012',
        },
        {
          status: 'watting',
          require: ' xin ve som',
          timeapply: '08:30-17h30 20-12-2012',
          timerequest: '08:15 19-12-2012',
        },
        {
          status: 'decline',
          require: ' xin ve som',
          timeapply: '08:30-17h30 20-12-2012',
          timerequest: '08:15 19-12-2012',
        },
        {
          status: 'watting',
          require: ' xin ve som',
          timeapply: '08:30-17h30 20-12-2012',
          timerequest: '08:15 19-12-2012',
        },
        {
          status: 'decline',
          require: ' xin ve som',
          timeapply: '08:30-17h30 20-12-2012',
          timerequest: '08:15 19-12-2012',
        },
        {
          status: 'approved',
          require: ' xin ve som',
          timeapply: '08:30-17h30 20-12-2012',
          timerequest: '08:15 19-12-2012',
        },
      ],
    };
  }


  renderItem = item => (
    <View
      style={{
        backgroundColor: 'white',
        borderRadius: 10,
       
        marginTop:20
      }}>
      <View style={{marginHorizontal: 15, marginVertical: 10}}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            style={{
              height: 35,
              width: 100,
              borderRadius: 3,
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
              backgroundColor:'#8CE1A7'
            }}>
            <Image
              source={Images.icon_approved_white}
              style={{width: 20, height: 20}}
            />

            <Text style={[{marginLeft: 5,fontSize: 15}, {color:'white'}]}>
            Approved
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              height: 35,
              width: 100,
              borderRadius: 3,
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
              backgroundColor:'#FF4D4F',
              marginLeft:15
            }}>
            <Image
              source={Images.icon_decline_white}
              style={{width: 20, height: 20}}
            />

            <Text style={[{marginLeft: 5,fontSize: 15}, {color:'white'}]}>
              Decline
            </Text>
          </TouchableOpacity>
        </View>
        <Text style={{marginTop: 10, fontSize: 22}}>{item.item.require}</Text>
        <View style={{flexDirection: 'row', marginTop: 5,justifyContent:'center' ,alignItems:'flex-start'}}>
          <Icon name="clock" size={20} style={{color: 'gray'}} />
          <Text style={{marginLeft: 5, color: 'gray'}}>Time apply :</Text>
          <Text style={{marginLeft: 5, color: 'gray', flex: 1}}>
            {item.item.timeapply}
          </Text>
        </View>
        <View style={{flexDirection: 'row', marginTop: 5 ,justifyContent:'center' ,alignItems:'flex-start'}}>
          <Icon name="clock" size={20} style={{color: 'gray'}} />
          <Text style={{marginLeft: 5, color: 'gray'}}>Time request :</Text>
          <Text style={{marginLeft: 5, color: 'gray', flex: 1}}>
          {item.item.timerequest}
          </Text>
        </View>
      </View>
    </View>
  );

  render() {
    return <FlatList style={{flex:1}} data={this.state.data} renderItem={this.renderItem} />;
  }
}
