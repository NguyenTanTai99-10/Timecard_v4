import { combineReducers } from 'redux';
import CompanyMemberReducer from './CompanyMemberReducer';
import loginReducer from './LoginReducer';



const allReducers = combineReducers({
   loginReducer,
   CompanyMemberReducer
   // loginReducer,
   // signupReducer,
   // createWalletReducer,
   // getWalletReducer,
   // deleteWalletReducer,
   // updateWalletReducer,
   // sendOTPReducer,
   // verifyOTPReducer,
   // createNewPassReducer,
});

export default allReducers;
