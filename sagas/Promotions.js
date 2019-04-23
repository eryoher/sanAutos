import { all, call, fork, put, takeEvery, takeLatest, throttle } from 'redux-saga/effects';
import { getPromotionsSuccess, getPromotionSuccess, updatePromotionSuccess, createPromotionSuccess, topPromotionsSuccess, searchPromotionsSuccess } from '../actions';
import { GET_PROMOTIONS, GET_PROMOTION, UPDATE_PROMOTION, CREATE_PROMOTION, GET_TOP_PROMOTIONS, SEARCH_PROMOTIONS } from '../constants/ActionsTypes';

import 
    { getPromotions, getPromotion, updatePromotion, createPromotion, getTopPromotions, searchPromotions }
from '../api/Promotions'


function* getPromotionsRequest({payload}) {
    try {
        const response = yield call(getPromotions, payload);
        yield put( getPromotionsSuccess(response) );
    } catch (error) {
        
    }
}

function* getPromotionRequest({payload}) {
    try {
        const response = yield call(getPromotion, payload);
        yield put( getPromotionSuccess(response) );
    } catch (error) {
        
    }
}

function* updatePromotionRequest({payload}) {
    const {promotionId, params} = payload;
    try {
        const response = yield call(updatePromotion, promotionId, params);
        yield put( updatePromotionSuccess(response) );
    } catch (error) {
        
    }
}

function* createPromotionRequest({payload}) {    
    
    try {
        const response = yield call(createPromotion, payload.params);
        yield put( createPromotionSuccess(response) );
    } catch (error) {
        
    }
}

function* getTopPromotionsRequest() {    
    
    try {
        const response = yield call(getTopPromotions);
        yield put( topPromotionsSuccess(response) );
    } catch (error) {
        
    }
}

function* searchPromotionsRequest({payload}) {
    try {
        const response = yield call(searchPromotions, payload);
        yield put( searchPromotionsSuccess(response) );
    } catch (error) {
        
    }
}

export function* getPromotionsSaga() {
    yield takeLatest(GET_PROMOTIONS, getPromotionsRequest);
}

export function* getPromotionSaga() {
    yield takeLatest(GET_PROMOTION, getPromotionRequest);
}

export function* updatePromotionSaga() {
    yield takeLatest(UPDATE_PROMOTION, updatePromotionRequest);
}

export function* createPromotionSaga() {
    yield takeLatest(CREATE_PROMOTION, createPromotionRequest);
}

export function* getTopPromotionsSaga() {
    yield takeLatest(GET_TOP_PROMOTIONS, getTopPromotionsRequest);
}

export function* searchPromotionsSaga() {
    yield takeLatest(SEARCH_PROMOTIONS, searchPromotionsRequest);
}

export default function* rootSaga() {
    yield all([
        fork(getPromotionsSaga),
        fork(getPromotionSaga),
        fork(updatePromotionSaga),
        fork(createPromotionSaga),
        fork(getTopPromotionsSaga),
        fork(searchPromotionsSaga),
    ]);
}