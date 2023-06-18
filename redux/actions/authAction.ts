import { createRequestTypes } from './utils';

export const LOGIN = createRequestTypes('LOGIN');
export const login = (payload: object) => {
  return {
    type: LOGIN.REQUEST,
    payload,
  };
};

export const loginSuccess = (payload: object) => {
  return {
    type: LOGIN.SUCCESS,
    payload,
  };
};

export const loginFail = (payload: object) => {
  return {
    type: LOGIN.FAIL,
    payload,
  };
};
export const LOGOUT = 'LOGOUT';
export const logout = () => {
  return {
    type: LOGOUT,
  };
};

