import { all, call, fork, put, takeEvery, takeLatest, throttle } from 'redux-saga/effects';

import 
    { addUser, activationCode, emailToRecoverUser, changePasswordUser, searchUsers, getRoles, searchUser }
from '../api/Users'

import { ADD_USER , ACTIVATION_CODE, EMAIL_RECOVER_USER, CHANGE_PASSWORD_USER, SEARCH_USERS, GET_ROLES, GET_USER} from '../constants/ActionsTypes';
import { addUserSuccess, activationCodeSuccess, emailToRecoverUserSuccess, changePasswordUserSuccess } from '../actions';
import {searchUsersSuccess, getRolesSuccess, getUserSuccess} from '../actions/Users';


function* addUserRequest({payload}) {
    
    try {
        const response = yield call(addUser, payload);
        yield put( addUserSuccess(response) );
    } catch (error) {
        
    }
}

function* activationCodeRequest({payload}) {
    try {
        const response = yield call(activationCode, payload);
        yield put( activationCodeSuccess(response) );
    } catch (error) {
        
    }
}

function* emailToRecoverUserRequest({payload}) {
    try {
        const response = yield call(emailToRecoverUser, payload);
        yield put( emailToRecoverUserSuccess(response) );
    } catch (error) {
        
    }
}

function* changePasswordUserRequest({payload}) {
    try {
        const response = yield call(changePasswordUser, payload);
        yield put( changePasswordUserSuccess(response) );
    } catch (error) {
        
    }
}

function* searchUsersRequest({payload}) {
    try {
        const response = yield call(searchUsers, payload);
        yield put( searchUsersSuccess(response) );
    } catch (error) {
        
    }
}

function* getRolesRequest() {
    try {
        const response = yield call(getRoles);
        yield put( getRolesSuccess(response) );
    } catch (error) {
        
    }
}

function* getUserRequest(payload) {
    try {
        const response = yield call(searchUser, payload);
        yield put( getUserSuccess(response) );
    } catch (error) {
        
    }
}

export function* addUserSaga() {
    yield takeLatest(ADD_USER, addUserRequest);
}

export function* activationCodeSaga() {
    yield takeLatest(ACTIVATION_CODE, activationCodeRequest);
}

export function* emailToRecoverUserSaga() {
    yield takeLatest(EMAIL_RECOVER_USER, emailToRecoverUserRequest);
}

export function* changePasswordUserSaga() {
    yield takeLatest(CHANGE_PASSWORD_USER, changePasswordUserRequest);
}

export function* searchUsersSaga() {
    yield takeLatest(SEARCH_USERS, searchUsersRequest);
}

export function* getRolesSaga() {
    yield takeLatest(GET_ROLES, getRolesRequest);
}

export function* getUserSaga() {
    yield takeLatest(GET_USER, getUserRequest);
}

export default function* rootSaga() {
    yield all([
        fork(addUserSaga),
        fork(activationCodeSaga),
        fork(emailToRecoverUserSaga),        
        fork(changePasswordUserSaga),        
        fork(searchUsersSaga),
        fork(getRolesSaga),
        fork(getUserSaga),
    ]);
}