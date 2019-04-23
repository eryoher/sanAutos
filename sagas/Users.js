import { all, call, fork, put, takeEvery, takeLatest, throttle } from 'redux-saga/effects';

import 
    { addUser }
from '../api/Users'

import { ADD_USER } from '../constants/ActionsTypes';
import { addUserSuccess } from '../actions';


function* addUserRequest({payload}) {
    
    try {
        const response = yield call(addUser, payload);
        yield put( addUserSuccess(response) );
    } catch (error) {
        
    }
}

export function* addUserSaga() {
    yield takeLatest(ADD_USER, addUserRequest);
}


export default function* rootSaga() {
    yield all([
        fork(addUserSaga),
    ]);
}