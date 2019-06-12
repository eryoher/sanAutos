import { all, call, fork, put, takeEvery, takeLatest } from 'redux-saga/effects';
import Router from 'next/router'
import Axios from 'axios';
import { userSignOutSuccess } from '../actions/Auth'

import {
  SIGNIN_USER,
  SIGNOUT_USER,
  SIGNIN_USER_SUCCESS,
  
} from '../constants/ActionsTypes';

import {
    signInUserRequest,
    signOutUserRequest,
} from '../api/Auth'

import { 
    getUser
} from '../api/Users'

import {
  showError
} from '../actions/Common'

function* signInUser({ payload }) {
    const { username, password } = payload;
    try {
        const response = yield call(signInUserRequest, username, password);
        if (response.id) {
            localStorage.setItem('token', response.id);
            localStorage.setItem('userId', response.userId);
            Axios.defaults.headers.common['authorization'] = response.id;

            //Get user info
            const userResponse = yield call(getUser, response.userId);
            const userData = userResponse.data;

            localStorage.setItem('user', JSON.stringify(userData));

            yield put({ type: SIGNIN_USER_SUCCESS, data: { userId: response.userId, token: response.id, user: userData } });            
        }

    } catch (err) {
        if (err.response && err.response.status == 401) {
            yield put(showError('Usuario o password incorrecto'));
        }else if (err.response && err.response.status == 403) {          
          yield put(showError(err.response.data.error.message));
        }else {
            yield put(showError('Error de conexion'));
        }
    }

}

function* signOutUser() {
    if (window.localStorage.getItem('token') || Axios.defaults.headers.common['Authorization']) {
            window.loggingOut = true;//flag to signal the intention, in case request fails
        try {
        yield call(signOutUserRequest);
        } catch (error) {
        // silently ignore error, most probably failed due to an expired token
        }
    }

    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('user');    
    delete Axios.defaults.headers.common['Authorization'];
    Router.push('/')
    yield put(userSignOutSuccess());
}

export function* signInUserSaga() {
  yield takeEvery(SIGNIN_USER, signInUser);
}

export function* signOutUserSaga() {
  yield takeLatest(SIGNOUT_USER, signOutUser);
}

export default function* rootSaga() {
  yield all([
    fork(signInUserSaga),
    fork(signOutUserSaga),
  ]);
}