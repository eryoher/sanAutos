import { all, call, fork, put, takeEvery, takeLatest, throttle } from 'redux-saga/effects';

import 
    { createPreference, createGiftCard, createTokenCard , getPayment }
from '../api/Payments'

import { CREATE_PREFERENCE, CREATE_GIFT_CARD, CREATE_TOKEN_CARD, GET_PAYMENT } from '../constants/ActionsTypes';
import { createPreferenceSuccess, createGiftCardSuccess, createTokenCardSuccess, getPaymentSuccess } from '../actions';


function* createPreferenceRequest({payload}) {
    
    try {
        const response = yield call(createPreference, payload);
        yield put( createPreferenceSuccess (response) );
    } catch (error) {
        
    }
}

function* createGiftCardRequest({payload}) {
    
    const {params, token} = payload;
    try {
        const card = yield call(createGiftCard, params, token);
        yield put( createGiftCardSuccess (card) );
    } catch (error) {
        console.log(error);
        
    }
}

function* createTokenCardRequest() {
    
    try {
        const card = yield call(createTokenCard);
        yield put( createTokenCardSuccess (card) );
    } catch (error) {
        
    }
}

function* getPaymentRequest({payload}) {    
    const {paymentId} = payload
    try {
        const response = yield call(getPayment, paymentId);
        yield put( getPaymentSuccess(response) );
    } catch (error) {
        
    }
}


export function* createPreferenceSaga() {
    yield takeLatest(CREATE_PREFERENCE, createPreferenceRequest);
}

export function* createGiftCardSaga() {
    yield takeLatest(CREATE_GIFT_CARD, createGiftCardRequest);
}

export function* createTokenCardSaga() {
    yield takeLatest(CREATE_TOKEN_CARD, createTokenCardRequest);
}

export function* getPaymentSaga() {
    yield takeLatest(GET_PAYMENT, getPaymentRequest);
}

export default function* rootSaga() {
    yield all([
        fork(createPreferenceSaga),
        fork(createTokenCardSaga),
        fork(createGiftCardSaga),
        fork(getPaymentSaga),
    ]);
}