import React from 'react';
import { View, StatusBar, SafeAreaView } from 'react-native';
import { colors } from '../../res/style/theme';

//import bỏ vào đầu
const StatusBarView = () => {
   return (
      <View>
         <SafeAreaView style={{ backgroundColor: '#bb64a1' }} />
         <View style={{ height: StatusBar.currentHeight, backgroundColor: '#bb64a1'}} />
         <StatusBar
            barStyle="light-content"
            backgroundColor={'transparent'}
            hidden={false}
            translucent={true}
         />
      </View>
   );
};

export default StatusBarView;
