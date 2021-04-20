import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Images from '../../res/image';
import Sizes from '../../utils/Sizes';
import HeaderCustom from '../custom/HeaderCustom';



export default class Detail extends Component {
    render() {
        return (
            <View>
                 <HeaderCustom
          title="THỐNG KÊ"
        //   itemLeft={[
        //     {
        //       image: {
        //         source: Images.ic_back_screen,
        //         style: {
        //           width: Sizes.h40,
        //           height: Sizes.h40,
        //         },
        //       },
        //       onPress: () => {
        //         this.props.navigation.goBack();
        //       },
        //       type: 'image',
        //     },
        //   ]}
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
                <Text> textInComponent </Text>
            </View>
        )
    }
}
