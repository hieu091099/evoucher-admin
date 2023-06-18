'use client'
import { takeEvery, put, call } from 'redux-saga/effects';
import { LOGIN } from '../actions/authAction';
import { action } from '../types';
import axios from '../../utils/axios';
import API from '../../utils/api';
import { loginSuccess, loginFail } from '../actions/authAction';

const calllogin = async (payload: {username: string; password: string}) => {
  const response = await axios.post(API.AUTH.LOGIN, {
    username: payload.username,
    password: payload.password,
  });
  
  return response.data;
};

function* handleLogin(action: any): Generator<any, any, any> {
  try {
    const response: {token: string; authentication: boolean; user: object} =
      yield call(calllogin, action.payload);
    if (response?.authentication) {
      yield put(loginSuccess(response));
    }
  } catch (error: any) {
    yield put(loginFail(error.message));
  }
}

function* authSaga() {
  yield takeEvery(LOGIN.REQUEST, handleLogin);
}

export default authSaga;
