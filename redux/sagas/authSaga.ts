import { takeEvery, put, call } from 'redux-saga/effects';
import { LOGIN } from '../actions/authAction';
import { action } from '../types';
import { axiosPost } from '../../utils/axios';
import API from '../../utils/api';

async function* handleLogin(action: action): AsyncGenerator<any, any, any> {
  try {
    const { username, password } = action.payload;

    const response = yield call(
      await axiosPost(API.AUTH.LOGIN, {
        username,
        password,
      })
    );

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
