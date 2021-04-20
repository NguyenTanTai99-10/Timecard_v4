import {LOGIN, LOGIN_SUCCESS, LOGIN_ERROR} from '../actions/Action';
const initState = {
  status: null,
  data: null,
  loading: false,
  message: null,
  error: null,
};
const loginReducer = (state = initState, action) => {
  
  // console.log('action===',action);
  switch (action.type) {
    case LOGIN:
        console.log('LOGIN');
        return {
          // ...state,
          status: null,
          loading: true,
          data: null,
          error: null,
        };
  
      case LOGIN_SUCCESS:
        console.log('LOGIN_SUCCESS');
        return {
          // ...state,
          status:action.data.status,
          loading: false,
          data: action.data.data,
          error: null,
          message : action.data.message
        };
  
      case LOGIN_ERROR:
        console.log('LOGIN_ERROR');
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
export default loginReducer
