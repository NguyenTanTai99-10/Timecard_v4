import React, { Component } from 'react';
import { connect } from 'react-redux';
import DrawerComponent from '../../component/drawer/DrawerComponent';
// import Login from '../../component/login/Login';

import { loginAction } from '../../redux/actions/Action';
export class DrawerConatiner extends Component {
   render() {
      return <DrawerComponent {...this.props} />;
   }
}

const mapStateToProps = (state) => {
   
   return {
      status: state.loginReducer.status,
      data: state.loginReducer.data,
      loading: state.loginReducer.loading,
      message: state.loginReducer.message,
      error: state.loginReducer.error,
   };
};

const mapDispatchToProps = (dispatch) => {
   return {
      loginAction: (input) => dispatch(loginAction(input)),
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(DrawerConatiner);
// // export default LoginContainer
// import React, { Component } from 'react'
// import { Text, View } from 'react-native'

// export default class DrawerConatiner extends Component {
//    render() {
//       return (
//          <View>
//             <Text> textInComponent </Text>
//          </View>
//       )
//    }
// }

