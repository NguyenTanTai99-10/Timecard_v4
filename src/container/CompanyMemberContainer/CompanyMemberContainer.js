import React, {Component} from 'react';
import {connect} from 'react-redux';
import CompanyMemberComponent from '../../component/CompanyMemberComponent';
import {companyMenberAction, loginAction} from '../../redux/actions/Action';


export class CompanyMemberContainer extends Component {
  render() {
    return <CompanyMemberComponent {...this.props} />;
  }
}

const mapStateToProps = state => {
   // console.log('state.CompanyMemberReducer.data===',state.loginReducer.data);
  return {
    statusCM: state.CompanyMemberReducer.status,
    dataCM: state.CompanyMemberReducer.data,
    loadingCM: state.CompanyMemberReducer.loading,
    messageCM: state.CompanyMemberReducer.message,
    errorCM: state.CompanyMemberReducer.error,
    //------------------------------
    statusLG: state.loginReducer.status,
    dataLG: state.loginReducer.data,
    loadingLG: state.loginReducer.loading,
    messageLG: state.loginReducer.message,
    errorLG: state.loginReducer.error,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    companyMenberAction: input => dispatch(companyMenberAction(input)),
    loginAction: input => dispatch(loginAction(input)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CompanyMemberContainer);
// export default  CompanyMemberContainer
