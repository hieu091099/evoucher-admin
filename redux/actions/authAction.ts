import { createRequestTypes } from './utils';

export const LOGIN = createRequestTypes('LOGIN');
export const login = (payload: object) => {
  return {
    type: LOGIN.REQUEST,
    payload,
  };
};
export const LOGOUT = 'LOGOUT';
export const logout = () => {
  return {
    type: 'LOGOUT',
  };
};

