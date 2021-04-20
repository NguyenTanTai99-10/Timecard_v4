import React, { Component } from 'react';
import { connect } from 'react-redux';
import Login from '../../component/login/Login';
import { loginAction } from '../../redux/actions/Action';
export class LoginContainer extends Component {
   render() {
      return <Login {...this.props} />;
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

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
// export default LoginContainer
