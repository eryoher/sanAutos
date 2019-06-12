import { all, call, fork, put, takeEvery, takeLatest, throttle } from 'redux-saga/effects';

import { 
        checkCode,
        redeemCode
    }
from '../api/AuthorizationCode'

import {
    CHECK_CODE, 
    REDEEM_CODE
} from '../constants/ActionsTypes';

import {
    checkCodesSuccess, redeemCodeSuccess
} from '../actions/AuthorizationCode';

function* checkCodeRequest({payload}) {    
    try {
        const response = yield call(checkCode, payload);
        yield put( checkCodesSuccess(response) );
    } catch (error) {
        
    }
}

function* redeemCodeRequest({payload}) {      
      
    try {
        const response = yield call(redeemCode, payload);
        yield put( redeemCodeSuccess(response) );
    } catch (error) {
        
    }
}

export function* checkCodeSaga() {
    yield takeLatest(CHECK_CODE, checkCodeRequest);
}

export function* redeemCodeSaga() {
    yield takeLatest(REDEEM_CODE, redeemCodeRequest);
}

export default function* rootSaga() {
    yield all([
        fork(checkCodeSaga),
        fork(redeemCodeSaga),
    ]);
}