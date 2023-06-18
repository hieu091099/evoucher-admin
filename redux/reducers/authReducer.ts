import { LOGIN, LOGOUT } from '../actions/authAction';
import { setAuthToken } from '../../utils/axios';

const initialState = {
  isLoggedIn: false,
  isLoggingIn: false,
  account: {
    token: '',
    user: {},
  },
};

const authReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case LOGIN.REQUEST:
      return {
        ...state,
        isLoggedIn: false,
        isLoggingIn: true,
      };

    case LOGIN.SUCCESS: {
      const result = action.payload;
      console.log('4444', result)
      setAuthToken(result?.token?.accessToken || '');
      return {
        ...state,
        isLoggedIn: true,
        isLoggingIn: false,
        account: {
          token: result?.token?.accessToken,
          user: { ...result?.user },
        },
      };
    }
    case LOGIN.FAIL:
      return {
        ...state,
        isLoggedIn: false,
        isLoggingIn: false,
        errorMsg: action.result,
      };

    case LOGOUT:
      setAuthToken('');
      return {
        isLoggedIn: false,
        isLoggingIn: false,
        account: null,
      };
    default:
      return state;
  }
};

export default authReducer;
