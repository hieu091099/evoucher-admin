import { LOGIN, LOGOUT } from '../actions/authAction';
import { setAuthToken } from '../../utils/axios';

const initialState = {
  isLoggedIn: false,
  isLoggingIn: false,
  account: {
    token: '',
    refreshToken: '',
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
      setAuthToken(action.payload.token || '');
      return {
        ...state,
        isLoggedIn: true,
        isLoggingIn: false,
        account: {
          token: result?.accessToken,
          refreshToken: result?.refreshToken,
          user: { ...result?.user },
        },
      };
    }
    case LOGIN.FAIL:
      return {
        ...state,
        isLoggedIn: false,
        isLoggingIn: false,
        errorMsg: action.result.message,
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
