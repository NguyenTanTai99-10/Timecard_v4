import {COMPANYMEMBER,COMPANYMEMBER_ERROR,COMPANYMEMBER_SUCCESS} from '../actions/Action';
const initState = {
  status: null,
  data: null,
  loading: false,
  message: null,
  error: null,
};
const CompanyMemberReducer = (state = initState, action) => {
  
  // console.log('action===',action);
  switch (action.type) {
    case COMPANYMEMBER:
        console.log('COMPANYMEMBER');
        return {
          // ...state,
          status: null,
          loading: true,
          data: null,
          error: null,
        };
  
      case COMPANYMEMBER_SUCCESS:
        console.log('COMPANYMEMBER_SUCCESS');
        return {
          // ...state,
          status:action.data.status,
          loading: false,
          data: action.data.data,
          error: null,
          message : action.data.message
        };
  
      case COMPANYMEMBER_ERROR:
        console.log('COMPANYMEMBER_ERROR');
        return {
          // ...state,
          status: null,
          loading: false,
          data: null,
          error: action.error,
          message : action.error
        };
    default:
      return state;
  }
};
export default CompanyMemberReducer
