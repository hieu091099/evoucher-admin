'use client'
import { takeEvery, put, call } from 'redux-saga/effects';
import { LOGIN } from '../actions/authAction';
import { action } from '../types';
import { axiosPost } from '../../utils/axios';
import API from '../../utils/api';

function* handleLogin(action: action): Generator<any, any, any> {
  try {
    const { username, password } = action.payload;
    let response = { data: {} };
    if (username === 'admin' && password === 'admin') {
      response = {
        data: {
          user: { username: 'admin', password: 'admin' },
          accessToken: 'token',
        },
      };
    }
    // const response = yield call(
    //   axiosPost(API.AUTH.LOGIN, {
    //     username,
    //     password,
    //   })
    // );

    yield put({
      type: LOGIN.SUCCESS,
      payload: response.data,
    });
  } catch (error: any) {
    yield put({
      type: LOGIN.FAIL,
      payload: error.message,
    });
  }
}

function* authSaga() {
  yield takeEvery(LOGIN.REQUEST, handleLogin);
}

export default authSaga;
